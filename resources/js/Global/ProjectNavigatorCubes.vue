<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { App } from '@/Types/enums';
import { router } from '@inertiajs/vue3';
import { createPopper } from '@popperjs/core';

const props = defineProps<{
    projects: App.Data.ProjectData[];
    activeIndex: number;
}>();

// Constants for cube sizing and spacing (in Three.js units)
const CUBE_SIZE = 10;
const CUBE_SPACING = 20;
const CANVAS_HEIGHT = 2; // Canvas height in rem
const PADDING_X = CUBE_SPACING;
const ACTIVE_CUBE_SIZE = CUBE_SIZE + 2;

// Calculate total canvas width based on number of projects
const totalCubes = props.projects.length;
const canvasWidthUnits = totalCubes * CUBE_SIZE + (totalCubes - 1) * CUBE_SPACING + 2 * PADDING_X;
const canvasWidthRem = `${canvasWidthUnits / 16}rem`; // 1rem = 16 units

// References
const canvasRef = ref<HTMLCanvasElement | null>(null);
const isInitialized = ref(false);
const hoveredProjectTitle = ref<string | null>(null);

// Tooltip elements
let tooltipEl: HTMLElement | null = null;
let tooltipAnchorEl: HTMLElement | null = null;
let popperInstance: ReturnType<typeof createPopper> | null = null;

// Three.js variables
let scene: THREE.Scene;
let camera: THREE.OrthographicCamera;
let renderer: THREE.WebGLRenderer;
let cubes: THREE.Mesh[] = [];
let activeWireframeGroup: THREE.Group | null = null;
let hoverAnimation: gsap.core.Tween | null = null;

const getCubeColor = (classification: App.Enums.Classification): number => {
    switch (classification) {
        case App.Enums.Classification.ENTERTAINMENT: return 0xff5555;
        case App.Enums.Classification.ECOMMERCE: return 0x55ff55;
        case App.Enums.Classification.OTHER: return 0x5555ff;
        default: return 0xffffff;
    }
};

const createWireframeCube = (size: number, xPos: number): THREE.Group => {
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
    group.position.set(xPos, 0, 0);
    group.rotation.x = Math.PI / 4;
    group.rotation.y = Math.PI / 4;
    return group;
};

onMounted(() => {
    if (!canvasRef.value) return;

    scene = new THREE.Scene();
    const aspect = canvasWidthUnits / (CANVAS_HEIGHT * 16);
    const viewSize = CANVAS_HEIGHT * 16;
    camera = new THREE.OrthographicCamera(
        -aspect * viewSize / 2,
        aspect * viewSize / 2,
        viewSize / 2,
        -viewSize / 2,
        0.1,
        1000
    );
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

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
        const xPos = PADDING_X + index * (CUBE_SIZE + CUBE_SPACING) - (canvasWidthUnits - CUBE_SIZE) / 2;
        cube.position.set(xPos, 0, 0);
        cube.rotation.x = Math.PI / 4;
        cube.rotation.y = Math.PI / 4;
        cube.userData = { index };
        scene.add(cube);

        if (index === props.activeIndex) {
            activeWireframeGroup = createWireframeCube(ACTIVE_CUBE_SIZE, xPos);
            scene.add(activeWireframeGroup);
        }
        return cube;
    });

    const resize = () => {
        if (canvasRef.value) {
            const width = canvasWidthUnits;
            const height = CANVAS_HEIGHT * 16;
            const dpr = renderer.getPixelRatio();
            renderer.setSize(width * dpr, height * dpr, false);
            camera.left = -aspect * viewSize / 2;
            camera.right = aspect * viewSize / 2;
            camera.top = viewSize / 2;
            camera.bottom = -viewSize / 2;
            camera.updateProjectionMatrix();
            canvasRef.value.style.width = canvasWidthRem;
            canvasRef.value.style.height = `${CANVAS_HEIGHT}rem`;
        }
    };
    window.addEventListener('resize', resize);
    resize();

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let hoveredCube: THREE.Mesh | null = null;
    let hoverAnimation: gsap.core.Tween | null = null;

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

        const tooltipWidth = tooltipEl.offsetWidth;
        const adjustedX = x; // Anchor at mouse position directly
        tooltipAnchorEl.style.left = `${adjustedX}px`; // Center tooltip under mouse
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
                        adaptive: false
                    }
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

                // Set tooltip content and position
                const projectIndex = hoveredCube.userData.index;
                hoveredProjectTitle.value = props.projects[projectIndex].title;
                const tooltipX = event.clientX;
                const tooltipY = rect.top + CANVAS_HEIGHT * 16;

                createTooltipElements(hoveredProjectTitle.value, tooltipX, tooltipY);

                // Re-add cube spin if not the active cube
                if (hoveredCube.userData.index !== props.activeIndex) {
                    hoverAnimation = gsap.to(hoveredCube.rotation, {
                        y: hoveredCube.rotation.y + Math.PI * 2, // Full spin
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

    if (canvasRef.value) {
        canvasRef.value.addEventListener('mousemove', onMouseMove);
        canvasRef.value.addEventListener('click', onClick);
    }

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    isInitialized.value = true;
    animate();
});

onUnmounted(() => {
    window.removeEventListener('resize', () => {});
    if (canvasRef.value) {
        canvasRef.value.removeEventListener('mousemove', () => {});
        canvasRef.value.removeEventListener('click', () => {});
    }
    cubes.forEach(cube => scene.remove(cube));
    if (activeWireframeGroup) scene.remove(activeWireframeGroup);
    if (popperInstance) popperInstance.destroy();
    if (tooltipEl && tooltipEl.parentNode) document.body.removeChild(tooltipEl);
    if (tooltipAnchorEl && tooltipAnchorEl.parentNode) document.body.removeChild(tooltipAnchorEl);
    renderer.dispose();
    scene.clear();
});
</script>

<template>
    <div class="cubes-container">
        <canvas ref="canvasRef" v-show="isInitialized" class="cubes-canvas"></canvas>
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
