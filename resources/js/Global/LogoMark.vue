<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useScreenStore } from '@/Stores/screenStore' // Adjust the import path to your Pinia store
// Define types for the boxes
interface Box {
    mesh: THREE.Mesh
    color: THREE.Color
}

// Reference to the canvas element
const canvasRef = ref<HTMLCanvasElement | null>(null)
const logoRef = ref<HTMLCanvasElement | null>(null)
const componentId = 'logo-mark-' + Math.random().toString(36).substr(2, 9);

// Setup Three.js scene, camera, and renderer
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let boxes: Box[] = []
let boxGroup: THREE.Group
let animationFrameId: number | null = null
// Store GSAP animation instances for cleanup
let redRotationAnim: gsap.core.Tween | null = null
let greenRotationAnim: gsap.core.Tween | null = null
let blueRotationAnim: gsap.core.Tween | null = null

// Pinia store for screen size
const screenStore = useScreenStore()

const hoverEffect = () => {
    redRotationAnim?.kill()
    greenRotationAnim?.kill()
    blueRotationAnim?.kill()
    redRotationAnim = gsap.to(boxes[0].mesh.rotation, { y: Math.PI * 2, duration: 4, repeat: -1, ease: 'none' })
    greenRotationAnim = gsap.to(boxes[1].mesh.rotation, { y: Math.PI * 2, duration: 5, repeat: -1, ease: 'none' })
    blueRotationAnim = gsap.to(boxes[2].mesh.rotation, { y: Math.PI * 2, duration: 3, repeat: -1, ease: 'none' })
}

const hoverOffEffect = () => {
    redRotationAnim?.kill()
    greenRotationAnim?.kill()
    blueRotationAnim?.kill()
    gsap.to(boxes[0].mesh.rotation, { y: 0, duration: 0.5, ease: 'none', onComplete: () => (redRotationAnim = null) })
    gsap.to(boxes[1].mesh.rotation, { y: 0, duration: 0.5, ease: 'none', onComplete: () => (greenRotationAnim = null) })
    gsap.to(boxes[2].mesh.rotation, { y: 0, duration: 0.5, ease: 'none', onComplete: () => (blueRotationAnim = null) })
}



onMounted(() => {
    if (!canvasRef.value) return

    // Initialize scene
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(10, 1, 0.1, 1000)
    renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)

    // Add lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(10, 20, 30)
    scene.add(directionalLight)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35)
    scene.add(ambientLight)

    // Create geometry for boxes
    const geometryRed = new THREE.BoxGeometry(5, 8, 5)
    const geometryGreen = new THREE.BoxGeometry(5, 5, 5)
    const geometryBlue = new THREE.BoxGeometry(6, 5, 5)

    boxGroup = new THREE.Group()
    const colors = [new THREE.Color(0xff0000), new THREE.Color(0x00ff00), new THREE.Color(0x0000ff)]

    boxes = colors.map((color, index) => {
        const material = new THREE.MeshPhongMaterial({
            color,
            specular: 0x555555,
            shininess: 30,
            transparent: true,
            blending: THREE.AdditiveBlending,
            side: THREE.DoubleSide,
            opacity: 0,
        })

        const mesh = new THREE.Mesh(
            index === 0 ? geometryRed : index === 1 ? geometryGreen : geometryBlue,
            material
        )

        switch (index) {
            case 0:
                mesh.position.set(0, 17.1, 0)
                break
            case 1:
                mesh.position.set(-10, 0, 0)
                break
            case 2:
                mesh.position.set(15.75, 0, 0)
                break
        }
        boxGroup.add(mesh)
        return { mesh, color }
    })

    scene.add(boxGroup)
    camera.position.set(60, -90, 90)
    camera.lookAt(2.5, 2.5, 0)
    camera.rotation.z = THREE.MathUtils.degToRad(0)

    // Dynamic resize function
    const resize = () => {
        if (!canvasRef.value) return

        let width: number
        let height: number
        const aspectRatio = 120 / 78 // ~1.538

        // Calculate dimensions based on breakpoint
        switch (screenStore.currentBreakpoint) {
            case 'xs':
            case 'sm':
                width = 120 // Fixed pixels for < md
                height = 78
                break
            case 'md':
            case 'lg':
            case 'xl':
            case '2xl':
                width = window.innerWidth * 0.08 // 8vw for md to <3xl
                height = width / aspectRatio // Maintain aspect ratio
                break
            case '3xl':
            case '4xl':
                width = 8 * 16 // 8rem (assuming 1rem = 16px, adjust if your root font size differs)
                height = width / aspectRatio
                break
            default:
                width = 120
                height = 78
        }

        const dpr = renderer.getPixelRatio()
        renderer.setSize(width * dpr, height * dpr, false)
        camera.aspect = width / height
        camera.updateProjectionMatrix()

        canvasRef.value.style.width = `${width}px`
        canvasRef.value.style.height = `${height}px`
    }

    window.addEventListener('resize', resize)
    resize()

    // Initial animations (unchanged)
    gsap.from(logoRef.value, { y: 10, opacity: 0, duration: 5, ease: 'power2.out' })
    boxes.forEach((box, index) => {
        gsap.to(box.mesh.position, {
            [index === 0 ? 'y' : index === 1 ? 'x' : 'x']:
                index === 0 ? 7.1 : index === 1 ? 0 : 5.75,
            duration: 1.5,
            ease: 'power2.out',
        })
        gsap.to(box.mesh.rotation, { x: Math.PI, duration: 1.5, ease: 'power2.out' })
        gsap.to(box.mesh.material, { opacity: 1, duration: 1.5, ease: 'power2.out' })
    })

    function animate() {
        animationFrameId = requestAnimationFrame(animate)
        renderer.render(scene, camera)
    }
    animate()
})

