import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Stats from 'three/examples/jsm/libs/stats.module';
import { useScreenStore } from '@/Stores/screenStore';
import { useProjectStore } from '@/Stores/projectStore';

gsap.registerPlugin(ScrollTrigger);

export function setupScrollAnimation(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    wrapper: any,
    allCubes: THREE.Group[],
    updateCubeColors: (camera: THREE.PerspectiveCamera) => void,
    config: { CUBE_SIZE: number; CUBE_SPACING: number; FIRST_CUBE_Z: number },
    options: { scrub?: number } = {},
    settings: { showScrollTrigger: boolean },
    stats?: Stats,
    onScrollStart?: () => void
) {
    const screenStore = useScreenStore();
    const projectStore = useProjectStore();
    const { CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z } = config;
    const cubeCount = allCubes?.length || 0;
    const MAX_Z = FIRST_CUBE_Z - (cubeCount + 1) * CUBE_SPACING;
    let isReverting = false;
    let isScrubbing = false;
    const scrollRange = screenStore.isMobile
        ? (Math.abs(MAX_Z) + (cubeCount - 1) * CUBE_SPACING) * 0.7 // 70% of full range on mobile
        : Math.abs(MAX_Z) + (cubeCount - 1) * CUBE_SPACING

    let timeline = gsap.timeline();

    // Optionally ignore mobile resize events to avoid jumps
    ScrollTrigger.config({
        ignoreMobileResize: true,
    });

    if (settings.showScrollTrigger) {
        let updateCounter = 0;
        let lastUpdate = 0;
        const throttleInterval = 16;

        timeline = gsap.timeline({
            scrollTrigger: {
                trigger: wrapper.value,
                start: 'top top',
                end: `+=${scrollRange}`,
                scrub: options.scrub,
                pin: true,
                onUpdate: (self) => {
                    const now = performance.now();
                    if (now - lastUpdate >= throttleInterval) {
                        if (!isReverting) {
                            const progress = self.progress;
                            const newZ = THREE.MathUtils.lerp(0, MAX_Z, progress);
                            camera.position.set(0, 0, newZ);
                            camera.lookAt(0, 0, MAX_Z);
                            updateCounter++;
                            if (updateCounter % 4 === 0 || newZ < 1) { // Only update on even counts
                                projectStore.setProgress(Math.round(Math.abs(newZ)));
                            }
                        }
                        updateCubeColors(camera);
                        lastUpdate = now;
                    }

                    if (stats) stats.update();
                },
                onRefresh: () => {
                    camera.updateProjectionMatrix();
                },
            },
        });

        timeline.fromTo(camera.position,
            { z: 0 },
            { z: MAX_Z, duration: 1, ease: 'none' },
            0
        );
    }

    const setReverting = (value: boolean) => {
        isReverting = value;
    };

    const isScrollTriggerActive = () => isScrubbing;

    return { setReverting, timeline, isScrollTriggerActive };
}
