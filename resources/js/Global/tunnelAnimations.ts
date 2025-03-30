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
    stats?: Stats
) {
    const screenStore = useScreenStore();
    const projectStore = useProjectStore();
    const { CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z } = config;
    const cubeCount = allCubes?.length || 0;
    const MAX_Z = FIRST_CUBE_Z - (cubeCount + 1) * CUBE_SPACING;
    let isReverting = false;
    let isScrubbing = false;
    let lastVelocity = 0;
    let settleTimeout: number | null = null;
    const scrollRange = screenStore.isMobile
        ? (Math.abs(MAX_Z) + (cubeCount - 1) * CUBE_SPACING) * 0.7 // 70% of full range on mobile
        : Math.abs(MAX_Z) + (cubeCount - 1) * CUBE_SPACING


    let timeline = gsap.timeline();

    // Normalize scroll to prevent address bar show/hide on mobile
    /*ScrollTrigger.normalizeScroll({
        type: 'touch', // Only normalize touch events (not wheel/pointer)
        momentum: (self) => Math.min(4, self.velocityY / 500),
        lockAxis: true, // Prevent horizontal drift on touch
    });*/

    // Optionally ignore mobile resize events to avoid jumps
    ScrollTrigger.config({
        ignoreMobileResize: true,
    });

    if (settings.showScrollTrigger) {
        let updateCounter = 0;
        let lastUpdate = 0;
        const throttleInterval = 16;
       // const scrubSettleTime = (options.scrub || (screenStore.isMobile ? 0.8 : 0.5)) * 1000;

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
                                //console.log(Math.round(Math.abs(newZ)))
                            }
                        }
                        updateCubeColors(camera);
                        lastUpdate = now;
                    }
                    /*const currentVelocity = Math.abs(self.getVelocity());
                    if (currentVelocity > 1) {
                        isScrubbing = true;
                        if (settleTimeout) clearTimeout(settleTimeout);
                        settleTimeout = setTimeout(() => {
                            // Check if velocity has stabilized near 0 after scrub duration
                            if (Math.abs(self.getVelocity()) <= 1) {
                                isScrubbing = false;
                            }
                        }, scrubSettleTime); // Wait for scrub to settle
                    } else if (currentVelocity <= 1 && lastVelocity > 1 && !settleTimeout) {
                        // Start settle timer when velocity drops
                        settleTimeout = setTimeout(() => {
                            isScrubbing = false;
                        }, scrubSettleTime);
                    }
                    lastVelocity = currentVelocity;*/
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
