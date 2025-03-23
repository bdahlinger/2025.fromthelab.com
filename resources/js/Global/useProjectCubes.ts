import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { gsap } from 'gsap'
import { router } from '@inertiajs/vue3'
import { useTunnelStore } from '@/Stores/tunnelStore'

export function useProjectCubes(
    scene: THREE.Scene,
    config: { CUBE_SIZE: number, CUBE_SPACING: number, FIRST_CUBE_Z: number },
    projects: App.Data.ProjectData[],
    projectGridFile: string,
    projectGridFile2: string,
    settings: {
        showPortalPulses: boolean
        showKeyarts: boolean
        showProjectGrids: boolean
        showProjectTitles: boolean
    },
    textureCache: Map<string, THREE.Texture>
) {
    const tunnelStore = useTunnelStore()
    const { CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z } = config
    const MAX_Z = FIRST_CUBE_Z - (projects.length + 1) * CUBE_SPACING
    const CUBE_COLOR = 0x00ffff
    const CUBE_COLOR_ACTIVE = 0xff00ff
    const HOVER_COLOR = 0xff0000
    const ROTATION_INCREMENT = THREE.MathUtils.degToRad(15)
    const PROXIMITY_THRESHOLD = 1000
    const ACTIVE_THRESHOLD = 0.5
    const NUM_PULSES = 80
    const PULSE_WIDTH = 1
    const PULSE_HEIGHT = 15
    const PULSE_OFFSET = 0.1
    const CLICK_HERE_SIZE = tunnelStore.isMobile ? 1 : 0.5
    const CLICK_HERE_SPEED = 40 // units per second
    const CLICK_HERE_RATE = 0.125 // seconds between emissions
    const CLICK_HERE_DISTANCE = 100 // distance beyond portal
    const CLICK_HERE_CONE_RATE = 5
    const CLICK_HERE_CONE_RADIUS = tunnelStore.isMobile ? 1.5 : 2.0
    const CLICK_HERE_CONE_HEIGHT = tunnelStore.isMobile ? 2.0 : 2.5

    let projectCubes: THREE.Group[] = []
    projectCubes.length = 0
    let fontLoader: FontLoader | null = null
    let loadedFont: THREE.Font | null = null
    let isInitialized = false
    let sceneInitialized = false
    let raycaster = new THREE.Raycaster()
    let mouse = new THREE.Vector2()
    let hoveredPortal: THREE.LineSegments | null = null
    let originalCameraPosition: THREE.Vector3 | null = null
    let originalCameraTarget: THREE.Vector3 | null = null
    let isInPortalFocus = false
    let onPortalFocusChange: ((isFocused: boolean, originalPosition?: THREE.Vector3, originalTarget?: THREE.Vector3) => void) | null = null

    // Particle system management
    interface ClickHereParticle {
        mesh: THREE.Mesh
        direction: THREE.Vector3
        distanceTraveled: number
        totalDistance: number
    }

    const clickHereParticles: Map<THREE.Group, ClickHereParticle[]> = new Map()
    const lastEmissionTimes: Map<THREE.Group, number> = new Map()
    const particleCounters: Map<THREE.Group, number> = new Map() // Track particle count per cube

    const createProjectCube = (
        project: App.Data.ProjectData,
        size: number,
        zPosition: number,
        rotation: number,
        keyart: string | null,
        keyartLocation: string | null
    ): THREE.Group => {
        const group = new THREE.Group()
        group.position.z = zPosition
        group.rotation.z = rotation
        group.userData.isActive = false

        const geometry = new THREE.BoxGeometry(size, size, size)
        const edges = new THREE.EdgesGeometry(geometry)
        const material = new THREE.LineBasicMaterial({
            color: new THREE.Color(CUBE_COLOR),
            transparent: true,
            opacity: 0
        })
        const cube = new THREE.LineSegments(edges, material)
        cube.geometry.computeBoundingSphere()
        group.add(cube)

        let portalLocation: 'left' | 'top' | 'right' | 'bottom' = 'right'
        const halfSize = size / 2

        const addPortal = () => {
            const innerRadius = 25
            const outerRadius = 40
            const portalGeometry = new THREE.CircleGeometry(outerRadius, 24)
            const portalEdges = new THREE.EdgesGeometry(portalGeometry)
            const portalMaterial = new THREE.LineBasicMaterial({
                color: new THREE.Color(CUBE_COLOR),
                transparent: true,
                opacity: 0,
                visible: true
            })
            const portal = new THREE.LineSegments(portalEdges, portalMaterial)
            portal.userData.isPortal = true
            portal.userData.isAnimating = false
            portal.geometry.computeBoundingSphere()

            const hitboxGeometry = new THREE.PlaneGeometry(60, 60)
            const hitboxMaterial = new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide })
            const hitbox = new THREE.Mesh(hitboxGeometry, hitboxMaterial)
            hitbox.userData.isPortalHitbox = true
            hitbox.userData.portal = portal
            hitbox.geometry.computeBoundingSphere()

            const pulsesGroup = new THREE.Group()
            const pulseGeometry = new THREE.PlaneGeometry(PULSE_WIDTH, PULSE_HEIGHT)
            const baseRadius = (innerRadius + outerRadius) / 2
            for (let i = 0; i < NUM_PULSES; i++) {
                const pulseMaterial = new THREE.MeshBasicMaterial({
                    color: new THREE.Color(CUBE_COLOR_ACTIVE),
                    transparent: true,
                    opacity: 0,
                    visible: false,
                    side: THREE.DoubleSide
                })
                const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial)
                const angle = (i / NUM_PULSES) * Math.PI * 2
                pulse.position.set(Math.cos(angle) * baseRadius, Math.sin(angle) * baseRadius, 0)
                pulse.rotation.z = angle + Math.PI / 2
                pulse.userData.baseOpacity = 0.01
                pulse.userData.index = i
                pulse.geometry.computeBoundingSphere()
                pulsesGroup.add(pulse)
            }

            const ringPortals: THREE.LineSegments[] = [portal]
            const initialRingSpacing = 2
            const numRings = 25
            for (let i = 1; i < numRings; i++) {
                const newRingGeometry = new THREE.CircleGeometry(outerRadius, 24)
                const newRingEdges = new THREE.EdgesGeometry(newRingGeometry)
                const maxOpacity = THREE.MathUtils.lerp(1.0, 0.1, i / (numRings - 1))
                const newRingMaterial = new THREE.LineBasicMaterial({
                    color: new THREE.Color(CUBE_COLOR),
                    transparent: true,
                    opacity: 0
                })
                const newRing = new THREE.LineSegments(newRingEdges, newRingMaterial)
                newRing.userData.isPortal = true
                newRing.userData.maxOpacity = maxOpacity
                newRing.position.z = -i * initialRingSpacing
                newRing.geometry.computeBoundingSphere()
                ringPortals.push(newRing)
                portal.add(newRing)
            }
            portal.userData.maxOpacity = 1.0

            // Add close button as a sibling to the portal
            const closeGroup = new THREE.Group()
            const rectGeometry = new THREE.PlaneGeometry(12, 1)
            const closeMaterial = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0,
                side: THREE.DoubleSide
            })

            const rect1 = new THREE.Mesh(rectGeometry, closeMaterial)
            rect1.rotation.z = Math.PI / 4
            const rect2 = new THREE.Mesh(rectGeometry, closeMaterial)
            rect2.rotation.z = -Math.PI / 4

            closeGroup.add(rect1, rect2)

            const closeHitboxGeometry = new THREE.PlaneGeometry(30, 30)
            const closeHitboxMaterial = new THREE.MeshBasicMaterial({
                opacity: 0.0,
                transparent: true,
                side: THREE.DoubleSide,
                visible: true
            })
            const closeHitbox = new THREE.Mesh(closeHitboxGeometry, closeHitboxMaterial)
            closeHitbox.userData.isCloseHitbox = true
            closeHitbox.geometry.computeBoundingSphere()
            closeHitbox.renderOrder = 2
            closeGroup.add(closeHitbox)

            const xOffset = 42
            const yOffset = 42
            const zOffset = -10
            closeGroup.visible = false

            let initialCloseGroupPosition: THREE.Vector3

            switch (portalLocation) {
                case 'left':
                    portal.position.set(-halfSize, 0, 0)
                    portal.rotation.y = Math.PI / 2
                    hitbox.position.set(-halfSize, 0, 0)
                    hitbox.rotation.y = Math.PI / 2
                    if (rotation >= THREE.MathUtils.degToRad(120)) {
                        closeGroup.position.set(-halfSize + zOffset, -yOffset, xOffset)
                        initialCloseGroupPosition = new THREE.Vector3(-halfSize + zOffset, -yOffset, xOffset)
                    } else {
                        closeGroup.position.set(-halfSize + zOffset, yOffset, -xOffset)
                        initialCloseGroupPosition = new THREE.Vector3(-halfSize + zOffset, yOffset, -xOffset)
                    }
                    closeGroup.rotation.y = Math.PI / 2
                    pulsesGroup.children.forEach((pulse) => pulse.position.x += PULSE_OFFSET)
                    break
                case 'top':
                    portal.position.set(0, -halfSize, 0)
                    portal.rotation.x = -Math.PI / 2
                    hitbox.position.set(0, -halfSize, 0)
                    hitbox.rotation.x = Math.PI / 2
                    if (rotation >= THREE.MathUtils.degToRad(100)) {
                        if (rotation >= THREE.MathUtils.degToRad(180)) {
                            closeGroup.position.set(-yOffset, -halfSize + zOffset, -xOffset)
                            initialCloseGroupPosition = new THREE.Vector3(-yOffset, -halfSize + zOffset, -xOffset)
                        } else {
                            closeGroup.position.set(yOffset, -halfSize + zOffset, xOffset)
                            initialCloseGroupPosition = new THREE.Vector3(yOffset, -halfSize + zOffset, xOffset)
                        }
                    } else {
                        closeGroup.position.set(yOffset, -halfSize + zOffset, xOffset)
                        initialCloseGroupPosition = new THREE.Vector3(yOffset, -halfSize + zOffset, xOffset)
                    }
                    closeGroup.rotation.x = -Math.PI / 2
                    pulsesGroup.children.forEach((pulse) => pulse.position.y += PULSE_OFFSET)
                    break
                case 'right':
                    portal.position.set(halfSize, 0, 0)
                    portal.rotation.y = -Math.PI / 2
                    hitbox.position.set(halfSize, 0, 0)
                    hitbox.rotation.y = -Math.PI / 2
                    if (rotation >= THREE.MathUtils.degToRad(120)) {
                        closeGroup.position.set(halfSize + zOffset, -xOffset, -yOffset)
                        initialCloseGroupPosition = new THREE.Vector3(halfSize + zOffset, -xOffset, -yOffset)
                    } else {
                        closeGroup.position.set(halfSize + zOffset, yOffset, xOffset)
                        initialCloseGroupPosition = new THREE.Vector3(halfSize + zOffset, yOffset, xOffset)
                    }
                    closeGroup.rotation.y = -Math.PI / 2
                    pulsesGroup.children.forEach((pulse) => pulse.position.x += PULSE_OFFSET)
                    break
                case 'bottom':
                    portal.position.set(0, halfSize, 0)
                    portal.rotation.x = Math.PI / 2
                    hitbox.position.set(0, halfSize, 0)
                    hitbox.rotation.x = Math.PI / 2
                    if (rotation >= THREE.MathUtils.degToRad(100)) {
                        closeGroup.position.set(xOffset, halfSize - zOffset, -yOffset)
                        initialCloseGroupPosition = new THREE.Vector3(xOffset, halfSize - zOffset, -yOffset)
                    } else {
                        closeGroup.position.set(yOffset, halfSize - zOffset, -xOffset)
                        initialCloseGroupPosition = new THREE.Vector3(yOffset, halfSize - zOffset, -xOffset)
                    }
                    closeGroup.rotation.x = Math.PI / 2
                    pulsesGroup.children.forEach((pulse) => pulse.position.y += PULSE_OFFSET)
                    break
            }

            group.userData.initialCloseGroupPosition = initialCloseGroupPosition

            closeGroup.updateMatrixWorld(true)
            portal.add(pulsesGroup)
            group.add(portal)
            group.add(hitbox)
            group.add(closeGroup)
            group.userData.closeButton = closeGroup

            portal.updateMatrixWorld(true)
            pulsesGroup.updateMatrixWorld(true)
            closeGroup.updateMatrixWorld(true)

            clickHereParticles.set(group, [])
            lastEmissionTimes.set(group, 0)
            particleCounters.set(group, 0)
        }

        const addChildWithBounds = (child: THREE.Object3D) => {
            if (child instanceof THREE.LineSegments || child instanceof THREE.Mesh) {
                if (child.geometry) {
                    child.geometry.computeBoundingSphere()
                }
            }
            group.add(child)
        }

        if (keyart && settings.showKeyarts) {
            const location = (['left', 'top', 'right', 'bottom'] as const).includes(keyartLocation as any)
                ? keyartLocation as 'left' | 'top' | 'right' | 'bottom'
                : 'left'
            switch (location) {
                case 'left': portalLocation = 'right'; break
                case 'top': portalLocation = 'bottom'; break
                case 'right': portalLocation = 'left'; break
                case 'bottom': portalLocation = 'top'; break
            }

            const texture = textureCache.get(keyart)
            if (texture) {
                const planeGeometry = new THREE.PlaneGeometry(size - 1, size - 1)
                const planeMaterial = new THREE.MeshBasicMaterial({
                    map: texture,
                    transparent: true,
                    opacity: 0,
                    blending: THREE.AdditiveBlending,
                    side: THREE.DoubleSide
                })
                const plane = new THREE.Mesh(planeGeometry, planeMaterial)
                plane.userData.isLoaded = true
                switch (keyartLocation) {
                    case 'left':
                        plane.position.set(-halfSize, 0, 0)
                        if (rotation >= THREE.MathUtils.degToRad(120)) {
                            plane.rotation.y = Math.PI / 2
                            plane.rotation.z = -Math.PI
                        } else {
                            plane.rotation.y = Math.PI / 2
                        }
                        break
                    case 'top':
                        plane.position.set(0, -halfSize, 0)
                        plane.rotation.x = -Math.PI / 2
                        plane.rotation.z = -Math.PI / 2
                        break
                    case 'right':
                        plane.position.set(halfSize, 0, 0)
                        if (rotation >= THREE.MathUtils.degToRad(120)) {
                            plane.rotation.y = -Math.PI / 2
                            plane.rotation.z = -Math.PI
                        } else {
                            plane.rotation.y = -Math.PI / 2
                        }
                        break
                    case 'bottom':
                        plane.position.set(0, halfSize, 0)
                        if (rotation >= THREE.MathUtils.degToRad(180)) {
                            if (rotation >= THREE.MathUtils.degToRad(220)) {
                                plane.rotation.x = Math.PI / 2
                                plane.rotation.z = Math.PI / 2
                            } else {
                                plane.rotation.x = -Math.PI / 2
                                plane.rotation.z = Math.PI / 2
                            }
                        } else {
                            plane.rotation.x = Math.PI / 2
                            plane.rotation.z = -Math.PI / 2
                        }
                        break
                }
                plane.geometry.computeBoundingSphere()
                addChildWithBounds(plane)
                addPortal()
            } else {
                console.warn(`Keyart texture not preloaded for ${project.title}: ${keyart}`)
                addPortal()
            }
        } else {
            addPortal()
        }

        group.userData.portalLocation = portalLocation

        if (settings.showProjectGrids) {
            const addGridPlane = (texture: THREE.Texture, position: THREE.Vector3, rotation: { x?: number, y?: number }, color?: THREE.Color) => {
                const gridGeometry = new THREE.PlaneGeometry(size - 1, size - 1)
                const materialOptions: THREE.MeshBasicMaterialParameters = {
                    map: texture,
                    transparent: true,
                    opacity: 0,
                    blending: THREE.AdditiveBlending,
                    side: THREE.DoubleSide,
                    depthWrite: false
                }
                if (color) {
                    materialOptions.color = color
                }
                const gridMaterial = new THREE.MeshBasicMaterial(materialOptions)
                const gridPlane = new THREE.Mesh(gridGeometry, gridMaterial)
                gridPlane.position.copy(position)
                if (rotation.x) gridPlane.rotation.x = rotation.x
                if (rotation.y) gridPlane.rotation.y = rotation.y
                gridPlane.userData.isGridPlane = true
                gridPlane.geometry.computeBoundingSphere()
                addChildWithBounds(gridPlane)
            }

            const gridTexture1 = textureCache.get(projectGridFile)
            const gridTexture2 = textureCache.get(projectGridFile2)

            const allFaces = ['left', 'top', 'right', 'bottom']
            const keyartFace = keyart && settings.showKeyarts ? keyartLocation || 'left' : null
            const usedFaces = [keyartFace, portalLocation].filter(Boolean) as string[]
            const freeFaces = allFaces.filter(face => !usedFaces.includes(face))

            if (gridTexture1) {
                addGridPlane(gridTexture1, new THREE.Vector3(0, 0, -size / 2 - 1), { y: 0 })
                addGridPlane(gridTexture1, new THREE.Vector3(0, 0, size / 2 + 1), { y: 0 }, new THREE.Color(0xff8000))

                const blueFace = freeFaces[0]
                switch (blueFace) {
                    case 'left':
                        addGridPlane(gridTexture1, new THREE.Vector3(-halfSize, 0, 0), { y: -Math.PI / 2 }, new THREE.Color(0x0000ff))
                        break
                    case 'top':
                        addGridPlane(gridTexture1, new THREE.Vector3(0, halfSize, 0), { x: Math.PI / 2 }, new THREE.Color(0x0000ff))
                        break
                    case 'right':
                        addGridPlane(gridTexture1, new THREE.Vector3(halfSize, 0, 0), { y: Math.PI / 2 }, new THREE.Color(0x0000ff))
                        break
                    case 'bottom':
                        addGridPlane(gridTexture1, new THREE.Vector3(0, -halfSize, 0), { x: -Math.PI / 2 }, new THREE.Color(0x0000ff))
                        break
                }
            } else {
                console.warn(`Grid texture not preloaded: ${projectGridFile}`)
            }

            if (gridTexture2) {
                const greenFace = freeFaces[1]
                switch (greenFace) {
                    case 'left':
                        addGridPlane(gridTexture2, new THREE.Vector3(-halfSize, 0, 0), { y: -Math.PI / 2 })
                        break
                    case 'top':
                        addGridPlane(gridTexture2, new THREE.Vector3(0, halfSize, 0), { x: Math.PI / 2 })
                        break
                    case 'right':
                        addGridPlane(gridTexture2, new THREE.Vector3(halfSize, 0, 0), { y: Math.PI / 2 })
                        break
                    case 'bottom':
                        addGridPlane(gridTexture2, new THREE.Vector3(0, -halfSize, 0), { x: -Math.PI / 2 })
                        break
                }
            } else {
                console.warn(`Grid texture not preloaded: ${projectGridFile2}`)
            }
        }

        group.children.forEach((child) => {
            child.updateMatrixWorld(true)
            if (child instanceof THREE.Group) {
                child.children.forEach((grandchild) => {
                    grandchild.updateMatrixWorld(true)
                })
            }
        })
        group.updateMatrixWorld(true)
        const box = new THREE.Box3().setFromObject(group)
        const sphere = new THREE.Sphere()
        box.getBoundingSphere(sphere)
        group.boundingSphere = sphere

        return group
    }

    const frustum = new THREE.Frustum()

    const createTextObject = (text: string, x: number, y: number, z: number, size: number, font: THREE.Font): THREE.Mesh => {
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
            opacity: 0.0,
            side: THREE.DoubleSide
        })
        const textMesh = new THREE.Mesh(textGeometry, textMaterial)
        textMesh.position.set(x, y, z)

        const boundingBox = textGeometry.boundingBox!
        const textWidth = boundingBox.max.x - boundingBox.min.x
        const textHeight = boundingBox.max.y - boundingBox.min.y

        const planeWidth = textWidth + 8
        const planeHeight = textHeight + 4
        const planeGeometry = new THREE.PlaneGeometry(planeWidth, planeHeight)
        const planeMaterial = new THREE.MeshBasicMaterial({
            color: 0x000000,
            transparent: true,
            opacity: 0.0,
            side: THREE.DoubleSide
        })
        const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
        planeMesh.position.set(x, y, z - 1)

        scene.add(planeMesh)
        scene.add(textMesh)
        textMesh.userData.backgroundPlane = planeMesh

        return textMesh
    }

    const loadFontAndText = (): Promise<void> => {
        return new Promise((resolve) => {
            fontLoader = new FontLoader()
            fontLoader.load(
                '/fonts/Poppins_Regular.json',
                (font) => {
                    loadedFont = font
                    const projectArray = Array.isArray(projects) ? projects : []
                    if (!Array.isArray(projects)) {
                        console.warn('useProjectCubes: projects is not an array, defaulting to empty array', projects)
                    }
                    projectArray.forEach((project, index) => {
                        const zPosition = FIRST_CUBE_Z - (index + 1) * CUBE_SPACING
                        const rotation = (index + 1) * ROTATION_INCREMENT
                        const cube = createProjectCube(project, CUBE_SIZE, zPosition, rotation, project.keyart, project.keyartLocation)
                        scene.add(cube)
                        projectCubes.push(cube)
                        if (settings.showProjectTitles) {
                            createTextObject(project.title, 0, project.size - 15, FIRST_CUBE_Z + 90 - (index + 1) * CUBE_SPACING, project.size, font)
                        }
                    })
                    resolve()
                },
                undefined,
                (error) => console.error('Error loading font:', error)
            )
        })
    }

    const getInitializedData = (): Promise<{
        projectCubes: THREE.Group[]
        updateCubeColors: (camera: THREE.PerspectiveCamera) => void
        loadedFont: THREE.Font
        maxZ: number
    }> => {
        if (isInitialized) {
            return Promise.resolve({ projectCubes, updateCubeColors, loadedFont: loadedFont as THREE.Font, maxZ: MAX_Z })
        }
        return loadFontAndText().then(() => {
            isInitialized = true
            return { projectCubes, updateCubeColors, loadedFont: loadedFont as THREE.Font, maxZ: MAX_Z }
        }).catch(error => {
            console.error('Error in loadFontAndText:', error)
            throw error
        })
    }

    const animatePulses = (portal: THREE.LineSegments) => {
        if (!settings.showPortalPulses || portal.userData.isAnimating) return

        portal.userData.isAnimating = true
        const pulsesGroup = portal.children.find(child => child instanceof THREE.Group)
        if (!pulsesGroup) return

        const pulses = pulsesGroup.children as THREE.Mesh[]
        const numPulses = pulses.length

        const tl = gsap.timeline({
            repeat: -1,
            defaults: { ease: "none" }
        })

        const progress = { value: 0 }
        tl.to(progress, {
            value: 1,
            duration: 1.5,
            onUpdate: () => {
                const baseOpacity = 0.01
                pulses.forEach((pulse) => {
                    const pulseMaterial = pulse.material as THREE.MeshBasicMaterial
                    if (pulseMaterial.visible) {
                        const pulsePosition = (pulse.userData.index / numPulses + progress.value) % 1
                        const wave = Math.sin(pulsePosition * Math.PI * 2)
                        const normalizedWave = (wave + 1) / 2
                        pulseMaterial.opacity = baseOpacity + (1 - baseOpacity) * Math.pow(normalizedWave, 4)
                    }
                })
            }
        })

        portal.userData.animationTimeline = tl
    }

    const stopPulseAnimation = (portal: THREE.LineSegments) => {
        if (!portal.userData.isAnimating) return

        portal.userData.isAnimating = false
        const pulsesGroup = portal.children.find(child => child instanceof THREE.Group)
        if (!pulsesGroup) return

        if (portal.userData.animationTimeline) {
            portal.userData.animationTimeline.kill()
            delete portal.userData.animationTimeline
        }

        pulsesGroup.children.forEach((pulse: THREE.Mesh) => {
            const pulseMaterial = pulse.material as THREE.MeshBasicMaterial
            pulseMaterial.opacity = 0
        })
    }

    const createClickHereParticle = (cube: THREE.Group, portal: THREE.LineSegments) => {
        let geometry: THREE.BufferGeometry
        const counter = (particleCounters.get(cube) || 0) + 1
        particleCounters.set(cube, counter)

        if (counter % CLICK_HERE_CONE_RATE === 0) {
            geometry = new THREE.ConeGeometry(
                CLICK_HERE_CONE_RADIUS,
                CLICK_HERE_CONE_HEIGHT,
                6, // radialSegments
                1  // heightSegments
            )
        } else {
            geometry = new THREE.BoxGeometry(CLICK_HERE_SIZE, CLICK_HERE_SIZE, CLICK_HERE_SIZE)
        }

        const material = new THREE.MeshBasicMaterial({ color: 0xffffff })
        const particle = new THREE.Mesh(geometry, material)

        particle.position.set(0, 0, 0)

        const portalLocalPos = portal.position.clone()
        const direction = portalLocalPos.clone().normalize()
        const totalDistance = portalLocalPos.length() + CLICK_HERE_DISTANCE

        // Orient cone to point tip along direction (only for cones)
        if (counter % CLICK_HERE_CONE_RATE === 0) {
            const targetPos = particle.position.clone().add(direction)
            particle.lookAt(targetPos)
            // Rotate 90 degrees around X-axis to align tip (Y-axis) with direction
            particle.rotateX(Math.PI / 2)
        }

        cube.add(particle)

        const particles = clickHereParticles.get(cube) || []
        particles.push({
            mesh: particle,
            direction,
            distanceTraveled: 0,
            totalDistance
        })
        clickHereParticles.set(cube, particles)
    }

    const disposeParticles = (cube: THREE.Group) => {
        const particles = clickHereParticles.get(cube) || []
        particles.forEach(particle => {
            cube.remove(particle.mesh)
            particle.mesh.geometry.dispose()
            particle.mesh.material.dispose()
        })
        clickHereParticles.set(cube, [])
    }

    const updateCubeColors = (camera: THREE.PerspectiveCamera) => {
        frustum.setFromProjectionMatrix(camera.projectionMatrix.clone().multiply(camera.matrixWorldInverse))

        const cameraZ = camera.position.z
        let textMeshes: THREE.Mesh[] = []

        scene.traverse(o => o instanceof THREE.Mesh && o.geometry?.type === 'TextGeometry' && textMeshes.push(o))

        if (!sceneInitialized) {
            sceneInitialized = true
        }

        projectCubes.forEach((cube, index) => {
            const sphere = cube.boundingSphere
            if (sphere) {
                const bufferedSphere = sphere.clone()
                bufferedSphere.radius *= 1.5
                if (!frustum.intersectsSphere(bufferedSphere)) {
                    return
                }
            } else {
                console.warn(`Cube ${index} has no boundingSphere`)
            }

            const cubeZ = cube.position.z
            const cubeDistance = Math.abs(cameraZ - cubeZ + 90)
            let lineProgress = 0

            if (cubeDistance <= PROXIMITY_THRESHOLD) {
                lineProgress = 1 - (cubeDistance / PROXIMITY_THRESHOLD)
            }

            cube.userData.isActive = lineProgress >= ACTIVE_THRESHOLD

            cube.children.forEach((child) => {
                if (child instanceof THREE.LineSegments && !child.userData.isPortal && !child.userData.isPortalHitbox) {
                    const material = child.material as THREE.LineBasicMaterial
                    if (cubeDistance <= PROXIMITY_THRESHOLD) {
                        const r = THREE.MathUtils.lerp(
                            (CUBE_COLOR >> 16 & 255) / 255,
                            (CUBE_COLOR_ACTIVE >> 16 & 255) / 255,
                            lineProgress
                        )
                        const g = THREE.MathUtils.lerp(
                            (CUBE_COLOR >> 8 & 255) / 255,
                            (CUBE_COLOR_ACTIVE >> 8 & 255) / 255,
                            lineProgress
                        )
                        const b = THREE.MathUtils.lerp(
                            (CUBE_COLOR & 255) / 255,
                            (CUBE_COLOR_ACTIVE & 255) / 255,
                            lineProgress
                        )
                        material.color.set(r, g, b)
                        material.opacity = Math.min(1, lineProgress * 2)
                    } else {
                        material.opacity = 0
                    }
                } else if (child instanceof THREE.LineSegments && child.userData.isPortal) {
                    if (sceneInitialized) {
                        if (lineProgress > 0.1) {
                            child.children.forEach((grandchild) => {
                                if (grandchild instanceof THREE.Group) {
                                    grandchild.children.forEach((pulse) => {
                                        if (pulse instanceof THREE.Mesh) {
                                            pulse.material.visible = true
                                            if (!child.userData.animationStarted && settings.showPortalPulses) {
                                                animatePulses(child)
                                                child.userData.animationStarted = true
                                            }
                                        }
                                    })
                                }
                            })
                        } else if (lineProgress <= 0.1 && child.userData.animationStarted) {
                            child.children.forEach((grandchild) => {
                                if (grandchild instanceof THREE.Group) {
                                    grandchild.children.forEach((pulse) => {
                                        if (pulse instanceof THREE.Mesh) {
                                            pulse.material.visible = false
                                        }
                                    })
                                }
                            })
                            stopPulseAnimation(child)
                            delete child.userData.animationStarted
                        }
                    }
                } else if (child instanceof THREE.Mesh && !child.userData.isPortalHitbox && !child.userData.isCloseHitbox) {
                    const material = child.material as THREE.MeshBasicMaterial
                    if (child.userData.isLoaded || child.userData.isGridPlane) {
                        if (cubeDistance <= PROXIMITY_THRESHOLD) {
                            const progress = 1 - (cubeDistance / PROXIMITY_THRESHOLD)
                            material.opacity = Math.min(0.8, progress * 2)
                        } else {
                            material.opacity = 0
                        }
                    }
                } else if (child instanceof THREE.Group && child.userData.closeButton) {
                    const distance = Math.abs(cameraZ - child.position.z)
                    child.children.forEach((grandchild) => {
                        if (grandchild instanceof THREE.Mesh && !grandchild.userData.isCloseHitbox) {
                            const material = grandchild.material as THREE.MeshBasicMaterial
                            if (distance <= PROXIMITY_THRESHOLD) {
                                const progress = 1 - (distance / PROXIMITY_THRESHOLD)
                                material.opacity = Math.min(1, progress * 2)
                            } else {
                                material.opacity = 0
                            }
                        }
                    })
                }
            })
        })

        textMeshes.forEach((mesh) => {
            if (!frustum.intersectsObject(mesh)) return
            const textMaterial = mesh.material as THREE.MeshBasicMaterial
            const planeMesh = mesh.userData.backgroundPlane as THREE.Mesh
            const planeMaterial = planeMesh?.material as THREE.MeshBasicMaterial
            const meshZ = mesh.position.z
            const zDistance = Math.abs(cameraZ - meshZ + 120)
            if (zDistance <= PROXIMITY_THRESHOLD) {
                const progress = 1 - (zDistance / PROXIMITY_THRESHOLD)
                const opacity = Math.min(1.0, progress * 2)
                textMaterial.opacity = opacity
                if (planeMaterial) {
                    planeMaterial.opacity = opacity * 0.8
                }
            } else {
                textMaterial.opacity = 0.0
                if (planeMaterial) {
                    planeMaterial.opacity = 0.0
                }
            }
        })
    }

    // New exported function for clickHere particle system
    const updateClickHereParticles = (camera: THREE.PerspectiveCamera, delta: number) => {
        const currentTime = performance.now() / 1000
        const cameraZ = camera.position.z

        projectCubes.forEach(cube => {
            const cubeZ = cube.position.z
            const cubeDistance = Math.abs(cameraZ - cubeZ + 90)

            if (cubeDistance <= PROXIMITY_THRESHOLD && !isInPortalFocus) {
                const lastEmission = lastEmissionTimes.get(cube) || 0
                if (currentTime - lastEmission >= CLICK_HERE_RATE) {
                    const portal = cube.children.find(child =>
                        child instanceof THREE.LineSegments && child.userData.isPortal
                    ) as THREE.LineSegments
                    if (portal) {
                        createClickHereParticle(cube, portal)
                        lastEmissionTimes.set(cube, currentTime)
                    }
                }

                const particles = clickHereParticles.get(cube) || []
                const updatedParticles = particles.filter(particle => {
                    particle.distanceTraveled += CLICK_HERE_SPEED * delta
                    particle.mesh.position.copy(
                        particle.direction.clone().multiplyScalar(particle.distanceTraveled)
                    )

                    if (particle.distanceTraveled >= particle.totalDistance) {
                        cube.remove(particle.mesh)
                        particle.mesh.geometry.dispose()
                        particle.mesh.material.dispose()
                        return false
                    }
                    return true
                })
                clickHereParticles.set(cube, updatedParticles)
            } else {
                disposeParticles(cube)
            }
        })
    }

    const setupInteractivity = (
        camera: THREE.PerspectiveCamera,
        domElement: HTMLCanvasElement,
        onFocusChangeCallback: (isFocused: boolean, originalPosition?: THREE.Vector3, originalTarget?: THREE.Vector3) => void
    ) => {
        onPortalFocusChange = onFocusChangeCallback

        let touchStartY: number | null = null
        let lockedScrollY: number | null = null
        let activePortal: THREE.LineSegments | null = null
        let isTouching = false
        let isEnteringPortal = false
        let swipeCooldown = false
        let isCameraAnimating = false

        const onTouchStart = (event: TouchEvent) => {
            if (isInPortalFocus) {
                touchStartY = event.touches[0].clientY
                lockedScrollY = lockedScrollY ?? window.scrollY
                isTouching = true
            }
        }

        const onTouchMove = (event: TouchEvent) => {
            if (!isInPortalFocus || !activePortal || !touchStartY) return
            const touchY = event.touches[0].clientY
            const deltaY = touchY - touchStartY

            if (deltaY < -20 && !isEnteringPortal) {
                handleExitPortal()
                touchStartY = null
            } else if (deltaY > 20) {
                event.preventDefault()
                window.scrollTo(0, lockedScrollY!)
                gsap.to(window, { scrollTo: { y: lockedScrollY }, duration: 0 })
            }
        }

        const onTouchEnd = () => {
            touchStartY = null
            isTouching = false
            swipeCooldown = true
            gsap.delayedCall(0.5, () => { swipeCooldown = false })
        }

        const handleScroll = (event: WheelEvent | Event) => {
            if (isTouching || isEnteringPortal || swipeCooldown) {
                event.preventDefault()
                event.stopPropagation()
                if (lockedScrollY !== null) {
                    window.scrollTo(0, lockedScrollY)
                    gsap.to(window, { scrollTo: { y: lockedScrollY }, duration: 0 })
                }
                return
            }
            if (!isInPortalFocus || !activePortal || !originalCameraPosition || !originalCameraTarget) {
                return
            }

            let deltaY = 0
            if (event instanceof WheelEvent) {
                deltaY = event.deltaY
            } else {
                const currentScrollY = window.scrollY
                deltaY = currentScrollY - (lockedScrollY || 0)
            }

            event.preventDefault()
            event.stopPropagation()

            if (deltaY > 0) {
                window.scrollTo(0, lockedScrollY!)
                return
            }

            if (deltaY < 0) {
                handleExitPortal()
            }
        }

        const handleExitPortal = () => {
            const exitingPortal = activePortal
            const targetLookAt = originalCameraTarget ? originalCameraTarget.clone() : new THREE.Vector3(0, 0, MAX_Z)
            const originalZ = originalCameraPosition?.z ?? camera.position.z
            const cube = exitingPortal?.parent as THREE.Group

            isCameraAnimating = true
            gsap.to(camera.position, {
                x: originalCameraPosition?.x ?? camera.position.x,
                y: originalCameraPosition?.y ?? camera.position.y,
                z: originalZ,
                duration: 1,
                ease: 'power3.out',
                overwrite: 'auto',
                onUpdate: () => {
                    camera.lookAt(targetLookAt)
                },
                onComplete: () => {
                    camera.lookAt(targetLookAt)
                    isInPortalFocus = false
                    activePortal = null
                    document.body.classList.remove('no-scrollbar')
                    if (onPortalFocusChange) onPortalFocusChange(false)
                    if (exitingPortal) animateRings(exitingPortal, false)
                    if (cube?.userData.closeButton) {
                        const materials = cube.userData.closeButton.children
                            .filter(child => child instanceof THREE.Mesh)
                            .map(child => (child as THREE.Mesh).material)
                        gsap.to(materials, {
                            opacity: 0,
                            duration: 0.5,
                            onUpdate: () => {
                                cube.userData.closeButton.visible = false
                            },
                            onComplete: () => {
                                cube.userData.closeButton.updateMatrixWorld(true)

                                if (cube.userData.standaloneDebugPlane) {
                                    cube.userData.standaloneDebugPlane.visible = false
                                    cube.userData.standaloneDebugPlane.userData.locked = false
                                    cube.userData.standaloneDebugPlane.updateMatrixWorld(true)
                                    console.log('Standalone debug plane hidden on exit, position unchanged:', cube.userData.standaloneDebugPlane.getWorldPosition(new THREE.Vector3()))
                                }
                                cube.userData.lockedPosition = null
                            }
                        })
                    }
                    lockedScrollY = null
                    originalCameraPosition = null
                    originalCameraTarget = null
                    camera.userData.lockedLookAt = null
                    isCameraAnimating = false

                    // Restart clickHere particles for cubes within range
                    projectCubes.forEach(cube => {
                        if (Math.abs(camera.position.z - cube.position.z + 90) <= PROXIMITY_THRESHOLD) {
                            lastEmissionTimes.set(cube, 0)
                        }
                    })
                }
            })
        }

        const animateRings = (portal: THREE.LineSegments, expand: boolean = true) => {
            const rings = [portal, ...portal.children.filter(child => child instanceof THREE.LineSegments && child.userData.isPortal)] as THREE.LineSegments[]
            const targetSpacing = expand ? 25 : 2
            rings.forEach((ring, index) => {
                let targetZ = -index * targetSpacing
                if (portal.position.y > 0 && portal.rotation.x === -Math.PI / 2) {
                    targetZ = index * targetSpacing
                } else if (portal.position.y < 0 && portal.rotation.x === Math.PI / 2) {
                    targetZ = index * targetSpacing
                }
                const targetOpacity = expand ? ring.userData.maxOpacity : 0
                gsap.to(ring.position, {
                    z: targetZ,
                    duration: 1,
                    ease: 'power3.out',
                    delay: 0.5
                })
                gsap.to(ring.material, {
                    opacity: targetOpacity,
                    duration: 1,
                    ease: 'power3.out',
                    delay: 0.5
                })
            })
        }

        const onMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
            raycaster.setFromCamera(mouse, camera)

            if (camera.userData.lockedLookAt) {
                camera.lookAt(camera.userData.lockedLookAt)
                camera.updateMatrixWorld(true)
            }

            projectCubes.forEach(cube => {
                if (cube.userData.lockedPosition) {
                    const currentPos = cube.position
                    if (!currentPos.equals(cube.userData.lockedPosition)) {
                        cube.position.copy(cube.userData.lockedPosition)
                    }
                }
                cube.updateMatrixWorld(true)
                cube.children.forEach(child => child.updateMatrixWorld(true))
            })

            const hitboxes = projectCubes.flatMap(cube => {
                const children = []
                if (cube.userData.isActive) {
                    cube.children.forEach(child => {
                        if (child instanceof THREE.Mesh && child.userData.isPortalHitbox) {
                            children.push(child)
                        }
                    })
                }
                if (isInPortalFocus && activePortal && cube === activePortal.parent) {
                    cube.children.forEach(child => {
                        if (child instanceof THREE.Group && child === cube.userData.closeButton) {
                            child.children.forEach(grandchild => {
                                if (grandchild instanceof THREE.Mesh && grandchild.userData.isCloseHitbox) {
                                    children.push(grandchild)
                                }
                            })
                        }
                    })
                }
                return children
            }) as THREE.Mesh[]

            const intersects = raycaster.intersectObjects(hitboxes)

            const testRaycaster = new THREE.Raycaster()
            const testOrigin = new THREE.Vector3(0, 0, -1000)
            const testDirection = new THREE.Vector3(100.21107012893698, 70.33307489093076, -958)
                .sub(testOrigin)
                .normalize()
            testRaycaster.set(testOrigin, testDirection)

            if (intersects.length > 0) {
                const hitbox = intersects[0].object as THREE.Mesh
                if (hitbox.userData.isPortalHitbox) {
                    const newHoveredPortal = hitbox.userData.portal as THREE.LineSegments
                    if (hoveredPortal !== newHoveredPortal) {
                        if (hoveredPortal) {
                            const material = hoveredPortal.material as THREE.LineBasicMaterial
                            gsap.to(material.color, {
                                r: (CUBE_COLOR >> 16 & 255) / 255,
                                g: (CUBE_COLOR >> 8 & 255) / 255,
                                b: (CUBE_COLOR & 255) / 255,
                                duration: 0.5
                            })
                        }
                        hoveredPortal = newHoveredPortal
                        const material = hoveredPortal.material as THREE.LineBasicMaterial
                        gsap.to(material.color, {
                            r: (HOVER_COLOR >> 16 & 255) / 255,
                            g: (HOVER_COLOR >> 8 & 255) / 255,
                            b: (HOVER_COLOR & 255) / 255,
                            duration: 0.5
                        })
                    }
                    domElement.style.cursor = 'pointer'
                } else if (hitbox.userData.isCloseHitbox) {
                    domElement.style.cursor = 'pointer'
                } else {
                    domElement.style.cursor = 'auto'
                }
            } else {
                if (hoveredPortal) {
                    const material = hoveredPortal.material as THREE.LineBasicMaterial
                    gsap.to(material.color, {
                        r: (CUBE_COLOR >> 16 & 255) / 255,
                        g: (CUBE_COLOR >> 8 & 255) / 255,
                        b: (CUBE_COLOR & 255) / 255,
                        duration: 0.5
                    })
                    hoveredPortal = null
                }
                domElement.style.cursor = 'auto'
            }
        }

        const onClick = (event: MouseEvent) => {
            if (isCameraAnimating) {
                return
            }

            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
            raycaster.setFromCamera(mouse, camera)

            // Include close hitboxes only for the active portal's cube
            const closeHitboxes = projectCubes.flatMap(cube => {
                const children = []
                if (isInPortalFocus && activePortal && cube === activePortal.parent) {
                    cube.children.forEach(child => {
                        if (child instanceof THREE.Group && child === cube.userData.closeButton) {
                            child.children.forEach(grandchild => {
                                if (grandchild instanceof THREE.Mesh && grandchild.userData.isCloseHitbox) {
                                    children.push(grandchild)
                                }
                            })
                        }
                    })
                }
                return children
            }) as THREE.Mesh[]

            const portalHitboxes = projectCubes.flatMap(cube =>
                cube.userData.isActive ? cube.children.filter(child =>
                    child instanceof THREE.Mesh && child.userData.isPortalHitbox
                ) : []
            ) as THREE.Mesh[]

            let intersects = raycaster.intersectObjects(closeHitboxes)
            for (const intersect of intersects) {
                const clickedHitbox = intersect.object as THREE.Mesh
                if (clickedHitbox.userData.isCloseHitbox) {
                    handleExitPortal()
                    return
                }
            }

            intersects = raycaster.intersectObjects(portalHitboxes)
            if (intersects.length === 0) return

            const clickedHitbox = intersects[0].object as THREE.Mesh
            const clickedPortal = clickedHitbox.userData.portal as THREE.LineSegments
            const cube = clickedHitbox.parent as THREE.Group
            const cubeIndex = projectCubes.indexOf(cube)
            const project = projects[cubeIndex]

            if (isInPortalFocus && clickedPortal === activePortal) {
                const numRings = 25
                const ringSpacing = 25
                const travelDistance = numRings * ringSpacing + 50

                let portalDirection = new THREE.Vector3()
                const halfSize = config.CUBE_SIZE / 2

                if (clickedPortal.position.x === halfSize) portalDirection.set(-1, 0, 0)
                else if (clickedPortal.position.x === -halfSize) portalDirection.set(1, 0, 0)
                else if (clickedPortal.position.y === halfSize) portalDirection.set(0, -1, 0)
                else if (clickedPortal.position.y === -halfSize) portalDirection.set(0, 1, 0)

                portalDirection.applyQuaternion(cube.getWorldQuaternion(new THREE.Quaternion())).normalize()
                const startPosition = camera.position.clone()
                const endPosition = startPosition.clone().add(portalDirection.clone().multiplyScalar(-travelDistance))
                const lookAtOffset = portalDirection.clone().multiplyScalar(-1000)
                const lookAtTarget = endPosition.clone().add(lookAtOffset)

                isCameraAnimating = true
                gsap.to(camera.position, {
                    x: endPosition.x,
                    y: endPosition.y,
                    z: endPosition.z,
                    duration: 1,
                    ease: 'power2.in',
                    onUpdate: () => camera.lookAt(lookAtTarget),
                    onComplete: () => {
                        if (project?.slug) {
                            tunnelStore.setScrollPosition(window.scrollY)
                            router.visit(route('project.show', { project: project.slug }), { preserveScroll: false })
                        }
                        isCameraAnimating = false
                    }
                })
            } else if (!isInPortalFocus) {
                if (!originalCameraPosition) {
                    originalCameraPosition = camera.position.clone()
                    originalCameraTarget = new THREE.Vector3(0, 0, MAX_Z)
                }
                if (onPortalFocusChange) onFocusChangeCallback(true, originalCameraPosition, originalCameraTarget)

                const portalWorldPosition = clickedPortal.getWorldPosition(new THREE.Vector3())

                isEnteringPortal = true
                isCameraAnimating = true
                lockedScrollY = window.scrollY
                gsap.to(camera.position, {
                    x: 0,
                    y: 0,
                    z: cube.getWorldPosition(new THREE.Vector3()).z,
                    duration: 2,
                    ease: 'power3.out',
                    overwrite: 'all',
                    onStart: () => {
                        isInPortalFocus = true
                        activePortal = clickedPortal
                        document.body.classList.add('no-scrollbar')
                        animateRings(clickedPortal, true)
                        cube.userData.lockedPosition = cube.position.clone()
                        // Dispose of all clickHere particles when entering portal mode
                        disposeParticles(cube)
                    },
                    onComplete: () => {
                        if (cube.userData.closeButton) {
                            if (cube.userData.initialCloseGroupPosition) {
                                cube.userData.closeButton.position.copy(cube.userData.initialCloseGroupPosition)
                            }
                            cube.userData.closeButton.visible = true
                            cube.userData.closeButton.updateMatrixWorld(true)

                            cube.updateMatrixWorld(true)
                            cube.userData.closeButton.updateMatrixWorld(true)

                            const materials = cube.userData.closeButton.children
                                .filter(child => child instanceof THREE.Mesh && !child.userData.isCloseHitbox)
                                .map(child => (child as THREE.Mesh).material)

                            if (materials.length > 0) {
                                gsap.to(materials, {
                                    opacity: 1,
                                    duration: 0.5,
                                    onComplete: () => {
                                        cube.userData.closeButton.updateMatrixWorld(true)
                                    }
                                })
                            }
                        } else {
                            console.warn('Close button not found in cube.userData')
                        }
                    }
                })
                gsap.to({}, {
                    duration: 2,
                    ease: 'power3.out',
                    overwrite: 'all',
                    onUpdate: function() {
                        const progress = this.progress()
                        const startLookAt = camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(1000).add(camera.position)
                        const lookAtX = THREE.MathUtils.lerp(startLookAt.x, portalWorldPosition.x, progress)
                        const lookAtY = THREE.MathUtils.lerp(startLookAt.y, portalWorldPosition.y, progress)
                        const lookAtZ = THREE.MathUtils.lerp(startLookAt.z, portalWorldPosition.z, progress)
                        camera.lookAt(lookAtX, lookAtY, lookAtZ)
                    },
                    onComplete: () => {
                        camera.lookAt(portalWorldPosition.x, portalWorldPosition.y, portalWorldPosition.z)
                        camera.updateMatrixWorld(true)
                        isEnteringPortal = false
                        isCameraAnimating = false
                        camera.userData.lockedLookAt = portalWorldPosition.clone()
                    }
                })
            }
        }

        domElement.addEventListener('mousemove', onMouseMove)
        domElement.addEventListener('click', onClick)
        domElement.addEventListener('touchstart', onTouchStart, { passive: true })
        domElement.addEventListener('touchmove', onTouchMove, { passive: false })
        domElement.addEventListener('touchend', onTouchEnd, { passive: true })
        window.addEventListener('wheel', handleScroll, { passive: false })
        window.addEventListener('scroll', handleScroll, { passive: false })

        // Cleanup function to dispose of particles when component unmounts
        const cleanup = () => {
            clickHereParticles.forEach((particles, cube) => {
                particles.forEach(particle => {
                    cube.remove(particle.mesh)
                    particle.mesh.geometry.dispose()
                    particle.mesh.material.dispose()
                })
            })
            clickHereParticles.clear()
            lastEmissionTimes.clear()
            particleCounters.clear()
        }

        const originalCleanup = () => {
            domElement.removeEventListener('mousemove', onMouseMove)
            domElement.removeEventListener('click', onClick)
            domElement.removeEventListener('touchstart', onTouchStart)
            domElement.removeEventListener('touchmove', onTouchMove)
            domElement.removeEventListener('touchend', onTouchEnd)
            window.removeEventListener('wheel', handleScroll)
            window.removeEventListener('scroll', handleScroll)
        }

        return () => {
            originalCleanup()
            cleanup()
        }
    }

    return { getInitializedData, updateCubeColors, setupInteractivity, updateClickHereParticles }
}
