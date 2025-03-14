<!-- resources/js/Global/HallwayEngine.vue -->
<script setup lang="ts">

import { onMounted, onUnmounted, ref } from 'vue';
import { useTunnelStore } from '@/Stores/tunnelStore';
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
import Preloader from './Preloader.vue';

gsap.registerPlugin(ScrollTrigger);

const tunnelStore = useTunnelStore();

const props = defineProps<{
    projects: App.Data.ProjectData[];
    projectGridFile: string;
    projectGridFile2: string;
    initialSlug?: string;
}>();

const CUBE_SIZE = 250;
const CUBE_SPACING = 500;
const FIRST_CUBE_Z = -500;
const SCROLL_BUFFER = 100;
const BLOOM_FADE_START_Z = -520;
const BLOOM_FADE_END_Z = -720;

const tunnelWrapper = ref<HTMLElement | null>(null);
const wrapper = ref<HTMLElement | null>(null);
const isLoaded = ref(false);
const loadingProgress = ref(0);
const isIntroComplete = ref(false);
const showPreloader = ref(true);
const textureCache = new Map<string, THREE.Texture>();

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let composer: EffectComposer;
let bloomPass: UnrealBloomPass;
let animationFrameId: number;
let stats: Stats;
let updateCityParticles: (delta: number) => void;
let lastTime = 0;
let starfieldDispose: (() => void) | null = null;
let cleanupInteractivity: (() => void) | null = null;
let setReverting: ((value: boolean) => void) | null = null;
let chaserPathDispose: (() => void) | null = null;
let updateChasers: ((delta: number) => void) | null = null;
let allCubes: THREE.Group[] = [];
let updateCubeColors: ((camera: THREE.PerspectiveCamera) => void) | null = null;

const updateRendererSize = () => {
    const width = tunnelWrapper.value ? tunnelWrapper.value.getBoundingClientRect().width : window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    composer.setSize(width, height);
    camera.aspect = width / height;
    camera.far = 60000;
    camera.updateProjectionMatrix();
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
    scene.fog = new THREE.Fog(0x000000, 700, 4000);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 60000);
    camera.position.set(0, 0, 0); // Initial, overridden later
    camera.lookAt(0, 0, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.outputEncoding = THREE.sRGBEncoding;

    composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        6.0,
        0.4,
        0.0
    );
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

    const totalAssets = props.projects.length + 2 + 1;
    let loadedAssets = 0;

    const updateProgress = () => {
        loadedAssets++;
        loadingProgress.value = (loadedAssets / totalAssets) * 100;
        if (loadedAssets === totalAssets) {
            isLoaded.value = true;
        }
    };

    await loadTexture(props.projectGridFile).then(() => updateProgress()).catch(() => updateProgress());
    await loadTexture(props.projectGridFile2).then(() => updateProgress()).catch(() => updateProgress());

    for (const project of props.projects) {
        if (project.keyart) {
            await loadTexture(project.keyart).then(() => updateProgress()).catch(() => updateProgress());
        } else {
            updateProgress();
        }
    }

    const projectCubesInstance = useProjectCubes(scene, { CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z }, props.projects, props.projectGridFile, props.projectGridFile2);
    let projectMaxZ: number = -8500;
    try {
        const data = await projectCubesInstance.getInitializedData();
        projectMaxZ = data.maxZ !== undefined && !isNaN(data.maxZ) ? data.maxZ : -8500;
        updateProgress();

        const { introCubes } = useIntroCubes(scene, scene, Promise.resolve(data.loadedFont), { CUBE_SIZE, FIRST_CUBE_Z });
        allCubes = [...introCubes, ...data.projectCubes];
        updateCubeColors = data.updateCubeColors;

        const { cityGroup, updateParticles } = useCityscape(scene, scene, projectMaxZ);
        updateCityParticles = updateParticles;

        const { dispose } = useStarfield(scene, camera, projectMaxZ);
        starfieldDispose = dispose;

        const { dispose: chaserDispose, updateChasers: updateChasersFunc } = useChaserPath(scene, projectMaxZ);
        chaserPathDispose = chaserDispose;
        updateChasers = updateChasersFunc;

        updateRendererSize();
    } catch (error) {
        console.error('Error initializing project cubes:', error);
    }
};

let lockedZ = null; // Global lock for camera z
let hasScrolled = false;

const animate = (time: number = 0) => {
	animationFrameId = requestAnimationFrame(animate);
	if (renderer && composer) {
		const delta = (time - lastTime) / 1000;
		lastTime = time;
		updateCityParticles(delta);
		updateChasers?.(delta);
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
		if (isIntroComplete.value) {
			updateCubeColors(camera);
			ScrollTrigger.update();
			//console.log('Animate frame post-intro, camera z:', camera.position.z);
		}
		composer.render();
	}
	stats.update();
};

onMounted(() => {
	init().then(() => {
		if (isLoaded.value) {
			animationFrameId = requestAnimationFrame(animate);

			const projectCubesInstance = useProjectCubes(scene, { CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z }, props.projects, props.projectGridFile, props.projectGridFile2);
			let scrollTimeline = null;
			let setReverting = null;

			const setupPromise = projectCubesInstance.getInitializedData().then(({ projectCubes }) => {
				projectCubes.forEach((cube) => {
					cube.userData.isActive = true;
				});

				const maxZ = FIRST_CUBE_Z - (props.projects.length - 1) * CUBE_SPACING;

				camera.position.set(0, 0, 5000);
				camera.lookAt(0, 0, maxZ);
				camera.updateProjectionMatrix();
				updateCubeColors(camera);
				composer.render();

				if (allCubes.length && updateCubeColors) {
					const { setReverting: setRevertingFunc, timeline } = setupScrollAnimation(
						scene,
						camera,
						wrapper,
						allCubes,
						updateCubeColors,
						{ CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z }
					);
					setReverting = setRevertingFunc;
					scrollTimeline = timeline;
				}

				if (renderer && cleanupInteractivity === null) {
					cleanupInteractivity = projectCubesInstance.setupInteractivity(
						camera,
						renderer.domElement,
						(isFocused, originalPosition, originalTarget) => {
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

			gsap.delayedCall(0.1, startIntro);
		}
	}).catch((error) => {
		// Keep error logging for now
		console.error('Initialization failed:', error);
	});
	window.addEventListener('resize', handleResize);
});

// Clean up on unmount
/*onUnmounted(() => {
	if (animationFrameId) cancelAnimationFrame(animationFrameId);
	if (cleanupInteractivity) cleanupInteractivity();
	if (cleanupScroll) cleanupScroll();
	window.removeEventListener('resize', handleResize);
	console.log('HallwayEngine unmounted');
});*/

onUnmounted(() => {
    //console.log('HallwayEngine unmounted');
    if (cleanupInteractivity) cleanupInteractivity();
    window.removeEventListener('resize', handleResize);
    cancelAnimationFrame(animationFrameId);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    renderer.dispose();
    composer.dispose();
    scene.clear();
    document.body.removeChild(stats.dom);
    if (starfieldDispose) starfieldDispose();
    if (chaserPathDispose) chaserPathDispose();
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
