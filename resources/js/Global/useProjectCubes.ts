import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { gsap } from 'gsap'

export function useProjectCubes(
    scene: THREE.Scene,
    config: { CUBE_SIZE: number; CUBE_SPACING: number; FIRST_CUBE_Z: number },
    projects: App.Data.ProjectData[]
) {
    const { CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z } = config;
    const MAX_Z = FIRST_CUBE_Z - (projects.length + 1) * CUBE_SPACING;

    const CUBE_COLOR = 0x00ffff
    const CUBE_COLOR_ACTIVE = 0xff00ff
    const HOVER_COLOR = 0xff0000
    const ROTATION_INCREMENT = THREE.MathUtils.degToRad(15)
    const PROXIMITY_THRESHOLD = 1000
    const ACTIVE_THRESHOLD = 0.5

    let projectCubes: THREE.Group[] = []
    let fontLoader: FontLoader | null = null
    let loadedFont: THREE.Font | null = null
    let isInitialized = false;
    let raycaster = new THREE.Raycaster()
    let mouse = new THREE.Vector2()
    let hoveredPortal: THREE.LineSegments | null = null
    let lastHoveredPortal: THREE.LineSegments | null = null
    let originalCameraPosition: THREE.Vector3 | null = null
    let originalCameraTarget: THREE.Vector3 | null = null
    let isInPortalFocus = false
    let onPortalFocusChange: ((isFocused: boolean, originalPosition?: THREE.Vector3, originalTarget?: THREE.Vector3) => void) | null = null
    let lastScrollY: number = window.scrollY
    let isReverting = false

    const createProjectCube = (
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
        group.add(cube)

        let portalLocation: 'left' | 'top' | 'right' | 'bottom' = 'right'

        const addPortal = () => {
            const portalGeometry = new THREE.RingGeometry(25, 40, 24, 2)
            const portalEdges = new THREE.EdgesGeometry(portalGeometry)
            const portalMaterial = new THREE.LineBasicMaterial({
                color: new THREE.Color(CUBE_COLOR),
                transparent: true,
                opacity: 0
            })
            const portal = new THREE.LineSegments(portalEdges, portalMaterial)

            const hitboxGeometry = new THREE.PlaneGeometry(120, 120)
            const hitboxMaterial = new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide })
            const hitbox = new THREE.Mesh(hitboxGeometry, hitboxMaterial)
            hitbox.userData.isPortalHitbox = true
            hitbox.userData.portal = portal

            const halfSize = size / 2
            switch (portalLocation) {
                case 'left':
                    portal.position.set(-halfSize, 0, 0)
                    portal.rotation.y = Math.PI / 2
                    hitbox.position.set(-halfSize, 0, 0)
                    hitbox.rotation.y = Math.PI / 2
                    break;
                case 'top':
                    portal.position.set(0, halfSize, 0)
                    portal.rotation.x = -Math.PI / 2
                    hitbox.position.set(0, halfSize, 0)
                    hitbox.rotation.x = -Math.PI / 2
                    break;
                case 'right':
                    portal.position.set(halfSize, 0, 0)
                    portal.rotation.y = -Math.PI / 2
                    hitbox.position.set(halfSize, 0, 0)
                    hitbox.rotation.y = -Math.PI / 2
                    break;
                case 'bottom':
                    portal.position.set(0, -halfSize, 0)
                    portal.rotation.x = Math.PI / 2
                    hitbox.position.set(0, -halfSize, 0)
                    hitbox.rotation.x = Math.PI / 2
                    break;
            }
            group.add(portal)
            group.add(hitbox)
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
                const location = (['left', 'top', 'right', 'bottom'] as const).includes(keyartLocation as any)
                    ? keyartLocation as 'left' | 'top' | 'right' | 'bottom'
                    : 'left'
                const halfSize = size / 2
                switch (location) {
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
                addPortal()
            }, undefined, (error) => {
                addPortal()
            })
        } else {
            addPortal()
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
                    const projectArray = Array.isArray(projects) ? projects : []
                    if (!Array.isArray(projects)) {
                        console.warn('useProjectCubes: projects is not an array, defaulting to empty array', projects)
                    }
                    projectArray.forEach((project, index) => {
                        const zPosition = FIRST_CUBE_Z - (index + 1) * CUBE_SPACING
                        const rotation = (index + 1) * ROTATION_INCREMENT
                        const cube = createProjectCube(CUBE_SIZE, zPosition, rotation, project.keyart, project.keyartLocation)
                        scene.add(cube)
                        projectCubes.push(cube)
                        // Align text Z with cube Z (remove + CUBE_SPACING / 4)
                        createTextObject(project.title, 0, project.size + 15, FIRST_CUBE_Z - (index + 1) * CUBE_SPACING, project.size, font)
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
            let lineProgress = 0

            if (cubeDistance <= PROXIMITY_THRESHOLD) {
                lineProgress = 1 - (cubeDistance / PROXIMITY_THRESHOLD)
            }

            cube.userData.isActive = lineProgress >= ACTIVE_THRESHOLD

            cube.children.forEach((child) => {
                if (child instanceof THREE.LineSegments && !child.userData.isPortalHitbox) {
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
                } else if (child instanceof THREE.LineSegments) {
                    const material = child.material as THREE.LineBasicMaterial
                    if (cubeDistance <= PROXIMITY_THRESHOLD) {
                        material.opacity = Math.min(1, lineProgress * 2)
                    } else {
                        material.opacity = 0
                    }
                } else if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial && !child.userData.isPortalHitbox) {
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
            if (zDistance <= PROXIMITY_THRESHOLD) {
                const progress = 1 - (zDistance / PROXIMITY_THRESHOLD)
                textMaterial.opacity = Math.min(1.0, progress * 2) // Sync with portal ring
            } else {
                textMaterial.opacity = 0.0
            }
        })
    }

    const setupInteractivity = (camera: THREE.PerspectiveCamera, domElement: HTMLCanvasElement, onFocusChangeCallback: (isFocused: boolean, originalPosition?: THREE.Vector3, originalTarget?: THREE.Vector3) => void) => {
        onPortalFocusChange = onFocusChangeCallback

        const onMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

            raycaster.setFromCamera(mouse, camera)

            const hitboxes: THREE.Mesh[] = []
            projectCubes.forEach((cube) => {
                if (cube.userData.isActive) {
                    cube.children.forEach((child) => {
                        if (child instanceof THREE.Mesh && child.userData.isPortalHitbox) {
                            hitboxes.push(child)
                        }
                    })
                }
            })

            const intersects = raycaster.intersectObjects(hitboxes)

            if (intersects.length > 0) {
                const newHoveredHitbox = intersects[0].object as THREE.Mesh
                const newHoveredPortal = newHoveredHitbox.userData.portal as THREE.LineSegments
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
            if (isInPortalFocus) return;

            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

            raycaster.setFromCamera(mouse, camera)

            const hitboxes: THREE.Mesh[] = []
            projectCubes.forEach((cube) => {
                if (cube.userData.isActive) {
                    cube.children.forEach((child) => {
                        if (child instanceof THREE.Mesh && child.userData.isPortalHitbox) {
                            hitboxes.push(child)
                        }
                    })
                }
            })

            const intersects = raycaster.intersectObjects(hitboxes)
            if (intersects.length > 0) {
                const clickedHitbox = intersects[0].object as THREE.Mesh
                const clickedPortal = clickedHitbox.userData.portal as THREE.LineSegments
                const cube = clickedHitbox.parent as THREE.Group

                if (!originalCameraPosition) {
                    originalCameraPosition = camera.position.clone()
                    originalCameraTarget = new THREE.Vector3(0, 0, MAX_Z)
                }

                const portalWorldPosition = clickedPortal.getWorldPosition(new THREE.Vector3())

                if (onPortalFocusChange) {
                    onPortalFocusChange(true, originalCameraPosition, originalCameraTarget)
                }

                const lookAtTarget = {
                    x: originalCameraTarget.x,
                    y: originalCameraTarget.y,
                    z: originalCameraTarget.z
                }
                gsap.to(lookAtTarget, {
                    x: portalWorldPosition.x,
                    y: portalWorldPosition.y,
                    z: portalWorldPosition.z,
                    duration: 1,
                    ease: 'power3.out',
                    onStart: () => {
                        isInPortalFocus = true
                    },
                    onUpdate: () => {
                        camera.lookAt(lookAtTarget.x, lookAtTarget.y, lookAtTarget.z)
                    }
                })

                const cubeWorldPosition = cube.getWorldPosition(new THREE.Vector3())
                const newCameraPosition = new THREE.Vector3(0, 0, cubeWorldPosition.z)
                gsap.to(camera.position, {
                    x: newCameraPosition.x,
                    y: newCameraPosition.y,
                    z: newCameraPosition.z,
                    duration: 1,
                    ease: 'power3.out'
                })
            }
        }

        const onWheel = (event: WheelEvent) => {
            if (isInPortalFocus && !isReverting && originalCameraPosition && originalCameraTarget) {
                event.preventDefault();
                event.stopPropagation();

                if (event.deltaY < 0) {
                    isReverting = true;
                    const targetToRestore = originalCameraTarget.clone();
                    const currentLookAt = new THREE.Vector3();
                    camera.getWorldDirection(currentLookAt);
                    currentLookAt.multiplyScalar(1000).add(camera.position);
                    const lookAtRestore = {
                        x: currentLookAt.x,
                        y: currentLookAt.y,
                        z: currentLookAt.z
                    };

                    gsap.to(camera.position, {
                        x: originalCameraPosition.x,
                        y: originalCameraPosition.y,
                        z: originalCameraPosition.z,
                        duration: 1,
                        ease: 'power3.out'
                    });

                    gsap.to(lookAtRestore, {
                        x: targetToRestore.x,
                        y: targetToRestore.y,
                        z: targetToRestore.z,
                        duration: 1,
                        ease: 'power3.out',
                        onUpdate: () => {
                            camera.lookAt(lookAtRestore.x, lookAtRestore.y, lookAtRestore.z);
                        },
                        onComplete: () => {
                            isInPortalFocus = false;
                            if (onPortalFocusChange) {
                                onPortalFocusChange(false);
                            }
                            originalCameraPosition = null;
                            originalCameraTarget = null;
                            isReverting = false;
                        }
                    });
                }
            }
        };

        const onScroll = () => {
            lastScrollY = window.scrollY;
        };

        domElement.addEventListener('mousemove', onMouseMove);
        domElement.addEventListener('click', onClick);
        domElement.addEventListener('wheel', onWheel, { passive: false });
        window.addEventListener('scroll', onScroll);

        return () => {
            domElement.removeEventListener('mousemove', onMouseMove);
            domElement.removeEventListener('click', onClick);
            domElement.removeEventListener('wheel', onWheel);
            window.removeEventListener('scroll', onScroll);
            domElement.style.cursor = 'auto';
        };
    };

    return { getInitializedData, updateCubeColors, setupInteractivity };
}
