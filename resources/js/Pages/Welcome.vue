<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import LogoMark from "@/Global/LogoMark.vue";
//import ThreeDSpheres from "@/Global/ThreeDSpheres.vue";
import CubeStrip from "@/Global/CubeStrip.vue";
//import Hallway from "@/Global/Hallway.vue";
//import HallwayV2 from "@/Global/HallwayV2.vue";
import HallwayEngine from "@/Global/HallwayEngine.vue";
import { ProjectData } from '@/Types/generated';
import { App } from '@/Types/enums';
import GlobalFooter from "@/Global/GlobalFooter.vue";
import AppWrap from '@/Pages/App.vue';
import { computed } from 'vue';

const props = defineProps<{
    //canLogin: boolean
    //canRegister: boolean
    projects: ProjectData[]
    projectGridFile: string
    projectGridFile2: string
    archived: ProjectData[]
}>()

const sortedArchived = computed(() => {
    return [...props.archived].sort((a, b) => a.title.localeCompare(b.title));
})
const classificationValues = computed(() => {
    return Object.values(App.Enums.Classification);
});

const getClassificationColor = (classification: App.Enums.Classification): number => {
    switch (classification) {
        case App.Enums.Classification.ENTERTAINMENT:
            return 'fill-red-400';
        case App.Enums.Classification.ECOMMERCE:
            return 'fill-green-500';
        case App.Enums.Classification.OTHER:
            return 'fill-white';
        default:
            return 'fill-white-500';
    }
};

</script>

<template>

    <app-wrap>
    <Head title="Welcome" />

    <div class="relative bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">

        <nav class="absolute z-10 flex flex-col items-center justify-center top-32 left-1/2 transform -translate-x-1/2">

            <logo-mark/>

        </nav>

	    <div class="overflow-hidden">
            <hallway-engine
                :projects="projects"
                :project-grid-file="projectGridFile"
                :project-grid-file2="projectGridFile2" />
	    </div>
        <div class="mt-16 px-4 md:px-16">

            <h2 class="mb-4 text-white">OTHER WEB PROJECTS</h2>

            <ul class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <li class="text-xs text-white/80 flex items-center gap-2" v-for="(project, index) in sortedArchived" :key="index">
                    <svg class="size-1.5 md:size-[.375vw] 3xl:size-[.375rem]" :class="getClassificationColor(project.classification)" viewBox="0 0 6 6" aria-hidden="true">
                        <circle cx="3" cy="3" r="3"/>
                    </svg>
                    <span v-html="project.title"></span>
                </li>
            </ul>

            <ul class="flex justify-center items-center gap-8 text-xs text-white/80 uppercase mt-12">
                <li class="flex items-center gap-2" v-for="classification in classificationValues" :key="classification">
                    <svg class="size-3" :class="getClassificationColor(classification)" viewBox="0 0 6 6" aria-hidden="true">
                        <circle cx="3" cy="3" r="3"/>
                    </svg>
                    {{ classification }}
                </li>
            </ul>

        </div>
        <div class="flex justify-center items-center">

<!--            <cube-strip :particle-width="20" :particle-height="20" />-->

        </div>

        <div class="flex justify-center items-center ">

<!--            <cube-strip :particle-width="15" :particle-height="160" />-->

        </div>

        <global-footer/>

    </div>
    </app-wrap>
</template>
