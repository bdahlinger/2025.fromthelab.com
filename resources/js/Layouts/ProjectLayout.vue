<!-- resources/js/Layouts/ProjectLayout.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import LogoMark from '@/Global/LogoMark.vue';
import ProjectNavigator from '@/Global/ProjectNavigator.vue';
import { Link, router, usePage } from '@inertiajs/vue3';
import GlobalFooter from '@/Global/GlobalFooter.vue';
import App from '@/Pages/App.vue';


const page = usePage<{
    projects: ProjectData[];
    project: ProjectData;
    previousProject: ProjectData | null;
    nextProject: ProjectData | null;
}>();

const project = ref<ProjectData>(page.props.project);
const projects = ref<ProjectData[]>(page.props.projects);
const previousProject = ref<ProjectData>(page.props.previousProject);
const nextProject = ref<ProjectData>(page.props.nextProject);

const transitionDirection = ref<'next' | 'prev' | null>(null);

watch(
    () => page.props,
    (newProps) => {
        project.value = newProps.project;
        projects.value = newProps.projects;
        previousProject.value = newProps.previousProject;
        nextProject.value = newProps.nextProject;
    },
    { deep: true } // Deep watch to catch nested prop changes
);

onMounted(() => {
    router.on('before', (event) => {
        const nextSlug = event.detail.visit.url.pathname.split('/').pop();
        if (nextSlug === nextProject.value?.slug) {
            transitionDirection.value = 'next';
        } else if (nextSlug === previousProject.value?.slug) {
            transitionDirection.value = 'prev';
        } else {
            transitionDirection.value = null; // No transition for non-adjacent navigation
        }
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
            :previous-project="previousProject"
            :next-project="nextProject"
        />

        <nav class="flex flex-col items-center justify-center mt-14 md:mt-[5vw] 3xl:mt-[5rem] absolute top-4 left-1/2 -translate-x-1/2 z-10">
            <Link :href="'/'">
                <logo-mark class="" />
            </Link>
        </nav>

        <div class="transition-container">
            <transition :name="transitionDirection === 'next' ? 'slide-next' : 'slide-prev'">
                <div :key="page.url" class="page-wrapper">
                    <slot/>
                </div>
            </transition>
        </div>


        <global-footer class="mt-12" />
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
    //overflow: hidden; /* Contain sliding content */
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
