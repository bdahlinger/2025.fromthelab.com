<script setup lang="ts">
import { onMounted, ref, onUnmounted, reactive } from 'vue'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'

// Define types for the objects
interface TorusData {
    torus: THREE.Mesh
    cubes: THREE.InstancedMesh // Using InstancedMesh for performance
}

// Reference to the canvas element
const canvasRef = ref<HTMLCanvasElement | null>(null)

// Reactive settings for the control panel (with initialization flag, bloom controls, and panel visibility)
const settings = reactive({
    torusRadius: 6,
    tubeRadius: 1,
    arc: 1,
    radialSegments: 12,
    tubularSegments: 24,
    cubeSize: 0.175,
    showRed: true,    // Visibility for Red torus and cubes
    showGreen: true,  // Visibility for Green torus and cubes
    showBlue: true,   // Visibility for Blue torus and cubes
    isInitialized: false, // Flag to track initial setup
    bloomEnabled: true,  // Toggle bloom effect on/off
    bloomStrength: 1.4,   // Control bloom strength (0.1–2.0)
    bloomRadius: 0.4,     // Control bloom radius (0.1–5.0)
    panelVisible: false   // Toggle control panel visibility, hidden by default
} as const) // Ensure type safety and reactivity

// Setup Three.js scene, camera, and renderer
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let toruses: TorusData[] = []
let torusGroup: THREE.Group
let composer: EffectComposer | null = null // Allow null for initial setup
let renderPass: RenderPass
let bloomPass: UnrealBloomPass
let centralGroup: THREE.Group

// Store initial camera settings
let initialCameraPosition: THREE.Vector3
let initialCameraLookAt: THREE.Vector3

// Performance monitoring
let frameCount = 0
let lastTime = performance.now()

