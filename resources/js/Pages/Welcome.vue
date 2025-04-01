<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import LogoMark from "@/Global/LogoMark.vue";
import { useProjectStore } from '@/Stores/projectStore'
import { storeToRefs } from 'pinia';

//import ThreeDSpheres from "@/Global/ThreeDSpheres.vue";
import CubeStrip from "@/Global/CubeStrip.vue";
//import Hallway from "@/Global/Hallway.vue";
//import HallwayV2 from "@/Global/HallwayV2.vue";
import HallwayEngine from "@/Global/HallwayEngine.vue";
import { ProjectData } from '@/Types/generated';
import { App } from '@/Types/enums';
import GlobalFooter from "@/Global/GlobalFooter.vue";
import AppWrap from '@/Pages/App.vue';
import { computed, ref, onMounted } from 'vue';
import IntroMessage from "@/Global/Tunnel/IntroMessage.vue";
import Hud from "@/Global/Tunnel/HUD.vue";
import {gsap} from "gsap";
import Preloader from "@/Global/Preloader.vue";

const props = defineProps<{
    //canLogin: boolean
    //canRegister: boolean
    projects: ProjectData[]
    projectGridFile: string
    projectGridFile2: string
    archived: ProjectData[]
}>()

const projectStore = useProjectStore()
const { loadingProgress } = storeToRefs(projectStore);

const camera = ref<THREE.PerspectiveCamera | null>(null)
const sceneReady = ref<boolen>(false)
const showTunnel = ref<boolen>(false)
const hudReady = ref<boolen>(false)

const onCameraReady = (cam: THREE.PerspectiveCamera) => {
    camera.value = cam
}

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

onMounted(() => {

    //gsap.delayedCall(1, ()=>showTunnel.value=true)

})

</script>

<template>

    <app-wrap>
    <Head title="Welcome" />

    <div class="relative bg-black text-white">

        <nav class="absolute z-10 flex flex-col items-center justify-center top-32 left-1/2 transform -translate-x-1/2">

            <logo-mark/>

        </nav>

	    <div class="scene-wrap overflow-hidden relative"  :class="{'ready':sceneReady}">

            <hallway-engine
                v-if="hudReady"
                :projects="projects"
                :project-grid-file="projectGridFile"
                :project-grid-file2="projectGridFile2"
                @camera-ready="onCameraReady"
                @scene-ready="sceneReady = true"
            />

            <Transition name="fade">
                <Preloader v-if="!sceneReady" :progress="loadingProgress || 0" />
            </Transition>

            <intro-message/>

            <hud
                :camera="camera"
                :ready="sceneReady"
                @scene-ready="hudReady = true"
            />

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
<style scoped>
.scene-wrap {
    padding-top: 100vh;
}
.scene-wrap.ready{
    padding-top:0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
