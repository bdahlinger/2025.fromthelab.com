<!-- resources/js/Components/ProjectTransition.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { router, usePage } from '@inertiajs/vue3';
import { useTunnelStore } from '@/Stores/tunnelStore';
import { storeToRefs } from 'pinia';
import { gsap } from 'gsap';
import Show from '@/Pages/Project/Show.vue'; // Adjust path as needed

const tunnelStore = useTunnelStore();
const { projects, project } = storeToRefs(tunnelStore);

// Use Inertia's usePage to get current page props
const page = usePage();

// State for managing transitioning pages
const pages = ref<{ key: string; props: any; direction?: 'next' | 'prev' }[]>([]);

const currentIndex = computed(() => {
    if (!projects.value || !project.value) return -1;
    return projects.value.findIndex(p => p.slug === project.value.slug);
});

// Add or update page in the transition queue
const updatePages = (newProps: any, direction: 'next' | 'prev' | null) => {
    const newKey = newProps.project.slug;
    if (pages.value.length === 0) {
        // Initial load, use Inertia props directly
        pages.value.push({ key: newKey, props: newProps });
    } else if (!pages.value.some(p => p.key === newKey)) {
        // New page, animate transition
        const oldPage = pages.value[0];
        oldPage.direction = direction; // Mark old page for exit
        pages.value.push({ key: newKey, props: newProps, direction });
        animateTransition(direction);
    }
};

// Animate the transition between old and new pages
const animateTransition = (direction: 'next' | 'prev' | null) => {
    if (!direction) return; // No animation if no direction (initial load)
    const containers = document.querySelectorAll('.project-page');
    if (containers.length !== 2) return; // Need both old and new pages

    const oldPage = containers[0] as HTMLElement;
    const newPage = containers[1] as HTMLElement;

    // Ensure both pages are absolutely positioned to overlap
    gsap.set([oldPage, newPage], { position: 'absolute', top: 0, left: 0, width: '100%' });

    // Initial position for new page
    const fromX = direction === 'next' ? '100%' : '-100%';
    const toX = direction === 'next' ? '-100%' : '100%';
    gsap.set(newPage, { x: fromX, opacity: 1 });

    // Animate both pages
    const tl = gsap.timeline({
        onComplete: () => {
            pages.value.shift(); // Remove old page immediately after animation
            gsap.set(newPage, { clearProps: 'all' }); // Reset styles
        },
    });

    tl.to(oldPage, { x: toX, opacity: 0, duration: 0.8, ease: 'power2.in' })
        .to(newPage, { x: '0%', opacity: 1, duration: 0.8, ease: 'power2.out' }, 0); // Simultaneous
};

// Handle Inertia navigation
onMounted(() => {
    // Initial page load using Inertia's page props
    const initialProps = page.props;
    if (initialProps.project && initialProps.projects) {
        tunnelStore.setProject(initialProps.project);
        tunnelStore.setProjects(initialProps.projects);
        updatePages(initialProps, null);
    } else {
        console.error('Initial props missing:', initialProps);
    }

    router.on('before', (event) => {
        const currentIndexVal = currentIndex.value;
        const nextSlug = event.detail.visit.url.pathname.split('/').pop();
        const nextIndex = projects.value.findIndex(p => p.slug === nextSlug);
        if (nextIndex === -1 || currentIndexVal === -1) return;

        const direction = nextIndex > currentIndexVal ? 'next' : 'prev';
        event.detail.visit.preserveState = false;
        return new Promise((resolve) => setTimeout(() => resolve(), 0)); // Minimal delay
    });

    router.on('success', (event) => {
        const nextSlug = event.detail.page.props.project.slug;
        const nextIndex = projects.value.findIndex(p => p.slug === nextSlug);
        const direction = nextIndex > currentIndex.value ? 'next' : 'prev';
        updatePages(event.detail.page.props, direction);
    });
});

onUnmounted(() => {
    gsap.killTweensOf('.project-page');
});
</script>

<template>
    <div class="relative transition-container">
        <div v-for="(page, index) in pages" :key="page.key" class="project-page">
            <Show v-bind="page.props" />
        </div>
    </div>
</template>

<style scoped>
.transition-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden; /* Prevent overflow during transition */
}

.project-page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    will-change: transform, opacity;
}
</style>
