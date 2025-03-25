<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import LogoMark from "@/Global/LogoMark.vue";
//import ThreeDSpheres from "@/Global/ThreeDSpheres.vue";
import CubeStrip from "@/Global/CubeStrip.vue";
//import Hallway from "@/Global/Hallway.vue";
//import HallwayV2 from "@/Global/HallwayV2.vue";
import HallwayEngine from "@/Global/HallwayEngine.vue";
import { ProjectData } from '@/types/generated';
import GlobalFooter from "@/Global/GlobalFooter.vue";
import App from '@/Pages/App.vue';

const props = defineProps<{
    //canLogin: boolean
    //canRegister: boolean
    projects: ProjectData[]
    projectGridFile: string
    projectGridFile2: string
}>()

</script>

<template>

    <app>
    <Head title="Welcome" />

    <div class="relative bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">

        <nav class="absolute z-10 flex flex-col items-center justify-center top-32 left-1/2 transform -translate-x-1/2">

            <logo-mark/>

        </nav>

	    <div class="overflow-hidden">
            <hallway-engine :projects="projects" :project-grid-file="projectGridFile" :project-grid-file-2="projectGridFile2" />
	    </div>

        <div class="flex justify-center items-center">

<!--            <cube-strip :particle-width="20" :particle-height="20" />-->

        </div>

        <div class="flex justify-center items-center ">

<!--            <cube-strip :particle-width="15" :particle-height="160" />-->

        </div>

        <global-footer/>

    </div>
    </app>
</template>
