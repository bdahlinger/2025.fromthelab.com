import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function setupScrollAnimation(
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  wrapper: any,
  allCubes: THREE.Group[],
  updateCubeColors: (camera: THREE.PerspectiveCamera) => void,
  config: { CUBE_SIZE: number; CUBE_SPACING: number; FIRST_CUBE_Z: number }
) {
    const { CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z } = config;
    const cubeCount = allCubes?.length || 0;
    const MAX_Z = FIRST_CUBE_Z - (cubeCount + 1) * CUBE_SPACING;
    let isInPortalFocus = false;
    let originalCameraPosition: THREE.Vector3 | null = null;
    let originalCameraTarget: THREE.Vector3 | null = null;
    let isReverting = false;

    const scrollRange = Math.abs(MAX_Z) + (cubeCount - 1) * CUBE_SPACING;

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: wrapper.value,
            start: 'top top',
            end: `+=${scrollRange}`,
            scrub: 1,
            pin: true,
            onUpdate: (self) => {
                if (!isInPortalFocus && !isReverting) {
                    const progress = self.progress;
                    const newZ = THREE.MathUtils.lerp(0, MAX_Z, progress);
                    camera.position.set(0, 0, newZ);
                    camera.lookAt(0, 0, MAX_Z);
                }
                updateCubeColors(camera);
            }
        }
    });

    timeline.fromTo(camera.position,
      { z: 0 },
      { z: MAX_Z, duration: 1, ease: 'none' }
    );

    const setReverting = (value: boolean) => {
        isReverting = value;
    };

    return { setReverting, timeline };
}
