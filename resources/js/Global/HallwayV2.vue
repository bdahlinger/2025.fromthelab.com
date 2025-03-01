<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger)

// Constants
const projects = [
    { title: "SUICIDE SQUAD: KILL THE JUSTICE LEAGUE", size: 9 },
    { title: "MORTAL KOMBAT 1", size: 9 },
    { title: "HARRY POTTER: HOGWARTS LEGACY", size: 9 },
    { title: "HARRY POTTER: QUIDDITCH CHAMPIONS", size: 9 },
    { title: "MULTIVERSUS", size: 9 },
    { title: "GOTHAM KNIGHTS", size: 9 },
    { title: "GAME OF THRONES: CONQUEST", size: 9 },
    { title: "MARVEL: STRIKE FORCE", size: 9 },
    { title: "LOL: LEAGUE OF LEGENDS", size: 9 },
    { title: "LOL: CONVERGENCE", size: 9 },
]

const ASPECT_RATIO = ref(16 / 9)
const FAR_CLIP = ref(10000)
const CAMERA_Z_START = 0
const CUBE_SIZE = 250
const CUBE_SIZE_STEP = 8
const CUBE_COUNT_INTRO = 16
const CUBE_SPACING = 500
const CUBE_COLOR = 0x00ffff
const CUBE_COLOR_ACTIVE = 0xff00ff
const ROTATION_INCREMENT = THREE.MathUtils.degToRad(15)
const PROXIMITY_THRESHOLD = 1000
const TEXT_PROXIMITY_THRESHOLD = PROXIMITY_THRESHOLD - 250
const MIN_Z = 0
const FIRST_CUBE_Z = -500
const CUBE_COUNT = projects.length + 1
const LAST_CUBE_Z = FIRST_CUBE_Z - (CUBE_COUNT - 1) * CUBE_SPACING
const MAX_Z = LAST_CUBE_Z - (CUBE_SPACING / 4)
const CUBE_CYCLE_ACTIVE_COLOR = 0xffffff
const CUBE_CYCLE_DURATION = 0.075 // 75ms as per your value

const tunnelWrapper = ref<HTMLElement | null>(null)
const wrapper = ref<HTMLElement | null>(null)

// Three.js variables
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let cubes: THREE.Group[] = []
let animationFrameId: number
let introRotationTimeline: GSAPTimeline | null = null
let introColorTimeline: GSAPTimeline | null = null
let introMarqueeTimeline: GSAPTimeline | null = null
let fontLoader: FontLoader | null = null
let loadedFont: THREE.Font | null = null
let introMaterials: THREE.LineBasicMaterial[] = []
let initialOpacities: number[] = []
let initialColors: { r: number; g: number; b: number }[] = []
let introGroup: THREE.Group
let originalMaterials: THREE.LineBasicMaterial[][] // Declare globally
let childMaterialsByCube: THREE.LineBasicMaterial[][] // Global storage for child materials

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
    scene.fog = new THREE.Fog(0x000000, 0, 2000)

    camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, FAR_CLIP.value)
    camera.position.set(0, 0, CAMERA_Z_START)
    camera.lookAt(0, 0, LAST_CUBE_Z)

    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    updateRendererSize()

    if (tunnelWrapper.value) {
        tunnelWrapper.value.appendChild(renderer.domElement)
    } else {
        console.error('tunnelWrapper is null, cannot append renderer')
        return
    }

    const opacityStart = 1.0
    const opacityEnd = 0.1
    const opacityStep = (opacityStart - opacityEnd) / (CUBE_COUNT_INTRO - 1)
    for (let i = 0; i < CUBE_COUNT_INTRO; i++) {
        introMaterials[i] = new THREE.LineBasicMaterial({
            transparent: true,
            opacity: opacityStart - (i * opacityStep)
        })
    }

    // Ensure introGroup is initialized
    introGroup = new THREE.Group()
    if (!introGroup) {
        console.error('introGroup failed to initialize')
        return
    }

    originalMaterials = []
    childMaterialsByCube = []
    for (let i = 0; i < CUBE_COUNT_INTRO; i++) {
        const size = CUBE_SIZE - (i * CUBE_SIZE_STEP)
        const cube = createIntroCube(size, 0, 0, introMaterials[i])
        const childMaterials = cube.children.map(c => (c as THREE.LineSegments).material) as THREE.LineBasicMaterial[]
        originalMaterials.push(childMaterials)
        childMaterialsByCube.push(childMaterials.map(m => ({ material: m, originalColor: m.color.clone() })))
        introGroup.add(cube)
    }

    // Check introGroup before setting position
    console.log('introGroup before position set:', introGroup)
    if (!introGroup.position) {
        console.error('introGroup.position is undefined')
        return
    }

    introGroup.position.z = FIRST_CUBE_Z
    scene.add(introGroup)
    cubes.push(introGroup)

    initialOpacities = introMaterials.map(m => m.opacity)
    const baseColors = [
        { r: 1, g: 0, b: 0 },
        { r: 0, g: 1, b: 0 },
        { r: 0, g: 0, b: 1 },
        { r: 0, g: 1, b: 1 },
        { r: 1, g: 0, b: 1 },
        { r: 1, g: 1, b: 0 }
    ]
    initialColors = introGroup.children.map((_, i) => baseColors[i % 6])

    setupIntroAnimations() // Just run it, no controls needed
    loadFontAndText()
    setupScrollAnimation()
    animate()
}

