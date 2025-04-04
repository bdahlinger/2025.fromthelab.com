// resources/js/Global/useJets.ts
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useProjectStore } from '@/Stores/projectStore'
import { useAudioStore } from '@/Stores/audioStore';

import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import { useAudioManager } from '@/Global/Tunnel/useAudioManager'

gsap.registerPlugin(MotionPathPlugin)

export function useJets(
    scene: THREE.Scene,
    settings: { showJets: boolean },
    camera: THREE.PerspectiveCamera,
    updateProgress: (count: number) => void
) {

    const projectStore = useProjectStore()
    const audioStore = useAudioStore();
    const { audioEnabled } = storeToRefs(audioStore)

    const audioManager = useAudioManager(updateProgress)

   // const audioContext = new (window.AudioContext || window.webkitAudioContext)()

    const NUM_JETS = 5
    const JET_MODEL_PATH = '/3D/jet.obj'
    const UFO_MODEL_PATH = '/3D/ufo.obj'
    const JET_SPEED = 1200
    const JET_SOUND_PATH = '/sounds/spaceship.mp3'
    const UFO_SOUND_PATH = '/sounds/ufo.mp3'
    const MINIGUN_SOUND_PATH = '/sounds/minigun.mp3'
    const MINIGUN_WIND_DOWN_SOUND_PATH = '/sounds/minigun-wind-down.mp3'
    const EXPLOSION_SOUND_PATH = '/sounds/explosion.mp3' // New: Explosion sound path
    const START_Y = 500
    const START_Z = -500
    const FOV = 75
    const SPACING_MULTIPLIER = 2
    const showDebugPath = false
    const MAX_SOUND_FADE_DISTANCE = 2500

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
    let ufoFragments: THREE.Mesh[] = []
    let isInitialized = false
    let disposeJets: (() => void) | null = null
    let jetTemplateBounds: THREE.Box3 | null = null
    let ufoTemplateBounds: THREE.Box3 | null = null
    let ufoTemplateGeometries: THREE.BufferGeometry[] = []
    let battleTimeline: gsap.core.Timeline | null = null
    let lastStartSide: number = 1
    let exhaustTimer = 0
    let ufoDestroyed = false

    const maxVolumes = {
        initialJet: 1.0,
        battleJet: 0.6,
        battleUfo: 0.2,
        minigun: 0.2,
        minigunWindDown: 0.2,
        explosion: 1.0
    } as const

    const initializeAudio = async () => {
        await audioManager.registerAudio('initialJet', JET_SOUND_PATH, {
            maxVolume: maxVolumes.initialJet,
            updatePosition: (source, cam) => {
                const obj = jets[2] || battleJet
                if (!obj || !obj.visible) return { pan: 0, gain: 0 }
                const pan = THREE.MathUtils.clamp((obj.position.x / 500) * 2, -1, 1)
                const zDistance = Math.abs(cam.position.z - obj.position.z)
                const distanceFactor = THREE.MathUtils.clamp(1 - (zDistance / MAX_SOUND_FADE_DISTANCE), 0, 1)
                return { pan, gain: distanceFactor }
            }
        })
        await audioManager.registerAudio('battleJet', JET_SOUND_PATH, {
            maxVolume: maxVolumes.battleJet,
            updatePosition: (source, cam) => {
                if (!battleJet || !battleJet.visible) return { pan: 0, gain: 0 }
                const pan = THREE.MathUtils.clamp((battleJet.position.x / 500) * 2, -1, 1)
                const zDistance = Math.abs(cam.position.z - battleJet.position.z)
                const distanceFactor = THREE.MathUtils.clamp(1 - (zDistance / MAX_SOUND_FADE_DISTANCE), 0, 1)
                return { pan, gain: distanceFactor }
            }
        })
        await audioManager.registerAudio('battleUfo', UFO_SOUND_PATH, {
            maxVolume: maxVolumes.battleUfo,
            updatePosition: (source, cam) => {
                if (!battleUfo || !battleUfo.visible) return { pan: 0, gain: 0 }
                const pan = THREE.MathUtils.clamp((battleUfo.position.x / 500) * 2, -1, 1)
                const zDistance = Math.abs(cam.position.z - battleUfo.position.z)
                const distanceFactor = THREE.MathUtils.clamp(1 - (zDistance / MAX_SOUND_FADE_DISTANCE), 0, 1)
                return { pan, gain: distanceFactor }
            }
        })
        await audioManager.registerAudio('minigun', MINIGUN_SOUND_PATH, {
            loop: true,
            maxVolume: maxVolumes.minigun,
            updatePosition: (source, cam) => {
                if (!battleJet || !battleJet.visible) return { pan: 0, gain: 0 }
                const pan = THREE.MathUtils.clamp((battleJet.position.x / 500) * 2, -1, 1)
                const zDistance = Math.abs(cam.position.z - battleJet.position.z)
                const distanceFactor = THREE.MathUtils.clamp(1 - (zDistance / MAX_SOUND_FADE_DISTANCE), 0, 1)
                return { pan, gain: distanceFactor }
            }
        })
        await audioManager.registerAudio('minigunWindDown', MINIGUN_WIND_DOWN_SOUND_PATH, {
            maxVolume: maxVolumes.minigunWindDown,
            updatePosition: (source, cam) => {
                if (!battleJet || !battleJet.visible) return { pan: 0, gain: 0 }
                const pan = THREE.MathUtils.clamp((battleJet.position.x / 500) * 2, -1, 1)
                const zDistance = Math.abs(cam.position.z - battleJet.position.z)
                const distanceFactor = THREE.MathUtils.clamp(1 - (zDistance / MAX_SOUND_FADE_DISTANCE), 0, 1)
                return { pan, gain: distanceFactor }
            }
        })
        await audioManager.registerAudio('explosion', EXPLOSION_SOUND_PATH, {
            maxVolume: maxVolumes.explosion,
            updatePosition: (source, cam) => {
                if (!battleUfo || !battleUfo.visible) return { pan: 0, gain: 0 }
                const pan = THREE.MathUtils.clamp((battleUfo.position.x / 500) * 2, -1, 1)
                const zDistance = Math.abs(cam.position.z - battleUfo.position.z)
                const distanceFactor = THREE.MathUtils.clamp(1 - (zDistance / MAX_SOUND_FADE_DISTANCE), 0, 1)
                return { pan, gain: distanceFactor }
            }
        })
    }

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
                            child.geometry.computeBoundingSphere()
                            ufoTemplateGeometries.push(child.geometry.clone())
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
                    model.geometry = new THREE.BufferGeometry()
                    model.geometry.boundingSphere = new THREE.Sphere()
                    box.getBoundingSphere(model.geometry.boundingSphere)
                    model.geometry.boundingSphere.radius *= 10
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
            duration: 1,
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
        bullet.geometry.computeBoundingSphere()
        bullet.geometry.boundingSphere.radius *= 5
        return bullet
    }

    const explodeUfo = () => {
        if (!battleUfo || !battleUfo.visible || ufoFragments.length > 0) return

        battleUfo.visible = false
        stopAudio('battleUfo')
        if (audioEnabled.value) {
            startAudio('explosion', battleUfo)
            audioManager.updatePositionalAudio('explosion', camera)
        }

        const explosionCenter = battleUfo.position.clone()
        const fragmentMaterial = new THREE.MeshBasicMaterial({
            color: 0xffa500,
            side: THREE.DoubleSide,
            transparent: true,
            depthTest: true,
            fog: true
        })

        ufoTemplateGeometries.forEach((geometry) => {
            const positionAttribute = geometry.getAttribute('position')
            const indexAttribute = geometry.index
            const indices = indexAttribute ? indexAttribute.array : null
            const vertexCount = positionAttribute.count
            const faceCount = indices ? indices.length / 3 : vertexCount / 3

            for (let i = 0; i < faceCount; i++) {
                const faceGeometry = new THREE.BufferGeometry()
                const vertices = new Float32Array(9)
                const faceIndices = indices ? [indices[i * 3], indices[i * 3 + 1], indices[i * 3 + 2]] : [i * 3, i * 3 + 1, i * 3 + 2]

                for (let j = 0; j < 3; j++) {
                    const vertexIndex = faceIndices[j]
                    vertices[j * 3] = positionAttribute.array[vertexIndex * 3]
                    vertices[j * 3 + 1] = positionAttribute.array[vertexIndex * 3 + 1]
                    vertices[j * 3 + 2] = positionAttribute.array[vertexIndex * 3 + 2]
                }

                faceGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
                faceGeometry.computeVertexNormals()

                const fragment = new THREE.Mesh(faceGeometry, fragmentMaterial.clone())
                fragment.position.copy(explosionCenter)
                scene.add(fragment)
                ufoFragments.push(fragment)

                const centroid = new THREE.Vector3(
                    (vertices[0] + vertices[3] + vertices[6]) / 3,
                    (vertices[1] + vertices[4] + vertices[7]) / 3,
                    (vertices[2] + vertices[5] + vertices[8]) / 3
                ).add(explosionCenter)

                const direction = centroid.clone().sub(explosionCenter).normalize()
                const distance = THREE.MathUtils.randFloat(100, 200)

                gsap.to(fragment.position, {
                    x: explosionCenter.x + direction.x * distance,
                    y: explosionCenter.y + direction.y * distance,
                    z: explosionCenter.z + direction.z * distance,
                    duration: 1.5,
                    ease: 'power2.out',
                    onComplete: () => {
                        scene.remove(fragment)
                        fragment.geometry.dispose()
                        fragment.material.dispose()
                        const index = ufoFragments.indexOf(fragment)
                        if (index > -1) ufoFragments.splice(index, 1)
                    }
                })

                gsap.to(fragment.scale, {
                    x: 1.5,
                    y: 1.5,
                    z: 1.5,
                    duration: 0.5,
                    ease: 'power1.in',
                    yoyo: true,
                    repeat: 1
                })

                gsap.to(fragment.material, {
                    opacity: 0,
                    duration: 1.5,
                    ease: 'power2.out'
                })
            }
        })

        if (audioEnabled.value) {
            startAudio('explosion', battleUfo)
            gsap.delayedCall(0.8, () => stopAudio('explosion'))
        }
    }

    const fireBullets = () => {
        if (!battleJet || !battleJet.visible || ufoDestroyed) return

        const numBullets = THREE.MathUtils.randInt(10, 30)
        const noseOffset = jetTemplateBounds ? jetTemplateBounds.max.z : 20
        let hasFiredFirstBullet = false

        const frustum = new THREE.Frustum()
        const padding = 0.2

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

                if (!hasFiredFirstBullet && audioEnabled.value) {
                    startAudio('minigun', battleJet)
                    hasFiredFirstBullet = true
                }

                const bulletSpeed = 1200
                const distance = 3600
                const duration = distance / bulletSpeed

                gsap.to(bullet.position, {
                    x: `+=${jetDirection.x * distance}`,
                    y: `+=${jetDirection.y * distance}`,
                    z: `+=${jetDirection.z * distance}`,
                    duration: duration,
                    ease: 'none',
                    onUpdate: () => {
                        if (bullet.geometry.boundingSphere) {
                            bullet.geometry.boundingSphere.center.copy(bullet.position)
                        }
                        if (audioEnabled.value && hasFiredFirstBullet) {
                            audioManager.updatePositionalAudio('minigun', camera)
                        }
                        if (!ufoDestroyed && battleUfo && battleUfo.visible && bullet.geometry.boundingSphere && battleUfo.geometry?.boundingSphere) {
                            camera.updateMatrixWorld()
                            frustum.setFromProjectionMatrix(
                                new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse)
                            )

                            const jetInView = frustum.containsPoint(battleJet.position)
                            const ufoInView = frustum.containsPoint(battleUfo.position)
                            const paddingCheck = (point: THREE.Vector3) => {
                                const screenPos = point.clone().project(camera)
                                return Math.abs(screenPos.x) < 1 - padding && Math.abs(screenPos.y) < 1 - padding
                            }
                            const jetVisible = jetInView && paddingCheck(battleJet.position)
                            const ufoVisible = ufoInView && paddingCheck(battleUfo.position)

                            if (jetVisible && ufoVisible) {
                                battleUfo.updateMatrixWorld()
                                const ufoSphere = battleUfo.geometry.boundingSphere.clone()
                                ufoSphere.applyMatrix4(battleUfo.matrixWorld)
                                const bulletSphere = bullet.geometry.boundingSphere.clone()
                                bulletSphere.applyMatrix4(bullet.matrixWorld)
                                if (bulletSphere.intersectsSphere(ufoSphere)) {
                                    ufoDestroyed = true
                                    explodeUfo()
                                }
                            }
                        }
                    },
                    onComplete: () => {
                        scene.remove(bullet)
                        bullet.geometry.dispose()
                        bullet.material.dispose()
                        const bulletIndex = bullets.indexOf(bullet)
                        if (bulletIndex > -1) bullets.splice(bulletIndex, 1)
                    }
                })

                if (i === numBullets - 1 && audioEnabled.value) {
                    stopAudio('minigun')
                    startAudio('minigunWindDown', battleJet)
                    audioManager.updatePositionalAudio('minigunWindDown', camera)
                    gsap.delayedCall(0.5, () => stopAudio('minigunWindDown'))
                }
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
        const isCenterJet = jets.indexOf(jet) === 2
        if (isCenterJet && audioEnabled.value) {
            startAudio('initialJet', jet)
        }
        jet.position.copy(startPos)
        jet.rotation.z = initialRotation
        jet.visible = true
        const distance = Math.abs(-10000 - startPos.z)
        const totalDuration = distance / JET_SPEED
        const rotationDuration = totalDuration * 0.3

        let jetExhaustTimer = 0
        const tickJetExhaust = (delta: number) => {
            jetExhaustTimer += delta
            if (jetExhaustTimer >= 1.0) {
                spawnExhaustParticle(jet)
                jetExhaustTimer -= 1.0
            }
        }
        gsap.ticker.add(tickJetExhaust)

        gsap.to(jet.position, {
            z: -10000,
            duration: totalDuration,
            ease: 'none',
            onUpdate: () => {
                if (isCenterJet && audioEnabled.value) {
                    audioManager.updatePositionalAudio('initialJet', camera)
                }
                /*if (isCenterJet && audioTracks.initialJet.panner && audioTracks.initialJet.gain && jet.visible && audioEnabled.value) {
                    const panValue = THREE.MathUtils.clamp((jet.position.x / 500) * 2, -1, 1)
                    audioTracks.initialJet.panner!.pan.value = panValue
                    const zDistance = Math.abs(camera.position.z - jet.position.z)
                    const fadeDistance = MAX_SOUND_FADE_DISTANCE + 1000 // 3500
                    const offset = 400 // Adjust this value
                    const adjustedDistance = Math.max(zDistance - offset, 0)
                    const distanceFactor = THREE.MathUtils.clamp(1 - (adjustedDistance / fadeDistance), 0, 1)
                    const newVolume = maxVolumes.initialJet * distanceFactor
                    audioTracks.initialJet.gain!.gain.value = newVolume
                }*/
            },
            onComplete: () => {
                gsap.ticker.remove(tickJetExhaust)
                if (isCenterJet) gsap.delayedCall(3, () => stopAudio('initialJet'))
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
        console.log('startBattle')
        if (battleTimeline) {
            battleTimeline.kill()
            battleTimeline = null
        }

        stopAudio('battleJet')
        stopAudio('battleUfo')
        stopAudio('explosion')

        const path = generateBattlePath()
        createDebugPath(path)
        const pathLength = path.getLength()
        const ufoSpeed = 450
        const battleDuration = pathLength / ufoSpeed
        const jetSpeedOffset = THREE.MathUtils.randFloat(-0.1, 0.1)
        const jetSpeed = ufoSpeed * (0.9 + jetSpeedOffset)
        const jetDelay = 450 / ufoSpeed

        if (!battleJet) {
            battleJet = jetTemplate.clone()
            battleFlame = createFlameModel()
            battleJet.add(battleFlame)
            scene.add(battleJet)
        }
        battleJet.visible = true
        battleJet.position.copy(path.getPointAt(0))
        battleJet.rotation.set(0, 0, 0)

        if (!battleUfo) {
            battleUfo = ufoTemplate.clone()
            if (!battleUfo.geometry || !battleUfo.geometry.boundingSphere) {
                const box = new THREE.Box3().setFromObject(battleUfo)
                battleUfo.geometry = new THREE.BufferGeometry()
                battleUfo.geometry.boundingSphere = new THREE.Sphere()
                box.getBoundingSphere(battleUfo.geometry.boundingSphere)
                battleUfo.geometry.boundingSphere.radius *= 10
            }
            battleUfo.visible = false
            scene.add(battleUfo)
        }
        battleUfo.visible = true
        battleUfo.position.copy(path.getPointAt(0))
        battleUfo.rotation.set(0, 0, 0)

        ufoDestroyed = false

        const ufoProxy = { x: battleUfo.position.x, y: battleUfo.position.y, z: battleUfo.position.z, progress: 0 }
        const ufoHoverOffset = { x: 0, y: 0, z: 0 }
        const jetProxy = { x: battleJet.position.x, y: battleJet.position.y, z: battleJet.position.z, progress: 0 }

        if (audioEnabled.value) {
            if (battleJet) startAudio('battleJet', battleJet)
            if (battleUfo) startAudio('battleUfo', battleUfo)
        }

        battleTimeline = gsap.timeline({
            onUpdate: () => {
                if (battleJet && audioEnabled.value) {
                    audioManager.updatePositionalAudio('battleJet', camera)
                }
                if (!ufoDestroyed && battleUfo && audioEnabled.value) {
                    audioManager.updatePositionalAudio('battleUfo', camera)
                }
            },
            onComplete: () => {
                battleUfo!.visible = false
                battleJet!.visible = false
                stopAudio('battleJet')
                stopAudio('battleUfo')
                stopAudio('explosion')
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
                ufoFragments.forEach(fragment => {
                    scene.remove(fragment)
                    fragment.geometry.dispose()
                    fragment.material.dispose()
                })
                ufoFragments = []
                gsap.ticker.remove(tickExhaust)
                exhaustTimer = 0
                gsap.delayedCall(1.5 + Math.random() * (3 - 1.5), startBattle, [jetTemplate, ufoTemplate])
            }
        })

        battleTimeline.to(ufoProxy, {
            motionPath: { path: path.getPoints(50), autoRotate: false },
            progress: 1,
            duration: battleDuration,
            ease: 'none',
            onUpdate: () => {
                if (ufoDestroyed) return
                const t = ufoProxy.progress
                if (t === undefined || t < 0 || t > 1) return
                const position = path.getPointAt(t)
                battleUfo!.position.set(position.x + ufoHoverOffset.x, position.y + ufoHoverOffset.y, position.z + ufoHoverOffset.z)
            }
        }, 0)

        gsap.to(battleUfo!.rotation, { y: "+=6.2832", duration: 3, repeat: -1, ease: 'none' })

        const animateUfoHover = () => {
            if (!battleUfo || !battleUfo.visible || ufoDestroyed) return
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
            motionPath: { path: path.getPoints(50), autoRotate: false },
            progress: 1,
            duration: battleDuration * (ufoSpeed / jetSpeed),
            ease: 'none',
            onStart: () => { battleJet!.visible = true },
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

        const minFiringEvents = 1
        const maxFiringEvents = 4
        const minGap = 3
        const firingCount = THREE.MathUtils.randInt(minFiringEvents, maxFiringEvents)
        const availableTime = battleDuration - (firingCount - 1) * minGap
        const firingTimes: number[] = []

        for (let i = 0; i < firingCount; i++) {
            if (i === 0) {
                firingTimes.push(THREE.MathUtils.randFloat(0, availableTime / firingCount))
            } else {
                const minTime = firingTimes[i - 1] + minGap
                const maxTime = minTime + (availableTime / firingCount)
                firingTimes.push(THREE.MathUtils.randFloat(minTime, Math.min(maxTime, battleDuration)))
            }
        }

        firingTimes.sort((a, b) => a - b)
        firingTimes.forEach(time => {
            gsap.delayedCall(time, fireBullets)
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

    const startAudio = (track: keyof typeof audioTracks, positionObj: THREE.Object3D) => {
        if (!audioEnabled.value) return
        audioManager.play(track, camera)
    };

    const stopAudio = (track: keyof typeof audioTracks) => {
        audioManager.stop(track);
    };

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

    watch(() => audioEnabled.value, (enabled) => {
        if (enabled && battleTimeline && battleTimeline.isActive()) {
            if (battleJet && battleJet.visible) {
                startAudio('battleJet', battleJet)
            }
            if (battleUfo && battleUfo.visible && !ufoDestroyed) {
                startAudio('battleUfo', battleUfo)
            }
        }
    })

    const getInitializedData = async () => {
        if (isInitialized) {
            return {
                jets,
                flames,
                dispose: disposeJets || (() => {}),
                startJetAnimation
            }
        }

        const jetTemplate = await loadJetModel().then((jet) => {
            updateProgress(1)
            return jet
        })
        const ufoTemplate = await loadUfoModel().then((ufo) => {
            updateProgress(1)
            return ufo
        })

        await initializeJets()

        await initializeAudio() // Registers sounds, progress handled by useAudioManager

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
            ufoFragments.forEach(fragment => {
                scene.remove(fragment)
                fragment.geometry.dispose()
                fragment.material.dispose()
            })
            ufoFragments = []
            ufoTemplateGeometries.forEach(geometry => geometry.dispose())
            ufoTemplateGeometries = []
            if (battleTimeline) battleTimeline.kill()

            audioManager.disposeAll()
        }

        const startJetAnimation = () => {
            const positions = calculateStartingPositions()
            const rotations = calculateInitialRotations()
            jets.forEach((jet, i) => {
                animateInitialJets(jet, flames[i], positions[i], rotations[i])
            })
            gsap.delayedCall(3, () => startBattle(jetTemplate, ufoTemplate))
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
