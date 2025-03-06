import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

export function useProjectCubes(
    sceneNoGlow: THREE.Scene,
    sceneGlow: THREE.Scene,
    config: { CUBE_SIZE: number; CUBE_SPACING: number; FIRST_CUBE_Z: number },
    projects: { title: string; size: number; keyart?: string; keyartLocation?: 'left' | 'top' | 'right' | 'bottom' }[]
) {
    const { CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z } = config;

    const CUBE_COLOR = 0x00ffff
    const CUBE_COLOR_ACTIVE = 0xff00ff
    const ROTATION_INCREMENT = THREE.MathUtils.degToRad(15)
    const PROXIMITY_THRESHOLD = 1000

    let projectCubes: THREE.Group[] = []
    let fontLoader: FontLoader | null = null
    let loadedFont: THREE.Font | null = null
    let isInitialized = false;

    const createProjectCube = (
        size: number,
        zPosition: number,
        rotation: number,
        keyart?: string,
        keyartLocation?: 'left' | 'top' | 'right' | 'bottom'
    ): THREE.Group => {
        const geometry = new THREE.BoxGeometry(size, size, size)
        const edges = new THREE.EdgesGeometry(geometry)
        const material = new THREE.LineBasicMaterial({
            color: new THREE.Color(CUBE_COLOR),
            transparent: true,
            opacity: 0
        })
        const cube = new THREE.LineSegments(edges, material)
        const group = new THREE.Group()
        group.add(cube)
        group.position.z = zPosition
        group.rotation.z = rotation

        const halfSize = size / 2
        let portalLocation: 'left' | 'top' | 'right' | 'bottom' = 'right'

        // Add portal (RingGeometry)
        const addPortal = () => {
            const portalGeometry = new THREE.RingGeometry(25, 40, 24, 2)
            const portalEdges = new THREE.EdgesGeometry(portalGeometry)
            const portalMaterial = new THREE.LineBasicMaterial({
                color: new THREE.Color(CUBE_COLOR),
                transparent: true,
                opacity: 0
            })
            const portal = new THREE.LineSegments(portalEdges, portalMaterial)
            switch (portalLocation) {
                case 'left':
                    portal.position.set(-halfSize, 0, 0)
                    portal.rotation.y = Math.PI / 2
                    break;
                case 'top':
                    portal.position.set(0, halfSize, 0)
                    portal.rotation.x = -Math.PI / 2
                    break;
                case 'right':
                    portal.position.set(halfSize, 0, 0)
                    portal.rotation.y = -Math.PI / 2
                    break;
                case 'bottom':
                    portal.position.set(0, -halfSize, 0)
                    portal.rotation.x = Math.PI / 2
                    break;
            }
            group.add(portal)
        }

        if (keyart) {
            const textureLoader = new THREE.TextureLoader()
            textureLoader.load(keyart, (texture) => {
                const planeGeometry = new THREE.PlaneGeometry(size - 1, size - 1)
                const planeMaterial = new THREE.MeshBasicMaterial({
                    map: texture,
                    transparent: true,
                    opacity: 0,
                    blending: THREE.AdditiveBlending,
                    side: THREE.DoubleSide
                })
                const plane = new THREE.Mesh(planeGeometry, planeMaterial)
                switch (keyartLocation || 'left') {
                    case 'left':
                        plane.position.set(-halfSize, 0, 0)
                        plane.rotation.y = Math.PI / 2
                        portalLocation = 'right'
                        break;
                    case 'top':
                        plane.position.set(0, halfSize, 0)
                        plane.rotation.x = -Math.PI / 2
                        portalLocation = 'bottom'
                        break;
                    case 'right':
                        plane.position.set(halfSize, 0, 0)
                        plane.rotation.y = -Math.PI / 2
                        portalLocation = 'left'
                        break;
                    case 'bottom':
                        plane.position.set(0, -halfSize, 0)
                        plane.rotation.x = Math.PI / 2
                        portalLocation = 'top'
                        break;
                }
                group.add(plane)
                addPortal() // Add portal after setting portalLocation
            }, undefined, (error) => {
                console.error('Error loading keyart texture:', error)
                addPortal() // Add portal even if texture fails, with updated portalLocation
            })
        } else {
            addPortal() // Default to 'right' when no keyart
        }

        return group
    }

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
        sceneNoGlow.add(textMesh)
        return textMesh
    }

    const loadFontAndText = (): Promise<void> => {
        return new Promise((resolve) => {
            fontLoader = new FontLoader()
            fontLoader.load(
                '/fonts/Poppins_Regular.json',
                (font) => {
                    loadedFont = font
                    projects.forEach((project, index) => {
                        const zPosition = FIRST_CUBE_Z - (index + 1) * CUBE_SPACING
                        const rotation = (index + 1) * ROTATION_INCREMENT
                        const cube = createProjectCube(CUBE_SIZE, zPosition, rotation, project.keyart, project.keyartLocation)
                        sceneNoGlow.add(cube)
                        projectCubes.push(cube)
                        createTextObject(project.title, 0, project.size + 15, zPosition, project.size, font)
                    })
                    resolve()
                },
                undefined,
                (error) => console.error('Error loading font:', error)
            )
        })
    }

    const getInitializedData = (): Promise<{ projectCubes: THREE.Group[]; updateCubeColors: (camera: THREE.PerspectiveCamera) => void; loadedFont: THREE.Font }> => {
        if (isInitialized) {
            return Promise.resolve({ projectCubes, updateCubeColors, loadedFont: loadedFont as THREE.Font });
        }
        return loadFontAndText().then(() => {
            isInitialized = true;
            return { projectCubes, updateCubeColors, loadedFont: loadedFont as THREE.Font };
        });
    }

    const updateCubeColors = (camera: THREE.PerspectiveCamera) => {
        const cameraZ = camera.position.z
        let textMeshes: THREE.Mesh[] = []

        sceneNoGlow.traverse((object) => {
            if (object instanceof THREE.Mesh && object.geometry && object.geometry.type === 'TextGeometry') {
                textMeshes.push(object)
            }
        })

        projectCubes.forEach((cube) => {
            const cubeZ = cube.position.z
            const cubeDistance = Math.abs(cameraZ - cubeZ)
            let lineProgress = 0

            if (cubeDistance <= PROXIMITY_THRESHOLD) {
                lineProgress = 1 - (cubeDistance / PROXIMITY_THRESHOLD)
            }

            cube.children.forEach((child) => {
                if (child instanceof THREE.LineSegments) {
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
                } else if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial) {
                    const material = child.material as THREE.MeshBasicMaterial
                    if (cubeDistance <= PROXIMITY_THRESHOLD) {
                        const progress = 1 - (cubeDistance / PROXIMITY_THRESHOLD)
                        material.opacity = Math.min(0.8, progress * 2)
                    } else {
                        material.opacity = 0
                    }
                }
            })
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

    return { getInitializedData, updateCubeColors }
}
