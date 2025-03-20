import * as THREE from 'three'
import { gsap } from 'gsap'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

export function useIntroCubes(
    sceneNoGlow: THREE.Scene,
    sceneGlow: THREE.Scene,
    config: { CUBE_SIZE: number; FIRST_CUBE_Z: number },
    settings: {
        showIntroCubes: boolean
    }
) {

    if (!settings.showIntroCubes) {
        return { introCubes: [] };
    }


    const { CUBE_SIZE, FIRST_CUBE_Z } = config;
    const CUBE_SIZE_STEP = 8;
    const CUBE_COUNT_INTRO = 24;
    const CUBE_CYCLE_DURATION = 0.075;
    const MESSAGE_SPACING = 200;

    let introGroup: THREE.Group
    let introCubes: THREE.Group[] = []
    let introMaterials: THREE.LineBasicMaterial[] = []
    let initialOpacities: number[] = []
    let childMaterialsByCube: { material: THREE.LineBasicMaterial, originalColor: THREE.Color }[][] = []

    const createIntroCube = (size: number, zPosition: number, rotation: number, material: THREE.LineBasicMaterial): THREE.Group => {
        const geometry = new THREE.BoxGeometry(size, size, size)
        const edgesGeometry = new THREE.EdgesGeometry(geometry)
        const materials = [
            new THREE.LineBasicMaterial({ color: 0xff0000, transparent: true, opacity: material.opacity, blending: THREE.AdditiveBlending }),
            new THREE.LineBasicMaterial({ color: 0x00ff00, transparent: true, opacity: material.opacity, blending: THREE.AdditiveBlending }),
            new THREE.LineBasicMaterial({ color: 0x0000ff, transparent: true, opacity: material.opacity, blending: THREE.AdditiveBlending }),
            new THREE.LineBasicMaterial({ color: 0x00ffff, transparent: true, opacity: material.opacity, blending: THREE.AdditiveBlending }),
            new THREE.LineBasicMaterial({ color: 0xff00ff, transparent: true, opacity: material.opacity, blending: THREE.AdditiveBlending }),
            new THREE.LineBasicMaterial({ color: 0xffff00, transparent: true, opacity: material.opacity, blending: THREE.AdditiveBlending })
        ]

        const group = new THREE.Group()
        const positions = edgesGeometry.getAttribute('position').array as Float32Array
        const indices = []
        for (let i = 0; i < positions.length / 3; i += 2) {
            indices.push(i, i + 1)
        }

        const faceEdges = Array(6).fill(null).map(() => new THREE.BufferGeometry())
        const faceIndices = Array(6).fill(null).map(() => [])
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

    const setupIntro = () => {
        const opacityStart = 1.0
        const opacityEnd = 0.1
        const opacityStep = (opacityStart - opacityEnd) / (CUBE_COUNT_INTRO - 1)
        for (let i = 0; i < CUBE_COUNT_INTRO; i++) {
            introMaterials[i] = new THREE.LineBasicMaterial({
                transparent: true,
                opacity: opacityStart - (i * opacityStep)
            })
        }

        introGroup = new THREE.Group()
        if (!introGroup) {
            console.error('introGroup failed to initialize')
            return
        }

        for (let i = 0; i < CUBE_COUNT_INTRO; i++) {
            const size = CUBE_SIZE - (i * CUBE_SIZE_STEP)
            const cube = createIntroCube(size, 0, 0, introMaterials[i])
            const childMaterials = cube.children.map(c => (c as THREE.LineSegments).material) as THREE.LineBasicMaterial[]
            childMaterialsByCube.push(childMaterials.map(m => ({ material: m, originalColor: m.color.clone() })))
            introGroup.add(cube)
        }

        introGroup.position.z = FIRST_CUBE_Z
        sceneGlow.add(introGroup) // Single scene usage
        introCubes.push(introGroup)

        initialOpacities = introMaterials.map(m => m.opacity)

        const tl = gsap.timeline({ repeat: -1 })
        tl.to(introGroup.rotation, { x: THREE.MathUtils.degToRad(360), duration: 12, ease: 'none' }, 0)
        tl.to(introGroup.rotation, { y: THREE.MathUtils.degToRad(360), duration: 10, ease: 'none' }, 0)
        tl.to(introGroup.rotation, { z: THREE.MathUtils.degToRad(360), duration: 14, ease: 'none' }, 0)

        let activeCubeIndex = -1
        let activationTime = 0
        const cycleDurationInMs = CUBE_CYCLE_DURATION * 1000
        const TOTAL_DURATION = CUBE_COUNT_INTRO * cycleDurationInMs

        const updateMarquee = (currentTime: number) => {
            const cycleProgress = (currentTime % TOTAL_DURATION) / cycleDurationInMs
            const newIndex = Math.floor(cycleProgress) % CUBE_COUNT_INTRO

            if (activeCubeIndex !== -1) {
                const elapsed = currentTime - activationTime
                if (elapsed >= cycleDurationInMs) {
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

            requestAnimationFrame(updateMarquee)
        }

        requestAnimationFrame(updateMarquee)
    }

    setupIntro()


    return { introCubes }

    function createMessageGroup(font: THREE.Font): THREE.Group {
        const messageGroup = new THREE.Group()
        const textMesh = createMessageText(font)
        textMesh.position.set(0, -36, 0)
        messageGroup.add(textMesh)

        createMouseIcon((mouseGroup) => {
            messageGroup.add(mouseGroup)
            gsap.fromTo(textMesh.material, { opacity: 0.3 }, {
                opacity: 1.0,
                duration: 3,
                ease: 'linear',
                repeat: -1,
                yoyo: true
            })
            const scrollWheel = mouseGroup.children.find(child => child instanceof THREE.Mesh && child !== mouseGroup.children[0]) as THREE.Mesh
            if (scrollWheel) {
                const originalY = scrollWheel.position.y
                gsap.to(scrollWheel.position, {
                    y: originalY + 3,
                    duration: 1,
                    ease: 'easeOut',
                    onComplete: () => { scrollWheel.position.y = originalY },
                    repeat: -1
                })
            }
        })

        messageGroup.position.x = 0
        messageGroup.position.y = -240
        const lastIntroCubeZ = FIRST_CUBE_Z - (CUBE_COUNT_INTRO * CUBE_SIZE_STEP)
        messageGroup.position.z = lastIntroCubeZ + MESSAGE_SPACING
        return messageGroup
    }

    function createMessageText(font: THREE.Font): THREE.Mesh {
        const textGeometry = new TextGeometry('SCROLL TO CONTINUE', {
            font: font,
            size: 8,
            depth: 0,
            curveSegments: 12,
            bevelEnabled: false
        })
        textGeometry.computeBoundingBox()
        textGeometry.center()
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1.0 })
        return new THREE.Mesh(textGeometry, textMaterial)
    }

    function createMouseIcon(callback: (group: THREE.Group) => void): void {
        const loader = new SVGLoader()
        loader.load('/3D/mouse.svg', (data) => {
            const paths = data.paths
            let mouseBody: THREE.Mesh | null = null
            let scrollWheel: THREE.Mesh | null = null
            let mouseGroup: THREE.Group = new THREE.Group()

            paths.forEach((path, i) => {
                const shapes = SVGLoader.createShapes(path)
                shapes.forEach((shape) => {
                    const geometry = new THREE.ShapeGeometry(shape)
                    geometry.computeBoundingBox()
                    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1.0, side: THREE.DoubleSide })
                    const mesh = new THREE.Mesh(geometry, material)
                    mesh.scale.set(0.05, 0.05, 1)
                    if (i === 0) mouseBody = mesh
                    else if (i === 1) scrollWheel = mesh
                })
            })

            if (mouseBody && scrollWheel) {
                mouseGroup.add(mouseBody)
                mouseGroup.add(scrollWheel)
                const bodyWidth = mouseBody.geometry.boundingBox!.max.x - mouseBody.geometry.boundingBox!.min.x
                const centerOffsetX = bodyWidth * mouseBody.scale.x / 2
                mouseGroup.position.x = -centerOffsetX
                mouseGroup.rotation.x = Math.PI
                callback(mouseGroup)
            }
        })
    }
}
