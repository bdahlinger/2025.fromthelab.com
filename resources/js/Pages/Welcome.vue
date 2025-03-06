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

const props = defineProps<{
    canLogin: boolean
    canRegister: boolean
    laravelVersion: string
    phpVersion: string
    projects: ProjectData[];
}>()

/*
    const size = 800;
    const divisions = 20;
const gridHelper = new THREE.GridHelper( size, divisions, 0x222222, 0x444444 );
gridHelper.position.z = -810
gridHelper.position.y = -400
scene.add( gridHelper );
const gridHelper2 = new THREE.GridHelper( size, divisions, 0x222222, 0x444444  );
gridHelper2.position.z = gridHelper.position.z - size
gridHelper2.position.y = -400
scene.add( gridHelper2 );
const gridHelper3 = new THREE.GridHelper( size, divisions, 0x222222, 0x444444  );
gridHelper3.position.z = gridHelper2.position.z - size
gridHelper3.position.y = -400
scene.add( gridHelper3 );
const gridHelper4 = new THREE.GridHelper( size, divisions, 0x222222, 0x444444  );
gridHelper4.position.z = gridHelper3.position.z - size
gridHelper4.position.y = -400
scene.add( gridHelper4 );
*/

</script>

<template>

    <Head title="Welcome" />

    <div class="relative bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">

        <nav class="absolute z-10 flex flex-col items-center justify-center top-32 left-1/2 transform -translate-x-1/2">

            <logo-mark/>

        </nav>

	    <div class="overflow-hidden">

		    <!--<hallway/>-->
            <!--<hallway-v2/>-->

            <hallway-engine :projects="projects"/>

	    </div>

        <div class="flex justify-center items-center">

            <cube-strip :particle-width="20" :particle-height="20" />

        </div>

        <div class="flex justify-center items-center -mt-24 mix-blend-screen">

            <cube-strip :particle-width="15" :particle-height="160" />

        </div>


        <global-footer/>

<!--        <div class="relative min-h-screen flex flex-col items-center justify-center">
            <div class="relative w-full max-w-2xl px-2 lg:max-w-7xl">
                <footer class="py-16 text-center text-xs text-black dark:text-white/70">
                    © Copyright 2025 From the Lab. All rights reserved.
                </footer>
            </div>
        </div>-->
    </div>
</template>
