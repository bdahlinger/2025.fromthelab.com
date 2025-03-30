<!-- resources/js/Global/ProjectNavigatorCubes.vue -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch, computed } from 'vue';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { router } from '@inertiajs/vue3';
import { createPopper } from '@popperjs/core';
import { App } from '@/Types/enums';
import { useScreenStore } from '@/Stores/screenStore';

const props = defineProps<{
    project: App.Data.ProjectData;
    projects: App.Data.ProjectData[];
    activeIndex: number;
}>();

const screenStore = useScreenStore();

// Base constants
const CUBE_SIZE = 10;
const CANVAS_HEIGHT = 2;
const ACTIVE_CUBE_SIZE = CUBE_SIZE + 2;

// Dynamic CUBE_SPACING based on breakpoint
const CUBE_SPACING = computed(() => {
    switch (screenStore.currentBreakpoint) {
        case 'xs':
        case 'sm':
            return 20;
        case 'md':
            return 10;
        case 'lg':
            return 15;
        case 'xl':
        case '2xl':
            return 25;
        default:
            return 20;
    }
});

const PADDING_X = computed(() => CUBE_SPACING.value);

// Computed canvas width
const totalCubes = props.projects.length;
const canvasWidthUnits = computed(() => {
    return totalCubes * CUBE_SIZE + (totalCubes - 1) * CUBE_SPACING.value + 2 * PADDING_X.value;
});
const canvasWidthRem = computed(() => `${canvasWidthUnits.value / 16}rem`);

const canvasRef = ref<HTMLCanvasElement | null>(null);
const isInitialized = ref(false);
const hoveredProjectTitle = ref<string | null>(null);

let tooltipEl: HTMLElement | null = null;
let tooltipAnchorEl: HTMLElement | null = null;
let popperInstance: ReturnType<typeof createPopper> | null = null;

let scene: THREE.Scene | null = null;
const camera = new THREE.OrthographicCamera();
let renderer: THREE.WebGLRenderer | null = null;
let cubes: THREE.Mesh[] = [];
let activeWireframeGroup: THREE.Group | null = null;
let hoveredCube: THREE.Mesh | null = null;
let hoverAnimation: gsap.core.Tween | null = null;
let animationFrameId: number | null = null;
const getCubeColor = (classification: App.Enums.Classification): number => {
    switch (classification) {
        case App.Enums.Classification.ENTERTAINMENT:
            return 0xff5555;
        case App.Enums.Classification.ECOMMERCE:
            return 0x55ff55;
        case App.Enums.Classification.OTHER:
            return 0x5555ff;
        default:
            return 0xffffff;
    }
};

const createWireframeCube = (size: number): THREE.Group => {
    const halfSize = size / 2;
    const material = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.8, transparent: true });
    const vertices = [
        new THREE.Vector3(-halfSize, -halfSize, -halfSize),
        new THREE.Vector3(halfSize, -halfSize, -halfSize),
        new THREE.Vector3(halfSize, -halfSize, halfSize),
        new THREE.Vector3(-halfSize, -halfSize, halfSize),
        new THREE.Vector3(-halfSize, halfSize, -halfSize),
        new THREE.Vector3(halfSize, halfSize, -halfSize),
        new THREE.Vector3(halfSize, halfSize, halfSize),
        new THREE.Vector3(-halfSize, halfSize, halfSize),
    ];
    const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7],
    ];
    const group = new THREE.Group();
    edges.forEach(([start, end]) => {
        const geometry = new THREE.BufferGeometry().setFromPoints([vertices[start], vertices[end]]);
        const line = new THREE.LineSegments(geometry, material);
        group.add(line);
    });
    group.rotation.x = Math.PI / 4;
    group.rotation.y = Math.PI / 4;
    return group;
};

