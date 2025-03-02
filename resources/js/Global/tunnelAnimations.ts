import { Ref } from 'vue'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function setupScrollAnimation(
    sceneNoGlow: THREE.Scene,
    sceneGlow: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    wrapper: Ref<HTMLElement | null>,
    cubes: THREE.Group[],
    updateCubeColors: (camera: THREE.PerspectiveCamera) => void,
    config: { CUBE_SIZE: number; CUBE_SPACING: number; FIRST_CUBE_Z: number },
    onScrollProgress?: (progress: number) => void // Callback for bloom fade
) {
    const { CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z } = config;

    const projectCubeCountRaw = cubes.length - 1; // Assuming first is intro cubes group
    const projectCubeCount = Math.min(projectCubeCountRaw, 10);
    const firstProjectCubeZ = FIRST_CUBE_Z - CUBE_SPACING;
    const lastProjectCubeZ = firstProjectCubeZ - (projectCubeCount - 1) * CUBE_SPACING;
    const lastProjectCubeBackEdge = lastProjectCubeZ - CUBE_SIZE / 2;

    const MAX_Z = lastProjectCubeBackEdge;
    const scrollDistance = Math.abs(MAX_Z);
    const SCROLL_BUFFER = 100;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: wrapper.value,
            start: 'top top',
            end: `+=${scrollDistance + SCROLL_BUFFER}`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            refreshPriority: 1,
            onUpdate: (self) => {
                if (onScrollProgress) {
                    onScrollProgress(self.progress); // Pass scroll progress for bloom fade
                }
            },
            onLeaveBack: () => {
                cubes.forEach(cube => {
                    cube.children.forEach((child) => {
                        const material = (child as THREE.LineSegments).material as THREE.LineBasicMaterial;
                        gsap.to(material, { opacity: 0, duration: 0.5, ease: 'power1.in' });
                    });
                });
            }
        }
    });

    tl.to(camera.position, {
        z: MAX_Z,
        ease: 'none',
        duration: 1,
        onUpdate: () => {
            camera.lookAt(0, 0, MAX_Z);
            updateCubeColors(camera);
        }
    });

    return tl;
}
