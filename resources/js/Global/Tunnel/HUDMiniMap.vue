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
const { progress, isInPortalLock, activeProjectIndex, cubeMetadata } = storeToRefs(projectStore); // Add new refs
const { screenWidth } = storeToRefs(screenStore);

// Constants from projectStore
const CUBE_SPACING = projectStore.cubeSpacing; // 500
const FIRST_CUBE_Z = projectStore.firstCubeZ; // -500

// Reactive size configuration
const isMobile = computed(() => screenWidth.value < 768);
const totalCubes = 1 + projects.length; // Intro + projects = 18
const totalDepth = 10000; // Total Z depth
const mapWidth = computed(() => {
    return isMobile.value ? screenWidth.value - 16 : (totalCubes - 1) * 16 * 2; // Mobile: screenWidth - 16px, Desktop: 544px
});
const cubeWidth = computed(() => {
    return isMobile.value ? mapWidth.value / ((totalCubes - 1) * 2) : 16; // Mobile: dynamic, Desktop: 16px
});
const svgWidth = computed(() => cubeWidth.value / 2); // Half of cubeWidth
const scaleFactor = computed(() => mapWidth.value / totalDepth); // Dynamic based on mapWidth

const cameraPosition = ref(0); // SVG left position in px
const cameraRotation = ref(0);
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

// Update camera position based on progress
const updateCameraPosition = (newProgress: number) => {
    const scaledPosition = newProgress * scaleFactor.value + cubeWidth.value / 2;
    cameraPosition.value = Math.min(Math.max(scaledPosition, 0), mapWidth.value - svgWidth.value);
};

// Animate camera position with GSAP
watch(progress, (newProgress) => {
    if (!isInPortalLock.value) { // Only update if not in portal lock
        gsap.to(cameraPosition, {
            value: newProgress * scaleFactor.value + cubeWidth.value / 2,
            duration: 0.3,
            ease: 'power2.out',
            onUpdate: () => {
                cameraPosition.value = Math.min(Math.max(cameraPosition.value, 0), mapWidth.value - svgWidth.value);
            },
        });
    }
}, { immediate: true });

watch(projects, () => {
    console.log('Projects changed, re-rendering cubes');
});

watch([isInPortalLock, activeProjectIndex], ([newLock, newIndex], [oldLock]) => {
    if (newLock && newIndex !== null && !oldLock) { // Entering portal lock
        const targetPosition = projectCubePositions.value[newIndex] + cubeWidth.value / 2;
        let targetRotation = 0; // Default (pointing right)
        const keyartLocation = projects[newIndex]?.keyartLocation;
        const cubeMeta = cubeMetadata.value?.find(meta => meta.index === newIndex);
        const isFlipped = cubeMeta?.flipped || false;

        // Determine portal face and rotation
        switch (keyartLocation) {
            case 'left': // Portal on right
            case 'bottom': // Portal on top
                targetRotation = isFlipped ? -90 : 90; // Flipped: up, Normal: down
                break;
            case 'right': // Portal on left
            case 'top': // Portal on bottom
                targetRotation = isFlipped ? 90 : -90; // Flipped: down, Normal: up
                break;
        }

        gsap.to(cameraPosition, {
            value: targetPosition,
            duration: 1,
            ease: 'power2.out',
            onUpdate: () => {
                cameraPosition.value = Math.min(Math.max(cameraPosition.value, 0), mapWidth.value - svgWidth.value);
            },
        });
        gsap.to(cameraSvg.value, {
            rotation: targetRotation,
            duration: 1,
            ease: 'power2.out',
            onUpdate: () => {
                cameraRotation.value = cameraSvg.value?.rotation || 0;
            },
        });
    } else if (!newLock && oldLock) { // Exiting portal lock
        gsap.to(cameraPosition, {
            value: progress.value * scaleFactor.value + cubeWidth.value / 2,
            duration: 2,
            ease: 'power3.inOut',
            onUpdate: () => {
                cameraPosition.value = Math.min(Math.max(cameraPosition.value, 0), mapWidth.value - svgWidth.value);
            },
        });
        gsap.to(cameraSvg.value, {
            rotation: 0, // Return to default (pointing right)
            duration: 2,
            ease: 'power3.inOut',
            onUpdate: () => {
                cameraRotation.value = cameraSvg.value?.rotation || 0;
            },
        });
    }
});
// Handle resize
const handleResize = () => {
    updateCameraPosition(progress.value); // Recalculate positions on resize
};

onMounted(() => {
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

        });
    }

    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
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
            class="absolute top-1/2 -translate-y-1/2 h-px border-dotted border-t border-green-500/60 hidden-el"
            :style="{ width: `${mapWidth - svgWidth}px`, left: `${svgWidth / 2}px` }"
        ></div>

        <!-- Intro Cube -->

        <div
            ref="introCube"
            class="border border-l-pink-600 border-r-green-600 border-t-blue-600 border-b-yellow-600 absolute top-1/2 -translate-y-1/2 hidden-el introCube"
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
                'border-fuchsia-600 shadow-fuchsia': props.project?.slug === projectItem.slug && props.project !== null,
                'border-cyan-600/60': props.project?.slug !== projectItem.slug || props.project === null,
            }"
            :style="{ width: `${cubeWidth}px`, height: `${cubeWidth}px`, left: `${projectCubePositions[index]}px` }"
        ></div>

        <svg
            ref="cameraSvg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 hidden-el"
            :style="{ width: `${svgWidth}px`, left: `${cameraPosition}px` }"
        >
            <path
                class="fill-green-500"
                  d="M0,0l32,18.3,383.8,219.3,32.2,18.4-32.2,18.4L32,493.7,0,512V0ZM383.5,256L32,55.1v401.7l351.5-200.8Z"
            />
        </svg>

    </div>
</template>

<style scoped>
@keyframes spin {
    from {
        transform: rotate(0deg) translateY(-50%);
    }
    to {
        transform: rotate(360deg) translateY(-50%);
    }
}
.introCube{
    animation: spin 4s linear infinite;
    transform-origin: top center;
}

.hidden-el {
    opacity: 0;
}
</style>
