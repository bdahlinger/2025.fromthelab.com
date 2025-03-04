<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as THREE from 'three'
import { gsap } from 'gsap'

// Define types for the boxes
interface Box {
    mesh: THREE.Mesh
    color: THREE.Color
}

// Reference to the canvas element
const canvasRef = ref<HTMLCanvasElement | null>(null)
const logoRef = ref<HTMLCanvasElement | null>(null)

// Setup Three.js scene, camera, and renderer
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let boxes: Box[] = []
let boxGroup: THREE.Group

// Store GSAP animation instances for cleanup
let redRotationAnim: gsap.core.Tween | null = null
let greenRotationAnim: gsap.core.Tween | null = null
let blueRotationAnim: gsap.core.Tween | null = null
const hoverEffect = () => {
    redRotationAnim?.kill()
    greenRotationAnim?.kill()
    blueRotationAnim?.kill()
    redRotationAnim = gsap.to(boxes[0].meshes.red.rotation, { // Red box
        y: Math.PI * 2, // 360 degrees in radians
        duration: 4, // Animation duration in seconds
        repeat: -1, // Infinite loop
        ease: 'none' // Linear easing for smooth rotation
    })

    greenRotationAnim = gsap.to(boxes[1].meshes.green.rotation, { // Green box
        y: Math.PI * 2, // 360 degrees in radians
        duration: 5, // Slightly slower for variety
        repeat: -1, // Infinite loop
        ease: 'none' // Linear easing
    })

    blueRotationAnim = gsap.to(boxes[2].meshes.blue.rotation, { // Blue box
        y: Math.PI * 2, // 360 degrees in radians
        duration: 3, // Slightly faster for variety
        repeat: -1, // Infinite loop
        ease: 'none' // Linear easing
    })
}
const hoverOffEffect = () => {
    // Kill any existing animations
    redRotationAnim?.kill()
    greenRotationAnim?.kill()
    blueRotationAnim?.kill()


    gsap.to(boxes[0].meshes.red.rotation, { // Red box
        y: 0,
        duration: 0.5,
        repeat: 0,
        ease: 'none',
        onComplete: () => redRotationAnim = null
    })

    gsap.to(boxes[1].meshes.green.rotation, { // Green box
        y: 0,
        duration: 0.5,
        repeat: 0,
        ease: 'none',
        onComplete: () => greenRotationAnim = null
    })

    gsap.to(boxes[2].meshes.blue.rotation, { // Blue box
        y: 0,
        duration: 0.5,
        repeat: 0,
        ease: 'none',
        onComplete: () => blueRotationAnim = null
    })
}
onMounted(() => {
    if (!canvasRef.value) return

    // Initialize scene
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(10, 1, 0.1, 1000) // Aspect ratio will be set dynamically

    renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.value,
        antialias: true,
        alpha: true
    })
    //renderer.setClearColor(0x000000) // Black background to match your logo

    // Use native device pixel ratio for performance (can increase to *2 if needed for sharpness)
    renderer.setPixelRatio(window.devicePixelRatio)

    // Add lighting to the scene
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1) // White light, intensity 1
    directionalLight.position.set(10, 20, 30) // Position the light above and to the side for realistic shading
    scene.add(directionalLight)

    // Increase ambient light to illuminate shadowed areas
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35) // White light, higher intensity for visibility
    scene.add(ambientLight)

    // Create geometry for the boxes (simple cubes for now, scaled down to fit smaller canvas)
    const geometryRed = new THREE.BoxGeometry(5, 8, 5)
    const geometryGreen = new THREE.BoxGeometry(5, 5, 5)
    const geometryBlue = new THREE.BoxGeometry(6, 5, 5)

    // Create the group to hold the boxes
    boxGroup = new THREE.Group()

    // Create and position the boxes
    const colors = [
        new THREE.Color(0xff0000), // Red
        new THREE.Color(0x00ff00), // Green
        new THREE.Color(0x0000ff)  // Blue
    ]

    boxes = colors.map((color, index) => {
        //const material = new THREE.MeshBasicMaterial({ color, transparent: true, blending: THREE.AdditiveBlending })
        const material = new THREE.MeshPhongMaterial({
            color: color,
            specular: 0x555555, // Silver-like specular highlight color (adjust for brightness)
            shininess: 30, // Controls the size/brightness of the specular highlight (higher = smaller, brighter highlight)
            transparent: true,
            blending: THREE.AdditiveBlending, // Maintain color blending for overlaps
            side: THREE.DoubleSide,
            opacity: 0
        })



        const meshRed = new THREE.Mesh(geometryRed, material)
        const meshGreen = new THREE.Mesh(geometryGreen, material)
        const meshBlue = new THREE.Mesh(geometryBlue, material)

        // Position and rotate to form the "L" shape with overlaps, scaled for smaller size
        switch (index) {
            case 0: // Red box (bottom/front of "L")
                meshRed.position.set(0, 17.1, 0)
                meshRed.rotation.set(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), 0)
                boxGroup.add(meshRed)
                break
            case 1: // Green box (middle, overlapping)
                meshGreen.position.set(-10, 0, 0) // Halved positions to fit smaller canvas
                meshGreen.rotation.set(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), 0)
                boxGroup.add(meshGreen)
                break
            case 2: // Blue box (top/back)
                meshBlue.position.set(15.75, 0, 0) // Halved positions to fit smaller canvas
                meshBlue.rotation.set(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), 0)
                boxGroup.add(meshBlue)
                break
        }

        return {
            meshes: {
                red: meshRed,
                green: meshGreen,
                blue: meshBlue
            },
            color
        }
    })

    // Add the group to the scene
    scene.add(boxGroup)

    // Position camera closer to focus tightly on the smaller logo
    //camera.position.set(6, -14, 22) // Moved closer (z: 15) for tighter framing in 64px square
    camera.position.set(60, -90, 90) // Moved closer (z: 15) for tighter framing in 64px square
    camera.lookAt(2.5, 2.5, 0)

    // Add roll by rotating around the z-axis (e.g., 45 degrees, or π/4 radians)
    const rollAngle = THREE.MathUtils.degToRad(0) // Adjust this value (e.g., 0, 30, 45, 90) for desired roll
    //camera.rotation.x = 0 // Pitch (optional, keep if needed)
    //camera.rotation.y = 0 // Yaw (optional, keep if needed)
    camera.rotation.z = rollAngle // Roll (rotation around z-axis)

    // Handle resize with fixed 64px square size
    const resize = () => {
        if (canvasRef.value) {
            const width = 120 // Fixed square width
            const height = 78 // Fixed square height
            const dpr = renderer.getPixelRatio()

            // Set the renderer size with high resolution
            renderer.setSize(width * dpr, height * dpr, false)
            camera.aspect = width / height
            camera.updateProjectionMatrix()

            // Scale the canvas CSS size to match the fixed square dimensions
            canvasRef.value.style.width = `${width}px`
            canvasRef.value.style.height = `${height}px`

            camera.updateProjectionMatrix()
        }
    }

    window.addEventListener('resize', resize)
    resize()

    gsap.from(logoRef.value, {
        y: 10,
        opacity: 0, // Fade up from 0 to 1
        duration: 5,
        ease: 'power2.out',
    })
    // Initial animations for boxes entering into place
    gsap.to(boxes[0].meshes.red.position, {
        y: 7.1, // Move down to resting place
        duration: 1.5,
        ease: 'power2.out',
    })
    gsap.to(boxes[0].meshes.red.rotation, {
        x: Math.PI, // Rotate 90 degrees on X-axis
        duration: 1.5,
        ease: 'power2.out',
    })
    gsap.to(boxes[0].meshes.red.material, {
        opacity: 1, // Fade up from 0 to 1
        duration: 1.5,
        ease: 'power2.out',
    })

    // Green box animations
    gsap.to(boxes[1].meshes.green.position, {
        x: 0, // Move right to resting place
        duration: 1.5,
        ease: 'power2.out',
    })
    gsap.to(boxes[1].meshes.green.rotation, {
        x: Math.PI, // Rotate 90 degrees on X-axis
        duration: 1.5,
        ease: 'power2.out',
    })
    gsap.to(boxes[1].meshes.green.material, {
        opacity: 1, // Fade up from 0 to 1
        duration: 1.5,
        ease: 'power2.out',
    })

    // Blue box animations
    gsap.to(boxes[2].meshes.blue.position, {
        x: 5.75, // Move left to resting place
        duration: 1.5,
        ease: 'power2.out',
    })
    gsap.to(boxes[2].meshes.blue.rotation, {
        x: Math.PI, // Rotate 90 degrees on X-axis
        duration: 1.5,
        ease: 'power2.out',
    })
    gsap.to(boxes[2].meshes.blue.material, {
        opacity: 1, // Fade up from 0 to 1
        duration: 1.5,
        ease: 'power2.out',
    })


    // Animate the box group with GSAP for a 360-degree Y-axis rotation
    /*gsap.to(boxGroup.rotation, {
        y: Math.PI * 2, // 360 degrees in radians (2π)
        duration: 4, // Animation duration in seconds (adjust speed here)
        repeat: -1, // Infinite loop
        ease: 'none' // Linear easing for a smooth, constant rotation
    })*/


    function animate() {
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
    }

    animate()
})

</script>

<template>
    <div class="flex flex-col items-center" @mouseenter="hoverEffect" @mouseleave="hoverOffEffect">
        <div class="logo-3d-container">
            <canvas ref="canvasRef" class="logo-3d-canvas"></canvas>
        </div>
        <svg ref="logoRef" class="relative h-3.5 -mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238.54 17.28">
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
    width: 120px;
    height: 78px;
    position: relative;
}

.logo-3d-canvas {
    width: 100%;
    height: 100%;
    image-rendering: pixelated;
}
</style>