onUnmounted(() => {

    // Cancel animation loop first
    if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
        animationFrameId = null
    }

    // Kill GSAP animations
    redRotationAnim?.kill()
    greenRotationAnim?.kill()
    blueRotationAnim?.kill()
    redRotationAnim = null
    greenRotationAnim = null
    blueRotationAnim = null

    // Dispose of renderer
    if (renderer) {
        renderer.dispose()
        renderer.forceContextLoss()
        if (renderer.domElement && renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement)
        }
        renderer = null
    }

    // Dispose of boxes and boxGroup
    if (boxes.length > 0) {
        boxes.forEach(box => {
            if (box.mesh.geometry) box.mesh.geometry.dispose()
            if (box.mesh.material) box.mesh.material.dispose()
            if (boxGroup) boxGroup.remove(box.mesh)
        })
        boxes = []
    }
    if (boxGroup && scene) {
        scene.remove(boxGroup)
        boxGroup = null
    }

    // Safely remove lights
    if (scene) {
        const lights: THREE.Light[] = []
        scene.traverse(object => {
            if (object instanceof THREE.Light) {
                lights.push(object)
            }
        })
        lights.forEach(light => {
            if (scene) scene.remove(light)
        })
        scene.clear()
    }

    // Remove resize listener
    window.removeEventListener('resize', () => {})

    // Nullify references
    scene = null
    camera = null
})


</script>

