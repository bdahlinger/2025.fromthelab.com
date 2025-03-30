<!-- resources/js/Global/Tunnel/HUDMiniMap.vue -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch, computed } from 'vue';
import { gsap } from 'gsap';
import { useProjectStore } from '@/Stores/projectStore';
import { useScreenStore } from '@/Stores/screenStore';
import { storeToRefs } from 'pinia';

const props = defineProps<{
    project?: App.Data.ProjectData | null;
}>();

const screenStore = useScreenStore();
const projectStore = useProjectStore();
const projects = projectStore.projects || [];
const { progress } = storeToRefs(projectStore);
const { screenWidth } = storeToRefs(screenStore);

// Constants from projectStore
const CUBE_SPACING = projectStore.cubeSpacing; // 500
const FIRST_CUBE_Z = projectStore.firstCubeZ; // -500

// Reactive size configuration
const isMobile = computed(() => screenWidth.value < 768);
const sizeScale = computed(() => (isMobile.value ? 0.55 : 1.0)); // 0.55 for mobile (10% more than 0.5)
const cubeWidth = computed(() => 16 * sizeScale.value); // 16px desktop, 8.8px mobile
const svgWidth = computed(() => 8 * sizeScale.value);   // 8px desktop, 4.4px mobile
const totalCubes = 1 + projects.length; // Intro + projects = 18
const totalDepth = 10000; // Total Z depth
const mapWidth = computed(() => (totalCubes - 1) * cubeWidth.value * 2); // 544px desktop, 299.2px mobile
const scaleFactor = computed(() => mapWidth.value / totalDepth); // 0.0544 desktop, 0.02992 mobile

const cameraPosition = ref(0); // SVG left position in px

// Refs for DOM elements
const mapContainer = ref<HTMLElement | null>(null);
const dashedPath = ref<HTMLElement | null>(null);
const introCube = ref<HTMLElement | null>(null);
const projectCubes = ref<HTMLElement[]>([]);
const cameraSvg = ref<SVGSVGElement | null>(null);

// Cube positions (scaled from z=0)
const introCubePosition = computed(() => Math.abs(FIRST_CUBE_Z) * scaleFactor.value);
const projectCubePositions = computed(() =>
    projects.map((_, index) => {
        const zPos = Math.abs(FIRST_CUBE_Z) + (index + 1) * CUBE_SPACING;
        return zPos * scaleFactor.value;
    })
);

// Update camera position
const updateCameraPosition = (newProgress: number) => {
    const scaledPosition = newProgress * scaleFactor.value + cubeWidth.value / 2;
    cameraPosition.value = Math.min(Math.max(scaledPosition, 0), mapWidth.value - svgWidth.value);
};

// Animate camera position with GSAP
watch(progress, (newProgress) => {
    gsap.to(cameraPosition, {
        value: newProgress * scaleFactor.value + cubeWidth.value / 2,
        duration: 0.3,
        ease: 'power2.out',
        onUpdate: () => {
            cameraPosition.value = Math.min(Math.max(cameraPosition.value, 0), mapWidth.value - svgWidth.value);
        },
    });
}, { immediate: true });

// Handle resize
const handleResize = () => {
    updateCameraPosition(progress.value); // Recalculate positions on resize
};

onMounted(() => {
    console.log('HUDMiniMap mounted');
    updateCameraPosition(progress.value);

    if (mapContainer.value) {
        const elements = [
            dashedPath.value,
            introCube.value,
            ...introCube.value?.querySelectorAll('div') || [],
            ...projectCubes.value,
            cameraSvg.value,
        ].filter(Boolean);

        gsap.to(elements, {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.1,
            delay: 0.5,
            overwrite: false,
            onComplete: () => {
                console.log('Animation complete');
            },
        });
    }

    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});

watch(projects, () => {
    console.log('Projects changed, re-rendering cubes');
});
</script>

<template>
    <div
        ref="mapContainer"
        class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bottom-4 h-4"
        :style="{ width: `${mapWidth}px`, position: 'relative' }"
    >
        <!-- Dashed path -->
        <div
            ref="dashedPath"
            class="absolute top-1/2 -translate-y-1/2 h-px border-dashed border-t border-sky-500/50 hidden-el"
            :style="{ width: `${mapWidth - svgWidth}px`, left: `${svgWidth / 2}px` }"
        ></div>

        <!-- Intro Cube -->
        <div
            ref="introCube"
            class="border border-l-pink-600 border-r-green-600 border-t-blue-600 border-b-yellow-600 absolute top-1/2 -translate-y-1/2 hidden-el"
            :style="{ width: `${cubeWidth}px`, height: `${cubeWidth}px`, left: `${introCubePosition}px` }"
        >
            <div
                class="border border-l-pink-600 border-r-green-600 border-t-blue-600 border-b-yellow-600 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hidden-el"
                :style="{ width: `${cubeWidth * 0.75}px`, height: `${cubeWidth * 0.75}px` }"
            >
                <div
                    class="border border-l-pink-600 border-r-green-600 border-t-blue-600 border-b-yellow-600 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hidden-el"
                    :style="{ width: `${cubeWidth * 0.5}px`, height: `${cubeWidth * 0.5}px` }"
                >
                    <div
                        class="border border-l-pink-600 border-r-green-600 border-t-blue-600 border-b-yellow-600 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hidden-el"
                        :style="{ width: `${cubeWidth * 0.25}px`, height: `${cubeWidth * 0.25}px` }"
                    ></div>
                </div>
            </div>
        </div>

        <!-- Project Cubes -->
        <div
            v-for="(projectItem, index) in projects"
            :key="index"
            :ref="el => projectCubes[index] = el as HTMLElement"
            class="border absolute top-1/2 -translate-y-1/2 hidden-el"
            :class="{
                'border-blue-600': props.project?.slug === projectItem.slug && props.project !== null,
                'border-white/40': props.project?.slug !== projectItem.slug || props.project === null,
            }"
            :style="{ width: `${cubeWidth}px`, height: `${cubeWidth}px`, left: `${projectCubePositions[index]}px` }"
        ></div>

        <!-- Camera (SVG Triangle) -->
        <svg
            ref="cameraSvg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="absolute top-1/2 rotate-90 -translate-y-1/2 -translate-x-1/2 hidden-el"
            :style="{ width: `${svgWidth}px`, left: `${cameraPosition}px` }"
        >
            <path
                class="fill-green-500"
                d="M0 480l18.3-32L237.6 64.2 256 32l18.4 32.2L493.7 448 512 480l-36.9 0L36.9 480 0 480zM256 96.5L55.1 448l401.7 0L256 96.5z"
            />
        </svg>
    </div>
</template>

<style scoped>
.hidden-el {
    opacity: 0;
}
</style>