// Function to update torus and cube geometries based on settings, preserving animations and bloom
const updateGeometry = (isInitial = false) => {
    //console.log('Updating geometry with settings:', settings, 'Is initial:', isInitial)

    // Skip if already initialized and no user changes
    if (!isInitial && settings.isInitialized && !Object.values(settings).some((v, i) => v !== Object.values(settings)[i])) {
        //console.log('No changes detected, skipping update')
        return
    }

    // Store current animation states before killing, including global rotation
    const currentStates = toruses.map(torusData => ({
        rotationZ: torusData.torus.rotation.z,
        scale: torusData.torus.scale.clone()
    }))
    const globalRotationZ = torusGroup.rotation.z // Preserve global rotation

    // Kill existing animations, including global
    gsap.killTweensOf([torusGroup.rotation, ...toruses.map(t => t.torus.rotation), ...toruses.map(t => t.torus.scale)])

    // Clear existing toruses and cubes, but preserve torusGroup’s rotation
    const savedGlobalRotation = torusGroup.rotation.clone() // Save current torusGroup rotation
    torusGroup.clear()
    torusGroup.rotation.copy(savedGlobalRotation) // Restore global rotation after clearing

    toruses = []

    // Recreate toruses and cubes with updated settings, visibility, and bloom material
    const createTorusAndCubes = (color: THREE.Color, yRot: number, zRot: number, isVisible: boolean, index: number): TorusData => {
        const torusGeometry = new THREE.TorusGeometry(
            settings.torusRadius,
            settings.tubeRadius,
            settings.radialSegments,
            settings.tubularSegments,
            Math.PI * settings.arc
        )
        const torusMaterial = new THREE.MeshBasicMaterial({ visible: false }) // Hidden material for torus
        const torus = new THREE.Mesh(torusGeometry, torusMaterial)

        torus.rotation.y = THREE.MathUtils.degToRad(yRot) // 60 degrees Y-axis rotation for all
        torus.rotation.z = isInitial ? 0 : (currentStates[index]?.rotationZ || 0) // Start at 0 for initial, else restore
        torus.scale.copy(isInitial ? new THREE.Vector3(1, 1, 1) : (currentStates[index]?.scale || new THREE.Vector3(1, 1, 1))) // Start at 1 for initial, else restore
        torus.visible = isVisible // Set torus visibility based on checkbox

        const vertices = []
        const position = torusGeometry.attributes.position as THREE.BufferAttribute
        for (let i = 0; i < position.count; i++) {
            vertices.push(new THREE.Vector3(
                position.getX(i),
                position.getY(i),
                position.getZ(i)
            ))
        }

        // Create cubes for each vertex with updated size and bloomable material
        const cubeGeometry = new THREE.BoxGeometry(settings.cubeSize, settings.cubeSize, settings.cubeSize)
        const cubeMaterial = new THREE.MeshBasicMaterial({
            color: color,
            emissive: color, // Set emissive color for bloom, matching cube color
            emissiveIntensity: settings.bloomEnabled ? 2.0 : 0.0, // Increased to 2.0 for brighter bloom
            transparent: true,
            blending: THREE.AdditiveBlending,
            visible: isVisible // Set cube visibility based on checkbox
        })
        const cubeCount = vertices.length
        const cubes = new THREE.InstancedMesh(cubeGeometry, cubeMaterial, cubeCount)

        for (let i = 0; i < cubeCount; i++) {
            const matrix = new THREE.Matrix4()
            matrix.setPosition(vertices[i])
            cubes.setMatrixAt(i, matrix)
        }

        torus.add(cubes)
        torusGroup.add(torus)
        return { torus, cubes }
    }

    // Recreate all toruses with visibility settings and preserved states
    toruses.push(createTorusAndCubes(new THREE.Color(0xff0000), 31, 0, settings.showRed, 0))    // TorusRed
    toruses.push(createTorusAndCubes(new THREE.Color(0x00ff00), 30, 5, settings.showGreen, 1))  // TorusGreen
    toruses.push(createTorusAndCubes(new THREE.Color(0x0000ff), 29, 8, settings.showBlue, 2))   // TorusBlue

    // Create the central grouping
    const boxRedGeometry = new THREE.BoxGeometry(2, 2, 4);
    const boxRedMaterial = new THREE.MeshPhongMaterial({
        color: new THREE.Color(0x400000), // Darker red to reduce brightness
        transparent: true,
        opacity: 0.1, // Significantly reduced opacity to minimize brightness
        emissive: new THREE.Color(0x000000), // Black emissive (no emission)
        emissiveIntensity: 0.0, // No emission intensity
        specular: new THREE.Color(0x000000), // No specular highlights
        shininess: 0, // No shininess for flat appearance
    })
    const redCube = new THREE.Mesh(boxRedGeometry, boxRedMaterial);
    redCube.rotation.z = THREE.MathUtils.degToRad(60)
    centralGroup.add(redCube)

    // Reapply animations, starting from current or initial states
    const applyAnimations = (torusData: TorusData, targetZ: number, duration: number, delay: number, index: number) => {
        //console.log(`Reapplying animation for Torus${index + 1}, current rotation.z: ${torusData.torus.rotation.z.toFixed(2)}`)
        gsap.fromTo(
            torusData.torus.rotation,
            { z: torusData.torus.rotation.z }, // Start from current or initial rotation
            {
                z: Math.PI * 2, // Full 360 degrees
                duration: duration,
                repeat: -1,
                ease: 'linear',
                //onRepeat: () => console.log(`Torus${index + 1} local Z animation restarted at:`, performance.now())
            }
        )
    }

    // Reapply local Z-axis rotations
    applyAnimations(toruses[0], Math.PI * 2, 6, 0.1, 0) // TorusRed
    applyAnimations(toruses[1], Math.PI * 2, 7, 0.2, 1) // TorusGreen
    applyAnimations(toruses[2], Math.PI * 2, 9, 0.3, 2) // TorusBlue

    // Reapply global Z-axis rotation, starting from preserved state
    //console.log(`Reapplying global animation, current rotation.z: ${globalRotationZ.toFixed(2)}`)
    gsap.fromTo(
        torusGroup.rotation,
        { z: isInitial ? 0 : globalRotationZ }, // Start at 0 for initial, else preserved global rotation
        {
            z: Math.PI * 2, // Full 360 degrees
            duration: 10,
            repeat: -1,
            ease: 'linear',
            //onRepeat: () => console.log('TorusGroup global Z animation restarted at:', performance.now())
        }
    )

    // Reapply swell animation, starting from current or initial scale
    //console.log('Reapplying swell animation, current scales:', toruses.map(t => t.torus.scale.toArray().join(', ')))
    gsap.fromTo(
        [toruses[0].torus.scale, toruses[1].torus.scale, toruses[2].torus.scale],
        { x: (i: number) => (isInitial ? 1 : toruses[i].torus.scale.x),
            y: (i: number) => (isInitial ? 1 : toruses[i].torus.scale.y),
            z: (i: number) => (isInitial ? 1 : toruses[i].torus.scale.z) }, // Start from 1 for initial, else current scale
        {
            x: 0.5,
            y: 0.5,
            z: 0.5,
            duration: 8,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut'
        }
    )

    // Update bloom effect if composer exists
    if (composer) {
        bloomPass.strength = settings.bloomEnabled ? settings.bloomStrength : 0.0 // Disable bloom by setting strength to 0
        bloomPass.radius = settings.bloomEnabled ? settings.bloomRadius : 0.0 // Disable bloom radius when off
        bloomPass.needsUpdate = true // Ensure bloom pass updates
    }

    // Mark as initialized after first run
    if (isInitial) {
        settings.isInitialized = true
    }
}

