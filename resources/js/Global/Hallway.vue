<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial'
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2'

// Debounce utility
function debounce(func: (...args: any[]) => void, wait: number) {
    let timeout: ReturnType<typeof setTimeout> | null = null
    return (...args: any[]) => {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => func(...args), wait)
    }
}

const container = ref<HTMLElement | null>(null)
const isPanelOpen = ref(true)

// Three.js variables
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let squares: { group: THREE.Group, tween?: GSAPAnimation }[] = []
let animationFrameId: number
let lastSpawnTime: number = 0
let rotationCounter: number = 0
let globalRotation: number = 0
let mouse = new THREE.Vector2()
let cameraTween: GSAPAnimation | null = null

// Reactive constants for control panel
const LINE_WIDTH = ref(2)
const WIRE_COLOR = ref('#00FFFF')
const BOX_SIZE = ref(250)
const BOX_DEPTH = ref(2.5)
const MOVE_SPEED = ref(2.0)
const SPAWN_INTERVAL = ref(1)
const EMITTER_Z = ref(-750)
const FADE_START_Z = ref(-750)
const FADE_END_Z = ref(-250)
const CAMERA_Z = ref(0)
const CHASE_DURATION = ref(25)
const DEBOUNCE_DELAY = ref(500)
const ASPECT_RATIO = ref(16 / 9)
const FAR_CLIP = ref(30000)
const TUNNEL_BOUNDS_X = ref(BOX_SIZE.value / 2 - 10) // Reverted to original bounds (120)
const TUNNEL_BOUNDS_Y = ref(BOX_SIZE.value / 2 - 10) // Reverted to original bounds (120)
const GLOBAL_ROTATION_SPEED = ref(1.0) // Kept as is, but no global rotation applied
const ROTATION_INCREMENT = ref(8.0)

// Type definition for GSAP animation
type GSAPAnimation = gsap.core.Tween

const init = () => {
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    const width = window.innerWidth
    const height = width / ASPECT_RATIO.value
    camera = new THREE.PerspectiveCamera(125, ASPECT_RATIO.value, 1, FAR_CLIP.value)
    camera.position.set(0, 0, CAMERA_Z.value)
    camera.lookAt(0, 0, EMITTER_Z.value)

    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)

    if (container.value) {
        container.value.appendChild(renderer.domElement)
    }

    updateRendererSize()
}

const createLineGeometry = (start: THREE.Vector3, end: THREE.Vector3) => {
    const geometry = new LineSegmentsGeometry()
    const vertices = [
        start.x, start.y, start.z,
        end.x, end.y, end.z
    ]
    geometry.setPositions(vertices)
    return geometry
}

const spawnSquare = (material: LineMaterial, startZ: number) => {
    const group = new THREE.Group()

    const top = new LineSegments2(createLineGeometry(
        new THREE.Vector3(-BOX_SIZE.value / 2, BOX_SIZE.value / 2, 0),
        new THREE.Vector3(BOX_SIZE.value / 2, BOX_SIZE.value / 2, 0)
    ), material)
    const bottom = new LineSegments2(createLineGeometry(
        new THREE.Vector3(-BOX_SIZE.value / 2, -BOX_SIZE.value / 2, 0),
        new THREE.Vector3(BOX_SIZE.value / 2, -BOX_SIZE.value / 2, 0)
    ), material)
    const left = new LineSegments2(createLineGeometry(
        new THREE.Vector3(-BOX_SIZE.value / 2, -BOX_SIZE.value / 2, 0),
        new THREE.Vector3(-BOX_SIZE.value / 2, BOX_SIZE.value / 2, 0)
    ), material)
    const right = new LineSegments2(createLineGeometry(
        new THREE.Vector3(BOX_SIZE.value / 2, -BOX_SIZE.value / 2, 0),
        new THREE.Vector3(BOX_SIZE.value / 2, BOX_SIZE.value / 2, 0)
    ), material)

    group.add(top, bottom, left, right)
    group.position.z = startZ
    group.rotation.z = rotationCounter
    scene.add(group)

    // Calculate rotation speed and duration for corkscrew effect
    const rotationSpeed = (ROTATION_INCREMENT.value * Math.PI / 180) / MOVE_SPEED.value
    const distanceToTravel = Math.abs(FADE_END_Z.value - EMITTER_Z.value) // Distance from emitter to fade end
    const duration = distanceToTravel / MOVE_SPEED.value // Time to travel full distance

    // GSAP animation for continuous rotation (corkscrew effect)
    const squareObj = { group, tween: gsap.to(group.rotation, {
            z: "+=6.2832", // Full rotation (2π radians)
            duration: duration, // Match the time to travel the tunnel length
            ease: "linear",
            repeat: -1 // Infinite loop for continuous rotation
        })}

    squares.push(squareObj)
}

