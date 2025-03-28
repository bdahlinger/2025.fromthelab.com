<!-- resources/js/Global/HallwayEngine.vue -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useProjectStore } from '@/Stores/projectStore';
import { useScreenStore } from "@/Stores/screenStore";
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Stats from 'three/examples/jsm/libs/stats.module';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { useIntroCubes } from './useIntroCubes';
import { useProjectCubes } from './useProjectCubes';
import { useCityscape } from './useCityscape';
import { setupScrollAnimation } from './tunnelAnimations';
import { useStarfield } from './useStarfield';
import { useChaserPath } from './useChaserPath';
import { useFontLoader } from './useFontLoader';
import Preloader from './Preloader.vue';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
    projects: App.Data.ProjectData[];
    projectGridFile: string;
    projectGridFile2: string;
    initialSlug?: string;
}>();

const projectStore = useProjectStore();
projectStore.projects = props.projects;
const screenStore = useScreenStore();

const CUBE_SIZE = 250;
const CUBE_SPACING = 500;
const FIRST_CUBE_Z = -500;
const BLOOM_FADE_START_Z = -520;
const BLOOM_FADE_END_Z = -720;

// Centralized settings for debugging scene components
const settings = {
    showChasers: true,
    showStarfield: true,
    showCars: true,
    showBuildings: true,
    showPortalPulses: true,
    showKeyarts: true,
    showProjectGrids: true,
    showProjectTitles: true,
    showIntroCubes: true,
    showScrollTrigger: true,
    showStats: true,
};

const tunnelWrapper = ref<HTMLElement | null>(null);
const wrapper = ref<HTMLElement | null>(null);
const isLoaded = ref(false);
const loadingProgress = ref(0);
const isIntroComplete = ref(false);
const showPreloader = ref(true);
const textureCache = new Map<string, THREE.Texture>();
const sceneDistance = 4000

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let composer: EffectComposer;
let bloomPass: UnrealBloomPass;
let stats: Stats;
let updateCityParticles: (delta: number) => void;
let starfieldDispose: (() => void) | null = null;
let cleanupInteractivity: (() => void) | null = null;
let chaserPathDispose: (() => void) | null = null;
let updateChasers: ((delta: number) => void) | null = null;
let cityscapeDispose: (() => void) | null = null;
let allCubes: THREE.Group[] = [];
let updateCubeColorsInternal: ((camera: THREE.PerspectiveCamera) => void) | null = null;
let animationFrameId: number | null = null;
let lastTime = 0;
let projectCubesInstance: ReturnType<typeof useProjectCubes> | null = null;
let projectMaxZ: number;

const fontLoader = useFontLoader('/fonts/Poppins_Regular.json');

const updateRendererSize = () => {
    const width = tunnelWrapper.value ? tunnelWrapper.value.getBoundingClientRect().width : window.innerWidth;
    const height = window.innerHeight;
    const scaleFactor = screenStore.isMobile ? 0.75 : 1.0;
    const pixelRatio = screenStore.isMobile ? Math.min(window.devicePixelRatio, 1.5) : window.devicePixelRatio;

    renderer.setSize(width * scaleFactor, height * scaleFactor);
    renderer.setPixelRatio(pixelRatio);
    composer.setSize(width * scaleFactor, height * scaleFactor);

    camera.aspect = width / height;
    //camera.far = 60000;
    camera.updateProjectionMatrix();

    renderer.domElement.style.width = `${width}px`;
    renderer.domElement.style.height = `${height}px`;
};

const loadTexture = (url: string): Promise<THREE.Texture> => {
    if (textureCache.has(url)) {
        return Promise.resolve(textureCache.get(url)!);
    }
    return new Promise((resolve, reject) => {
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(
            url,
            (texture) => {
                texture.encoding = THREE.sRGBEncoding;
                textureCache.set(url, texture);
                resolve(texture);
            },
            undefined,
            (error) => reject(error)
        );
    });
};

