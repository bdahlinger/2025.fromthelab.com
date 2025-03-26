<script setup lang="ts">
import {Head, Link} from '@inertiajs/vue3';
import {onMounted, onUnmounted, ref, reactive, inject} from 'vue';
import {useProjectStore} from '@/Stores/projectStore';
import { App } from '@/Types/enums';
import {ProjectData} from '@/types/generated';
import {gsap} from 'gsap';
import ProjectLayout from '@/Layouts/ProjectLayout.vue';

defineOptions({
    layout: (h, page) => h(ProjectLayout, () => [page]),
});

const props = defineProps<{
    projects: ProjectData[];
    project: ProjectData;
    storage: string;
}>();

const projectStore = useProjectStore();
projectStore.setProject(props.project);
projectStore.setProjects(props.projects);



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
        return {x: x + 1, y: y + 1, color};
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
        {opacity: 0.1},
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

    activeTrails.value.push({id, rect: trailRect, tween});
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
            {opacity: 0},
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

const determineColorByContributionClass = (type:App.Enums.Contributions) => {
    switch(type) {
        case App.Enums.Contributions.BACKEND:
            return 'fill-red-400'
        case App.Enums.Contributions.FRONTEND:
            return 'fill-blue-400'
        case App.Enums.Contributions.DEVOPS:
            return 'fill-green-500'
        case App.Enums.Contributions.DESIGN:
            return 'fill-purple-400'
        case App.Enums.Contributions.IDEATION:
            return 'fill-magenta-400'
        case App.Enums.Contributions.UX:
            return 'fill-yellow-400'
        default:
            return 'fill-green-500'
    }
}
const determineColorBySegmentClass = (type:App.Enums.Segments) => {
    switch(type) {
        case App.Enums.Segments.LARAVEL:
            return 'fill-red-400/10 text-red-400 ring-red-400/20'
        case App.Enums.Segments.VUE_JS:
            return 'fill-blue-400/10 text-blue-40 ring-blue-400/200'
        case App.Enums.Segments.WORDPRESS:
            return 'fill-sky-500/10 text-sky-400 ring-sky-400/20'
        case App.Enums.Segments.HEADLESS_WORDPRESS:
            return 'fill-purple-400/10 text-purple-400 ring-purple-400/20'
        case App.Enums.Segments.ROOTS_BEDROCK:
            return 'fill-purple-400/10 text-purple-400 ring-purple-400/20'
        case App.Enums.Segments.ROOTS_SAGE:
            return 'fill-purple-400/10 text-purple-400 ring-purple-400/20'
        case App.Enums.Segments.SHOPIFY:
            return 'fill-magenta-400/10 text-magenta-400 ring-magenta-400/20'
        case App.Enums.Segments.THREEJS:
            return 'fill-orange-400/10 text-orange-400 ring-orange-400/20'
        case App.Enums.Segments.AWS:
            return 'fill-orange-400/10 text-orange-400 ring-orange-400/20'
        case App.Enums.Segments.INERTIAJS:
            return 'fill-white-400/10 text-white-400 ring-gray-800 ring-gray-400/20'
        case App.Enums.Segments.GSAP:
            return 'fill-yellow-400/10 text-yellow-400 ring-yellow-400/20'
        case App.Enums.Segments.SCSS:
            return 'fill-amber-400/10 text-amber-400 ring-amber-400/20'
        case App.Enums.Segments.WEBGL:
            return 'fill-lime-400/10 text-lime-400 ring-lime-400/20'
        case App.Enums.Segments.CUSTOM_CMS:
            return 'fill-emerald-400/10 text-emerald-400 ring-emerald-400/20'
        case App.Enums.Segments.TWILL:
            return 'fill-sky-400/10 text-sky-400 ring-sky-400/20'
        case App.Enums.Segments.STATIC:
            return 'fill-violet-400/10 text-violet-400 ring-violet-400/20'
        case App.Enums.Segments.TAILWIND:
            return 'fill-indigo-400/10 text-indigo-400 ring-indigo-400/20'
        case App.Enums.Segments.SEGMENT:
            return 'fill-rose-400/10 text-rose-400 ring-rose-400/20'
        case App.Enums.Segments.LOCALIZED:
            return 'fill-pink-400/10 text-pink-400 ring-pink-400/20'
        case App.Enums.Segments.GRIDSOME:
            return 'fill-fuchsia-400/10 text-fuchsia-400 ring-fuchsia-400/20'
        case App.Enums.Segments.REACT:
            return 'fill-lime-400/10 text-lime-400 ring-lime-400/20'
        case App.Enums.Segments.NEXT_JS:
            return 'fill-sky-400/10 text-sky-400 ring-sky-400/20'
        case App.Enums.Segments.SALESFORCE:
            return 'fill-sky-400/10 text-sky-400 ring-sky-400/20'
        default:
            return 'fill-green-400/10 text-green-400 ring-green-400/20'
    }
}
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
    <Head :title="project.title"/>

    <div ref="container" class="relative text-white bg-no-repeat bg-cover md:bg-contain aspect-pheroMobile md:aspect-phero"
         :style="project.hasBg ? headerImageStyle : ''">

        <svg ref="twinklingSvg" class="absolute inset-0 w-full h-full pointer-events-none z-40" aria-hidden="true">
            <defs>
                <pattern id="grid-pattern" width="16" height="16" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="16" stroke="white" stroke-width="1" opacity="0.04"/>
                    <line x1="0" y1="0" x2="16" y2="0" stroke="white" stroke-width="1" opacity="0.04"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)"/>
            <rect v-for="(rect, index) in rects" :key="index" :id="`rect-${index}`" :x="rect.x" :y="rect.y" width="15"
                  height="15" :fill="rect.color" opacity="0"/>
        </svg>

        <svg ref="trailSvg" class="absolute inset-0 w-full h-full pointer-events-none z-41" aria-hidden="true"></svg>

        <section ref="overlay" class="fixed inset-0 bg-black z-50 pointer-events-none"></section>

        <section class="project-content pt-48 md:pt-[18vw] 3xl:pt-[18rem] px-2 text-center">
            <img
                class="block mx-auto max-w-32 md:max-w-[8vw] 3xl:max-w-[8rem] h-auto mb-4 md:mb-[1vw] 3xl:mb-[1rem]"
                v-if="project.hasLogo"
                :src="logo"
                :alt="project.title + ' logo'"
            >
            <h1 class="text-lg md:text-[1.5vw] 3xl:text-[1.5rem] md:leading-[2vw] 3xl:leading-[2rem] text-white">{{ project.title }}</h1>
            <h2 class="md:text-[1vw] 3xl:text-[1rem] md:leading-[1.5vw] 3xl:leading-[1.5rem] text-white/50">
                <span v-html="project.client"></span>
                &middot;
                <span v-html="project.classification"></span>
            </h2>
            <div class="contributions flex flex-wrap justify-center gap-1 md:gap-[.5vw] 3xl:gap-[.5rem] mt-2 md:mt-[.5vw] 3xl:mt-[.5rem]" v-if="project.contributions.length > 0">
                <span
                    v-for="(type,index) in project.contributions" :key="index"
                    class="inline-flex items-center gap-x-2 md:gap-x-[.5vw] 3xl:gap-x-[.5rem] rounded-full px-2 md:px-[.5vw] 3xl:px-[.5rem] py-1 md:py-[.25vw] 3xl:py-[.25rem] text-xs md:text-[.75vw] 3xl:text-[.75rem] font-medium ring-1 ring-inset">
                    <svg class="size-1.5 md:size-[.375vw] 3xl:size-[.375rem]" :class="determineColorByContributionClass(type)" viewBox="0 0 6 6" aria-hidden="true">
                      <circle cx="3" cy="3" r="3"/>
                    </svg>
                    {{type}}
                </span>
            </div>
            <div class="segments flex flex-wrap justify-center gap-1 md:gap-[.5vw] 3xl:gap-[.5rem] mt-2 md:mt-[.5vw] 3xl:mt-[.5rem]" v-if="project.segments.length > 0">
                <span
                    v-for="(type,index) in project.segments" :key="index"
                    class="inline-flex items-center rounded-full px-2 md:px-[.5vw] 3xl:px-[.5rem] py-1 md:py-[.25vw] 3xl:py-[.25rem] text-xxs md:text-[.675vw] 3xl:text-[.675rem] font-medium ring-1 ring-inset " :class="determineColorBySegmentClass(type)">
                    {{type}}
                </span>
            </div>
            <p class="mt-4 md:mt-[2vw] 3xl:mt-[2rem] text-center text-sm md:text-[.875vw] 3xl:text-[.875rem] leading-5 md:leading-[1.25vw] 3xl:leading-[1.25rem] md:max-w-[50vw] 3xl:max-w-[50rem] mx-auto" v-html="project.description"></p>
        </section>



    </div>
<!--    <div class="flex justify-center items-center mt-64"></div>-->
</template>

<style scoped>
.project-content {
    position: relative;
    will-change: transform, opacity;
}
</style>
