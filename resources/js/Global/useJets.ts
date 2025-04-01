// resources/js/Global/useJets.ts
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useProjectStore } from '@/Stores/projectStore'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

export function useJets(
    scene: THREE.Scene,
    settings: { showJets: boolean },
    camera: THREE.PerspectiveCamera
) {
    const projectStore = useProjectStore()
    const NUM_JETS = 5
    const JET_MODEL_PATH = '/3D/jet.obj'
    const UFO_MODEL_PATH = '/3D/ufo.obj'
    const JET_SPEED = 1200
    const START_Y = 500
    const START_Z = -500
    const FOV = 75
    const SPACING_MULTIPLIER = 2
    const showDebugPath = false

    const SIM_BOUNDS = {
        xMin: -800,
        xMax: 800,
        yMin: 100,
        yMax: 800
    }

    const CUBE_NO_FLY_ZONE = {
        xMin: -250,
        xMax: 250,
        yMin: -250,
        yMax: 250
    }

    let jets: THREE.Group[] = []
    let flames: THREE.LineSegments[] = []
    let battleJet: THREE.Group | null = null
    let battleFlame: THREE.LineSegments | null = null
    let battleUfo: THREE.Group | null = null
    let debugPath: THREE.Line | null = null
    let bullets: THREE.Mesh[] = []
    let exhaustParticles: THREE.Mesh[] = []
    let isInitialized = false
    let disposeJets: (() => void) | null = null
    let jetTemplateBounds: THREE.Box3 | null = null
    let ufoTemplateBounds: THREE.Box3 | null = null
    let battleTimeline: gsap.core.Timeline | null = null
    let lastStartSide: number = 1
    let exhaustTimer = 0

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
                                depthTest: true,
                                fog: true
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
                (error) => reject(error)
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
                    const meshes: THREE.Mesh[] = []
                    model.traverse((child) => {
                        if (child instanceof THREE.Mesh) {
                            meshes.push(child)
                        }
                    })
                    meshes.forEach((mesh) => {
                        const edges = new THREE.EdgesGeometry(mesh.geometry, 1)
                        const wireframeMaterial = new THREE.LineBasicMaterial({
                            color: (mesh.name === 'UFO_TOP_CAP' || mesh.name === 'UFO_BOT_CAP') ? 0xffffff : 0x0000ff,
                            depthTest: true,
                            fog: true
                        })
                        const wireframe = new THREE.LineSegments(edges, wireframeMaterial)
                        wireframe.frustumCulled = false
                        mesh.parent?.add(wireframe)
                        mesh.parent?.remove(mesh)
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
            depthTest: true,
            fog: true
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

    const createBullet = (position: THREE.Vector3, direction: THREE.Vector3): THREE.Mesh => {
        const geometry = new THREE.OctahedronGeometry(3)
        const material = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            depthTest: true,
            fog: true
        })
        const bullet = new THREE.Mesh(geometry, material)
        bullet.position.copy(position)
        bullet.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), direction)
        bullet.frustumCulled = false
        return bullet
    }

    const createExhaustParticle = (position: THREE.Vector3): THREE.Mesh => {
        const geometry = new THREE.OctahedronGeometry(4)
        const material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.35,
            depthTest: true,
            fog: true
        })
        const particle = new THREE.Mesh(geometry, material)
        particle.position.copy(position)
        particle.frustumCulled = false
        return particle
    }

    const spawnExhaustParticle = (jet: THREE.Group) => {
        if (!jet || !jet.visible) return

        const jetPosition = jet.position.clone()
        const jetDirection = new THREE.Vector3(0, 0, -1).applyQuaternion(jet.quaternion)
        const jetUp = new THREE.Vector3(0, 1, 0).applyQuaternion(jet.quaternion)
        const tailOffset = jetTemplateBounds ? -(jetTemplateBounds.max.z + 45) : -65
        const exhaustPos = jetPosition.clone()
            .add(jetDirection.clone().multiplyScalar(tailOffset))
            .add(jetUp.clone().multiplyScalar(5))

        const particle = createExhaustParticle(exhaustPos)
        scene.add(particle)
        exhaustParticles.push(particle)

        gsap.to(particle.material, {
            opacity: 0,
            duration: 1, // Your tweak from 2 to 1
            ease: 'none',
            onComplete: () => {
                scene.remove(particle)
                particle.geometry.dispose()
                particle.material.dispose()
                const index = exhaustParticles.indexOf(particle)
                if (index > -1) exhaustParticles.splice(index, 1)
            }
        })
    }

    const fireBullets = () => {
        if (!battleJet || !battleJet.visible) return

        const numBullets = THREE.MathUtils.randInt(10, 30)
        const noseOffset = jetTemplateBounds ? jetTemplateBounds.max.z : 20

        for (let i = 0; i < numBullets; i++) {
            gsap.delayedCall(i * 0.05, () => {
                const jetPosition = battleJet.position.clone()
                const jetDirection = new THREE.Vector3(0, 0, -1).applyQuaternion(battleJet.quaternion)
                const jetUp = new THREE.Vector3(0, 1, 0).applyQuaternion(battleJet.quaternion)
                const bulletStart = jetPosition.clone()
                    .add(jetDirection.clone().multiplyScalar(noseOffset))
                    .add(jetUp.clone().multiplyScalar(5))
                const bullet = createBullet(bulletStart, jetDirection)
                scene.add(bullet)
                bullets.push(bullet)

                const bulletSpeed = 1200
                const distance = 3600
                const duration = distance / bulletSpeed

                gsap.to(bullet.position, {
                    x: `+=${jetDirection.x * distance}`,
                    y: `+=${jetDirection.y * distance}`,
                    z: `+=${jetDirection.z * distance}`,
                    duration: duration,
                    ease: 'none',
                    onComplete: () => {
                        scene.remove(bullet)
                        bullet.geometry.dispose()
                        bullet.material.dispose()
                        const index = bullets.indexOf(bullet)
                        if (index > -1) bullets.splice(index, 1)
                    }
                })
            })
        }
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

    const animateInitialJets = (jet: THREE.Group, flame: THREE.LineSegments, startPos: THREE.Vector3, initialRotation: number) => {
        jet.position.copy(startPos)
        jet.rotation.z = initialRotation
        jet.visible = true
        const distance = Math.abs(-10000 - startPos.z)
        const totalDuration = distance / JET_SPEED
        const rotationDuration = totalDuration * 0.3

        let jetExhaustTimer = 0
        const tickJetExhaust = (delta: number) => {
            jetExhaustTimer += delta
            if (jetExhaustTimer >= 1.0) { // Same interval as battleJet for consistency
                spawnExhaustParticle(jet)
                jetExhaustTimer -= 1.0
            }
        }
        gsap.ticker.add(tickJetExhaust)

        gsap.to(jet.position, {
            z: -10000,
            duration: totalDuration,
            ease: 'none',
            onComplete: () => {
                gsap.ticker.remove(tickJetExhaust)
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
                    } else if (child.material instanceof THREE.Material) {
                        child.material.dispose()
                    }
                }
            }
        })
    }

    const generateBattlePath = (): THREE.CatmullRomCurve3 => {
        const points: THREE.Vector3[] = []

        const zMin = camera.position.z - 250
        const zMax = zMin - 2000

        const fovRad = THREE.MathUtils.degToRad(camera.fov)
        const aspect = window.innerWidth / window.innerHeight
        const distanceToStart = Math.abs(camera.position.z - zMin)
        const distanceToEnd = Math.abs(camera.position.z - zMax)
        const startVisibleWidth = 2 * Math.tan(fovRad / 2) * distanceToStart * aspect
        const endVisibleWidth = 2 * Math.tan(fovRad / 2) * distanceToEnd * aspect
        const offCameraXStart = (startVisibleWidth / 2) + 200
        const offCameraXEnd = (endVisibleWidth / 2) + 200

        const startSide = lastStartSide
        lastStartSide = -lastStartSide
        const startX = startSide * offCameraXStart
        const endX = -startSide * offCameraXEnd

        points.push(new THREE.Vector3(
            startX,
            THREE.MathUtils.randFloat(SIM_BOUNDS.yMin, SIM_BOUNDS.yMax),
            zMin
        ))

        let midX, midY, midZ
        do {
            midX = THREE.MathUtils.randFloat(SIM_BOUNDS.xMin / 2, SIM_BOUNDS.xMax / 2)
            midY = THREE.MathUtils.randFloat(SIM_BOUNDS.yMin, SIM_BOUNDS.yMax)
            midZ = THREE.MathUtils.randFloat(zMin, zMax)
        } while (
            midX > CUBE_NO_FLY_ZONE.xMin && midX < CUBE_NO_FLY_ZONE.xMax &&
            midY > CUBE_NO_FLY_ZONE.yMin && midY < CUBE_NO_FLY_ZONE.yMax
            )
        points.push(new THREE.Vector3(midX, midY, midZ))

        points.push(new THREE.Vector3(
            endX,
            THREE.MathUtils.randFloat(SIM_BOUNDS.yMin, SIM_BOUNDS.yMax),
            zMax
        ))

        const curve = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5)
        return curve
    }

    const createDebugPath = (curve: THREE.CatmullRomCurve3) => {
        if (!showDebugPath) return
        if (debugPath) scene.remove(debugPath)
        const points = curve.getPoints(50)
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        const material = new THREE.LineBasicMaterial({ color: 0xff0000, depthTest: true, fog: true })
        debugPath = new THREE.Line(geometry, material)
        debugPath.frustumCulled = false
        scene.add(debugPath)
    }

    const startBattle = (jetTemplate: THREE.Group, ufoTemplate: THREE.Group) => {
        if (battleTimeline) {
            battleTimeline.kill()
            battleTimeline = null
        }

        const path = generateBattlePath()
        createDebugPath(path)
        const pathLength = path.getLength()
        const ufoSpeed = 450
        const battleDuration = pathLength / ufoSpeed
        const jetSpeedOffset = THREE.MathUtils.randFloat(-0.1, 0.1)
        const jetSpeed = ufoSpeed * (0.9 + jetSpeedOffset)
        const jetDelay = 450 / ufoSpeed

        if (!battleUfo) {
            battleUfo = ufoTemplate.clone()
            battleUfo.visible = false
            scene.add(battleUfo)
        }
        battleUfo.visible = true
        battleUfo.position.copy(path.getPointAt(0))
        battleUfo.rotation.set(0, 0, 0)

        if (!battleJet) {
            battleJet = jetTemplate.clone()
            battleFlame = createFlameModel()
            battleJet.add(battleFlame)
            battleJet.visible = false
            scene.add(battleJet)
        }
        battleJet.visible = true
        battleJet.position.copy(path.getPointAt(0))
        battleJet.rotation.set(0, 0, 0)

        const ufoProxy = {
            x: battleUfo.position.x,
            y: battleUfo.position.y,
            z: battleUfo.position.z,
            progress: 0
        }
        const jetProxy = {
            x: battleJet.position.x,
            y: battleJet.position.y,
            z: battleJet.position.z,
            progress: 0
        }
        const ufoHoverOffset = { x: 0, y: 0, z: 0 }

        battleTimeline = gsap.timeline({
            onComplete: () => {
                battleUfo!.visible = false
                battleJet!.visible = false
                bullets.forEach(bullet => {
                    scene.remove(bullet)
                    bullet.geometry.dispose()
                    bullet.material.dispose()
                })
                bullets = []
                exhaustParticles.forEach(particle => {
                    scene.remove(particle)
                    particle.geometry.dispose()
                    particle.material.dispose()
                })
                exhaustParticles = []
                gsap.ticker.remove(tickExhaust)
                exhaustTimer = 0
                gsap.delayedCall(1, startBattle, [jetTemplate, ufoTemplate])
            }
        })

        battleTimeline.to(ufoProxy, {
            motionPath: {
                path: path.getPoints(50),
                autoRotate: false
            },
            progress: 1,
            duration: battleDuration,
            ease: 'none',
            onUpdate: () => {
                const t = ufoProxy.progress
                if (t === undefined || t < 0 || t > 1) return
                const position = path.getPointAt(t)
                battleUfo!.position.set(
                    position.x + ufoHoverOffset.x,
                    position.y + ufoHoverOffset.y,
                    position.z + ufoHoverOffset.z
                )
            }
        }, 0)

        gsap.to(battleUfo!.rotation, {
            y: "+=6.2832",
            duration: 3,
            repeat: -1,
            ease: 'none'
        })

        const animateUfoHover = () => {
            if (!battleUfo || !battleUfo.visible) return
            gsap.to(ufoHoverOffset, {
                x: THREE.MathUtils.randFloat(-20, 20),
                y: THREE.MathUtils.randFloat(-20, 20),
                z: THREE.MathUtils.randFloat(-20, 20),
                duration: THREE.MathUtils.randFloat(0.8, 1.5),
                ease: 'sine.inOut',
                onComplete: animateUfoHover
            })
        }
        animateUfoHover()

        battleTimeline.to(jetProxy, {
            motionPath: {
                path: path.getPoints(50),
                autoRotate: false
            },
            progress: 1,
            duration: battleDuration * (ufoSpeed / jetSpeed),
            ease: 'none',
            onUpdate: () => {
                const t = jetProxy.progress
                if (t === undefined || t < 0 || t > 1) return
                const position = path.getPointAt(t)
                battleJet!.position.copy(position)
                const prevPos = path.getPointAt(Math.max(t - 0.01, 0))
                const currentPos = position
                const nextPos = path.getPointAt(Math.min(t + 0.01, 1))
                const direction = nextPos.clone().sub(currentPos).normalize()
                const prevDirection = currentPos.clone().sub(prevPos).normalize()
                battleJet!.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), direction)

                const cross = new THREE.Vector3().crossVectors(prevDirection, direction).normalize()
                const curvature = prevDirection.angleTo(direction) * 20
                const bankAngle = THREE.MathUtils.clamp(curvature, -Math.PI / 4, Math.PI / 4)
                battleJet!.rotateZ(cross.z > 0 ? bankAngle : -bankAngle)
            }
        }, jetDelay)

        gsap.to({}, {
            duration: 2,
            repeat: Math.floor(battleDuration / 2) - 1,
            onRepeat: fireBullets
        })

        const tickExhaust = (delta: number) => {
            exhaustTimer += delta
            if (exhaustTimer >= 32) {
                spawnExhaustParticle(battleJet!)
                exhaustTimer -= 32
            }
        }
        gsap.ticker.add(tickExhaust)
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
                startJetAnimation
            })
        }

        const totalAssets = 2
        let loadedAssets = 0

        const updateProgress = () => {
            loadedAssets++
            const assetProgress = (loadedAssets / totalAssets) * 100
            projectStore.setLoadingProgress(assetProgress, 'jets')
        }

        const jetTemplate = await loadJetModel().then((jet) => {
            updateProgress()
            return jet
        })
        const ufoTemplate = await loadUfoModel().then((ufo) => {
            updateProgress()
            return ufo
        })

        await initializeJets()

        disposeJets = () => {
            jets.forEach((jet) => {
                scene.remove(jet)
                disposeObject(jet)
            })
            if (battleJet) {
                scene.remove(battleJet)
                disposeObject(battleJet)
                battleJet = null
            }
            if (battleUfo) {
                scene.remove(battleUfo)
                disposeObject(battleUfo)
                battleUfo = null
            }
            if (debugPath) {
                scene.remove(debugPath)
                debugPath.geometry.dispose()
                debugPath.material.dispose()
                debugPath = null
            }
            bullets.forEach(bullet => {
                scene.remove(bullet)
                bullet.geometry.dispose()
                bullet.material.dispose()
            })
            bullets = []
            exhaustParticles.forEach(particle => {
                scene.remove(particle)
                particle.geometry.dispose()
                particle.material.dispose()
            })
            exhaustParticles = []
            jets = []
            flames = []
            if (battleTimeline) battleTimeline.kill()
        }

        const startJetAnimation = () => {
            const positions = calculateStartingPositions()
            const rotations = calculateInitialRotations()
            jets.forEach((jet, i) => {
                animateInitialJets(jet, flames[i], positions[i], rotations[i])
            })
            gsap.delayedCall(2, () => startBattle(jetTemplate, ufoTemplate))
        }

        return {
            jets,
            flames,
            dispose: disposeJets,
            startJetAnimation
        }
    }

    return { getInitializedData }
}
