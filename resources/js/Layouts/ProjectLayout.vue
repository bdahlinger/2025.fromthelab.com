<!-- resources/js/Layouts/ProjectLayout.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import LogoMark from '@/Global/LogoMark.vue';
import ProjectNavigator from '@/Global/ProjectNavigator.vue';
import { useTunnelStore } from '@/Stores/tunnelStore';
import { Link, router, usePage } from '@inertiajs/vue3';
import GlobalFooter from '@/Global/GlobalFooter.vue';
import App from '@/Pages/App.vue';

const tunnelStore = useTunnelStore();
//const { projects, project } = storeToRefs(tunnelStore);

const page = usePage<{
    projects: ProjectData[];
    project: ProjectData;
}>();

const project = ref<ProjectData>(page.props.project);
const projects = ref<ProjectData[]>(page.props.projects);

const transitionDirection = ref<'next' | 'prev' | null>(null);

const currentIndex = computed(() => {
    if (!projects.value || !project.value ) return -1;
    return projects.value.findIndex(p => p.slug === project.value.slug);
});

watch(
    () => page.props,
    (newProps) => {
        project.value = newProps.project;
        projects.value = newProps.projects;
    },
    { deep: true } // Deep watch to catch nested prop changes
);

onMounted(() => {
    router.on('before', (event) => {
        const currentIndexVal = currentIndex.value;
        const nextSlug = event.detail.visit.url.pathname.split('/').pop();
        const nextIndex = projects.value.findIndex(p => p.slug === nextSlug);
        if (nextIndex === -1 || currentIndexVal === -1) return;

        transitionDirection.value = nextIndex > currentIndexVal ? 'next' : 'prev';
    });

    router.on('success', () => {
        transitionDirection.value = null; // Reset after transition
    });
});

onUnmounted(() => {
    // Cleanup not needed for CSS transitions
});
</script>

<template>

    <app>

    <div class="root-container">

        <project-navigator
            :project="project"
            :projects="projects"
        />

        <nav class="flex flex-col items-center justify-center mt-28 absolute top-4 left-1/2 -translate-x-1/2 z-10">
            <Link :href="'/'">
                <logo-mark class="" />
            </Link>
        </nav>

        <div class="transition-container">
            <transition :name="transitionDirection === 'next' ? 'slide-next' : 'slide-prev'">
                <div :key="page.url" class="page-wrapper">
                    <slot />
                </div>
            </transition>
        </div>



        <global-footer class="mt-96" />
    </div>

    </app>
</template>

<style scoped>
.root-container {
    position: relative;
    min-height: 100vh; /* Ensure it takes full viewport height */
    width: 100%;
    overflow-x: hidden; /* Prevent horizontal scrollbars */
    display: flex;
    flex-direction: column;
}

.transition-container {
    position: relative;
    width: 100%;
    flex-grow: 1; /* Take available space */
    overflow: hidden; /* Contain sliding content */
}

.page-wrapper {
    width: 100%;
    position: relative; /* Default in normal flow */
}

/* Transition styles */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
    transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
}

/* Entering page: absolute to overlap */
.slide-next-enter-active,
.slide-prev-enter-active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1; /* Ensure new page is above old page */
}

/* Next direction */
.slide-next-enter-from {
    transform: translateX(100%);
    opacity: 0;
}
.slide-next-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

/* Prev direction */
.slide-prev-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}
.slide-prev-leave-to {
    transform: translateX(100%);
    opacity: 0;
}
</style>