const init = async () => {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.Fog(0x000000, 700, sceneDistance);

    camera = new THREE.PerspectiveCamera(screenStore.isMobile ? 95 : 75, window.innerWidth / window.innerHeight, 1, sceneDistance + 6000);
    camera.position.set(0, 0, 0); // Initial, overridden later
    camera.lookAt(0, 0, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true });

    if(screenStore.isMobile){
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    }else{
        renderer.setPixelRatio(window.devicePixelRatio);
    }

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.outputEncoding = THREE.sRGBEncoding;

    composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    if(screenStore.isMobile){
        bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            1.0,
            0.1,
            0.0
        );
    }else{
        bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            1.6,
            0.2,
            0.0
        );
    }

    bloomPass.renderToScreen = true;
    composer.addPass(bloomPass);

    if (tunnelWrapper.value) {
        tunnelWrapper.value.appendChild(renderer.domElement);
        renderer.domElement.style.opacity = '0';
    } else {
        return;
    }

    stats = new Stats();
    stats.dom.style.position = 'fixed';
    stats.dom.style.top = '0px';
    stats.dom.style.left = '0px';
    stats.dom.style.zIndex = '1000';
    document.body.appendChild(stats.dom);

    const keyartCount = props.projects.filter(project => project.keyart).length;
    const totalAssets = keyartCount + 2 + 1; // Keyarts + 2 grids + 1 font
    let loadedAssets = 0;

    const updateProgress = () => {
        loadedAssets++;
        const assetProgress = (loadedAssets / totalAssets) * 100;
        const fontProgress = fontLoader.loadingProgress.value;
        loadingProgress.value = (assetProgress + fontProgress / totalAssets) / (1 + 1 / totalAssets);
        if (loadedAssets === totalAssets && fontLoader.isLoaded.value) {
            isLoaded.value = true;
        }
    };

    // Load font
    await fontLoader.initialize().then(() => {
        /*console.log('Font initialized:', {
            fontValue: !!fontLoader.font.value,
            timestamp: Date.now(),
        });*/
        updateProgress();
    }).catch((error) => {
        console.error('Font initialization failed:', error);
        updateProgress();
    });


    await loadTexture(props.projectGridFile).then(() => updateProgress()).catch(() => updateProgress());
    await loadTexture(props.projectGridFile2).then(() => updateProgress()).catch(() => updateProgress());

    for (const project of props.projects) {
        if (project.keyart) {
            await loadTexture(project.keyart).then(() => updateProgress()).catch(() => updateProgress());
        } else {
            updateProgress();
        }
    }

    projectCubesInstance = useProjectCubes(scene, { CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z }, props.projects, props.projectGridFile, props.projectGridFile2, settings, textureCache, fontLoader.font);

    /*console.log('Before projectCubesInstance creation:', {
        fontValue: !!fontLoader.font.value,
        timestamp: Date.now(),
    });*/

    try {
        await projectCubesInstance.getInitializedData().then(({ maxZ, updateCubeColors, projectCubes }) => {

            projectMaxZ = maxZ;

            if (projectMaxZ === undefined || isNaN(projectMaxZ)) {
                throw new Error('Invalid maxZ from projectCubesInstance');
            }

            /*console.log('Before introCubes creation:', {
                fontValue: !!fontLoader.font.value,
                timestamp: Date.now(),
            });*/

            const { introCubes } = useIntroCubes(scene, fontLoader.font, { CUBE_SIZE, FIRST_CUBE_Z }, settings);
            allCubes = [...introCubes, ...projectCubes];
            updateCubeColorsInternal = updateCubeColors;
        });

        if( settings.showCars ){
            const { cityGroup, updateParticles, dispose: cityscapeDisposeFunc } = useCityscape(scene, scene, projectMaxZ, settings);
            updateCityParticles = updateParticles;
            cityscapeDispose = cityscapeDisposeFunc;
        }

        if (settings.showStarfield) {
            const { dispose } = useStarfield(scene, camera, projectMaxZ);
            starfieldDispose = dispose;
        }

        if (settings.showChasers) {
            const { dispose: chaserDispose, updateChasers: updateChasersFunc } = useChaserPath(scene, projectMaxZ);
            chaserPathDispose = chaserDispose;
            updateChasers = updateChasersFunc;
        }

        updateRendererSize();
    } catch (error) {
        console.error('Error initializing project cubes:', error);
        projectMaxZ = FIRST_CUBE_Z - (props.projects.length + 1) * CUBE_SPACING;

    }
};

const animate = (time: number = 0) => {
    animationFrameId = requestAnimationFrame(animate); // Chain here

    if (renderer && composer) {
        const delta = (time - lastTime) / 1000;
        lastTime = time;

        if (settings.showCars) updateCityParticles(delta);
        if (settings.showChasers && updateChasers) updateChasers(delta);

        if (projectCubesInstance?.updateClickHereParticles) {
            projectCubesInstance.updateClickHereParticles(camera, delta)
        }

        // Dynamic far: cover deepest cube + fog range
        const fogFar = 4000;
        const buffer = 1000;
        const minFar = Math.abs(camera.position.z - projectMaxZ); // Use projectMaxZ
        camera.far = Math.max(fogFar + buffer, minFar);
        camera.updateProjectionMatrix();


        const fadeRange = BLOOM_FADE_END_Z - BLOOM_FADE_START_Z;
        let progress = 0;
        if (camera.position.z >= BLOOM_FADE_START_Z) {
            progress = 0; // Full bloom
        } else if (camera.position.z <= BLOOM_FADE_END_Z) {
            progress = 1; // Faded out
        } else {
            progress = (camera.position.z - BLOOM_FADE_START_Z) / fadeRange;
        }

        if (screenStore.isMobile) {
            bloomPass.strength = THREE.MathUtils.lerp(1.3, 0.0, progress);
        } else {
            bloomPass.strength = THREE.MathUtils.lerp(1.6, 0.125, progress); // Was static 6.0
        }

        composer.render();
    }

    if (settings.showStats) stats.update();

};

