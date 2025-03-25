<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { onMounted, onUnmounted, ref, reactive, inject } from 'vue';
import { useTunnelStore } from '@/Stores/tunnelStore';
import { useScreenStore } from "@/Stores/screenStore";

import { ProjectData } from '@/types/generated';
import { gsap } from 'gsap';
import ProjectLayout from '@/Layouts/ProjectLayout.vue';

defineOptions({
    layout: (h, page) => h(ProjectLayout, () => [page]),
});

const props = defineProps<{
    projects: ProjectData[];
    project: ProjectData;
    storage: string;
}>();

const tunnelStore = useTunnelStore();
tunnelStore.setProject(props.project);
tunnelStore.setProjects(props.projects);

const screenStore = useScreenStore();

const previousUrl = inject<Ref<string>>('previousUrl');

const headerImageStyle = reactive({
    backgroundImage: `url("${props.storage}projects/${props.project.slug}/header.jpg")`,
});

const logo = ref(`${props.storage}projects/${props.project.slug}/logo.webp`);
const overlay = ref<HTMLElement | null>(null);
const twinklingSvg = ref<SVGSVGElement | null>(null);
const trailSvg = ref<SVGSVGElement | null>(null);
const container = ref<HTMLDivElement | null>(null);

// Define the four colors for twinkling rects
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffffff'];

// Generate random rectangles with colors
const generateRandomRects = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const gridSize = 16;
    const maxX = Math.floor(width / gridSize);
    const maxY = Math.floor(height / gridSize);
    const rectCount = 36;
    const positions = new Set<string>();

    while (positions.size < rectCount) {
        const x = Math.floor(Math.random() * maxX) * gridSize;
        const y = Math.floor(Math.random() * maxY) * gridSize;
        positions.add(`${x},${y}`);
    }

    return Array.from(positions).map(pos => {
        const [x, y] = pos.split(',').map(Number);
        const color = colors[Math.floor(Math.random() * colors.length)];
        return { x: x + 1, y: y + 1, color };
    });
};

const rects = ref(generateRandomRects());

// Trailing rectangles config
const maxTrailingRects = 20; // Increased from 15
const activeTrails = ref<{ id: string; rect: SVGRectElement; tween: gsap.core.Tween }[]>([]);

// Throttle function
const throttle = (func: (...args: any[]) => void, limit: number) => {
    let inThrottle: boolean;
    return (...args: any[]) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

// Mouse move handler
const onMouseMove = (event: MouseEvent) => {
    if (!container.value || !trailSvg.value) return;
    const rect = container.value.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Check if mouse is within container bounds
    if (mouseX < 0 || mouseY < 0 || mouseX > rect.width || mouseY > rect.height) return;

    const gridX = Math.floor(mouseX / 16) * 16 + 1;
    const gridY = Math.floor(mouseY / 16) * 16 + 1;

    // Remove oldest if at limit
    if (activeTrails.value.length >= maxTrailingRects) {
        const oldest = activeTrails.value.shift();
        if (oldest) {
            oldest.tween.kill();
            trailSvg.value?.removeChild(oldest.rect);
        }
    }

    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 5)}`;

    // Create and append new SVG rect (white only)
    const trailRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    trailRect.setAttribute('id', `trail-${id}`);
    trailRect.setAttribute('x', gridX.toString());
    trailRect.setAttribute('y', gridY.toString());
    trailRect.setAttribute('width', '15');
    trailRect.setAttribute('height', '15');
    trailRect.setAttribute('fill', '#ffffff');
    trailRect.setAttribute('opacity', '0');
    trailSvg.value.appendChild(trailRect);

    // Animate and remove
    const tween = gsap.fromTo(
        trailRect,
        { opacity: 0.1 },
        {
            opacity: 0.0, // Increased to 20%
            duration: 3.5, // Increased to 3.5s (7s total)
            yoyo: false,
            repeat: 0,
            ease: 'sine.inOut',
            onComplete: () => {
                activeTrails.value = activeTrails.value.filter(t => t.id !== id);
                trailSvg.value?.removeChild(trailRect);
            },
        }
    );

    activeTrails.value.push({ id, rect: trailRect, tween });
};

const throttledMouseMove = throttle(onMouseMove, 100);

// Circle wipe animation
const animateCircleWipe = () => {
    if (!overlay.value) return;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const maxRadius = Math.sqrt(viewportWidth ** 2 + viewportHeight ** 2) / 2;
    gsap.fromTo(
        overlay.value,
        {
            WebkitMask: 'radial-gradient(circle 0px at 50% 50%, transparent 95%, black 100%)',
            mask: 'radial-gradient(circle 0px at 50% 50%, transparent 95%, black 100%)',
        },
        {
            WebkitMask: `radial-gradient(circle ${maxRadius}px at 50% 50%, transparent 95%, black 100%)`,
            mask: `radial-gradient(circle ${maxRadius}px at 50% 50%, transparent 95%, black 100%)`,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => {
                if (overlay.value) overlay.value.style.display = 'none';
            },
        }
    );
};

// Twinkling animation for random rectangles
const animateTwinkling = () => {
    rects.value.forEach((rect, index) => {
        gsap.fromTo(
            twinklingSvg.value?.querySelector(`#rect-${index}`),
            { opacity: 0 },
            {
                opacity: 0.08,
                duration: 2 + Math.random() * 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: Math.random() * 2,
            }
        );
    });
};

onMounted(() => {
    if (previousUrl?.value === '/') animateCircleWipe();
    else if (overlay.value) overlay.value.style.display = 'none';
    animateTwinkling();
    document.body.addEventListener('mousemove', throttledMouseMove);
});

onUnmounted(() => {
    gsap.killTweensOf(overlay.value);
    gsap.killTweensOf(twinklingSvg.value?.querySelectorAll('rect'));
    activeTrails.value.forEach(t => t.tween.kill());
    document.body.removeEventListener('mousemove', throttledMouseMove);
});
</script>

<template>
    <Head :title="project.title" />

    <div ref="container" class="relative text-white bg-no-repeat bg-contain aspect-phero" :style="project.hasBg ? headerImageStyle : ''">

        <svg ref="twinklingSvg" class="absolute inset-0 w-full h-full pointer-events-none z-40" aria-hidden="true"><defs><pattern id="grid-pattern" width="16" height="16" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="0" y2="16" stroke="white" stroke-width="1" opacity="0.04"/><line x1="0" y1="0" x2="16" y2="0" stroke="white" stroke-width="1" opacity="0.04"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid-pattern)"/><rect v-for="(rect, index) in rects" :key="index" :id="`rect-${index}`" :x="rect.x" :y="rect.y" width="15" height="15" :fill="rect.color" opacity="0"/></svg>

        <svg ref="trailSvg" class="absolute inset-0 w-full h-full pointer-events-none z-41" aria-hidden="true"></svg>

        <section ref="overlay" class="fixed inset-0 bg-black z-50 pointer-events-none"></section>

        <section class="project-content pt-80 px-2 text-center">
            <img
                class="block mx-auto max-w-32 h-auto mb-4"
                v-if="project.hasLogo"
                :src="logo"
                :alt="project.title + ' logo'"
            >
            <h1 class="text-2xl text-white">{{ project.title }}</h1>
            <h2 class="text-white/50">{{ project.client }}</h2>
            <p class="mt-4 text-center text-sm max-w-xl mx-auto" v-html="project.description"></p>
        </section>

        <div class="flex justify-center items-center mt-64"></div>

    </div>
</template>

<style scoped>
.project-content {
    position: relative;
    will-change: transform, opacity;
}
</style>
