// resources/js/Global/useJets.ts
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useProjectStore } from '@/Stores/projectStore'
import { gsap } from 'gsap'

export function useJets(
    scene: THREE.Scene,
    settings: { showJets: boolean }
) {
    const projectStore = useProjectStore()
    const NUM_JETS = 5
    const MAX_Z = -10000
    const JET_MODEL_PATH = '/3D/jet.obj'
    const UFO_MODEL_PATH = '/3D/ufo.obj'
    const JET_SPEED = 1200
    const START_Y = 500
    const START_Z = -500
    const FOV = 75
    const SPACING_MULTIPLIER = 2

    let jets: THREE.Group[] = []
    let flames: THREE.LineSegments[] = []
    let ufo: THREE.Group | null = null
    let isInitialized = false
    let disposeJets: (() => void) | null = null
    let jetTemplateBounds: THREE.Box3 | null = null
    let ufoTemplateBounds: THREE.Box3 | null = null

    const loadJetModel = (): Promise<THREE.Group> => {
        return new Promise((resolve, reject) => {
            const loader = new OBJLoader()
            loader.load(
                JET_MODEL_PATH,
                (obj) => {
                    const model = obj
                    model.name = 'jet'
                    const box = new THREE.Box3().setFromObject(model)
                    const center = box.getCenter(new THREE.Vector3())
                    model.position.sub(center)

                    model.traverse((child) => {
                        if (child instanceof THREE.Mesh) {
                            const edges = new THREE.EdgesGeometry(child.geometry, 1)
                            const wireframeMaterial = new THREE.LineBasicMaterial({
                                color: 0x00ff00,
                                depthTest: false,
                                fog: false
                            })
                            const wireframe = new THREE.LineSegments(edges, wireframeMaterial)
                            wireframe.frustumCulled = false
                            child.parent?.add(wireframe)
                            child.parent?.remove(child)
                        }
                    })
                    jetTemplateBounds = box
                    resolve(model)
                },
                undefined,
                (error) => {
                    console.error('Failed to load jet model:', error)
                    reject(error)
                }
            )
        })
    }

    const loadUfoModel = (): Promise<THREE.Group> => {
        return new Promise((resolve, reject) => {
            const loader = new OBJLoader()
            loader.load(
                UFO_MODEL_PATH,
                (obj) => {
                    const model = obj
                    model.name = 'ufo'

                    const box = new THREE.Box3().setFromObject(model)
                    const center = box.getCenter(new THREE.Vector3())
                    model.position.sub(center)

                    // Collect all meshes first
                    const meshes: THREE.Mesh[] = []
                    model.traverse((child) => {
                        if (child instanceof THREE.Mesh) {
                            meshes.push(child)
                        }
                    })

                    // Replace meshes with wireframes, applying color based on name
                    meshes.forEach((mesh) => {
                        const edges = new THREE.EdgesGeometry(mesh.geometry, 1)
                        const wireframeMaterial = new THREE.LineBasicMaterial({
                            color: (mesh.name === 'UFO_TOP_CAP' || mesh.name === 'UFO_BOT_CAP') ? 0xffffff : 0x0000ff,
                            depthTest: false,
                            fog: false
                        })
                        const wireframe = new THREE.LineSegments(edges, wireframeMaterial)
                        wireframe.frustumCulled = false
                        mesh.parent?.add(wireframe)
                        mesh.parent?.remove(mesh)
                    })

                    let wireframeCount = 0
                    model.traverse((child) => {
                        if (child instanceof THREE.LineSegments) {
                            wireframeCount++
                            // Log the color to verify
                            const material = child.material as THREE.LineBasicMaterial
                        }
                    })

                    ufoTemplateBounds = box
                    resolve(model)
                },
                undefined,
                (error) => {
                    console.error('Failed to load UFO model:', error)
                    reject(error)
                }
            )
        })
    }

    const createFlameModel = (): THREE.LineSegments => {
        const coneGeometry = new THREE.ConeGeometry(10, 90, 8)
        const wireframeGeo = new THREE.WireframeGeometry(coneGeometry)
        const wireframeMaterial = new THREE.LineBasicMaterial({
            color: 0xffffff,
            depthTest: false,
            fog: false
        })
        const wireframe = new THREE.LineSegments(wireframeGeo, wireframeMaterial)
        wireframe.frustumCulled = false
        wireframe.name = 'flame'

        if (jetTemplateBounds) {
            const jetHeight = jetTemplateBounds.max.y - jetTemplateBounds.min.y
            const tailZ = jetTemplateBounds.max.z
            const tailY = jetTemplateBounds.min.y + jetHeight / 2
            wireframe.position.set(0, tailY - 20, tailZ + 45)
        } else {
            wireframe.position.set(0, 0, 45)
        }
        wireframe.rotation.x = Math.PI / 2
        return wireframe
    }

    const calculateStartingPositions = () => {
        const positions: THREE.Vector3[] = []
        const aspect = window.innerWidth / window.innerHeight
        const fovRad = THREE.MathUtils.degToRad(FOV)
        const visibleWidth = 2 * Math.tan(fovRad / 2) * (START_Y - START_Z)
        const spacing = (visibleWidth / (NUM_JETS - 1)) * SPACING_MULTIPLIER

        const halfWidth = (spacing * (NUM_JETS - 1)) / 2
        for (let i = 0; i < NUM_JETS; i++) {
            const x = -halfWidth + i * spacing
            positions.push(new THREE.Vector3(x, START_Y, START_Z))
        }
        return positions
    }

    const calculateInitialRotations = () => {
        const rotations: number[] = []
        const minAngle = -80
        const maxAngle = 80
        const angleStep = (maxAngle - minAngle) / (NUM_JETS - 1)

        for (let i = 0; i < NUM_JETS; i++) {
            const angleDeg = minAngle + i * angleStep
            rotations.push(THREE.MathUtils.degToRad(angleDeg))
        }
        return rotations
    }

    const animateJets = (jet: THREE.Group, flame: THREE.LineSegments, startPos: THREE.Vector3, initialRotation: number) => {
        jet.position.copy(startPos)
        jet.rotation.z = initialRotation
        jet.visible = true

        const distance = Math.abs(MAX_Z - startPos.z)
        const totalDuration = distance / JET_SPEED
        const rotationDuration = totalDuration * 0.3

        gsap.to(jet.position, {
            z: MAX_Z,
            duration: totalDuration,
            ease: 'none',
            onComplete: () => {
                scene.remove(jet)
                disposeObject(jet)
                const jetIndex = jets.indexOf(jet)
                if (jetIndex > -1) {
                    jets.splice(jetIndex, 1)
                    flames.splice(jetIndex, 1)
                }
            }
        })

        gsap.to(jet.rotation, {
            z: 0,
            duration: rotationDuration,
            ease: 'none'
        })
    }

    const disposeObject = (object: THREE.Object3D) => {
        object.traverse((child) => {
            if (child instanceof THREE.Mesh || child instanceof THREE.LineSegments) {
                if (child.geometry) child.geometry.dispose()
                if (child.material) {
                    if (Array.isArray(child.material)) {
                        child.material.forEach((mat) => mat.dispose())
                    } else {
                        child.material.dispose()
                    }
                }
            }
        })
    }

    const initializeJets = async () => {
        if (!settings.showJets) return

        try {
            const jetTemplate = await loadJetModel()
            const ufoTemplate = await loadUfoModel()
            const startingPositions = calculateStartingPositions()
            const initialRotations = calculateInitialRotations()

            for (let i = 0; i < NUM_JETS; i++) {
                const jet = jetTemplate.clone()
                const flame = createFlameModel()

                jet.add(flame)
                jet.position.copy(startingPositions[i])
                jet.rotation.z = initialRotations[i]
                jet.visible = false
                scene.add(jet)
                jets.push(jet)
                flames.push(flame)
            }

            ufo = ufoTemplate.clone()
            ufo.position.set(-200, 50, -300) // Updated position
            ufo.visible = true
            scene.add(ufo)

            isInitialized = true
        } catch (error) {
            console.error('Jets and UFO initialization failed:', error)
            jets = []
            flames = []
            ufo = null
        }
    }

    const getInitializedData = async (): Promise<{
        jets: THREE.Group[]
        flames: THREE.LineSegments[]
        dispose: () => void
        startJetAnimation: () => void
    }> => {
        if (isInitialized) {
            return Promise.resolve({
                jets,
                flames,
                dispose: disposeJets || (() => {}),
                startJetAnimation: () => {
                    const positions = calculateStartingPositions()
                    const rotations = calculateInitialRotations()
                    jets.forEach((jet, i) => {
                        animateJets(jet, flames[i], positions[i], rotations[i])
                    })
                }
            })
        }

        const totalAssets = 2 // Jet + UFO
        let loadedAssets = 0

        const updateProgress = () => {
            loadedAssets++
            const assetProgress = (loadedAssets / totalAssets) * 100
            projectStore.setLoadingProgress(assetProgress, 'jets')
        }

        await initializeJets()
        updateProgress() // Single call for both jet and UFO

        disposeJets = () => {
            jets.forEach((jet) => {
                scene.remove(jet)
                disposeObject(jet)
            })
            if (ufo) {
                scene.remove(ufo)
                disposeObject(ufo)
                ufo = null
            }
            jets = []
            flames = []
        }

        return {
            jets,
            flames,
            dispose: disposeJets,
            startJetAnimation: () => {
                const positions = calculateStartingPositions()
                const rotations = calculateInitialRotations()
                jets.forEach((jet, i) => {
                    animateJets(jet, flames[i], positions[i], rotations[i])
                })
            }
        }
    }

    return { getInitializedData }
}
