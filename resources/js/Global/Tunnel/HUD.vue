<!-- resources/js/Tunnel/HUD.vue -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch, computed } from 'vue'
import { gsap } from 'gsap'
import { useProjectStore } from '@/Stores/projectStore'
import { useScreenStore } from '@/Stores/screenStore'
import { storeToRefs } from 'pinia';
import { App } from "@/Types/enums"
import { router } from "@inertiajs/vue3"
import ProjectNavigator from "@/Global/ProjectNavigator.vue";
import HUDMiniMap from "@/Global/Tunnel/HUDMiniMap.vue";

const props = defineProps<{
    camera: THREE.PerspectiveCamera | null
}>()

const projectStore = useProjectStore()
const screenStore = useScreenStore()

const projectIndex = ref(0)
const currentProject = ref<App.Data.ProjectData | null>(null)
const clickHereEl = ref<HTMLElement | null>(null)
const projectTitleEl = ref<HTMLElement | null>(null)
const borderTopEl = ref<HTMLElement | null>(null)
const borderBottomEl = ref<HTMLElement | null>(null)

const CUBE_SPACING = projectStore.cubeSpacing
const FADE_DURATION = 0.125
const projects = projectStore.projects
const isVisible = ref(false)

// Store GSAP tweens for cleanup
let fadeInTween: GSAPTween | null = null
let fadeOutTween: GSAPTween | null = null

const updateHUD = (newProgress: number, oldProgress: number | undefined) => {
    const progress = newProgress
    const direction = oldProgress !== undefined ? (newProgress > oldProgress ? 'forward' : 'backward') : 'initial'

    let shouldBeVisible = false
    let currentIndex = projectIndex.value
    let currentProj = currentProject.value

    projects.forEach((project, index) => {
        const fadeInTrigger = 700 + index * CUBE_SPACING
        const fadeOutTrigger = 1000 + index * CUBE_SPACING
        if (progress >= fadeInTrigger && progress < fadeOutTrigger) {
            shouldBeVisible = true
            currentIndex = index
            currentProj = project
        }
    })

    // Ensure refs are valid before animating
    const elements = [clickHereEl.value, projectTitleEl.value].filter(Boolean) as HTMLElement[]
    if (!elements.length) return // Skip if refs aren’t ready

    if (shouldBeVisible && !isVisible.value) {
        isVisible.value = true
        projectIndex.value = currentIndex
        currentProject.value = currentProj
        // Kill any existing fade-out tween
        if (fadeOutTween) fadeOutTween.kill()
        fadeInTween = gsap.to(elements, {
            opacity: 1,
            duration: FADE_DURATION,
            overwrite: 'auto'
        })
    } else if (!shouldBeVisible && isVisible.value) {
        isVisible.value = false
        // Kill any existing fade-in tween
        if (fadeInTween) fadeInTween.kill()
        fadeOutTween = gsap.to(elements, {
            opacity: 0,
            duration: FADE_DURATION,
            overwrite: 'auto',
            onComplete: () => {
                currentProject.value = null
            }
        })
    }
}

const getClassificationColor = computed((): string => {
    if (!currentProject.value) return 'text-white/50'
    switch (currentProject.value.classification) {
        case App.Enums.Classification.ENTERTAINMENT: return 'text-red-600'
        case App.Enums.Classification.ECOMMERCE: return 'text-green-600'
        case App.Enums.Classification.OTHER: return 'text-blue-600'
        default: return 'text-white/50'
    }
})

const determineColorByContributionClass = (type:App.Enums.Contributions) => {
    switch(type) {
        case App.Enums.Contributions.BACKEND:
            return 'fill-red-400'
        case App.Enums.Contributions.FRONTEND:
            return 'fill-blue-400'
        case App.Enums.Contributions.DEVOPS:
            return 'fill-green-500'
        case App.Enums.Contributions.DESIGN:
            return 'fill-purple-400'
        case App.Enums.Contributions.IDEATION:
            return 'fill-magenta-400'
        case App.Enums.Contributions.UX:
            return 'fill-yellow-400'
        default:
            return 'fill-green-500'
    }
}

const handleNavigate = () => {
    if (currentProject.value) {
        projectStore.setScrollPosition(window.scrollY)
        router.visit(route('project.show', { project: currentProject.value.slug }), {})
    }
}

onMounted(() => {
    const topBorder = borderTopEl.value?.querySelector('div')
    const bottomBorder = borderBottomEl.value?.querySelector('div')
    if (topBorder && bottomBorder) {
        const width = window.innerWidth - (screenStore.isMobile ? 16 : 42 )
        gsap.to([topBorder,bottomBorder], {
            opacity: 1,
            width: width,
            duration: 2,
        })
    }
})

onUnmounted(() => {
    // Clean up GSAP tweens
    if (fadeInTween) fadeInTween.kill()
    if (fadeOutTween) fadeOutTween.kill()
})

// Watch progress with debounce to avoid rapid updates during navigation
watch(() => projectStore.progress, (newProgress, oldProgress) => {
    updateHUD(newProgress, oldProgress)
}, { immediate: true })

