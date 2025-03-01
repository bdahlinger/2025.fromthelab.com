<!-- CubeStrip.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive, defineProps } from 'vue'
import * as THREE from 'three'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import gsap from 'gsap'

// Define props with type safety
const props = defineProps<{
    particleWidth?: number
    particleHeight?: number
}>()

const container = ref<HTMLDivElement | null>(null)
let scene: THREE.Scene
let camera: THREE.OrthographicCamera
let renderer: THREE.WebGLRenderer | null = null
let composer: EffectComposer | null = null
let bloomPass: UnrealBloomPass | null = null
let particles: THREE.Mesh[] = []

const scaleFactor = 0.01

const settings = reactive({
    particleCount: 400,
    particleWidth: props.particleWidth ?? 20,  // Default 15, overridden by prop
    particleHeight: props.particleHeight ?? 20,  // Default 15, overridden by prop
    minSpeed: 2,
    maxSpeed: 5,
    speedRandomness: 0.5,
    positionZRandomness: 0.5,
    rotationRandomness: 0.5,
    rotateParticles: false,
    useSquares: true,
    emitterDepth: 100,
    bloomStrength: 1.1,
    bloomRadius: 0.0,
    showControls: false
})

const aspectRatio = 45 / 3
const canvasHeight = 3
const canvasWidth = 45
const emitterOffset = canvasWidth / 2 + 10

function createParticle(index: number): Particle {
    const width = scaleFactor * settings.particleWidth
    const height = scaleFactor * settings.particleHeight

    const geometry = settings.useSquares
        ? new THREE.PlaneGeometry(width, height)
        : new THREE.BoxGeometry(width, height, width)  // Using width for depth in cubes

    const colorChoice = Math.floor(Math.random() * 3)
    let color: THREE.Color
    switch (colorChoice) {
        case 0:
            color = new THREE.Color(1, 0, 0)
            break
        case 1:
            color = new THREE.Color(0, 1, 0)
            break
        case 2:
            color = new THREE.Color(0, 0, 1)
            break
        default:
            color = new THREE.Color(1, 0, 0)
    }

    const material = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.7
    })

    const particle = new THREE.Mesh(geometry, material) as Particle

    const totalWidth = canvasWidth + emitterOffset * 2
    particle.position.set(
        -canvasWidth - emitterOffset + (index / (settings.particleCount - 1)) * totalWidth,
        0,
        scaleFactor * (Math.random() - 0.5) * settings.positionZRandomness * settings.emitterDepth
    )

    const baseSpeed = scaleFactor * (Math.random() * (settings.maxSpeed - settings.minSpeed) + settings.minSpeed)
    particle.speed = baseSpeed + scaleFactor * (Math.random() - 0.5) * settings.speedRandomness

    particle.rotationSpeed = new THREE.Vector3(
        Math.PI / 2,
        Math.PI / 2,
        Math.PI / 2
    ).multiplyScalar(Math.random() * settings.rotationRandomness + 0.5)

    return particle
}

function initScene() {
    scene = new THREE.Scene()

    const frustumHeight = canvasHeight * 1.5
    const frustumWidth = frustumHeight * aspectRatio
    camera = new THREE.OrthographicCamera(
        -frustumWidth / 2,
        frustumWidth / 2,
        frustumHeight / 2,
        -frustumHeight / 2,
        0.1,
        1000
    )
    camera.position.z = 150

    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)

    if (renderer.domElement) {
        renderer.domElement.style.width = '100%'
        renderer.domElement.style.height = 'auto'
    }

    const renderPass = new RenderPass(scene, camera)
    bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        settings.bloomStrength,
        settings.bloomRadius,
        0.1
    )

    composer = new EffectComposer(renderer)
    composer.addPass(renderPass)
    composer.addPass(bloomPass)

    updateRendererSize()

    if (container.value) {
        container.value.appendChild(renderer.domElement)
    }

    spawnParticles()
    animate()
}

function spawnParticles() {
    particles.forEach(particle => scene.remove(particle))
    particles = []

    for (let i = 0; i < settings.particleCount; i++) {
        const particle = createParticle(i)
        particles.push(particle)
        scene.add(particle)
    }
}

function updateRendererSize() {
    if (!renderer || !composer || !bloomPass) return

    const width = window.innerWidth
    const height = width / aspectRatio

    renderer.setSize(width, height)
    composer.setSize(width, height)
    bloomPass.setSize(width, height)

    if (renderer.domElement) {
        renderer.domElement.style.width = '100%'
        renderer.domElement.style.height = 'auto'
    }
}

function updateBloomSettings() {
    if (bloomPass) {
        bloomPass.strength = settings.bloomStrength
        bloomPass.radius = settings.bloomRadius
    }
}

function animate() {
    requestAnimationFrame(animate)

    particles.forEach(particle => {
        particle.position.x += particle.speed

        if (!settings.useSquares && settings.rotateParticles) {
            particle.rotation.x += particle.rotationSpeed.x * 0.016
            particle.rotation.y += particle.rotationSpeed.y * 0.016
            particle.rotation.z += particle.rotationSpeed.z * 0.016
        }

        if (particle.position.x > canvasWidth / 2 + emitterOffset) {
            const index = particles.indexOf(particle)
            particle.position.x = -canvasWidth - emitterOffset - scaleFactor * (particle.geometry instanceof THREE.BoxGeometry
                ? (particle.geometry as THREE.BoxGeometry).parameters.width
                : (particle.geometry as THREE.PlaneGeometry).parameters.width)
            particle.position.y = 0
            particle.position.z = scaleFactor * (Math.random() - 0.5) * settings.positionZRandomness * settings.emitterDepth
        }
    })

    if (composer) {
        composer.render()
    }
}

