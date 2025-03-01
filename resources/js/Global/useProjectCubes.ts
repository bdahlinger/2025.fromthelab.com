import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

export function useProjectCubes(
    scene: THREE.Scene,
    config: { CUBE_SIZE: number; CUBE_SPACING: number; FIRST_CUBE_Z: number }
) {
    const { CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z } = config;
    const projects = [
        { title: "SUICIDE SQUAD: KILL THE JUSTICE LEAGUE", size: 9 },
        { title: "MORTAL KOMBAT 1", size: 9 },
        { title: "HARRY POTTER: HOGWARTS LEGACY", size: 9 },
        { title: "HARRY POTTER: QUIDDITCH CHAMPIONS", size: 9 },
        { title: "MULTIVERSUS", size: 9 },
        { title: "GOTHAM KNIGHTS", size: 9 },
        { title: "GAME OF THRONES: CONQUEST", size: 9 },
        { title: "MARVEL: STRIKE FORCE", size: 9 },
        { title: "LEAGUE OF LEGENDS: RIOT KING", size: 9 },
        { title: "LEAGUE OF LEGENDS: CONVERGENCE", size: 9 },
    ]

    const CUBE_COLOR = 0x00ffff
    const CUBE_COLOR_ACTIVE = 0xff00ff
    const ROTATION_INCREMENT = THREE.MathUtils.degToRad(15)
    const PROXIMITY_THRESHOLD = 1000

    let projectCubes: THREE.Group[] = [] // Reset on each call
    let fontLoader: FontLoader | null = null
    let loadedFont: THREE.Font | null = null
    let isInitialized = false; // Prevent re-initialization

    const createProjectCube = (size: number, zPosition: number, rotation: number): THREE.Group => {
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
        scene.add(textMesh)
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
                        const cube = createProjectCube(CUBE_SIZE, zPosition, rotation)
                        scene.add(cube)
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

        scene.traverse((object) => {
            if (object instanceof THREE.Mesh && object.geometry && object.geometry.type === 'TextGeometry') {
                textMeshes.push(object)
            }
        })

        projectCubes.forEach((cube) => {
            const cubeZ = cube.position.z
            const cubeDistance = Math.abs(cameraZ - cubeZ)
            cube.children.forEach((child) => {
                const material = (child as THREE.LineSegments).material as THREE.LineBasicMaterial
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
                    material.opacity = Math.min(1, progress * 2)
                } else {
                    material.opacity = 0
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
