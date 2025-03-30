<!-- resources/js/Tunnel/HUD.vue -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch, computed } from 'vue'
import { gsap } from 'gsap'
import { useProjectStore } from '@/Stores/projectStore'
import { useScreenStore } from '@/Stores/screenStore'
import { App } from "@/Types/enums"
import { router } from "@inertiajs/vue3"

const props = defineProps<{
    camera: THREE.PerspectiveCamera | null
}>()

const projectStore = useProjectStore()
const screenStore = useScreenStore()
const projectIndex = ref(0)
const currentProject = ref<App.Data.ProjectData | null>(null)
const clickHereEl = ref<HTMLElement | null>(null)
const projectTitleEl = ref<HTMLElement | null>(null)
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
            overwrite: 'auto'
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

const handleNavigate = () => {
    if (currentProject.value) {
        projectStore.setScrollPosition(window.scrollY)
        router.visit(route('project.show', { project: currentProject.value.slug }), {})
    }
}

onMounted(() => {
    const bottomBorder = borderBottomEl.value?.querySelector('div')
    if (bottomBorder) {
        const width = window.innerWidth - (screenStore.isMobile ? 16 : 42 )
        gsap.to(bottomBorder, {
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
        <div class="px-2 md:px-4 py-4 flex items-center justify-between bg-black/50">
            <div
                ref="projectTitleEl"
                class="flex items-center gap-4 pointer-events-auto"
                style="opacity: 0"
            >
                <h1 class="tracking-tighter md:tracking-normal font-mono text-white text-xxs md:text-xs md:text-[0.75vw] 3xl:text-[0.75rem] md:leading-[1.0vw] 3xl:leading-[1.0rem]">
                    {{ currentProject?.title || '' }}
                </h1>
                <h2 v-if="currentProject" class="hidden md:block font-mono text-xs md:text-[0.75vw] 3xl:text-[0.75rem] md:leading-[1.0vw] 3xl:leading-[1.0rem]">
                    <span class="text-white/50 font-medium" v-html="currentProject?.client || ''"></span>
                    ·
                    <span :class="getClassificationColor" v-html="currentProject?.classification || ''"></span>
                </h2>
            </div>
            <button
                ref="clickHereEl"
                @click="handleNavigate"
                class="border border-current rounded-none px-2 py-1 font-mono text-xs text-white rounded transition-opacity duration-300 pointer-events-auto hover:text-green-500 hover:border-green-500"
                style="opacity: 0"
            >
                SEE PROJECT DETAILS
            </button>
        </div>
        <div ref="borderBottomEl" class="flex justify-center">
            <div class="bg-white/20 h-px opacity-0"></div>
        </div>
    </div>
</template>

<style scoped>
</style>