const initializeScene = () => {
    if (!canvasRef.value) return;
    scene = new THREE.Scene();
    const aspect = canvasWidthUnits.value / (CANVAS_HEIGHT * 16);
    const viewSize = CANVAS_HEIGHT * 16;
    camera.left = -aspect * viewSize / 2;
    camera.right = aspect * viewSize / 2;
    camera.top = viewSize / 2;
    camera.bottom = -viewSize / 2;
    camera.near = 0.1;
    camera.far = 1000;
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();

    renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 20);
    scene.add(directionalLight);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const geometry = new THREE.BoxGeometry(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE);
    cubes = props.projects.map((project, index) => {
        const material = new THREE.MeshPhongMaterial({
            color: getCubeColor(project.classification),
            specular: 0x555555,
            shininess: 30,
            transparent: true,
            blending: THREE.AdditiveBlending,
            opacity: 0.6,
            side: THREE.DoubleSide,
        });
        const cube = new THREE.Mesh(geometry, material);
        const xPos = PADDING_X.value + index * (CUBE_SIZE + CUBE_SPACING.value) - (canvasWidthUnits.value - CUBE_SIZE) / 2;
        cube.position.set(xPos, 0, 0);
        cube.rotation.x = Math.PI / 4;
        cube.rotation.y = Math.PI / 4;
        cube.userData = { index };
        scene.add(cube);
        return cube;
    });

    activeWireframeGroup = createWireframeCube(ACTIVE_CUBE_SIZE);
    scene.add(activeWireframeGroup);
    updateActiveCubePosition(props.activeIndex);

    resize();
    animate();
};

const updateActiveCubePosition = (index: number) => {
    if (!activeWireframeGroup || index < 0 || index >= cubes.length) return;
    const targetCube = cubes[index];
    const targetX = targetCube.position.x;

    gsap.killTweensOf(activeWireframeGroup.position);
    gsap.killTweensOf(activeWireframeGroup.rotation);
    gsap.killTweensOf(activeWireframeGroup.scale);

    gsap.to(activeWireframeGroup.position, {
        x: targetX,
        duration: 0.8,
        ease: 'power2.inOut',
    });

    gsap.to(activeWireframeGroup.rotation, {
        y: activeWireframeGroup.rotation.y + Math.PI * 2,
        duration: 0.8,
        ease: 'power2.inOut',
    });

    gsap.to(activeWireframeGroup.scale, {
        x: 1.3,
        y: 1.3,
        z: 1.3,
        duration: 0.4,
        ease: 'power2.out',
        onComplete: () => {
            gsap.to(activeWireframeGroup.scale, {
                x: 1,
                y: 1,
                z: 1,
                duration: 0.4,
                ease: 'power2.in',
            });
        },
    });
};

watch(() => props.activeIndex, (newIndex, oldIndex) => {
    if (newIndex !== oldIndex) {
        updateActiveCubePosition(newIndex);
    }
});

// Update cube positions and wireframe on breakpoint change
watch(() => screenStore.currentBreakpoint, () => {
    if (isInitialized.value && cubes.length > 0) {
        cubes.forEach((cube, index) => {
            const xPos = PADDING_X.value + index * (CUBE_SIZE + CUBE_SPACING.value) - (canvasWidthUnits.value - CUBE_SIZE) / 2;
            gsap.to(cube.position, {
                x: xPos,
                duration: 0.5,
                ease: 'power2.inOut',
            });
        });
        // Animate wireframe to the active cube's new position
        if (activeWireframeGroup && props.activeIndex >= 0 && props.activeIndex < cubes.length) {
            const activeIndex = props.activeIndex;
            const wireframeX = PADDING_X.value + activeIndex * (CUBE_SIZE + CUBE_SPACING.value) - (canvasWidthUnits.value - CUBE_SIZE) / 2;
            //console.log('Wireframe target x:', wireframeX);
            gsap.to(activeWireframeGroup.position, {
                x: wireframeX,
                duration: 0.5,
                ease: 'power2.inOut',
            });
        }
        resize();
    }
});

const resize = () => {
    if (canvasRef.value && renderer) {
        const width = canvasWidthUnits.value;
        const height = CANVAS_HEIGHT * 16;
        const dpr = renderer.getPixelRatio();
        renderer.setSize(width * dpr, height * dpr, false);
        const aspect = canvasWidthUnits.value / (CANVAS_HEIGHT * 16);
        const viewSize = CANVAS_HEIGHT * 16;
        camera.left = -aspect * viewSize / 2;
        camera.right = aspect * viewSize / 2;
        camera.top = viewSize / 2;
        camera.bottom = -viewSize / 2;
        camera.updateProjectionMatrix();
        canvasRef.value.style.width = canvasWidthRem.value;
        canvasRef.value.style.height = `${CANVAS_HEIGHT}rem`;
    }
};

