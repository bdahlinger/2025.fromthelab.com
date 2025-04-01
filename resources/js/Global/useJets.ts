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
    const JET_SPEED = 1200
    const START_Y = 400
    const START_Z = -1000
    const FOV = 75
    const SPACING_MULTIPLIER = 3

    let jets: THREE.Group[] = []
    let flames: THREE.LineSegments[] = []
    let isInitialized = false
    let disposeJets: (() => void) | null = null

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
                    resolve(model)
                },
                (progress) => {
                    console.log(`Jet loading progress: ${(progress.loaded / progress.total * 100).toFixed(2)}%`)
                },
                (error) => {
                    console.error('Failed to load jet model:', error)
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
            depthTest: false
        })
        const wireframe = new THREE.LineSegments(wireframeGeo, wireframeMaterial)
        wireframe.frustumCulled = false
        wireframe.name = 'flame'
        wireframe.position.set(0, -17.5, 45)
        wireframe.rotation.x = Math.PI / 2
        return wireframe
    }

    const calculateStartingPositions = () => {
        const positions: THREE.Vector3[] = []
        const aspect = window.innerWidth / window.innerHeight
        const fovRad = THREE.MathUtils.degToRad(FOV)
        const visibleWidth = 2 * Math.tan(fovRad / 2) * (START_Y - START_Z) // Adjust for z=-1000
        const spacing = (visibleWidth / (NUM_JETS - 1)) * SPACING_MULTIPLIER

        const halfWidth = (spacing * (NUM_JETS - 1)) / 2
        for (let i = 0; i < NUM_JETS; i++) {
            const x = -halfWidth + i * spacing
            positions.push(new THREE.Vector3(x, START_Y, START_Z))
        }
        return positions
    }

    const animateJets = (jet: THREE.Group, flame: THREE.LineSegments, startPos: THREE.Vector3) => {
        jet.position.copy(startPos)
        jet.visible = true

        const distance = Math.abs(MAX_Z - startPos.z)
        const duration = distance / JET_SPEED

        gsap.to(jet.position, {
            z: MAX_Z,
            duration: duration,
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
        if (!settings.showJets) {
            console.log('Jets are disabled in settings.')
            return
        }

        try {
            const jetTemplate = await loadJetModel()
            const startingPositions = calculateStartingPositions()

            for (let i = 0; i < NUM_JETS; i++) {
                const jet = jetTemplate.clone()
                const flame = createFlameModel()

                jet.add(flame)
                jet.position.copy(startingPositions[i])
                jet.visible = false
                scene.add(jet)
                jets.push(jet)
                flames.push(flame)
            }

            isInitialized = true
        } catch (error) {
            console.error('Jets initialization failed:', error)
            jets = []
            flames = []
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
                    jets.forEach((jet, i) => {
                        animateJets(jet, flames[i], positions[i])
                    })
                }
            })
        }

        const totalAssets = 1
        let loadedAssets = 0

        const updateProgress = () => {
            loadedAssets++
            const assetProgress = (loadedAssets / totalAssets) * 100
            projectStore.setLoadingProgress(assetProgress, 'jets')
        }

        await initializeJets()
        updateProgress()

        disposeJets = () => {
            jets.forEach((jet) => {
                scene.remove(jet)
                disposeObject(jet)
            })
            jets = []
            flames = []
        }

        return {
            jets,
            flames,
            dispose: disposeJets,
            startJetAnimation: () => {
                const positions = calculateStartingPositions()
                jets.forEach((jet, i) => {
                    animateJets(jet, flames[i], positions[i])
                })
            }
        }
    }

    return { getInitializedData }
}