const createIntroCube = (size: number, zPosition: number, rotation: number, material: THREE.LineBasicMaterial): THREE.Group => {
    const geometry = new THREE.BoxGeometry(size, size, size)
    const edgesGeometry = new THREE.EdgesGeometry(geometry)

    // Create materials for each face color with additive blending
    const materials = [
        new THREE.LineBasicMaterial({ color: 0xff0000, transparent: true, opacity: material.opacity, blending: THREE.AdditiveBlending }), // Red
        new THREE.LineBasicMaterial({ color: 0x00ff00, transparent: true, opacity: material.opacity, blending: THREE.AdditiveBlending }), // Green
        new THREE.LineBasicMaterial({ color: 0x0000ff, transparent: true, opacity: material.opacity, blending: THREE.AdditiveBlending }), // Blue
        new THREE.LineBasicMaterial({ color: 0x00ffff, transparent: true, opacity: material.opacity, blending: THREE.AdditiveBlending }), // Cyan
        new THREE.LineBasicMaterial({ color: 0xff00ff, transparent: true, opacity: material.opacity, blending: THREE.AdditiveBlending }), // Magenta
        new THREE.LineBasicMaterial({ color: 0xffff00, transparent: true, opacity: material.opacity, blending: THREE.AdditiveBlending })  // Yellow
    ]

    const group = new THREE.Group()
    const positions = edgesGeometry.getAttribute('position').array as Float32Array

    // Manually define edges for a cube (12 edges total)
    const indices = []
    for (let i = 0; i < positions.length / 3; i += 2) {
        indices.push(i, i + 1) // Each pair of vertices forms an edge
    }

    // Approximate 6 faces by grouping edges (2 edges per face)
    const faceEdges = [
        new THREE.BufferGeometry(), // Red
        new THREE.BufferGeometry(), // Green
        new THREE.BufferGeometry(), // Blue
        new THREE.BufferGeometry(), // Cyan
        new THREE.BufferGeometry(), // Magenta
        new THREE.BufferGeometry()  // Yellow
    ]

    const faceIndices = [[], [], [], [], [], []]

    // Simplified edge assignment
    for (let i = 0; i < indices.length / 2; i++) {
        const faceIndex = i % 6
        faceIndices[faceIndex].push(indices[i * 2], indices[i * 2 + 1])
    }

    faceEdges.forEach((geometry, i) => {
        geometry.setIndex(faceIndices[i])
        geometry.setAttribute('position', edgesGeometry.getAttribute('position'))
        const lineSegment = new THREE.LineSegments(geometry, materials[i])
        group.add(lineSegment)
    })

    group.position.z = zPosition
    group.rotation.z = rotation
    return group
}

const createProjectCube = (size: number, zPosition: number, rotation: number, material?: THREE.LineBasicMaterial): THREE.Group => {
    const geometry = new THREE.BoxGeometry(size, size, size)
    const edges = new THREE.EdgesGeometry(geometry)
    const defaultMaterial = material || new THREE.LineBasicMaterial({
        color: new THREE.Color(CUBE_COLOR),
        transparent: true,
        opacity: 0
    })

    const cube = new THREE.LineSegments(edges, defaultMaterial)
    const group = new THREE.Group()
    group.add(cube)
    group.position.z = zPosition
    group.rotation.z = rotation
    return group
}

