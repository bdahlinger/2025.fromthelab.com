<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import LogoMark from "@/Global/LogoMark.vue";
import { ProjectData } from '@/types/generated';
import GlobalFooter from "@/Global/GlobalFooter.vue";


const props = defineProps<{
    project: ProjectData;
}>();

</script>

<template>

    <Head :title=project.title />

    <div class="relative bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">

        <nav class="absolute z-10 flex flex-col items-center justify-center top-32 left-1/2 transform -translate-x-1/2">
            <Link href="/">
                <logo-mark/>
            </Link>

        </nav>

	    <div class="overflow-hidden">


	    </div>

        <div class="flex justify-center items-center">


            <h1>{{project.title}}</h1>

        </div>

        <div class="flex justify-center items-center -mt-24 mix-blend-screen">


        </div>

<!--        <div class="relative min-h-screen flex flex-col items-center justify-center">
            <div class="relative w-full max-w-2xl px-2 lg:max-w-7xl">
                <footer class="py-16 text-center text-xs text-black dark:text-white/70">
                    © Copyright 2025 From the Lab. All rights reserved.
                </footer>
            </div>
        </div>-->

        <global-footer/>
    </div>

</template>