onMounted(() => {
    init().then(() => {
        if (isLoaded.value) {
            animationFrameId = requestAnimationFrame(animate);

            let scrollTimeline = null;
            let scrollTrigger = null;
            let setReverting = null;

            const setupPromise = projectCubesInstance!.getInitializedData().then(({ projectCubes }) => {

                projectCubes.forEach((cube) => {
                    cube.userData.isActive = true;
                });

                const maxZ = FIRST_CUBE_Z - (props.projects.length - 1) * CUBE_SPACING;

                camera.position.set(0, 0, 5000);
                camera.lookAt(0, 0, maxZ);
                camera.updateProjectionMatrix();
                updateCubeColorsInternal(camera);
                composer.render();

                // Clean up existing ScrollTriggers
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                console.log('ScrollTriggers before setup:', ScrollTrigger.getAll().length); // Should be 0

                if (allCubes.length && updateCubeColorsInternal) {
                    const result = setupScrollAnimation(
                        scene,
                        camera,
                        wrapper,
                        allCubes,
                        updateCubeColorsInternal,
                        { CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z },
                        { scrub: screenStore.isMobile ? 3 : 1 },
                        settings,
                        stats
                    );
                    setReverting = result.setReverting;
                    scrollTimeline = result.timeline;
                    scrollTrigger = result.scrollTrigger;

                    console.log('ScrollTriggers after setup:', ScrollTrigger.getAll().length); // Should be 1

                }

                if (renderer && cleanupInteractivity === null) {
                    cleanupInteractivity = projectCubesInstance!.setupInteractivity(
                        camera,
                        renderer.domElement,
                        renderer,
                        (isFocused) => {
                            if (setReverting) setReverting(isFocused);
                        }
                    );
                }

                window.scrollTo({ top: 0, behavior: 'auto' });
            });


            const startIntro = () => {
                setupPromise.then(() => {
                    showPreloader.value = false;

                    camera.position.set(0, 0, 5000);
                    camera.updateProjectionMatrix();

                    gsap.to(renderer.domElement, {
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power4.out'
                    });

                    const cameraPos = { z: 5000 };
                    gsap.to(cameraPos, {
                        z: 0,
                        duration: 2,
                        ease: 'power4.out',
                        onUpdate: () => {
                            camera.position.z = cameraPos.z;
                            camera.updateProjectionMatrix();
                        },
                        onComplete: () => {
                            camera.position.z = 0;
                            isIntroComplete.value = true;
                        }
                    });
                });
            };

            gsap.delayedCall(0.5, startIntro);
        }
    }).catch((error) => {
        console.error('Initialization failed:', error);
    });
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId); // Clean up
    }
    if (cleanupInteractivity) cleanupInteractivity();
    window.removeEventListener('resize', handleResize);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    renderer.dispose();
    composer.dispose();
    scene.clear();
    document.body.removeChild(stats.dom);
    if (settings.showStarfield && starfieldDispose) starfieldDispose();
    if (settings.showChasers && chaserPathDispose) chaserPathDispose();
    if (cityscapeDispose) cityscapeDispose();
});

const handleResize = () => {
    updateRendererSize();
    ScrollTrigger.refresh();
};

</script>

<template>
    <section ref="wrapper" class="wrapper">
        <Transition name="fade">
            <Preloader v-if="showPreloader" :progress="loadingProgress" />
        </Transition>
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

/*.tunnel-wrapper {
    width: 100%;
    height: 100vh;
    position: relative;
    top: 0;
    left: 0;
    overflow-x: hidden;
    max-width: none;
}*/
.tunnel-wrapper {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
}
.tunnel-wrapper canvas {
    width: 100% !important;
    height: 100% !important;
    display: block;
}
.pin-spacer {
    width: 100% !important;
    max-width: none !important;
    overflow-x: hidden !important;



}

/* Vue Transition styles */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