const animate = () => {
    animationFrameId = requestAnimationFrame(animate);
    if (renderer) renderer.render(scene, camera);
};

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const createTooltipElements = (title: string, x: number, y: number) => {
    tooltipAnchorEl = document.createElement('div');
    tooltipAnchorEl.style.position = 'absolute';
    tooltipAnchorEl.style.width = '1px';
    tooltipAnchorEl.style.height = '1px';

    tooltipEl = document.createElement('div');
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.backgroundColor = 'black';
    tooltipEl.style.color = 'white';
    tooltipEl.style.padding = '0.25rem 1rem';
    tooltipEl.style.borderRadius = '4px';
    tooltipEl.style.fontSize = '0.75rem';
    tooltipEl.style.pointerEvents = 'none';
    tooltipEl.style.transform = 'translateX(-50%)';
    tooltipEl.textContent = title;

    const caret = document.createElement('div');
    caret.style.position = 'absolute';
    caret.style.top = '-6px';
    caret.style.left = '50%';
    caret.style.transform = 'translateX(-50%)';
    caret.style.width = '0';
    caret.style.height = '0';
    caret.style.borderLeft = '6px solid transparent';
    caret.style.borderRight = '6px solid transparent';
    caret.style.borderBottom = '6px solid black';
    tooltipEl.appendChild(caret);

    document.body.appendChild(tooltipEl);
    document.body.appendChild(tooltipAnchorEl);

    tooltipAnchorEl.style.left = `${x}px`;
    tooltipAnchorEl.style.top = `${y}px`;

    popperInstance = createPopper(tooltipAnchorEl, tooltipEl, {
        placement: 'bottom',
        modifiers: [
            { name: 'offset', options: { offset: [0, 4] } },
            { name: 'preventOverflow', options: { padding: 8 } },
            { name: 'flip', enabled: false },
            {
                name: 'computeStyles',
                options: {
                    gpuAcceleration: false,
                    adaptive: false,
                },
            },
        ],
    });

    requestAnimationFrame(() => {
        if (popperInstance) popperInstance.update();
    });
};

const removeTooltipElements = () => {
    if (tooltipEl && tooltipEl.parentNode) document.body.removeChild(tooltipEl);
    if (tooltipAnchorEl && tooltipAnchorEl.parentNode) document.body.removeChild(tooltipAnchorEl);
    if (popperInstance) popperInstance.destroy();
    tooltipEl = null;
    tooltipAnchorEl = null;
    popperInstance = null;
};

const onMouseMove = (event: MouseEvent) => {
    if (!canvasRef.value) return;

    const rect = canvasRef.value.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(cubes);

    if (intersects.length > 0) {
        const newHoveredCube = intersects[0].object as THREE.Mesh;
        if (newHoveredCube !== hoveredCube) {
            if (hoveredCube) {
                gsap.to(hoveredCube.material, { opacity: 0.6, duration: 0.5, ease: 'power2.out' });
                hoverAnimation?.kill();
                gsap.to(hoveredCube.rotation, { y: Math.PI / 4, duration: 0.5, ease: 'power2.out' });
                if (tooltipEl) {
                    removeTooltipElements();
                }
            }
            hoveredCube = newHoveredCube;
            gsap.to(hoveredCube.material, { opacity: 1.0, duration: 0.5, ease: 'power2.out' });
            canvasRef.value.style.cursor = 'pointer';

            const projectIndex = hoveredCube.userData.index;
            hoveredProjectTitle.value = props.projects[projectIndex].title;
            const tooltipX = event.clientX;
            const tooltipY = rect.top + CANVAS_HEIGHT * 16;

            createTooltipElements(hoveredProjectTitle.value, tooltipX, tooltipY);

            if (hoveredCube.userData.index !== props.activeIndex) {
                hoverAnimation = gsap.to(hoveredCube.rotation, {
                    y: hoveredCube.rotation.y + Math.PI * 2,
                    duration: 0.8,
                    ease: 'power2.inOut',
                });
            }
        }
    } else if (hoveredCube) {
        gsap.to(hoveredCube.material, { opacity: 0.6, duration: 0.5, ease: 'power2.out' });
        hoverAnimation?.kill();
        gsap.to(hoveredCube.rotation, { y: Math.PI / 4, duration: 0.5, ease: 'power2.out' });
        if (tooltipEl) {
            removeTooltipElements();
        }
        hoveredCube = null;
        hoveredProjectTitle.value = null;
        canvasRef.value.style.cursor = 'default';
    } else {
        canvasRef.value.style.cursor = 'default';
    }
};