onMounted(() => {
    if (!canvasRef.value) return

    // Initialize scene
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(12, 1, 0.1, 1000) // Aspect ratio set dynamically

    renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.value,
        antialias: true,
        preserveDrawingBuffer: false // Reduce memory usage
    })
    renderer.setClearColor(0x000000) // Black background
    renderer.setPixelRatio(window.devicePixelRatio) // Reduced DPI for better performance

    // Position camera along the ray (0, -10, 5), adjusted for scene visibility
    const cameraDir = new THREE.Vector3(0, -10, 5).normalize()
    const cameraDistance = 170 // Estimated distance to fit the scene
    initialCameraPosition = cameraDir.clone().multiplyScalar(cameraDistance)
    initialCameraLookAt = new THREE.Vector3(0, -5, 5) // Store initial lookAt
    camera.position.copy(initialCameraPosition)
    camera.lookAt(initialCameraLookAt)

    // Create the group to hold all toruses for global rotation
    torusGroup = new THREE.Group()
    scene.add(torusGroup)
    centralGroup = new THREE.Group()
    scene.add(centralGroup)

    // Add lighting to the scene
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1) // White light, intensity 1
    directionalLight.position.set(10, -20, 40) // Position the light above and to the side for realistic shading
    scene.add(directionalLight)

    // Increase ambient light to illuminate shadowed areas
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35) // White light, higher intensity for visibility
    scene.add(ambientLight)

    // Initial creation of toruses and cubes, marked as initial setup
    updateGeometry(true)

    // Handle resize with 768px square size
    const resize = () => {
        if (canvasRef.value) {
            const maxSize = 768 // Maximum size in pixels
            const windowWidth = window.innerWidth
            const windowHeight = window.innerHeight

            // Calculate size based on viewport width, ensuring it doesn't exceed maxSize or browser width
            let newWidth = Math.min(maxSize, windowWidth * 0.9) // 90% of viewport width, capped at 768px
            let newHeight = newWidth // Maintain square aspect ratio (1:1)

            // Ensure the canvas fits within the viewport height if needed, maintaining aspect ratio
            if (newHeight > windowHeight * 0.9) {
                newHeight = Math.min(maxSize, windowHeight * 0.9)
                newWidth = newHeight // Keep square
            }

            const dpr = renderer.getPixelRatio()

            renderer.setSize(newWidth * dpr, newHeight * dpr, false)
            camera.aspect = newWidth / newHeight
            camera.updateProjectionMatrix()

            // Restore initial camera position and lookAt
            camera.position.copy(initialCameraPosition)
            camera.lookAt(initialCameraLookAt)

            canvasRef.value.style.width = `${newWidth}px`
            canvasRef.value.style.height = `${newHeight}px`

            // Update composer resolution if it exists
            if (composer) {
                composer.setSize(newWidth * dpr, newHeight * dpr)
            }
        }
    }

    window.addEventListener('resize', resize)
    resize()

    // Clean up event listener on unmount
    onUnmounted(() => {
        window.removeEventListener('resize', resize)
    })

    // Optimize GSAP animations for performance
    //gsap.ticker.lagSmoothing(0) // Disable lag smoothing for consistent performance

    // Setup bloom effect
    composer = new EffectComposer(renderer)
    renderPass = new RenderPass(scene, camera)
    bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85)
    bloomPass.threshold = 1.0 // Increased threshold to filter out redCube's brightness, allowing only emissive cubes to bloom
    bloomPass.strength = settings.bloomEnabled ? settings.bloomStrength : 0.0 // Initial strength
    bloomPass.radius = settings.bloomEnabled ? settings.bloomRadius : 0.0 // Bloom radius
    composer.addPass(renderPass)
    composer.addPass(bloomPass)

    // Render loop with performance monitoring, bloom, and debugging
    function animate(time: number) {
        requestAnimationFrame(animate)
        composer.render() // Use composer.render() for bloom effect

        // Monitor frame rate
        /*frameCount++
        if (time - lastTime >= 1000) { // Check every second
            const fps = frameCount
            console.log(`FPS: ${fps}`)
            frameCount = 0
            lastTime = time
        }*/

        // Log current global and local rotations and scales for debugging
        /*if (frameCount % 60 === 0) { // Log every second
            console.log('TorusGroup global rotation.z:', torusGroup.rotation.z.toFixed(2))
            console.log('TorusRed local rotation.z:', toruses[0].torus.rotation.z.toFixed(2))
            console.log('TorusGreen local rotation.z:', toruses[1].torus.rotation.z.toFixed(2))
            console.log('TorusBlue local rotation.z:', toruses[2].torus.rotation.z.toFixed(2))
            console.log('TorusRed scale:', toruses[0].torus.scale.toArray().join(', '))
            console.log('TorusGreen scale:', toruses[1].torus.scale.toArray().join(', '))
            console.log('TorusBlue scale:', toruses[2].torus.scale.toArray().join(', '))
        }*/
    }
    animate(performance.now())
})
</script>

