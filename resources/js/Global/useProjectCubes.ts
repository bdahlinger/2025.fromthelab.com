import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { gsap } from 'gsap';

export function useProjectCubes(
    scene: THREE.Scene,
    config: { CUBE_SIZE: number; CUBE_SPACING: number; FIRST_CUBE_Z: number },
    projects: App.Data.ProjectData[],
    projectGridFile: string,
    projectGridFile2: string
) {
    const { CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z } = config;
    const MAX_Z = FIRST_CUBE_Z - (projects.length + 1) * CUBE_SPACING;

    const CUBE_COLOR = 0x00ffff;
    const CUBE_COLOR_ACTIVE = 0xff00ff;
    const HOVER_COLOR = 0xff0000;
    const ROTATION_INCREMENT = THREE.MathUtils.degToRad(15);
    const PROXIMITY_THRESHOLD = 1000;
    const ACTIVE_THRESHOLD = 0.5;
    const NUM_PULSES = 80;
    const PULSE_WIDTH = 1;
    const PULSE_HEIGHT = 15;
    const PULSE_OFFSET = 0.1;

    let projectCubes: THREE.Group[] = [];
    let fontLoader: FontLoader | null = null;
    let loadedFont: THREE.Font | null = null;
    let isInitialized = false;
    let sceneInitialized = false;
    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();
    let hoveredPortal: THREE.LineSegments | null = null;
    let lastHoveredPortal: THREE.LineSegments | null = null;
    let originalCameraPosition: THREE.Vector3 | null = null;
    let originalCameraTarget: THREE.Vector3 | null = null;
    let isInPortalFocus = false;
    let onPortalFocusChange: ((isFocused: boolean, originalPosition?: THREE.Vector3, originalTarget?: THREE.Vector3) => void) | null = null;
    let lastScrollY: number = window.scrollY;
    let isReverting = false;

    const createProjectCube = (
        size: number,
        zPosition: number,
        rotation: number,
        keyart: string | null,
        keyartLocation: string | null
    ): THREE.Group => {
        // ... (your original createProjectCube function remains unchanged)
        const group = new THREE.Group();
        group.position.z = zPosition;
        group.rotation.z = rotation;
        group.userData.isActive = false;

        const geometry = new THREE.BoxGeometry(size, size, size);
        const edges = new THREE.EdgesGeometry(geometry);
        const material = new THREE.LineBasicMaterial({
            color: new THREE.Color(CUBE_COLOR),
            transparent: true,
            opacity: 0
        });
        const cube = new THREE.LineSegments(edges, material);
        group.add(cube);

        let portalLocation: 'left' | 'top' | 'right' | 'bottom' = 'right';
        const halfSize = size / 2;

        if (keyart) {
            const location = (['left', 'top', 'right', 'bottom'] as const).includes(keyartLocation as any)
                ? keyartLocation as 'left' | 'top' | 'right' | 'bottom'
                : 'left';
            switch (location) {
                case 'left': portalLocation = 'right'; break;
                case 'top': portalLocation = 'bottom'; break;
                case 'right': portalLocation = 'left'; break;
                case 'bottom': portalLocation = 'top'; break;
            }
        }

        const addPortal = () => {
            const innerRadius = 25;
            const outerRadius = 40;
            const portalGeometry = new THREE.CircleGeometry(outerRadius, 24);
            const portalEdges = new THREE.EdgesGeometry(portalGeometry);
            const portalMaterial = new THREE.LineBasicMaterial({
                color: new THREE.Color(CUBE_COLOR),
                transparent: true,
                opacity: 0,
                visible: true
            });
            const portal = new THREE.LineSegments(portalEdges, portalMaterial);
            portal.userData.isPortal = true;
            portal.userData.isAnimating = false;

            const hitboxGeometry = new THREE.PlaneGeometry(120, 120);
            const hitboxMaterial = new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide });
            const hitbox = new THREE.Mesh(hitboxGeometry, hitboxMaterial);
            hitbox.userData.isPortalHitbox = true;
            hitbox.userData.portal = portal;

            const pulsesGroup = new THREE.Group();
            const pulseGeometry = new THREE.PlaneGeometry(PULSE_WIDTH, PULSE_HEIGHT);
            const baseRadius = (innerRadius + outerRadius) / 2;
            for (let i = 0; i < NUM_PULSES; i++) {
                const pulseMaterial = new THREE.MeshBasicMaterial({
                    color: new THREE.Color(CUBE_COLOR_ACTIVE),
                    transparent: true,
                    opacity: 0,
                    visible: false,
                    side: THREE.DoubleSide
                });
                const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial);
                const angle = (i / NUM_PULSES) * Math.PI * 2;
                pulse.position.set(Math.cos(angle) * baseRadius, Math.sin(angle) * baseRadius, 0);
                pulse.rotation.z = angle + Math.PI / 2;
                pulse.userData.baseOpacity = 0.01;
                pulse.userData.index = i;
                pulsesGroup.add(pulse);
            }

            const ringPortals: THREE.LineSegments[] = [portal];
            const initialRingSpacing = 2;
            const numRings = 25;
            for (let i = 1; i < numRings; i++) {
                const newRingGeometry = new THREE.CircleGeometry(outerRadius, 24);
                const newRingEdges = new THREE.EdgesGeometry(newRingGeometry);
                const maxOpacity = THREE.MathUtils.lerp(1.0, 0.1, i / (numRings - 1));
                const newRingMaterial = new THREE.LineBasicMaterial({
                    color: new THREE.Color(CUBE_COLOR),
                    transparent: true,
                    opacity: 0
                });
                const newRing = new THREE.LineSegments(newRingEdges, newRingMaterial);
                newRing.userData.isPortal = true;
                newRing.userData.maxOpacity = maxOpacity;
                newRing.position.z = -i * initialRingSpacing;
                ringPortals.push(newRing);
                portal.add(newRing);
            }
            portal.userData.maxOpacity = 1.0;

            switch (portalLocation) {
                case 'left':
                case 'right':
                    pulsesGroup.children.forEach((pulse) => pulse.position.x += PULSE_OFFSET);
                    break;
                case 'top':
                case 'bottom':
                    pulsesGroup.children.forEach((pulse) => pulse.position.y += PULSE_OFFSET);
                    break;
            }

            portal.add(pulsesGroup);
            group.add(portal);
            group.add(hitbox);

            portal.updateMatrixWorld(true);
            pulsesGroup.updateMatrixWorld(true);

            switch (portalLocation) {
                case 'left':
                    portal.position.set(-halfSize, 0, 0);
                    portal.rotation.y = Math.PI / 2;
                    hitbox.position.set(-halfSize, 0, 0);
                    hitbox.rotation.y = Math.PI / 2;
                    break;
                case 'top':
                    portal.position.set(0, halfSize, 0);
                    portal.rotation.x = -Math.PI / 2;
                    hitbox.position.set(0, halfSize, 0);
                    hitbox.rotation.x = Math.PI / 2;
                    break;
                case 'right':
                    portal.position.set(halfSize, 0, 0);
                    portal.rotation.y = -Math.PI / 2;
                    hitbox.position.set(halfSize, 0, 0);
                    hitbox.rotation.y = -Math.PI / 2;
                    break;
                case 'bottom':
                    portal.position.set(0, -halfSize, 0);
                    portal.rotation.x = Math.PI / 2;
                    hitbox.position.set(0, -halfSize, 0);
                    hitbox.rotation.x = Math.PI / 2;
                    break;
            }
        };

        if (keyart) {
            const textureLoader = new THREE.TextureLoader();
            textureLoader.load(keyart, (texture) => {
                texture.encoding = THREE.sRGBEncoding;
                const planeGeometry = new THREE.PlaneGeometry(size - 1, size - 1);
                const planeMaterial = new THREE.MeshBasicMaterial({
                    map: texture,
                    transparent: true,
                    opacity: 0,
                    blending: THREE.AdditiveBlending,
                    side: THREE.DoubleSide
                });
                const plane = new THREE.Mesh(planeGeometry, planeMaterial);
                switch (keyartLocation) {
                    case 'left':
                        plane.position.set(-halfSize, 0, 0);
                        plane.rotation.y = Math.PI / 2;
                        break;
                    case 'top':
                        plane.position.set(0, halfSize, 0);
                        plane.rotation.x = Math.PI / 2;
                        plane.rotation.z = -Math.PI / 2;
                        break;
                    case 'right':
                        plane.position.set(halfSize, 0, 0);
                        plane.rotation.y = -Math.PI / 2;
                        break;
                    case 'bottom':
                        plane.position.set(0, -halfSize, 0);
                        plane.rotation.x = -Math.PI / 2;
                        plane.rotation.z = -Math.PI / 2;
                        break;
                }
                group.add(plane);
                addPortal();
            }, undefined, (error) => {
                addPortal();
            });
        } else {
            addPortal();
        }

        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(projectGridFile, (texture) => {
            texture.encoding = THREE.sRGBEncoding;
            const gridGeometry = new THREE.PlaneGeometry(size - 1, size - 1);
            const gridMaterial = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                opacity: 0,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide,
                depthWrite: false
            });
            const gridPlane = new THREE.Mesh(gridGeometry, gridMaterial);
            gridPlane.position.set(0, 0, -size / 2 - 1);
            gridPlane.rotation.y = 0;
            gridPlane.userData.isGridPlane = true;
            group.add(gridPlane);
        }, undefined, (error) => {
            console.error('Error loading projectGridFile:', error);
        });

        const textureLoader2 = new THREE.TextureLoader();
        textureLoader2.load(projectGridFile, (texture) => {
            texture.encoding = THREE.sRGBEncoding;
            const gridGeometry = new THREE.PlaneGeometry(size - 1, size - 1);
            const gridMaterial = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                opacity: 0,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide,
                depthWrite: false,
                color: new THREE.Color(0xff8000)
            });
            const gridPlane = new THREE.Mesh(gridGeometry, gridMaterial);
            gridPlane.position.set(0, 0, size / 2 + 1);
            gridPlane.rotation.y = 0;
            gridPlane.userData.isGridPlane = true;
            group.add(gridPlane);
        }, undefined, (error) => {
            console.error('Error loading projectGridFile:', error);
        });

        const allFaces = ['left', 'top', 'right', 'bottom'];
        const keyartFace = keyart ? keyartLocation || 'left' : null;
        const usedFaces = [keyartFace, portalLocation].filter(Boolean) as string[];
        const freeFaces = allFaces.filter(face => !usedFaces.includes(face));

        const textureLoader3 = new THREE.TextureLoader();
        textureLoader3.load(projectGridFile, (texture) => {
            texture.encoding = THREE.sRGBEncoding;
            const gridGeometry = new THREE.PlaneGeometry(size - 1, size - 1);
            const gridMaterial = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                opacity: 0,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide,
                depthWrite: false,
                color: new THREE.Color(0x0000ff)
            });
            const gridPlane = new THREE.Mesh(gridGeometry, gridMaterial);
            const blueFace = freeFaces[0];
            switch (blueFace) {
                case 'left':
                    gridPlane.position.set(-halfSize, 0, 0);
                    gridPlane.rotation.y = -Math.PI / 2;
                    break;
                case 'top':
                    gridPlane.position.set(0, halfSize, 0);
                    gridPlane.rotation.x = Math.PI / 2;
                    break;
                case 'right':
                    gridPlane.position.set(halfSize, 0, 0);
                    gridPlane.rotation.y = Math.PI / 2;
                    break;
                case 'bottom':
                    gridPlane.position.set(0, -halfSize, 0);
                    gridPlane.rotation.x = -Math.PI / 2;
                    break;
            }
            gridPlane.userData.isGridPlane = true;
            group.add(gridPlane);
        }, undefined, (error) => {
            console.error('Error loading projectGridFile:', error);
        });

        const textureLoader4 = new THREE.TextureLoader();
        textureLoader4.load(projectGridFile2, (texture) => {
            texture.encoding = THREE.sRGBEncoding;
            const gridGeometry = new THREE.PlaneGeometry(size - 1, size - 1);
            const gridMaterial = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                opacity: 0,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide,
                depthWrite: false
            });
            const gridPlane = new THREE.Mesh(gridGeometry, gridMaterial);
            const greenFace = freeFaces[1];
            switch (greenFace) {
                case 'left':
                    gridPlane.position.set(-halfSize, 0, 0);
                    gridPlane.rotation.y = -Math.PI / 2;
                    break;
                case 'top':
                    gridPlane.position.set(0, halfSize, 0);
                    gridPlane.rotation.x = Math.PI / 2;
                    break;
                case 'right':
                    gridPlane.position.set(halfSize, 0, 0);
                    gridPlane.rotation.y = Math.PI / 2;
                    break;
                case 'bottom':
                    gridPlane.position.set(0, -halfSize, 0);
                    gridPlane.rotation.x = -Math.PI / 2;
                    break;
            }
            gridPlane.userData.isGridPlane = true;
            group.add(gridPlane);
        }, undefined, (error) => {
            console.error('Error loading projectGridFile2:', error);
        });

        return group;
    };

    const createTextObject = (text: string, x: number, y: number, z: number, size: number, font: THREE.Font): THREE.Mesh => {
        const textGeometry = new TextGeometry(text, {
            font: font,
            size: size,
            depth: 0,
            curveSegments: 12,
            bevelEnabled: false
        });
        textGeometry.computeBoundingBox();
        textGeometry.center();
        const textMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.0,
            side: THREE.DoubleSide
        });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(x, y, z);

        const boundingBox = textGeometry.boundingBox!;
        const textWidth = boundingBox.max.x - boundingBox.min.x;
        const textHeight = boundingBox.max.y - boundingBox.min.y;

        const planeWidth = textWidth + 8;
        const planeHeight = textHeight + 4;
        const planeGeometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
        const planeMaterial = new THREE.MeshBasicMaterial({
            color: 0x000000,
            transparent: true,
            opacity: 0.0,
            side: THREE.DoubleSide
        });
        const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
        planeMesh.position.set(x, y, z - 1);

        scene.add(planeMesh);
        scene.add(textMesh);
        textMesh.userData.backgroundPlane = planeMesh;

        return textMesh;
    };

    const loadFontAndText = (): Promise<void> => {
        return new Promise((resolve) => {
            fontLoader = new FontLoader();
            fontLoader.load(
                '/fonts/Poppins_Regular.json',
                (font) => {
                    loadedFont = font;
                    const projectArray = Array.isArray(projects) ? projects : [];
                    if (!Array.isArray(projects)) {
                        console.warn('useProjectCubes: projects is not an array, defaulting to empty array', projects);
                    }
                    projectArray.forEach((project, index) => {
                        const zPosition = FIRST_CUBE_Z - (index + 1) * CUBE_SPACING;
                        const rotation = (index + 1) * ROTATION_INCREMENT;
                        const cube = createProjectCube(CUBE_SIZE, zPosition, rotation, project.keyart, project.keyartLocation);
                        scene.add(cube);
                        projectCubes.push(cube);
                        createTextObject(project.title, 0, project.size - 15, FIRST_CUBE_Z + 90 - (index + 1) * CUBE_SPACING, project.size, font);
                    });
                    resolve();
                },
                undefined,
                (error) => console.error('Error loading font:', error)
            );
        });
    };

    const getInitializedData = (): Promise<{ projectCubes: THREE.Group[]; updateCubeColors: (camera: THREE.PerspectiveCamera) => void; loadedFont: THREE.Font }> => {
        if (isInitialized) {
            return Promise.resolve({ projectCubes, updateCubeColors, loadedFont: loadedFont as THREE.Font });
        }
        return loadFontAndText().then(() => {
            isInitialized = true;
            return { projectCubes, updateCubeColors, loadedFont: loadedFont as THREE.Font };
        });
    };

    const animatePulses = (portal: THREE.LineSegments) => {
        if (portal.userData.isAnimating) return;

        portal.userData.isAnimating = true;
        const pulsesGroup = portal.children.find(child => child instanceof THREE.Group);
        if (!pulsesGroup) return;

        const pulses = pulsesGroup.children as THREE.Mesh[];
        const numPulses = pulses.length;

        const tl = gsap.timeline({
            repeat: -1,
            defaults: { ease: "none" }
        });

        const progress = { value: 0 };
        tl.to(progress, {
            value: 1,
            duration: 1.5,
            onUpdate: () => {
                const baseOpacity = 0.01;
                pulses.forEach((pulse) => {
                    const pulseMaterial = pulse.material as THREE.MeshBasicMaterial;
                    if (pulseMaterial.visible) {
                        const pulsePosition = (pulse.userData.index / numPulses + progress.value) % 1;
                        const wave = Math.sin(pulsePosition * Math.PI * 2);
                        const normalizedWave = (wave + 1) / 2;
                        const opacity = baseOpacity + (1 - baseOpacity) * Math.pow(normalizedWave, 4);
                        pulseMaterial.opacity = opacity;
                    }
                });
            }
        });

        portal.userData.animationTimeline = tl;
    };

    const stopPulseAnimation = (portal: THREE.LineSegments) => {
        if (!portal.userData.isAnimating) return;

        portal.userData.isAnimating = false;
        const pulsesGroup = portal.children.find(child => child instanceof THREE.Group);
        if (!pulsesGroup) return;

        if (portal.userData.animationTimeline) {
            portal.userData.animationTimeline.kill();
            delete portal.userData.animationTimeline;
        }

        pulsesGroup.children.forEach((pulse: THREE.Mesh) => {
            const pulseMaterial = pulse.material as THREE.MeshBasicMaterial;
            pulseMaterial.opacity = 0;
        });
    };

    const updateCubeColors = (camera: THREE.PerspectiveCamera) => {
        const cameraZ = camera.position.z;
        let textMeshes: THREE.Mesh[] = [];

        scene.traverse((object) => {
            if (object instanceof THREE.Mesh && object.geometry && object.geometry.type === 'TextGeometry') {
                textMeshes.push(object);
            }
        });

        if (!sceneInitialized) {
            sceneInitialized = true;
        }

        projectCubes.forEach((cube) => {
            const cubeZ = cube.position.z;
            const cubeDistance = Math.abs(cameraZ - cubeZ);
            let lineProgress = 0;

            if (cubeDistance <= PROXIMITY_THRESHOLD) {
                lineProgress = 1 - (cubeDistance / PROXIMITY_THRESHOLD);
            }

            cube.userData.isActive = lineProgress >= ACTIVE_THRESHOLD;

            cube.children.forEach((child) => {
                if (child instanceof THREE.LineSegments && !child.userData.isPortal && !child.userData.isPortalHitbox) {
                    const material = child.material as THREE.LineBasicMaterial;
                    if (cubeDistance <= PROXIMITY_THRESHOLD) {
                        const r = THREE.MathUtils.lerp(
                            (CUBE_COLOR >> 16 & 255) / 255,
                            (CUBE_COLOR_ACTIVE >> 16 & 255) / 255,
                            lineProgress
                        );
                        const g = THREE.MathUtils.lerp(
                            (CUBE_COLOR >> 8 & 255) / 255,
                            (CUBE_COLOR_ACTIVE >> 8 & 255) / 255,
                            lineProgress
                        );
                        const b = THREE.MathUtils.lerp(
                            (CUBE_COLOR & 255) / 255,
                            (CUBE_COLOR_ACTIVE & 255) / 255,
                            lineProgress
                        );
                        material.color.set(r, g, b);
                        material.opacity = Math.min(1, lineProgress * 2);
                    } else {
                        material.opacity = 0;
                    }
                }
                else if (child instanceof THREE.LineSegments && child.userData.isPortal) {
                    if (sceneInitialized) {
                        if (lineProgress > 0.1) {
                            child.children.forEach((grandchild) => {
                                if (grandchild instanceof THREE.Group) {
                                    grandchild.children.forEach((pulse) => {
                                        if (pulse instanceof THREE.Mesh) {
                                            pulse.material.visible = true;
                                            if (!child.userData.animationStarted) {
                                                animatePulses(child);
                                                child.userData.animationStarted = true;
                                            }
                                        }
                                    });
                                }
                            });
                        } else if (lineProgress <= 0.1 && child.userData.animationStarted) {
                            child.children.forEach((grandchild) => {
                                if (grandchild instanceof THREE.Group) {
                                    grandchild.children.forEach((pulse) => {
                                        if (pulse instanceof THREE.Mesh) {
                                            pulse.material.visible = false;
                                        }
                                    });
                                }
                            });
                            stopPulseAnimation(child);
                            delete child.userData.animationStarted;
                        }
                    }
                }
                else if (child instanceof THREE.Mesh && !child.userData.isPortalHitbox) {
                    const material = child.material as THREE.MeshBasicMaterial;
                    if (cubeDistance <= PROXIMITY_THRESHOLD) {
                        const progress = 1 - (cubeDistance / PROXIMITY_THRESHOLD);
                        material.opacity = Math.min(0.8, progress * 2);
                    } else {
                        material.opacity = 0;
                    }
                }
            });
        });

        textMeshes.forEach((mesh) => {
            const textMaterial = mesh.material as THREE.MeshBasicMaterial;
            const planeMesh = mesh.userData.backgroundPlane as THREE.Mesh;
            const planeMaterial = planeMesh?.material as THREE.MeshBasicMaterial;
            const meshZ = mesh.position.z;
            const zDistance = Math.abs(cameraZ - meshZ + 120);
            if (zDistance <= PROXIMITY_THRESHOLD) {
                const progress = 1 - (zDistance / PROXIMITY_THRESHOLD);
                const opacity = Math.min(1.0, progress * 2);
                textMaterial.opacity = opacity;
                if (planeMaterial) {
                    planeMaterial.opacity = opacity * 0.8;
                }
            } else {
                textMaterial.opacity = 0.0;
                if (planeMaterial) {
                    planeMaterial.opacity = 0.0;
                }
            }
        });
    };

    const setupInteractivity = (camera: THREE.PerspectiveCamera, domElement: HTMLCanvasElement, onFocusChangeCallback: (isFocused: boolean, originalPosition?: THREE.Vector3, originalTarget?: THREE.Vector3) => void) => {
        onPortalFocusChange = onFocusChangeCallback;

        let lockedScrollY: number | null = null;
        let touchStartY: number | null = null;
        let activePortal: THREE.LineSegments | null = null;

        const onMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            const hitboxes: THREE.Mesh[] = [];
            projectCubes.forEach((cube) => {
                if (cube.userData.isActive) {
                    cube.children.forEach((child) => {
                        if (child instanceof THREE.Mesh && child.userData.isPortalHitbox) {
                            hitboxes.push(child);
                        }
                    });
                }
            });

            const intersects = raycaster.intersectObjects(hitboxes);

            if (intersects.length > 0) {
                const newHoveredHitbox = intersects[0].object as THREE.Mesh;
                const newHoveredPortal = newHoveredHitbox.userData.portal as THREE.LineSegments;
                if (hoveredPortal !== newHoveredPortal) {
                    if (hoveredPortal) {
                        const material = hoveredPortal.material as THREE.LineBasicMaterial;
                        gsap.to(material.color, {
                            r: (CUBE_COLOR >> 16 & 255) / 255,
                            g: (CUBE_COLOR >> 8 & 255) / 255,
                            b: (CUBE_COLOR & 255) / 255,
                            duration: 0.5
                        });
                    }
                    hoveredPortal = newHoveredPortal;
                    const material = hoveredPortal.material as THREE.LineBasicMaterial;
                    gsap.to(material.color, {
                        r: (HOVER_COLOR >> 16 & 255) / 255,
                        g: (HOVER_COLOR >> 8 & 255) / 255,
                        b: (HOVER_COLOR & 255) / 255,
                        duration: 0.5
                    });
                }
                domElement.style.cursor = 'pointer';
            } else {
                if (hoveredPortal) {
                    const material = hoveredPortal.material as THREE.LineBasicMaterial;
                    gsap.to(material.color, {
                        r: (CUBE_COLOR >> 16 & 255) / 255,
                        g: (CUBE_COLOR >> 8 & 255) / 255,
                        b: (CUBE_COLOR & 255) / 255,
                        duration: 0.5
                    });
                    hoveredPortal = null;
                }
                domElement.style.cursor = 'auto';
            }
        };

        const animatePulsesCorkscrew = (portal: THREE.LineSegments, reverse: boolean = false) => {
            const pulsesGroup = portal.children.find(child => child instanceof THREE.Group) as THREE.Group;
            if (!pulsesGroup) return;
        };

        const animateRings = (portal: THREE.LineSegments, expand: boolean = true) => {
            const rings = [portal, ...portal.children.filter(child => child instanceof THREE.LineSegments && child.userData.isPortal)] as THREE.LineSegments[];
            const targetSpacing = expand ? 25 : 2;
            rings.forEach((ring, index) => {
                let targetZ = -index * targetSpacing;
                if (portal.position.y > 0 && portal.rotation.x === -Math.PI / 2) {
                    targetZ = index * targetSpacing;
                } else if (portal.position.y < 0 && portal.rotation.x === Math.PI / 2) {
                    targetZ = index * targetSpacing;
                }
                const targetOpacity = expand ? ring.userData.maxOpacity : 0;
                gsap.to(ring.position, {
                    z: targetZ,
                    duration: 1,
                    ease: 'power3.out',
                    delay: 0.5
                });
                gsap.to(ring.material, {
                    opacity: targetOpacity,
                    duration: 1,
                    ease: 'power3.out',
                    delay: 0.5
                });
            });
        };

        const onClick = (event: MouseEvent) => {
            if (isInPortalFocus) return;

            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            const hitboxes: THREE.Mesh[] = [];
            projectCubes.forEach((cube) => {
                if (cube.userData.isActive) {
                    cube.children.forEach((child) => {
                        if (child instanceof THREE.Mesh && child.userData.isPortalHitbox) {
                            hitboxes.push(child);
                        }
                    });
                }
            });

            const intersects = raycaster.intersectObjects(hitboxes);
            if (intersects.length > 0) {
                const clickedHitbox = intersects[0].object as THREE.Mesh;
                const clickedPortal = clickedHitbox.userData.portal as THREE.LineSegments;
                const cube = clickedHitbox.parent as THREE.Group;

                if (!originalCameraPosition) {
                    originalCameraPosition = camera.position.clone();
                    originalCameraTarget = new THREE.Vector3(0, 0, MAX_Z);
                }

                if (onPortalFocusChange) {
                    onPortalFocusChange(true, originalCameraPosition, originalCameraTarget);
                }

                const portalWorldPosition = clickedPortal.getWorldPosition(new THREE.Vector3());

                const lookAtTarget = {
                    x: originalCameraTarget.x,
                    y: originalCameraTarget.y,
                    z: originalCameraTarget.z
                };
                gsap.to(lookAtTarget, {
                    x: portalWorldPosition.x,
                    y: portalWorldPosition.y,
                    z: portalWorldPosition.z,
                    duration: 2,
                    ease: 'power3.out',
                    onStart: () => {
                        isInPortalFocus = true;
                        lockedScrollY = window.scrollY;
                        document.body.classList.add('no-scrollbar');
                        activePortal = clickedPortal;
                        animatePulsesCorkscrew(clickedPortal);
                        animateRings(clickedPortal, true);
                    },
                    onUpdate: () => {
                        camera.lookAt(lookAtTarget.x, lookAtTarget.y, lookAtTarget.z);
                    }
                });

                const cubeWorldPosition = cube.getWorldPosition(new THREE.Vector3());
                const newCameraPosition = new THREE.Vector3(0, 0, cubeWorldPosition.z);
                gsap.to(camera.position, {
                    x: newCameraPosition.x,
                    y: newCameraPosition.y,
                    z: newCameraPosition.z,
                    duration: 2,
                    ease: 'power3.out'
                });
            }
        };

        const revertCamera = () => {
            if (!originalCameraPosition || !originalCameraTarget) return;

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
                onStart: () => {
                    if (activePortal) {
                        animatePulsesCorkscrew(activePortal, true);
                        animateRings(activePortal, false);
                    }
                },
                onComplete: () => {
                    isInPortalFocus = false;
                    if (onPortalFocusChange) {
                        onPortalFocusChange(false);
                    }
                    originalCameraPosition = null;
                    originalCameraTarget = null;
                    activePortal = null;
                    isReverting = false;
                    lockedScrollY = null;
                    document.body.classList.remove('no-scrollbar');
                }
            });
        };

        const onWheel = (event: WheelEvent) => {
            if (isInPortalFocus && !isReverting && originalCameraPosition && originalCameraTarget) {
                event.preventDefault();
                event.stopPropagation();

                if (event.deltaY < 0) {
                    revertCamera();
                }
            }
        };

        const onTouchStart = (event: TouchEvent) => {
            if (isInPortalFocus && !isReverting) {
                touchStartY = event.touches[0].clientY;
            }
        };

        const onTouchMove = (event: TouchEvent) => {
            if (isInPortalFocus && !isReverting && touchStartY !== null && lockedScrollY !== null) {
                const touchCurrentY = event.touches[0].clientY;
                const deltaY = touchStartY - touchCurrentY;

                if (deltaY > 0) {
                    event.preventDefault();
                    window.scrollTo(0, lockedScrollY);
                } else if (deltaY < 0) {
                    event.preventDefault();
                    revertCamera();
                }
            }
        };

        const onTouchEnd = (event: TouchEvent) => {
            touchStartY = null;
        };

        const onScroll = (event: Event) => {
            if (isInPortalFocus && !isReverting && lockedScrollY !== null) {
                const currentScrollY = window.scrollY;
                if (currentScrollY > lockedScrollY) {
                    window.scrollTo(0, lockedScrollY);
                } else if (currentScrollY < lockedScrollY) {
                    revertCamera();
                }
            }
            lastScrollY = window.scrollY;
        };

        domElement.addEventListener('mousemove', onMouseMove);
        domElement.addEventListener('click', onClick);
        domElement.addEventListener('wheel', onWheel, { passive: false });
        domElement.addEventListener('touchstart', onTouchStart, { passive: false });
        domElement.addEventListener('touchmove', onTouchMove, { passive: false });
        domElement.addEventListener('touchend', onTouchEnd);
        window.addEventListener('scroll', onScroll);

        return () => {
            domElement.removeEventListener('mousemove', onMouseMove);
            domElement.removeEventListener('click', onClick);
            domElement.removeEventListener('wheel', onWheel);
            domElement.removeEventListener('touchstart', onTouchStart);
            domElement.removeEventListener('touchmove', onTouchMove);
            domElement.removeEventListener('touchend', onTouchEnd);
            window.removeEventListener('scroll', onScroll);
            domElement.style.cursor = 'auto';
            document.body.classList.remove('no-scrollbar');
        };
    };

    return { getInitializedData, updateCubeColors, setupInteractivity };
}
