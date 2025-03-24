<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { onMounted, onUnmounted, ref, reactive, inject } from 'vue';
import { useTunnelStore } from '@/Stores/tunnelStore';
import LogoMark from "@/Global/LogoMark.vue";
import { ProjectData } from '@/types/generated';
import GlobalFooter from "@/Global/GlobalFooter.vue";
import { gsap } from 'gsap';
import ProjectNavigator from "@/Global/ProjectNavigator.vue";


const props = defineProps<{
    projects: ProjectData[];
    project: ProjectData;
    storage: Storage;
}>();

const tunnelStore = useTunnelStore();
tunnelStore.setProject(props.project);
tunnelStore.setProjects(props.projects);

const previousUrl = inject<Ref<string>>('previousUrl')

const headerImageStyle = reactive({
    backgroundImage: `url("${props.storage}projects/${props.project.slug}/header.jpg")`,
})

const logo = ref(`${props.storage}projects/${props.project.slug}/logo.webp`)
const overlay = ref<HTMLElement | null>(null);

// Circle wipe animation (hard-edged mask)
const animateCircleWipe = () => {
    if (!overlay.value) return;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const maxRadius = Math.sqrt(viewportWidth ** 2 + viewportHeight ** 2) / 2;

    gsap.fromTo(
        overlay.value,
        {
            WebkitMask: 'radial-gradient(circle 0px at 50% 50%, transparent 95%, black 100%)',
            mask: 'radial-gradient(circle 0px at 50% 50%, transparent 95%, black 100%)'
        },
        {
            WebkitMask: `radial-gradient(circle ${maxRadius}px at 50% 50%, transparent 95%, black 100%)`,
            mask: `radial-gradient(circle ${maxRadius}px at 50% 50%, transparent 95%, black 100%)`,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => {
                if (overlay.value) overlay.value.style.display = 'none';
            }
        }
    );
};

onMounted(() => {
    console.log('previousUrl',previousUrl.value)
    // Check if previous page was home
    if (previousUrl?.value === '/') {
        animateCircleWipe();
    } else if (overlay.value) {
        overlay.value.style.display = 'none'; // Hide overlay immediately if not from homepage
    }


});

onUnmounted(() => {
    // Clean up GSAP animations if needed
    gsap.killTweensOf(overlay.value);
});

</script>

<template>

    <Head :title=project.title />

    <div class="relative bg-black text-white bg-no-repeat bg-contain" :style="project.hasBg ? headerImageStyle:''">

        <section ref="overlay" class="fixed inset-0 bg-black z-50 pointer-events-none"></section>

        <project-navigator />

        <nav class="flex flex-col items-center justify-center pt-32 ">

            <Link href="/">
                <logo-mark/>
            </Link>

        </nav>

        <div class="pt-40 px-2 text-center">

            <img class="block mx-auto max-w-32 h-auto mb-4" v-if="project.hasLogo" :src="logo" :alt="project.title + ' logo'">

            <h1 class="text-2xl text-white">{{project.title}}</h1>

            <h2 class="text-white/50">{{ project.client }}</h2>

            <p class="mt-4 text-center text-sm max-w-xl mx-auto" v-html="project.description"></p>

        </div>

        <div class="flex justify-center items-center ">


        </div>

        <global-footer/>
    </div>

</template>