const updateRendererSize = () => {
    const width = window.innerWidth
    const height = width / ASPECT_RATIO.value
    renderer.setSize(width, height)
    camera.aspect = ASPECT_RATIO.value
    camera.updateProjectionMatrix()

    if (squares.length > 0) {
        squares.forEach(square => {
            square.group.children.forEach((line: THREE.Object3D) => {
                if (line.material instanceof LineMaterial) {
                    line.material.resolution.set(width, height)
                }
            })
        })
    }
}

const updateCameraPosition = (x: number, y: number) => {
    const clampedX = THREE.MathUtils.clamp(x, -TUNNEL_BOUNDS_X.value, TUNNEL_BOUNDS_X.value) // Reverted to original bounds
    const clampedY = THREE.MathUtils.clamp(y, -TUNNEL_BOUNDS_Y.value, TUNNEL_BOUNDS_Y.value) // Reverted to original bounds

    if (cameraTween) {
        cameraTween.kill()
    }

    cameraTween = gsap.to(camera.position, {
        x: clampedX,
        y: clampedY,
        duration: CHASE_DURATION.value,
        ease: 'power4.out',
        onUpdate: () => {
            camera.lookAt(0, 0, EMITTER_Z.value)
        }
    })
}

const resetCameraPosition = () => {
    if (cameraTween) {
        cameraTween.kill()
    }
    cameraTween = gsap.to(camera.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 5,
        ease: 'power4.out',
        onUpdate: () => {
            camera.lookAt(0, 0, EMITTER_Z.value)
        }
    })
}

const onMouseMove = debounce((event: MouseEvent) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / (window.innerWidth / ASPECT_RATIO.value)) * 2 + 1

    const targetX = mouse.x * TUNNEL_BOUNDS_X.value
    const targetY = mouse.y * TUNNEL_BOUNDS_Y.value

    updateCameraPosition(targetX, targetY)
}, DEBOUNCE_DELAY.value)

const animate = () => {
    animationFrameId = requestAnimationFrame(animate)
    const currentTime = performance.now() / 1000

    // No global rotation applied here, only individual particle rotations
    globalRotation += GLOBAL_ROTATION_SPEED.value // Kept for potential future use, but not applied to scene

    if (currentTime - lastSpawnTime >= SPAWN_INTERVAL.value) {
        const material = new LineMaterial({
            color: parseInt(WIRE_COLOR.value.replace('#', ''), 16),
            linewidth: LINE_WIDTH.value,
            transparent: true,
            opacity: 0.01,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            depthTest: true,
            dashed: false,
            resolution: new THREE.Vector2(window.innerWidth, window.innerWidth / ASPECT_RATIO.value)
        })
        spawnSquare(material, EMITTER_Z.value)
        lastSpawnTime = currentTime
        rotationCounter += THREE.MathUtils.degToRad(ROTATION_INCREMENT.value)
    }

    const squaresToRemove: number[] = []
    squares.forEach((square, index) => {
        square.group.position.z += MOVE_SPEED.value

        if (square.group.position.z > 250) {
            squaresToRemove.push(index)
        }
    })

    squaresToRemove.sort((a, b) => b - a).forEach(index => {
        const square = squares[index]
        if (square.tween) square.tween.kill()
        square.group.children.forEach((line: THREE.Object3D) => {
            scene.remove(line)
            if (line.geometry instanceof LineSegmentsGeometry) {
                line.geometry.dispose()
            }
            if (line.material instanceof LineMaterial) {
                line.material.dispose()
            }
        })
        scene.remove(square.group)
        squares.splice(index, 1)
    })

    squares.forEach(square => {
        const currentZ = square.group.position.z
        const distanceFromEmitter = currentZ - FADE_START_Z.value
        const fadeRange = FADE_END_Z.value - FADE_START_Z.value
        let progress = distanceFromEmitter / fadeRange
        progress = Math.max(0, Math.min(1, progress))
        const expProgress = Math.pow(progress, 4)
        const opacity = 0.01 + (0.99 * expProgress)

        square.group.children.forEach((line: THREE.Object3D) => {
            if (line.material instanceof LineMaterial) {
                line.material.opacity = opacity
                line.material.needsUpdate = true
            }
        })
        // Debug: Log the Z-positions of both rectangles in the pair
        /*square.group.children.forEach((child: THREE.Object3D, childIndex: number) => {
            console.log(`Pair ${squares.indexOf(square)}, Rectangle ${childIndex + 1} Z: ${(child.position.z + currentZ).toFixed(2)}`);
        });*/
    })

    renderer.render(scene, camera) // Direct render without post-processing
}