function updateScene() {
    spawnParticles()
    updateBloomSettings()
}

onMounted(() => {
    initScene()
    window.addEventListener('resize', updateRendererSize)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateRendererSize)
    renderer?.dispose()
})
</script>

<template>
    <div ref="container" class="relative w-full before:absolute before:inset-x-0 before:top-0 before:h-[2vw] before:bg-gradient-to-b before:from-black before:to-transparent after:absolute after:inset-x-0 after:bottom-0 after:h-[2vw] after:bg-gradient-to-t after:from-black after:to-transparent">
<!--        <div class="fixed top-2 right-2 z-10">
            <label class="flex items-center bg-black/80 text-white px-3 py-1 rounded-md">
                Show Controls
                <input type="checkbox" v-model="settings.showControls" class="ml-2 accent-blue-500">
            </label>
            <div v-if="settings.showControls" class="mt-2 bg-black/80 text-white p-4 rounded-md w-72">
                <h3 class="text-lg font-bold mb-4">Settings</h3>
                <label class="block mb-4">
                    Particle Count (10-1000): <span class="ml-2 text-sm">{{ settings.particleCount }}</span>
                    <input type="range" v-model.number="settings.particleCount" min="10" max="1000" step="10" @change="updateScene"
                           class="w-full mt-1 accent-blue-500">
                </label>
                <label class="block mb-4">
                    Particle Width (1-500): <span class="ml-2 text-sm">{{ settings.particleWidth }}</span>
                    <input type="range" v-model.number="settings.particleWidth" min="1" max="500" step="1" @change="updateScene"
                           class="w-full mt-1 accent-blue-500">
                </label>
                <label class="block mb-4">
                    Particle Height (1-500): <span class="ml-2 text-sm">{{ settings.particleHeight }}</span>
                    <input type="range" v-model.number="settings.particleHeight" min="1" max="500" step="1" @change="updateScene"
                           class="w-full mt-1 accent-blue-500">
                </label>
                <label class="block mb-4">
                    Min Speed (0.1-20): <span class="ml-2 text-sm">{{ settings.minSpeed.toFixed(1) }}</span>
                    <input type="range" v-model.number="settings.minSpeed" min="0.1" max="20" step="0.1" @change="updateScene"
                           class="w-full mt-1 accent-blue-500">
                </label>
                <label class="block mb-4">
                    Max Speed (0.1-20): <span class="ml-2 text-sm">{{ settings.maxSpeed.toFixed(1) }}</span>
                    <input type="range" v-model.number="settings.maxSpeed" min="0.1" max="20" step="0.1" @change="updateScene"
                           class="w-full mt-1 accent-blue-500">
                </label>
                <label class="block mb-4">
                    Speed Randomness (0-1): <span class="ml-2 text-sm">{{ settings.speedRandomness.toFixed(1) }}</span>
                    <input type="range" v-model.number="settings.speedRandomness" min="0" max="1" step="0.1" @change="updateScene"
                           class="w-full mt-1 accent-blue-500">
                </label>
                <label class="block mb-4">
                    Z Pos Randomness (0-1): <span class="ml-2 text-sm">{{ settings.positionZRandomness.toFixed(1) }}</span>
                    <input type="range" v-model.number="settings.positionZRandomness" min="0" max="1" step="0.1" @change="updateScene"
                           class="w-full mt-1 accent-blue-500">
                </label>
                <label class="block mb-4">
                    Rotation Randomness (0-1): <span class="ml-2 text-sm">{{ settings.rotationRandomness.toFixed(1) }}</span>
                    <input type="range" v-model.number="settings.rotationRandomness" min="0" max="1" step="0.1" @change="updateScene"
                           class="w-full mt-1 accent-blue-500">
                </label>
                <label class="block mb-4 flex items-center">
                    Rotate Particles:
                    <input type="checkbox" v-model="settings.rotateParticles" class="ml-2 accent-blue-500" :disabled="settings.useSquares">
                </label>
                <label class="block mb-4 flex items-center">
                    Use Squares (vs Cubes):
                    <input type="checkbox" v-model="settings.useSquares" class="ml-2 accent-blue-500" @change="updateScene">
                </label>
                <label class="block mb-4">
                    Emitter Depth (10-2000): <span class="ml-2 text-sm">{{ settings.emitterDepth }}</span>
                    <input type="range" v-model.number="settings.emitterDepth" min="10" max="2000" step="10" @change="updateScene"
                           class="w-full mt-1 accent-blue-500">
                </label>
                <label class="block mb-4">
                    Bloom Strength (0-3): <span class="ml-2 text-sm">{{ settings.bloomStrength.toFixed(1) }}</span>
                    <input type="range" v-model.number="settings.bloomStrength" min="0" max="3" step="0.1" @change="updateScene"
                           class="w-full mt-1 accent-blue-500">
                </label>
                <label class="block mb-4">
                    Bloom Radius (0-1): <span class="ml-2 text-sm">{{ settings.bloomRadius.toFixed(1) }}</span>
                    <input type="range" v-model.number="settings.bloomRadius" min="0" max="1" step="0.1" @change="updateScene"
                           class="w-full mt-1 accent-blue-500">
                </label>
            </div>
        </div>-->
    </div>
</template>

<style scoped>
</style>