<template>
    <div class="flex flex-col items-center" @mouseenter="hoverEffect" @mouseleave="hoverOffEffect">
        <div class="logo-3d-container">
            <canvas ref="canvasRef" class="logo-3d-canvas"></canvas>
        </div>
        <svg ref="logoRef" class="relative h-3.5 md:h-[.875vw] 3xl:h-[.875rem] -mt-2 md:-mt-[.5vw] 3xl:-mt-[.5rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238.54 17.28">
            <g>
                <g>
                    <path d="M3.12,2.86v5.11h4.94l-1.44,2.59-3.5.05v6.43H0V.24h12.26l-1.45,2.62H3.12Z" style="fill: #fff;"/>
                    <path d="M30.37,17.04l-3.43-4.92c-.14.02-.36.02-.65.02h-3.79v4.9h-3.12V.24h6.91c1.46,0,2.72.24,3.8.72,1.08.48,1.91,1.17,2.48,2.06.58.9.86,1.96.86,3.19s-.31,2.35-.92,3.26c-.62.91-1.5,1.59-2.65,2.04l3.86,5.52h-3.36ZM29.24,3.74c-.7-.58-1.74-.86-3.1-.86h-3.65v6.7h3.65c1.36,0,2.39-.29,3.1-.88s1.06-1.41,1.06-2.48-.35-1.9-1.06-2.47Z" style="fill: #fff;"/>
                    <path d="M45.22,16.16c-1.38-.74-2.46-1.78-3.24-3.1-.78-1.32-1.18-2.8-1.18-4.43s.39-3.11,1.18-4.43c.78-1.32,1.86-2.35,3.24-3.1,1.38-.74,2.92-1.12,4.63-1.12s3.26.37,4.63,1.12c1.38.74,2.46,1.77,3.24,3.08.78,1.31,1.18,2.79,1.18,4.44s-.39,3.13-1.18,4.44c-.78,1.31-1.86,2.34-3.24,3.08-1.38.74-2.92,1.12-4.63,1.12s-3.26-.37-4.63-1.12ZM52.88,13.79c.9-.5,1.6-1.21,2.11-2.11.51-.9.77-1.92.77-3.04s-.26-2.13-.77-3.04c-.51-.9-1.22-1.61-2.11-2.11-.9-.5-1.9-.76-3.02-.76s-2.13.25-3.02.76c-.9.5-1.6,1.21-2.11,2.11-.51.9-.77,1.92-.77,3.04s.26,2.13.77,3.04c.51.9,1.22,1.61,2.11,2.11.9.5,1.9.76,3.02.76s2.13-.25,3.02-.76Z" style="fill: #fff;"/>
                    <path d="M82.74,17.04l-.02-11.14-5.52,9.22h-1.39l-5.52-9.07v10.99h-2.98V.24h2.57l6.67,11.14L83.1.24h2.57l.02,16.8h-2.95Z" style="fill: #fff;"/>
                    <path d="M110.43,2.88h-5.57V.24h14.26l-1.47,2.64h-4.09v14.16h-3.12V2.88Z" style="fill: #fff;"/>
                    <path d="M141.49.24v16.8h-3.12v-7.2h-8.69v7.2h-3.12V.24h3.12v6.94h8.69V.24h3.12Z" style="fill: #fff;"/>
                    <path d="M162.69,14.42l-1.51,2.62h-11.09V.24h12.26l-1.54,2.62h-7.61v4.37h8.11l-1.48,2.57h-6.63v4.63h9.48Z" style="fill: #fff;"/>
                    <path d="M182.97.24h3.12v14.16h8.78l-1.53,2.64h-10.38V.24Z" style="fill: #fff;"/>
                    <path d="M213.45,13.15h-8.4l-1.66,3.89h-3.22L207.73.24h3.07l7.58,16.8h-3.26l-1.68-3.89ZM212.41,10.7l-3.17-7.34-3.14,7.34h6.31Z" style="fill: #fff;"/>
                    <path d="M237.73,9.83c.54.71.82,1.6.82,2.65,0,1.46-.56,2.58-1.68,3.37s-2.75,1.19-4.9,1.19h-8.35V.24h7.87c1.98,0,3.51.39,4.58,1.16,1.07.78,1.61,1.84,1.61,3.2,0,.83-.19,1.57-.58,2.21-.38.64-.91,1.14-1.58,1.49.93.3,1.66.81,2.21,1.52ZM226.73,2.69v4.63h4.42c1.09,0,1.92-.2,2.51-.59.58-.39.88-.96.88-1.72s-.29-1.35-.88-1.74c-.58-.39-1.42-.59-2.51-.59h-4.42ZM235.4,12.17c0-1.62-1.21-2.42-3.62-2.42h-5.04v4.85h5.04c2.42,0,3.62-.81,3.62-2.42Z" style="fill: #fff;"/>
                </g>
            </g>
        </svg>
    </div>
</template>

<style scoped>
.logo-3d-container {
    position: relative;
}

.logo-3d-canvas {
    width: 100%;
    height: 100%;
}
</style>