const createTextObject = (
    text: string,
    x: number,
    y: number,
    z: number,
    size: number,
    font: THREE.Font,
    isIntro: boolean = false
): THREE.Mesh => {
    const textGeometry = new TextGeometry(text, {
        font: font,
        size: size,
        depth: 0,
        curveSegments: 12,
        bevelEnabled: false
    })

    textGeometry.computeBoundingBox()
    textGeometry.center()

    const textMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: isIntro ? 1.0 : 0.0,
        side: THREE.DoubleSide
    })

    const textMesh = new THREE.Mesh(textGeometry, textMaterial)
    textMesh.position.set(x, y, z)
    scene.add(textMesh)

    return textMesh
}

const loadFontAndText = () => {
    fontLoader = new FontLoader()
    fontLoader.load(
        '/fonts/Poppins_Regular.json',
        (font) => {
            loadedFont = font
            projects.forEach((project, index) => {
                const zPosition = FIRST_CUBE_Z - (index + 1) * CUBE_SPACING
                const rotation = (index + 1) * ROTATION_INCREMENT
                const cube = createProjectCube(CUBE_SIZE, zPosition, rotation)
                scene.add(cube)
                cubes.push(cube)
                createTextObject(project.title, 0, project.size + 15, zPosition, project.size, font)
            })
        },
        undefined,
        (error) => console.error('Error loading font:', error)
    )
}

const animate = () => {
    animationFrameId = requestAnimationFrame(animate)

    if (renderer) {
        renderer.render(scene, camera)
    }

    ScrollTrigger.update()
}

const setupIntroAnimations = () => {
    const introGroup = cubes[0]

    // Continuous organic rotation, no pause
    introRotationTimeline = gsap.timeline({ repeat: -1 })
    introRotationTimeline.to(introGroup.rotation, {
        x: THREE.MathUtils.degToRad(360),
        duration: 12,
        ease: 'none',
    }, 0)
    introRotationTimeline.to(introGroup.rotation, {
        y: THREE.MathUtils.degToRad(360),
        duration: 10,
        ease: 'none',
    }, 0)
    introRotationTimeline.to(introGroup.rotation, {
        z: THREE.MathUtils.degToRad(360),
        duration: 14,
        ease: 'none',
    }, 0)

    // Marquee state, continuous RAF
    let activeCubeIndex = -1
    let activationTime = 0
    const CYCLE_DURATION = CUBE_CYCLE_DURATION * 1000
    const TOTAL_DURATION = CUBE_COUNT_INTRO * CUBE_CYCLE_DURATION * 1000

    const updateMarquee = (currentTime: number) => {
        const cycleProgress = (currentTime % TOTAL_DURATION) / CYCLE_DURATION
        const newIndex = Math.floor(cycleProgress) % CUBE_COUNT_INTRO

        if (activeCubeIndex !== -1) {
            const elapsed = currentTime - activationTime
            if (elapsed >= CYCLE_DURATION) {
                const prevMaterials = childMaterialsByCube[activeCubeIndex]
                prevMaterials.forEach((mObj) => {
                    mObj.material.opacity = initialOpacities[activeCubeIndex]
                    mObj.material.color.copy(mObj.originalColor)
                })
                activeCubeIndex = -1
            }
        }

        if (activeCubeIndex === -1 && newIndex !== activeCubeIndex) {
            activeCubeIndex = newIndex
            activationTime = currentTime
            const childMaterials = childMaterialsByCube[activeCubeIndex]
            childMaterials.forEach(mObj => {
                mObj.material.opacity = 1.0
                mObj.material.color.set(1, 1, 1)
            })
        }

        requestAnimationFrame(updateMarquee) // Always keep running
    }

    // Start marquee and never stop it
    requestAnimationFrame(updateMarquee)

    // No start/stop functions needed
    return {}
}

