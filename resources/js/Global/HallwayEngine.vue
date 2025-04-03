<!-- resources/js/Global/HallwayEngine.vue -->
<script setup lang="ts">
import {onBeforeMount, onMounted, onUnmounted, ref} from 'vue';
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
import { useJets } from './useJets';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
    projects: App.Data.ProjectData[];
    projectGridFile: string;
    projectGridFile2: string;
    initialSlug?: string;
}>();

const emit = defineEmits(['camera-ready','scene-ready'])

const projectStore = useProjectStore();
projectStore.projects = props.projects;
const screenStore = useScreenStore();
const ready = ref(false)
const CUBE_SIZE = projectStore.cubeSize;
const CUBE_SPACING = projectStore.cubeSpacing;
const FIRST_CUBE_Z = projectStore.firstCubeZ;
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
    showJets: true,
};

const tunnelWrapper = ref<HTMLElement | null>(null);
const wrapper = ref<HTMLElement | null>(null);
const isLoaded = ref(false);
const isIntroComplete = ref(false);

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
let jetsDispose: (() => void) | null = null;
let allCubes: THREE.Group[] = [];
let updateCubeColorsInternal: ((camera: THREE.PerspectiveCamera) => void) | null = null;
let animationFrameId: number | null = null;
let lastTime = 0;
let projectCubesInstance: ReturnType<typeof useProjectCubes> | null = null;
let projectMaxZ: number;
let scrollTriggerActiveCheck: (() => boolean) | null = null;
let lastOrientation: string | null = null;
let resizeTimeout: number | null = null;
let jetsInstance: ReturnType<typeof useJets> | null = null;
let startJetAnimation: (() => void) | null = null;


const fontLoader = useFontLoader('/fonts/Poppins_Regular.json');

