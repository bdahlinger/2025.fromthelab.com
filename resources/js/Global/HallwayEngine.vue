<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Stats from 'three/examples/jsm/libs/stats.module'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { useIntroCubes } from './useIntroCubes'
import { useProjectCubes } from './useProjectCubes'
import { useCityscape } from './useCityscape'
import { setupScrollAnimation } from '/resources/js/Global/tunnelAnimations'
import { useStarfield } from './useStarfield'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps<{
    projects: App.Data.ProjectData[]
}>()

const CUBE_SIZE = 250;
const CUBE_SPACING = 500;
const FIRST_CUBE_Z = -500;
const SCROLL_BUFFER = 100;
const BLOOM_FADE_START_Z = -520;
const BLOOM_FADE_END_Z = -720;

const tunnelWrapper = ref<HTMLElement | null>(null)
const wrapper = ref<HTMLElement | null>(null)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let composer: EffectComposer
let bloomPass: UnrealBloomPass
let animationFrameId: number
let stats: Stats
let updateCityParticles: (delta: number) => void
let lastTime = 0
let starfieldDispose: (() => void) | null = null;
let cleanupInteractivity: (() => void) | null = null;
let setReverting: ((value: boolean) => void) | null = null;

const updateRendererSize = () => {
    const width = tunnelWrapper.value ? tunnelWrapper.value.getBoundingClientRect().width : window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    composer.setSize(width, height);
    camera.aspect = width / height;
    camera.far = 60000;
    camera.updateProjectionMatrix();
}

const init = () => {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.Fog(0x000000, 700, 4000);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 60000);
    camera.position.set(0, 0, 0);
    camera.lookAt(0, 0, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);

    composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        3.5,
        0.4,
        0.0
    );
    bloomPass.renderToScreen = true;
    composer.addPass(bloomPass);

    updateRendererSize();

    if (tunnelWrapper.value) {
        tunnelWrapper.value.appendChild(renderer.domElement);
    } else {
        return;
    }

    stats = new Stats();
    stats.dom.style.position = 'fixed';
    stats.dom.style.top = '0px';
    stats.dom.style.left = '0px';
    stats.dom.style.zIndex = '1000';
    document.body.appendChild(stats.dom);

    const { cityGroup, updateParticles } = useCityscape(scene, scene);
    updateCityParticles = updateParticles;

    const projectCubesInstance = useProjectCubes(scene, { CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z }, props.projects);
    projectCubesInstance.getInitializedData().then(({ projectCubes, updateCubeColors, loadedFont }) => {
        const { introCubes } = useIntroCubes(scene, scene, Promise.resolve(loadedFont), { CUBE_SIZE, FIRST_CUBE_Z });
        const allCubes = [...introCubes, ...projectCubes];
        const { setReverting: setRevertingFunc } = setupScrollAnimation(
            scene,
            camera,
            wrapper,
            allCubes,
            updateCubeColors,
            { CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z },
            (isFocused, originalPosition, originalTarget) => {
                if (setReverting) setReverting(isFocused);
            }
        );
        setReverting = setRevertingFunc;
        cleanupInteractivity = projectCubesInstance.setupInteractivity(
            camera,
            renderer.domElement,
            (isFocused, originalPosition, originalTarget) => {
                if (setReverting) setReverting(isFocused);
            }
        );

        animate();
    });

    const { dispose } = useStarfield(scene, camera);
    starfieldDispose = dispose;
};

const animate = (time: number = 0) => {
    animationFrameId = requestAnimationFrame(animate);
    if (renderer && composer) {
        const delta = (time - lastTime) / 1000;
        lastTime = time;
        updateCityParticles(delta);

        const fadeRange = BLOOM_FADE_END_Z - BLOOM_FADE_START_Z;
        let progress = 0;
        if (camera.position.z >= BLOOM_FADE_START_Z) {
            progress = 0;
        } else if (camera.position.z <= BLOOM_FADE_END_Z) {
            progress = 1;
        } else {
            progress = (camera.position.z - BLOOM_FADE_START_Z) / fadeRange;
        }
        bloomPass.strength = THREE.MathUtils.lerp(1.0, 0.125, progress);
        composer.render();
    }
    ScrollTrigger.update();
    stats.update();
};

onMounted(() => {
    init();
    window.addEventListener('resize', handleResize);
})

onUnmounted(() => {
    if (cleanupInteractivity) cleanupInteractivity();
    window.removeEventListener('resize', handleResize);
    cancelAnimationFrame(animationFrameId);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    renderer.dispose();
    composer.dispose();
    scene.clear();
    document.body.removeChild(stats.dom);
    if (starfieldDispose) starfieldDispose();
})

const handleResize = () => {
    updateRendererSize();
    ScrollTrigger.refresh();
}
</script>

<template>
    <section ref="wrapper" class="wrapper">
        <div ref="tunnelWrapper" class="tunnel-wrapper"></div>
    </section>
</template>

<style scoped>
.wrapper {
    height: 100vh;
    position: relative;
    width: 100%;
    max-width: none;
    overflow-x: hidden;
}

.tunnel-wrapper {
    width: 100%;
    height: 100vh;
    position: relative;
    top: 0;
    left: 0;
    overflow-x: hidden;
    max-width: none;
}

.pin-spacer {
    width: 100% !important;
    max-width: none !important;
    overflow-x: hidden !important;
}
</style>