const onClick = (event: MouseEvent) => {
    if (!canvasRef.value) return;
    const rect = canvasRef.value.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(cubes);
    if (intersects.length > 0) {
        const clickedCube = intersects[0].object as THREE.Mesh;
        const projectIndex = clickedCube.userData.index;
        const project = props.projects[projectIndex];
        router.visit(route('project.show', { project: project.slug }), { preserveScroll: false });
    }
};

onMounted(() => {
    try {
        initializeScene();
        window.addEventListener('resize', resize);
        if (canvasRef.value) {
            canvasRef.value.addEventListener('mousemove', onMouseMove);
            canvasRef.value.addEventListener('click', onClick);
        }
        isInitialized.value = true;
    } catch (error) {
        console.error('Error in ProjectNavigatorCubes onMounted:', error);
    }
});

/*onUnmounted(() => {
    window.removeEventListener('resize', resize);
    if (canvasRef.value) {
        canvasRef.value.removeEventListener('mousemove', onMouseMove);
        canvasRef.value.removeEventListener('click', onClick);
    }
    cubes.forEach(cube => {
        scene.remove(cube);
        cube.geometry.dispose();
        cube.material.dispose();
    });
    if (activeWireframeGroup) scene.remove(activeWireframeGroup);
    if (popperInstance) popperInstance.destroy();
    if (tooltipEl && tooltipEl.parentNode) document.body.removeChild(tooltipEl);
    if (tooltipAnchorEl && tooltipAnchorEl.parentNode) document.body.removeChild(tooltipAnchorEl);
    renderer.dispose();
    scene.clear();
});*/

onUnmounted(() => {

    // Cancel animation loop
    if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }

    window.removeEventListener('resize', resize);
    if (canvasRef.value) {
        canvasRef.value.removeEventListener('mousemove', onMouseMove);
        canvasRef.value.removeEventListener('click', onClick);
    }

    // Dispose of cubes
    if (scene) {
        cubes.forEach(cube => {
            if (cube.geometry) cube.geometry.dispose();
            if (cube.material) cube.material.dispose();
            scene.remove(cube);
        });
    }
    cubes = [];

    // Dispose of wireframe
    if (activeWireframeGroup && scene) {
        activeWireframeGroup.traverse(object => {
            if (object instanceof THREE.LineSegments) {
                if (object.geometry) object.geometry.dispose();
                if (object.material) object.material.dispose();
            }
        });
        scene.remove(activeWireframeGroup);
        activeWireframeGroup = null;
    }

    // Safely remove lights
    if (scene) {
        const lights: THREE.Light[] = [];
        scene.traverse(object => {
            if (object instanceof THREE.Light) {
                lights.push(object);
            }
        });
        lights.forEach(light => {
            if (scene) scene.remove(light);
        });
        scene.clear();
    }

    // Dispose of renderer and remove canvas
    if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
        if (renderer.domElement && renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
        renderer = null;
    }

    // Clean up tooltip
    if (popperInstance) popperInstance.destroy();
    if (tooltipEl && tooltipEl.parentNode) document.body.removeChild(tooltipEl);
    if (tooltipAnchorEl && tooltipAnchorEl.parentNode) document.body.removeChild(tooltipAnchorEl);

    // Nullify references
    scene = null;
    hoveredCube = null;
    hoverAnimation?.kill();
    hoverAnimation = null;
});


</script>

<template>
    <div class="cubes-container">
        <canvas ref="canvasRef" class="cubes-canvas"></canvas>
    </div>
</template>

<style scoped>
.cubes-container {
    height: 2rem;
    width: v-bind(canvasWidthRem);
}
.cubes-canvas {
    width: 100%;
    height: 100%;
}
</style>
