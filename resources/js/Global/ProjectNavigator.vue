<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref, watch} from 'vue';
import { Link } from '@inertiajs/vue3';
import { useTunnelStore } from '@/Stores/tunnelStore';
import * as THREE from 'three';
import { gsap } from 'gsap';
import {storeToRefs} from "pinia";
import AngleRightSharp from "@/Global/Icons/AngleRightSharp.vue";
import ProjectNavigatorCubes from "@/Global/ProjectNavigatorCubes.vue";

const tunnelStore = useTunnelStore();

const { projects, project } = storeToRefs(tunnelStore);

// Compute the current project's index in the projects array
const currentIndex = computed((): number => {
    if (!projects.value || !project.value) return -1;
    const currentProject = project.value as App.Data.ProjectData;
    return projects.value.findIndex((p) => p.slug === currentProject.slug);
});

// Compute the previous project
const previousProject = computed(() => {
    if (!projects.value || currentIndex.value === -1) return null;
    const totalProjects = projects.value.length;
    // If at the first project (index 0), wrap to the last project
    const prevIndex = currentIndex.value === 0 ? totalProjects - 1 : currentIndex.value - 1;
    return projects.value[prevIndex];
});

// Compute the next project
const nextProject = computed(() => {
    if (!projects.value || currentIndex.value === -1) return null;
    const totalProjects = projects.value.length;
    // If at the last project, wrap to the first project (index 0)
    const nextIndex = currentIndex.value === totalProjects - 1 ? 0 : currentIndex.value + 1;
    return projects.value[nextIndex];
});

onMounted(() => {



});

</script>

<template>

    <div class="fixed top-0 w-full z-10 px-8 py-4 bg-black/10 flex justify-between items-center">

        <Link
            v-if="previousProject"
            :href="route('project.show', { project: previousProject.slug })"
            as="button"
            class="text-white text-xs hover:text-gray-300 flex gap-1"
        >
            <angle-right-sharp class="w-1 h-auto -scale-x-100"/>
            {{ previousProject.title }}
        </Link>


        <project-navigator-cubes class="absolute left-2/4 -translate-x-2/4" :projects="projects" :active-index="currentIndex" />


        <Link
            v-if="nextProject"
            :href="route('project.show', { project: nextProject.slug })"
            as="button"
            class="text-white text-xs hover:text-gray-300 flex gap-1"
        >
            {{ nextProject.title }}
            <angle-right-sharp class="w-1 h-auto"/>
        </Link>

    </div>

</template>

<style scoped>

</style>