// Watch camera and only update HUD when it’s ready
watch(() => props.camera, (newCamera) => {
    if (newCamera) {
        updateHUD(projectStore.progress, undefined)
    }
}, { immediate: false }) // Don’t run immediately, wait for camera
</script>

<template>
    <div class="fixed inset-0 pointer-events-none z-10 font-sans">
        <svg class="absolute inset-0 w-full h-full pointer-events-none " aria-hidden="true">
            <defs>
                <pattern id="grid-pattern2" width="12" height="12" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="12" stroke="white" stroke-width="1" opacity="0.075"/>
                    <line x1="0" y1="0" x2="12" y2="0" stroke="white" stroke-width="1" opacity="0.075"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern2)"/>
        </svg>
        <div class="px-2 md:px-4 py-2 md:py-4 md:flex items-center justify-between bg-black/70">

            <div
                ref="projectTitleEl"
                class="md:flex md:items-center gap-4 md:gap-[1vw] 3xl:gap-[1rem] pointer-events-auto"
                style="opacity: 0"
            >
                <div

                    class="md:flex items-center gap-4 md:gap-[1vw] 3xl:gap-[1rem] pointer-events-auto"

                >
                    <h1 class="flex-shrink-0 tracking-tighter md:tracking-normal font-mono text-white  md:text-[0.75vw] 3xl:text-[0.75rem] md:leading-[1.0vw] 3xl:leading-[1.0rem]">
                        {{ currentProject?.title || '' }}
                    </h1>
                    <h2 class="flex-shrink-0 font-mono text-xs md:text-[0.75vw] 3xl:text-[0.75rem] md:leading-[1.0vw] 3xl:leading-[1.0rem]">
                        <span class="text-white/50 font-medium" v-html="currentProject?.client || ''"></span>
                        ·
                        <span :class="getClassificationColor" v-html="currentProject?.classification || ''"></span>
                    </h2>
                </div>

                <div class="contributions flex flex-wrap md:flex-nowrap gap-0.5 md:gap-[.125vw] 3xl:gap-[.125rem] mt-1 md:mt-0" v-if="currentProject?.contributions.length > 0">
                    <span
                        v-for="(type,index) in currentProject?.contributions" :key="index"
                        class="inline-flex items-center gap-x-2 md:gap-x-[.5vw] 3xl:gap-x-[.5rem] rounded-full px-2 md:px-[.5vw] 3xl:px-[.5rem] py-1 md:py-[.25vw] 3xl:py-[.25rem] text-[8px] md:text-[.575vw] 3xl:text-[.575rem] font-medium ring-1 ring-inset">
                        <svg class="size-1.5 md:size-[.375vw] 3xl:size-[.375rem]" :class="determineColorByContributionClass(type)" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3"/>
                        </svg>
                        {{type}}
                    </span>
                </div>
                <div class="segments flex flex-wrap gap-0.5 md:gap-[.125vw] 3xl:gap-[.125rem] mt-1 md:mt-0" v-if="currentProject?.segments.length > 0">
                    <span
                        v-for="(type,index) in currentProject?.segments" :key="index"
                        class="inline-flex items-center rounded-full px-2 md:px-[.375vw] 3xl:px-[.375rem] py-1 md:py-[.25vw] 3xl:py-[.25rem] text-[8px] md:text-[.5vw] 3xl:text-[.5rem] font-medium ring-1 ring-inset fill-white-400/10 text-white-400 ring-white/20">
                        {{type}}
                    </span>
                </div>
            </div>

            <div class="flex justify-end md:block">
            <button
                ref="clickHereEl"
                @click="handleNavigate"
                class="border border-current rounded-none px-2 py-1 mt-2 md:mt-0 whitespace-nowrap font-mono text-xxs text-white rounded transition-opacity duration-300 pointer-events-auto hover:text-green-500 hover:border-green-500"
                style="opacity: 0"
            >
                SEE PROJECT DETAILS
            </button>
            </div>
        </div>

        <div ref="borderTopEl" class="flex justify-center">
            <div class="bg-white/30 h-px opacity-0"></div>
        </div>

        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black/70 h-12 w-full">
            <div ref="borderBottomEl" class="flex justify-center">
                <div class="bg-white/30 h-px opacity-0"></div>
            </div>
<!--            <svg class="absolute inset-0 w-full h-full pointer-events-none " aria-hidden="true">
                <defs>
                    <pattern id="grid-pattern1" width="12" height="12" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="0" y2="12" stroke="white" stroke-width="1" opacity="0.1"/>
                        <line x1="0" y1="0" x2="12" y2="0" stroke="white" stroke-width="1" opacity="0.1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern1)"/>
            </svg>-->
            <h-u-d-mini-map :project="currentProject" />

            <div class="absolute hidden font-mono md:block text-green-400/50 text-xxxs left-[90%] top-1/2 -translate-y-1/2">
                <span>{{projectStore.progress.toString().padStart(10, '0') + '.00'}}</span>
            </div>

        </div>

    </div>
</template>

<style scoped>
</style>