const handleResize = () => {
    updateRendererSize()
}

const togglePanel = () => {
    isPanelOpen.value = !isPanelOpen.value
}

onMounted(() => {
    init()
    animate()
    window.addEventListener('resize', handleResize)
    if (container.value) {
        container.value.addEventListener('mousemove', onMouseMove)
    }
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    if (container.value) {
        container.value.removeEventListener('mousemove', onMouseMove)
    }
    if (cameraTween) {
        cameraTween.kill()
    }
    squares.forEach(square => {
        if (square.tween) square.tween.kill()
        square.group.children.forEach((line: THREE.Object3D) => {
            scene.remove(line)
            if (line.geometry instanceof LineSegmentsGeometry) {
                line.geometry.dispose()
            }
            if (line.material instanceof LineMaterial) {
                line.material.dispose()
            }
        })
        scene.remove(square.group)
    })
    cancelAnimationFrame(animationFrameId)
    renderer.dispose()
})
</script>

<template>
    <div ref="container" class="canvas-container relative">
        <!-- Control Panel -->
        <div class="fixed top-4 right-4 z-10">
            <button @click="togglePanel" class="bg-gray-800 text-white px-4 py-2 rounded mb-2 w-full">
                {{ isPanelOpen ? 'Hide Controls' : 'Show Controls' }}
            </button>
            <div v-if="isPanelOpen" class="bg-gray-900 text-white p-4 rounded shadow-lg w-64">
                <div class="space-y-4">
                    <!-- LINE_WIDTH (Moved to Top) -->
                    <div>
                        <label class="block text-sm">Line Width: {{ LINE_WIDTH }}</label>
                        <input type="range" v-model.number="LINE_WIDTH" min="1" max="10" step="1" class="w-full">
                    </div>
                    <!-- FADE_START_Z -->
                    <div>
                        <label class="block text-sm">Fade Start Z: {{ FADE_START_Z }}</label>
                        <input type="range" v-model.number="FADE_START_Z" min="-5000" max="0" step="50" class="w-full">
                    </div>
                    <!-- FADE_END_Z -->
                    <div>
                        <label class="block text-sm">Fade End Z: {{ FADE_END_Z }}</label>
                        <input type="range" v-model.number="FADE_END_Z" min="-5000" max="0" step="50" class="w-full">
                    </div>
                    <!-- EMITTER_Z -->
                    <div>
                        <label class="block text-sm">Emitter Z: {{ EMITTER_Z }}</label>
                        <input type="range" v-model.number="EMITTER_Z" min="-5000" max="0" step="50" class="w-full">
                    </div>
                    <!-- MOVE_SPEED -->
                    <div>
                        <label class="block text-sm">Move Speed: {{ MOVE_SPEED }}</label>
                        <input type="range" v-model.number="MOVE_SPEED" min="0.1" max="10.0" step="0.1" class="w-full">
                    </div>
                    <!-- SPAWN_INTERVAL -->
                    <div>
                        <label class="block text-sm">Spawn Interval: {{ SPAWN_INTERVAL }}</label>
                        <input type="range" v-model.number="SPAWN_INTERVAL" min="1" max="10" step="1" class="w-full">
                    </div>
                    <!-- GLOBAL_ROTATION_SPEED -->
                    <div>
                        <label class="block text-sm">Global Rotation Speed: {{ GLOBAL_ROTATION_SPEED }}</label>
                        <input type="range" v-model.number="GLOBAL_ROTATION_SPEED" min="0" max="10" step="0.1" class="w-full">
                    </div>
                    <!-- ROTATION_INCREMENT -->
                    <div>
                        <label class="block text-sm">Rotation Increment (°): {{ ROTATION_INCREMENT }}</label>
                        <input type="range" v-model.number="ROTATION_INCREMENT" min="0" max="20" step="0.1" class="w-full">
                    </div>
                    <!-- WIRE_COLOR -->
                    <div>
                        <label class="block text-sm">Wire Color: {{ WIRE_COLOR }}</label>
                        <input type="color" v-model="WIRE_COLOR" class="w-full h-10 cursor-pointer">
                    </div>
                    <!-- Reset Camera Button -->
                    <div>
                        <button @click="resetCameraPosition" class="bg-blue-600 text-white px-4 py-2 rounded w-full">
                            Reset Camera to (0, 0, 0)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.canvas-container {
    width: 100vw;
    height: calc(100vw / (16 / 9));
    overflow: hidden;
}
</style>