const updateRendererSize = () => {
    const width = tunnelWrapper.value ? tunnelWrapper.value.getBoundingClientRect().width : window.innerWidth;
    const height = window.innerHeight;
    const scaleFactor = 1;//screenStore.isMobile ? 0.75 : 1.0;
    const pixelRatio = screenStore.isMobile ? Math.min(window.devicePixelRatio, 1.5) : window.devicePixelRatio;

    renderer.setSize(width * scaleFactor, height * scaleFactor);
    renderer.setPixelRatio(pixelRatio);
    composer.setSize(width * scaleFactor, height * scaleFactor);

    camera.aspect = width / height;
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
                texture.encoding = THREE.SRGBColorSpace;
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

    camera = new THREE.PerspectiveCamera(screenStore.isMobile ? screenStore.orientation === 'landscape' ? 90 : 120 : 75, window.innerWidth / window.innerHeight, 1, sceneDistance + 6000);
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
    renderer.outputEncoding = THREE.SRGBColorSpace;

    composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomResolution = new THREE.Vector2(
        Math.floor(window.innerWidth / 2),
        Math.floor(window.innerHeight / 2)
    );
    if (screenStore.isMobile) {
        bloomPass = new UnrealBloomPass(bloomResolution, 1.0, 0.1, 0.0);
    } else {
        bloomPass = new UnrealBloomPass(bloomResolution, 1.6, 0.2, 0.0);
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
    stats.dom.setAttribute('style', 'position: fixed; bottom: 0px; left: 0px; z-index: 1000;')
    document.body.appendChild(stats.dom);

    const keyartCount = props.projects.filter(project => project.keyart).length;
    const JET_ASSETS_COUNT = 7; // Updated: jet, ufo, jet sound, ufo sound, minigun, minigun wind-down, explosion
    const totalAssets = keyartCount + 2 + 1 + JET_ASSETS_COUNT; // Keyarts + 2 grids + 1 font + 7 jet assets
    let loadedAssets = 0;

    const updateProgress = (count: number = 1) => {
        loadedAssets += count;
        const assetProgress = (loadedAssets / totalAssets) * 100;
        const fontProgress = fontLoader.loadingProgress.value;
        const totalProgress = (assetProgress * (totalAssets / (totalAssets + 1))) + (fontProgress / (totalAssets + 1));
        projectStore.setLoadingProgress(Math.min(totalProgress, 100));
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

    if (settings.showJets) {
        jetsInstance = useJets(scene, settings, camera);
        await jetsInstance.getInitializedData().then(({ dispose, startJetAnimation: animateJets }) => {
            jetsDispose = dispose;
            startJetAnimation = animateJets; // Store the function
            updateProgress(JET_ASSETS_COUNT);
        }).catch((error) => {
            console.error('Jets initialization failed:', error);
            updateProgress(JET_ASSETS_COUNT);
        });
    } else {
        updateProgress(JET_ASSETS_COUNT);
    }

    try {
        await projectCubesInstance.getInitializedData().then(({ maxZ, updateCubeColors, projectCubes }) => {

            projectMaxZ = maxZ;

            if (projectMaxZ === undefined || isNaN(projectMaxZ)) {
                throw new Error('Invalid maxZ from projectCubesInstance');
            }

            const { introCubes } = useIntroCubes(scene, fontLoader.font, { CUBE_SIZE, FIRST_CUBE_Z }, settings);
            allCubes = [...introCubes, ...projectCubes];
            updateCubeColorsInternal = updateCubeColors;

            emit('camera-ready', camera)
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

        emit('scene-ready')
    } catch (error) {
        console.error('Error initializing project cubes:', error);
        projectMaxZ = FIRST_CUBE_Z - (props.projects.length + 1) * CUBE_SPACING;

    }

};


const animate = (time: number = 0) => {
    animationFrameId = requestAnimationFrame(animate)

    if (renderer && composer) {
        const delta = (time - lastTime) / 1000
        lastTime = time

        if (settings.showCars) updateCityParticles(delta)
        if (settings.showChasers && updateChasers) updateChasers(delta)

        if (projectCubesInstance?.updateClickHereParticles) {
            projectCubesInstance.updateClickHereParticles(camera, delta)
        }

        // Dynamic far: cover deepest cube + fog range
        const fogFar = 4000
        const buffer = 1000
        const minFar = Math.abs(camera.position.z - projectMaxZ)
        camera.far = Math.max(fogFar + buffer, minFar)
        camera.updateProjectionMatrix()

        const fadeRange = BLOOM_FADE_END_Z - BLOOM_FADE_START_Z
        let progress = 0
        if (camera.position.z >= BLOOM_FADE_START_Z) {
            progress = 0
        } else if (camera.position.z <= BLOOM_FADE_END_Z) {
            progress = 1
        } else {
            progress = (camera.position.z - BLOOM_FADE_START_Z) / fadeRange
        }

        const minStrength = 0.375 // minimal bloom when down tunnel
        const easedProgress = 1 - Math.pow(1 - progress, 2) // Smooth ease-out
        let targetStrength: number
        if (screenStore.isMobile) {
            targetStrength = THREE.MathUtils.lerp(1.3, minStrength, easedProgress)
        } else {
            targetStrength = THREE.MathUtils.lerp(1.6, minStrength, easedProgress)
        }

        bloomPass.strength = targetStrength

        composer.render()
    }

    if (settings.showStats) stats.update()

}

const handleResize = () => {
    console.log('handleResize()')
    updateRendererSize()
    ScrollTrigger.refresh()
};

const onResize = () => {
    if (screenStore.isMobile) {
        const currentOrientation = screenStore.orientation
        console.log('Resize: orientation', currentOrientation, 'lastOrientation', lastOrientation)

        if (currentOrientation !== lastOrientation) {
            lastOrientation = currentOrientation
            // Debounce resize to wait for orientation animation
            if (resizeTimeout) clearTimeout(resizeTimeout)
            resizeTimeout = setTimeout(() => {
                handleResize()
                resizeTimeout = null
            }, 500) // 500ms delay to let Safari animation settle
        }
    } else {
        handleResize() // Desktop: immediate resize
    }
};



onMounted(() => {

    let jetsInstance: ReturnType<typeof useJets> | null = null

    init().then(() => {
        if (isLoaded.value) {
            animationFrameId = requestAnimationFrame(animate)

            let scrollTimeline = null
            let scrollTrigger = null
            let setReverting = null

            const setupPromise = projectCubesInstance!.getInitializedData().then(({ projectCubes, maxZ }) => {

                projectCubes.forEach((cube) => {
                    cube.userData.isActive = true;
                })

                //const maxZ = FIRST_CUBE_Z - (props.projects.length - 1) * CUBE_SPACING

                camera.position.set(0, 0, 5000)
                camera.lookAt(0, 0, maxZ)
                camera.updateProjectionMatrix()
                updateCubeColorsInternal(camera)
                composer.render()

                // Clean up existing ScrollTriggers
                ScrollTrigger.getAll().forEach(trigger => trigger.kill())

                if (allCubes.length && updateCubeColorsInternal) {
                    const result = setupScrollAnimation(
                        scene,
                        camera,
                        wrapper,
                        allCubes,
                        updateCubeColorsInternal,
                        { CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z },
                        { scrub: screenStore.isMobile ? 0.5 : 1.0 },
                        settings,
                        stats
                    )
                    setReverting = result.setReverting
                    scrollTimeline = result.timeline
                    scrollTrigger = result.scrollTrigger
                    scrollTriggerActiveCheck = result.isScrollTriggerActive
                }

                if (renderer && cleanupInteractivity === null) {
                    cleanupInteractivity = projectCubesInstance!.setupInteractivity(
                        camera,
                        renderer.domElement,
                        renderer,
                        (isFocused) => {
                            if (setReverting) setReverting(isFocused);
                        },
                        scrollTriggerActiveCheck
                    )
                }
                ready.value = true
                window.scrollTo({ top: 0, behavior: 'auto' })
            });

            const startIntro = () => {
                setupPromise.then(() => {
                    camera.position.set(0, 0, 5000)
                    camera.updateProjectionMatrix()

                    gsap.to(renderer.domElement, {
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power4.out'
                    })

                    const cameraPos = { z: 5000 }
                    gsap.to(cameraPos, {
                        z: 0,
                        duration: 2,
                        ease: 'power4.out',
                        onUpdate: () => {
                            camera.position.z = cameraPos.z
                            camera.updateProjectionMatrix()
                        },
                        onComplete: () => {
                            camera.position.z = 0
                            isIntroComplete.value = true
                            if (startJetAnimation) {
                                startJetAnimation()
                            }
                        }
                    })
                })
            }

            gsap.delayedCall(0.5, startIntro)


        }
    }).catch((error) => {
        console.error('Initialization failed:', error)
    });


})

onUnmounted(() => {
    if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
    }
    if (cleanupInteractivity) cleanupInteractivity()
    window.removeEventListener('resize', onResize)
    window.removeEventListener('click', handleGesture)
    window.removeEventListener('touchstart', handleGesture)
    window.removeEventListener('keydown', handleGesture)
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    // Dispose of composer and passes
    if (composer) {
        composer.passes.forEach(pass => {
            if (pass.dispose) pass.dispose()
        });
        composer.dispose()
    }

    // Dispose of bloomPass explicitly
    if (bloomPass) bloomPass.dispose()

    // Dispose of textures in textureCache
    textureCache.forEach(texture => {
        texture.dispose()
    });
    textureCache.clear()

    // Dispose of scene objects
    scene.traverse(object => {
        if (object instanceof THREE.Mesh) {
            if (object.geometry) object.geometry.dispose()
            if (object.material) {
                if (Array.isArray(object.material)) {
                    object.material.forEach(mat => mat.dispose())
                } else {
                    object.material.dispose()
                }
            }
        }
    });
    if (scene.fog) scene.fog = null
    if (scene.background instanceof THREE.Color) scene.background = null
    scene.clear()

    // Dispose of renderer and remove canvas
    if (renderer) {
        renderer.dispose()
        renderer.forceContextLoss() // Forcefully release WebGL context
        if (renderer.domElement && renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement)
        }
    }

    // Remove stats DOM element
    if (stats && stats.dom && stats.dom.parentNode) {
        stats.dom.parentNode.removeChild(stats.dom)
    }

    // Cleanup composables
    if (starfieldDispose) starfieldDispose()
    if (chaserPathDispose) chaserPathDispose()
    if (cityscapeDispose) cityscapeDispose()
    if (jetsDispose) jetsDispose()

    // Nullify references
    animationFrameId = null
    renderer = null
    composer = null
    bloomPass = null
    scene = null
    camera = null
    stats = null
    updateCityParticles = null
    starfieldDispose = null
    cleanupInteractivity = null
    chaserPathDispose = null
    updateChasers = null
    cityscapeDispose = null
    allCubes = []
    updateCubeColorsInternal = null
    projectCubesInstance = null
    scrollTriggerActiveCheck = null
});

</script>

<template>
    <section ref="wrapper" class="wrapper"  :class="{'ready':ready}">

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
    padding-top: 100vh;
}
.wrapper.ready{
    padding-top:0;
}

.tunnel-wrapper {
    width: 100%;
    height: 100vh;
    min-height: 100vh;
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

</style>
