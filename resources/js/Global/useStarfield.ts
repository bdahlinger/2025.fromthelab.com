import * as THREE from 'three';
import { gsap } from 'gsap'
import { useScreenStore } from "@/Stores/screenStore";

export function useStarfield(scene: THREE.Scene, camera: THREE.PerspectiveCamera, projectMaxZ: number) {

    const screenStore = useScreenStore();

    const STAR_SIZE = screenStore.isMobile ? 25 : 20;
    const STAR_COUNT = screenStore.isMobile ? 800 : 1800;
    const FIELD_XY_SIZE = 4000;
    const FIELD_Z_MIN = -1000;
    const FIELD_Z_MAX = projectMaxZ - 1000; // Match city buffer

    // Exclusion zones
    const CAMERA_PATH_XY = 1000;
    const CAMERA_PATH_Z_MIN = projectMaxZ; // Align with last cube
    const CUBE_XY = 150;
    const CUBE_Z_MIN = -500;
    const CUBE_Z_MAX = projectMaxZ;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(STAR_COUNT * 3);
    const initialOpacities = new Float32Array(STAR_COUNT);
    const dynamicOpacities = new Float32Array(STAR_COUNT);
    let placedStars = 0;

    while (placedStars < STAR_COUNT) {
        const x = (Math.random() - 0.5) * FIELD_XY_SIZE;
        const y = (Math.random() - 0.5) * FIELD_XY_SIZE;
        const z = FIELD_Z_MIN + Math.random() * (FIELD_Z_MAX - FIELD_Z_MIN);

        const inCameraPath = z > CAMERA_PATH_Z_MIN && Math.abs(x) < CAMERA_PATH_XY && Math.abs(y) < CAMERA_PATH_XY;
        const inCubeBounds = Math.abs(x) < CUBE_XY && Math.abs(y) < CUBE_XY && z > CUBE_Z_MAX && z < CUBE_Z_MIN;

        if (!inCameraPath && !inCubeBounds) {
            const index = placedStars * 3;
            positions[index] = x;
            positions[index + 1] = y;
            positions[index + 2] = z;
            const opacity = 0.1 + Math.random() * (0.7 - 0.1);
            initialOpacities[placedStars] = opacity;
            dynamicOpacities[placedStars] = opacity;
            placedStars++;
        }
    }

    // Rest of the code (geometry attributes, material, animation) remains unchanged
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('opacity', new THREE.BufferAttribute(dynamicOpacities, 1));

    const material = new THREE.ShaderMaterial({
        uniforms: {
            color: { value: new THREE.Color(1, 1, 1) },
            size: { value: STAR_SIZE },
        },
        vertexShader: `
            attribute float opacity;
            varying float vOpacity;
            uniform float size;
            void main() {
                vOpacity = opacity;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (300.0 / -mvPosition.z); // Size attenuation
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            uniform vec3 color;
            varying float vOpacity;
            void main() {
                float dist = distance(gl_PointCoord, vec2(0.5, 0.5)) * 2.0;
                float alpha = vOpacity * (1.0 - dist);
                if (alpha <= 0.0) discard;
                gl_FragColor = vec4(color, alpha);
            }
        `,
        transparent: true,
        fog: false,
        depthWrite: false,
    });

    /*const starfield = new THREE.Points(geometry, material);
    scene.add(starfield);

    const opacityAttribute = geometry.attributes.opacity;
    for (let i = 0; i < STAR_COUNT; i++) {
        gsap.to({ opacity: initialOpacities[i] }, {
            opacity: 0.05,
            duration: 1 + Math.random(), // 1 to 2 seconds
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            delay: Math.random() * 2,
            onUpdate: function () {
                dynamicOpacities[i] = this.targets()[0].opacity;
                opacityAttribute.needsUpdate = true;
            },
        });
    }*/
    const starfield = new THREE.Points(geometry, material);
    starfield.frustumCulled = true; // Enable frustum culling
    scene.add(starfield);

    // Single GSAP tween for all stars
    const opacityObj = { values: dynamicOpacities.slice() };
    const opacityAttribute = geometry.attributes.opacity;
    gsap.to(opacityObj, {
        duration: 2, // Fixed duration for simplicity
        onUpdate: () => {
            const time = Date.now() * 0.001; // Convert to seconds
            for (let i = 0; i < STAR_COUNT; i++) {
                // Sine wave with per-star phase offset (i-based)
                opacityObj.values[i] = initialOpacities[i] * (0.05 + 0.95 * Math.abs(Math.sin(time + i * 0.01)));
            }
            opacityAttribute.array.set(opacityObj.values);
            opacityAttribute.needsUpdate = true;
        },
        repeat: -1,
        ease: 'none', // Linear updates, sine wave handles the easing
    });

    // Frustum culling check (optional fine-grained control)
    const frustum = new THREE.Frustum();
    const updateVisibility = () => {
        frustum.setFromProjectionMatrix(
            camera.projectionMatrix.clone().multiply(camera.matrixWorldInverse)
        );
        starfield.visible = frustum.intersectsSphere(boundingSphere);
    };
    const dispose = () => {
        gsap.killTweensOf(dynamicOpacities);
        scene.remove(starfield);
        geometry.dispose();
        material.dispose();
    };

    return { dispose };
}
