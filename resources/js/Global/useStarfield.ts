// useStarfield.ts
import * as THREE from 'three';
import { gsap } from 'gsap';

export function useStarfield(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    const STAR_SIZE = 20;
    const STAR_COUNT = 1000;
    const FIELD_XY_SIZE = 10000;
    const FIELD_Z_MIN = -1000;
    const FIELD_Z_MAX = -10000;

    // Exclusion zones
    const CAMERA_PATH_XY = 1000;
    const CAMERA_PATH_Z_MIN = -7200;
    const CUBE_XY = 150;
    const CUBE_Z_MIN = -500;
    const CUBE_Z_MAX = -2500;

    // Geometry setup
    const baseGeometry = new THREE.PlaneGeometry(STAR_SIZE, STAR_SIZE);
    const geometry = new THREE.InstancedBufferGeometry();
    geometry.index = baseGeometry.index;
    geometry.attributes.position = baseGeometry.attributes.position;
    geometry.attributes.uv = baseGeometry.attributes.uv;

    const offsets = new Float32Array(STAR_COUNT * 3);
    const initialOpacities = new Float32Array(STAR_COUNT); // Store initial values
    const dynamicOpacities = new Float32Array(STAR_COUNT); // For animation
    let placedStars = 0;

    // Generate stars
    while (placedStars < STAR_COUNT) {
        const x = (Math.random() - 0.5) * FIELD_XY_SIZE;
        const y = (Math.random() - 0.5) * FIELD_XY_SIZE;
        const z = FIELD_Z_MIN + Math.random() * (FIELD_Z_MAX - FIELD_Z_MIN);

        const inCameraPath = z > CAMERA_PATH_Z_MIN && Math.abs(x) < CAMERA_PATH_XY && Math.abs(y) < CAMERA_PATH_XY;
        const inCubeBounds = Math.abs(x) < CUBE_XY && Math.abs(y) < CUBE_XY && z > CUBE_Z_MAX && z < CUBE_Z_MIN;

        if (!inCameraPath && !inCubeBounds) {
            const index = placedStars * 3;
            offsets[index] = x;
            offsets[index + 1] = y;
            offsets[index + 2] = z;
            const opacity = 0.1 + Math.random() * (0.7 - 0.1);
            initialOpacities[placedStars] = opacity;
            dynamicOpacities[placedStars] = opacity; // Start at initial
            placedStars++;
        }
    }

    geometry.setAttribute('offset', new THREE.InstancedBufferAttribute(offsets, 3));
    geometry.setAttribute('opacity', new THREE.InstancedBufferAttribute(dynamicOpacities, 1));

    // Shader material
    const material = new THREE.ShaderMaterial({
        uniforms: {
            color: { value: new THREE.Color(1, 1, 1) },
        },
        vertexShader: `
      attribute vec3 offset;
      attribute float opacity;
      varying vec2 vUv;
      varying float vOpacity;

      void main() {
        vUv = uv;
        vOpacity = opacity;
        vec3 vPosition = position;
        vec4 mvPosition = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        mvPosition.xyz += vPosition;
        mvPosition = vec4(mvPosition.xyz + offset, 1.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
        fragmentShader: `
      uniform vec3 color;
      varying vec2 vUv;
      varying float vOpacity;

      void main() {
        float dist = distance(vUv, vec2(0.5, 0.5)) * 2.0;
        float alpha = vOpacity * (1.0 - dist);
        if (alpha <= 0.0) discard;
        gl_FragColor = vec4(color, alpha);
      }
    `,
        transparent: true,
        fog: false,
        depthWrite: false,
    });

    const starfield = new THREE.Mesh(geometry, material);
    starfield.frustumCulled = false;
    scene.add(starfield);

    // GSAP animation for blinking
    const opacityAttribute = geometry.attributes.opacity;
    for (let i = 0; i < STAR_COUNT; i++) {
        gsap.to({ opacity: initialOpacities[i] }, {
            opacity: 0.05,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            delay: Math.random() * 2, // Stagger start times
            onUpdate: function () {
                dynamicOpacities[i] = this.targets()[0].opacity;
                opacityAttribute.needsUpdate = true; // Flag for GPU update
            },
        });
    }

    // Dispose function
    const dispose = () => {
        gsap.killTweensOf(dynamicOpacities); // Stop GSAP animations
        scene.remove(starfield);
        geometry.dispose();
        material.dispose();
        baseGeometry.dispose();
    };

    return { dispose };
}
