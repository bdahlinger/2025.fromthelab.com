<script setup>
import { Head, Link } from '@inertiajs/vue3';
import LogoMark from "@/Global/LogoMark.vue";
import ThreeDSpheres from "@/Global/ThreeDSpheres.vue";
import CubeStrip from "@/Global/CubeStrip.vue";
import Hallway from "@/Global/Hallway.vue";
import HallwayV2 from "@/Global/HallwayV2.vue";

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}
</script>

<template>

    <Head title="Welcome" />

    <div class="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">

        <nav class="relative flex flex-col items-center justify-center pt-5">

            <logo-mark/>

        </nav>

	    <div class="overflow-hidden">

<!--		    <hallway/>-->


            <hallway-v2/>

	    </div>

        <div class="flex justify-center items-center">

            <cube-strip :particle-width="20" :particle-height="20" />

        </div>

        <div class="flex justify-center items-center -mt-24 mix-blend-screen">

            <cube-strip :particle-width="15" :particle-height="160" />

        </div>

        <div class="relative min-h-screen flex flex-col items-center justify-center">
            <div class="relative w-full max-w-2xl px-2 lg:max-w-7xl">
                <footer class="py-16 text-center text-xs text-black dark:text-white/70">
                    © Copyright 2025 From the Lab. All rights reserved.
                </footer>
            </div>
        </div>
    </div>
</template>