const setupScrollAnimation = () => {
    if (!wrapper.value || !tunnelWrapper.value) return

    tunnelWrapper.value.style.width = '100%'
    tunnelWrapper.value.style.maxWidth = 'none'

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: wrapper.value,
            start: 'top top',
            end: '+=6250',
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            refreshPriority: 1,
            onEnter: () => {
                // Fade in project cubes over 0.5 seconds
                cubes.slice(1).forEach(cube => {
                    cube.children.forEach((child) => {
                        const material = (child as THREE.LineSegments).material as THREE.LineBasicMaterial
                        gsap.to(material, {
                            opacity: 1,
                            duration: 0.5, // Changed from 1 to 0.5
                            ease: 'power1.out'
                        })
                    })
                })
            },
            onLeaveBack: () => {
                // Fade out project cubes over 0.5 seconds
                cubes.slice(1).forEach(cube => {
                    cube.children.forEach((child) => {
                        const material = (child as THREE.LineSegments).material as THREE.LineBasicMaterial
                        gsap.to(material, {
                            opacity: 0,
                            duration: 0.5, // Changed from 1 to 0.5
                            ease: 'power1.in'
                        })
                    })
                })
            }
        }
    })

    tl.to(camera.position, {
        z: MAX_Z,
        ease: 'none',
        duration: 0.833,
        onUpdate: () => {
            camera.lookAt(0, 0, MAX_Z - 1000)
            updateCubeColors()
        }
    }, 0)

    tl.to(cubes.slice(1).map(cube => cube.rotation), {
        z: `+=${2 * Math.PI}`,
        ease: 'none',
        duration: 0.833
    }, 0)

    tl.to(camera.position, {
        z: MAX_Z,
        duration: 0.167
    }, '>')
}

const updateCubeColors = () => {
    const cameraZ = camera.position.z
    let textMeshes: THREE.Mesh[] = []

    scene.traverse((object) => {
        if (object instanceof THREE.Mesh && object.geometry && object.geometry.type === 'TextGeometry') {
            textMeshes.push(object)
        }
    })

    cubes.forEach((cube, index) => {
        const cubeZ = cube.position.z
        const cubeDistance = Math.abs(cameraZ - cubeZ)

        if (index === 0) {
            // Skip proximity effect for intro cubes, handled by marquee
        } else {
            cube.children.forEach((child) => {
                const lineSegments = child as THREE.LineSegments
                const material = lineSegments.material as THREE.LineBasicMaterial
                if (material && material.color instanceof THREE.Color) {
                    if (cubeDistance <= PROXIMITY_THRESHOLD) {
                        const progress = 1 - (cubeDistance / PROXIMITY_THRESHOLD)
                        const r = THREE.MathUtils.lerp(
                            (CUBE_COLOR >> 16 & 255) / 255,
                            (CUBE_COLOR_ACTIVE >> 16 & 255) / 255,
                            progress
                        )
                        const g = THREE.MathUtils.lerp(
                            (CUBE_COLOR >> 8 & 255) / 255,
                            (CUBE_COLOR_ACTIVE >> 8 & 255) / 255,
                            progress
                        )
                        const b = THREE.MathUtils.lerp(
                            (CUBE_COLOR & 255) / 255,
                            (CUBE_COLOR_ACTIVE & 255) / 255,
                            progress
                        )
                        material.color.set(r, g, b)
                    }
                } else {
                    console.error('Invalid material or color object:', material)
                }
            })
        }
    })

    textMeshes.forEach((mesh) => {
        const textMaterial = mesh.material as THREE.MeshBasicMaterial
        const meshZ = mesh.position.z
        const zDistance = Math.abs(cameraZ - meshZ)

        if (zDistance <= 1000) {
            if (zDistance <= 500) {
                textMaterial.opacity = 1.0
            } else {
                const fadeRange = 1000 - 500
                const progress = (1000 - zDistance) / fadeRange
                const textProgress = 1 - Math.pow(1 - progress, 2)
                textMaterial.opacity = textProgress
            }
        } else {
            textMaterial.opacity = 0.0
        }
    })
}

onMounted(() => {
    init()
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    cancelAnimationFrame(animationFrameId)
    if (introRotationTimeline) introRotationTimeline.kill()
    if (introColorTimeline) introColorTimeline.kill()
    if (introMarqueeTimeline) introMarqueeTimeline.kill()
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    renderer.dispose()
    scene.clear()
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
