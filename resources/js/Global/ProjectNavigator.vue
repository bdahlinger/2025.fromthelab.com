<!-- resources/js/Global/ProjectNavigator.vue -->
<script setup lang="ts">
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';
import AngleRightSharp from "@/Global/Icons/AngleRightSharp.vue";
import ProjectNavigatorCubes from '@/Global/ProjectNavigatorCubes.vue';
import { useScreenStore } from '@/Stores/screenStore';

const screenStore = useScreenStore();

const props = defineProps<{
    projects: ProjectData[];
    project: ProjectData;
    previousProject: ProjectData | null;
    nextProject: ProjectData | null;
}>();

const currentIndex = computed(() => {
    if (!props.projects|| !props.project) return -1;
    return props.projects.findIndex((p) => p.slug === props.project.slug);
});

</script>

<template>
    <div class="fixed top-0 w-full z-20 px-8 py-4 bg-black/10 flex justify-between items-center">
        <Link
            v-if="previousProject"
            prefetch
            :href="route('project.show', { project: previousProject.slug })"
            as="button"
            class="font-mono text-white text-xs hover:text-gray-300 flex gap-1"
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
            prefetch
            class="font-mono text-white text-xs hover:text-gray-300 flex gap-1"
        >
            <span v-html="screenStore.screenWidth > 768 ? nextProject.title : 'Next Project'"></span>
            <angle-right-sharp class="w-1 h-auto" />
        </Link>
    </div>
</template>