<template>
    <div class="spheres-container flex justify-center">
        <canvas ref="canvasRef" class="spheres-canvas"></canvas>
        <!-- Control Panel Toggle Switch -->
        <div class="fixed top-4 left-4 z-20">
            <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="settings.panelVisible" class="sr-only peer" @change="updateGeometry" />
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Show Panel</span>
            </label>
        </div>
        <!-- Control Panel -->
        <div class="control-panel fixed top-4 left-4 bg-gray-800 text-white p-4 rounded shadow-lg z-10" :class="{ 'hidden': !settings.panelVisible }">
            <h3 class="text-lg font-bold mb-2">Settings</h3>
            <div class="space-y-4">
                <div>
                    <label class="block mb-1">Torus Radius (5–20)</label>
                    <input type="range" v-model.number="settings.torusRadius" min="5" max="20" step="0.1"
                           @input="updateGeometry" class="w-full" />
                    <span>{{ settings.torusRadius.toFixed(1) }}</span>
                </div>
                <div>
                    <label class="block mb-1">Tube Radius (1–8)</label>
                    <input type="range" v-model.number="settings.tubeRadius" min="1" max="8" step="0.1"
                           @input="updateGeometry" class="w-full" />
                    <span>{{ settings.torusRadius.toFixed(1) }}</span>
                </div>
                <div>
                    <label class="block mb-1">Tube Arc (0.1–2 * PI)</label>
                    <input type="range" v-model.number="settings.arc" min="0.1" max="2" step="0.1"
                           @input="updateGeometry" class="w-full" />
                    <span>{{ settings.arc.toFixed(2) }}</span>
                </div>
                <div>
                    <label class="block mb-1">Radial Segments (6–24)</label>
                    <input type="range" v-model.number="settings.radialSegments" min="6" max="24" step="1"
                           @input="updateGeometry" class="w-full" />
                    <span>{{ settings.radialSegments }}</span>
                </div>
                <div>
                    <label class="block mb-1">Tubular Segments (12–48)</label>
                    <input type="range" v-model.number="settings.tubularSegments" min="12" max="48" step="1"
                           @input="updateGeometry" class="w-full" />
                    <span>{{ settings.tubularSegments }}</span>
                </div>
                <div>
                    <label class="block mb-1">Cube Size (0.05–0.5)</label>
                    <input type="range" v-model.number="settings.cubeSize" min="0.05" max="0.5" step="0.01"
                           @input="updateGeometry" class="w-full" />
                    <span>{{ settings.cubeSize.toFixed(2) }}</span>
                </div>
                <!-- Visibility Checkboxes -->
                <div>
                    <label class="block mb-1">
                        <input type="checkbox" v-model="settings.showRed" @change="updateGeometry" class="mr-2" />
                        Show Red
                    </label>
                </div>
                <div>
                    <label class="block mb-1">
                        <input type="checkbox" v-model="settings.showGreen" @change="updateGeometry" class="mr-2" />
                        Show Green
                    </label>
                </div>
                <div>
                    <label class="block mb-1">
                        <input type="checkbox" v-model="settings.showBlue" @change="updateGeometry" class="mr-2" />
                        Show Blue
                    </label>
                </div>
                <!-- Bloom Controls -->
                <div>
                    <label class="block mb-1">
                        <input type="checkbox" v-model="settings.bloomEnabled" @change="updateGeometry" class="mr-2" />
                        Bloom Enabled
                    </label>
                </div>
                <div>
                    <label class="block mb-1">Bloom Strength (0.1–2.0)</label>
                    <input type="range" v-model.number="settings.bloomStrength" min="0.1" max="2.0" step="0.1"
                           @input="updateGeometry" class="w-full" />
                    <span>{{ settings.bloomStrength.toFixed(1) }}</span>
                </div>
                <div>
                    <label class="block mb-1">Bloom Radius (0.1–5.0)</label>
                    <input type="range" v-model.number="settings.bloomRadius" min="0.1" max="5.0" step="0.1"
                           @input="updateGeometry" class="w-full" />
                    <span>{{ settings.bloomRadius.toFixed(1) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.spheres-container {
    max-width: 100vw; /* Ensures it never exceeds viewport width */
    max-height: 100vh; /* Ensures it never exceeds viewport height */
    width: 768px; /* Default width */
    height: 768px; /* Default height */
    margin: 0 auto; /* Centers the container horizontally */
    position: relative;
}

.spheres-canvas {
    width: 100%;
    height: 100%;
    image-rendering: pixelated;
}

.control-panel {
    width: 240px; /* Fixed width for the panel */
    transition: opacity 0.3s ease; /* Smooth fade for visibility toggle */
}

.control-panel.hidden {
    opacity: 0;
    visibility: hidden;
}
</style>
