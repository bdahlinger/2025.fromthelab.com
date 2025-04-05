<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import LogoMark from "@/Global/LogoMark.vue"
import { useProjectStore } from '@/Stores/projectStore'
import { useAudioStore } from '@/Stores/audioStore'
import { storeToRefs } from 'pinia'
import { useAudioManager } from '@/Global/Tunnel/useAudioManager'
import HallwayEngine from "@/Global/HallwayEngine.vue"
import { ProjectData } from '@/Types/generated'
import { App } from '@/Types/enums'
import GlobalFooter from "@/Global/GlobalFooter.vue"
import AppWrap from '@/Pages/App.vue'
import { computed, ref, onMounted, onBeforeMount, onUnmounted, watch } from 'vue'
import IntroMessage from "@/Global/Tunnel/IntroMessage.vue"
import Hud from "@/Global/Tunnel/HUD.vue"
import Preloader from "@/Global/Preloader.vue"

const props = defineProps<{
    projects: ProjectData[]
    projectGridFile: string
    projectGridFile2: string
    archived: ProjectData[]
}>()

const projectStore = useProjectStore()
const { loadingProgress, progress } = storeToRefs(projectStore)
const audioStore = useAudioStore()

const camera = ref<THREE.PerspectiveCamera | null>(null)
const sceneReady = ref<boolean>(false)
const hudReady = ref<boolean>(false)
const audioLoaded = ref<boolean>(false)
const HALLWAY_MUSIC_VOLUME = 0.2
const audioManager = useAudioManager(() => {})
let hasPlayedMusic = false

const onCameraReady = (cam: THREE.PerspectiveCamera) => {
    camera.value = cam
}
const onScrollStart = () => {
    if (sceneReady.value && audioLoaded.value && audioStore.userEngaged && !audioStore.isMuted) {
        console.log('Scroll started, playing hallwayMusic with volume:', HALLWAY_MUSIC_VOLUME, 'masterVolume:', audioStore.masterVolume)
        audioManager.play('hallwayMusic')
    }
}

const sortedArchived = computed(() => {
    return [...props.archived].sort((a, b) => a.title.localeCompare(b.title))
})

const classificationValues = computed(() => {
    return Object.values(App.Enums.Classification)
})

const handleGesture = () => {
    if (!audioStore.userEngaged) {
        audioStore.unlockAudio()
        window.removeEventListener('click', handleGesture)
        window.removeEventListener('touchstart', handleGesture)
        window.removeEventListener('keydown', handleGesture)
    }
}

const getClassificationColor = (classification: App.Enums.Classification): string => {
    switch (classification) {
        case App.Enums.Classification.ENTERTAINMENT:
            return 'fill-red-400'
        case App.Enums.Classification.ECOMMERCE:
            return 'fill-green-500'
        case App.Enums.Classification.OTHER:
            return 'fill-white'
        default:
            return 'fill-white-500'
    }
}

watch(() => [sceneReady.value, audioLoaded.value, audioStore.userEngaged, progress.value], ([ready, loaded, engaged, prog]) => {
    if (ready && loaded && engaged && prog > 0 && !hasPlayedMusic) {
        console.log('Scroll started, progress:', prog, 'playing hallwayMusic with volume:', HALLWAY_MUSIC_VOLUME, 'masterVolume:', audioStore.masterVolume)
        audioManager.play('hallwayMusic')
        hasPlayedMusic = true // Prevent replay
    }
}, { immediate: false })

onBeforeMount(async () => {
    console.log('Registering hallwayMusic with maxVolume:', HALLWAY_MUSIC_VOLUME)
    await audioManager.registerAudio('hallwayMusic', '/sounds/hallway.mp3', {
        loop: true,
        maxVolume: HALLWAY_MUSIC_VOLUME
    }).then(() => {
        audioLoaded.value = true
        console.log('hallwayMusic loaded successfully')
    }).catch((error) => {
        console.error('Failed to load hallway music:', error)
        audioLoaded.value = true
    })
})

onMounted(() => {
    window.addEventListener('click', handleGesture)
    window.addEventListener('touchstart', handleGesture)
    window.addEventListener('keydown', handleGesture)
})

onUnmounted(() => {
    window.removeEventListener('click', handleGesture)
    window.removeEventListener('touchstart', handleGesture)
    window.removeEventListener('keydown', handleGesture)
    audioManager.dispose('hallwayMusic')
})

</script>

<template>
    <app-wrap>
        <Head title="Welcome" />

        <div class="relative bg-black text-white">
            <nav class="absolute z-10 flex flex-col items-center justify-center top-32 left-1/2 transform -translate-x-1/2">
                <logo-mark/>
            </nav>

            <div class="scene-wrap overflow-hidden relative" :class="{'ready': sceneReady}">
                <hallway-engine
                    v-if="hudReady"
                    :projects="projects"
                    :project-grid-file="projectGridFile"
                    :project-grid-file2="projectGridFile2"
                    @camera-ready="onCameraReady"
                    @scene-ready="sceneReady = true"
                />

                <Transition name="fade">
                    <Preloader v-if="!sceneReady" :progress="loadingProgress || 0" />
                </Transition>

                <intro-message/>
                <hud
                    :camera="camera"
                    :ready="sceneReady"
                    @scene-ready="hudReady = true"
                />
            </div>

            <div class="mt-16 px-4 md:px-16">
                <h2 class="mb-4 text-white">OTHER WEB PROJECTS</h2>
                <ul class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <li class="text-xs text-white/80 flex items-center gap-2" v-for="(project, index) in sortedArchived" :key="index">
                        <svg class="size-1.5 md:size-[.375vw] 3xl:size-[.375rem]" :class="getClassificationColor(project.classification)" viewBox="0 0 6 6" aria-hidden="true">
                            <circle cx="3" cy="3" r="3"/>
                        </svg>
                        <span v-html="project.title"></span>
                    </li>
                </ul>
                <ul class="flex justify-center items-center gap-8 text-xs text-white/80 uppercase mt-12">
                    <li class="flex items-center gap-2" v-for="classification in classificationValues" :key="classification">
                        <svg class="size-3" :class="getClassificationColor(classification)" viewBox="0 0 6 6" aria-hidden="true">
                            <circle cx="3" cy="3" r="3"/>
                        </svg>
                        {{ classification }}
                    </li>
                </ul>
            </div>

            <global-footer/>
        </div>
    </app-wrap>
</template>

<style scoped>
.scene-wrap {
    padding-top: 100vh
}
.scene-wrap.ready {
    padding-top: 0
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0
}
</style>
