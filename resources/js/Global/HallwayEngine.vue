<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Stats from 'three/examples/jsm/libs/stats.module'
import { useIntroCubes } from './useIntroCubes'
import { useProjectCubes } from './useProjectCubes'
import { useCityscape } from './useCityscape'
import { setupScrollAnimation } from '/resources/js/Global/tunnelAnimations'

gsap.registerPlugin(ScrollTrigger)

const CUBE_SIZE = 250;
const CUBE_SPACING = 500;
const FIRST_CUBE_Z = -500;

const tunnelWrapper = ref<HTMLElement | null>(null)
const wrapper = ref<HTMLElement | null>(null)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let animationFrameId: number
let stats: Stats

const updateRendererSize = () => {
    const width = tunnelWrapper.value ? tunnelWrapper.value.getBoundingClientRect().width : window.innerWidth
    const height = window.innerHeight
    renderer.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
}

const init = () => {
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)
    scene.fog = new THREE.Fog(0x000000, 700, 4000)

    camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 10000)
    camera.position.set(0, 0, 0)
    camera.lookAt(0, 0, 0)

    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    updateRendererSize()

    if (tunnelWrapper.value) {
        tunnelWrapper.value.appendChild(renderer.domElement)
    } else {
        return
    }

    // Initialize Stats with fixed positioning
    stats = new Stats()
    stats.dom.style.position = 'fixed' // Changed to fixed
    stats.dom.style.top = '0px'
    stats.dom.style.left = '0px'
    stats.dom.style.zIndex = '1000' // Ensure it stays above other elements
    document.body.appendChild(stats.dom)

    const { cityGroup } = useCityscape(scene);

    useProjectCubes(scene, { CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z }).getInitializedData().then(({ projectCubes, updateCubeColors, loadedFont }) => {
        const { introCubes } = useIntroCubes(scene, Promise.resolve(loadedFont), { CUBE_SIZE, FIRST_CUBE_Z });
        const allCubes = [...introCubes, ...projectCubes];
        setupScrollAnimation(scene, camera, wrapper, allCubes, updateCubeColors, { CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z });
        animate()
    })
}

const animate = () => {
    animationFrameId = requestAnimationFrame(animate)
    if (renderer) {
        renderer.render(scene, camera)
    }
    ScrollTrigger.update()
    stats.update()
}

onMounted(() => {
    init()
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    cancelAnimationFrame(animationFrameId)
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    renderer.dispose()
    scene.clear()
    document.body.removeChild(stats.dom)
})

const handleResize = () => {
    updateRendererSize()
    ScrollTrigger.refresh()
}
</script>

<template>
    <section ref="wrapper" class="wrapper">
        <div ref="tunnelWrapper" class="tunnel-wrapper"></div>
    </section>
</template>

<style scoped>
.wrapper {
    height: 100vh;
    position: relative;
    width: 100%;
    max-width: none;
    overflow-x: hidden;
}

.tunnel-wrapper {
    width: 100%;
    height: 100vh;
    position: relative;
    top: 0;
    left: 0;
    overflow-x: hidden;
    max-width: none;
}

.pin-spacer {
    width: 100% !important;
    max-width: none !important;
    overflow-x: hidden !important;
}
</style>
