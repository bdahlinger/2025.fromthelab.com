<!-- resources/js/Global/ProjectNavigator.vue -->
<script setup lang="ts">
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';
import { useScreenStore } from '@/Stores/screenStore';
import AngleRightSharp from "@/Global/Icons/AngleRightSharp.vue";
import ProjectNavigatorCubes from '@/Global/ProjectNavigatorCubes.vue';


const screenStore = useScreenStore();

const props = defineProps<{
    projects: ProjectData[];
    project: ProjectData;
}>();

const currentIndex = computed(() => {
    if (!props.projects|| !props.project) return -1;
    return props.projects.findIndex((p) => p.slug === props.project.slug);
});

const previousProject = computed(() => {
    if (!props.projects || currentIndex.value === -1) return null;
    const totalProjects = props.projects.length;
    const prevIndex = currentIndex.value === 0 ? totalProjects - 1 : currentIndex.value - 1;
    return props.projects[prevIndex];
});

const nextProject = computed(() => {
    if (!props.projects || currentIndex.value === -1) return null;
    const totalProjects = props.projects.length;
    const nextIndex = currentIndex.value === totalProjects - 1 ? 0 : currentIndex.value + 1;
    return props.projects[nextIndex];
});
</script>

<template>
    <div class="fixed top-0 w-full z-20 px-8 py-4 bg-black/10 flex justify-between items-center">
        <Link
            v-if="previousProject"
            :href="route('project.show', { project: previousProject.slug })"
            as="button"
            class="text-white text-xs hover:text-gray-300 flex gap-1"
        >
            <angle-right-sharp class="w-1 h-auto -scale-x-100" />
            <span v-html="screenStore.screenWidth > 768 ? previousProject.title : 'Previous Project'"></span>
        </Link>

        <project-navigator-cubes v-if="screenStore.screenWidth >= 900" class="absolute left-2/4 -translate-x-2/4"
             :project="project"
             :projects="projects"
             :active-index="currentIndex" />

        <Link
            v-if="nextProject"
            :href="route('project.show', { project: nextProject.slug })"
            as="button"
            class="text-white text-xs hover:text-gray-300 flex gap-1"
        >
            <span v-html="screenStore.screenWidth > 768 ? previousProject.title : 'Next Project'"></span>
            <angle-right-sharp class="w-1 h-auto" />
        </Link>
    </div>
</template>
