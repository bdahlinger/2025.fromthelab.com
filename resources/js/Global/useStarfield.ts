import * as THREE from 'three'
import { gsap } from 'gsap'

export function useStarfield(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    const STAR_COUNT = 500;
    const STAR_DISTANCE = 50000;
    const STAR_SIZE = 1 * window.devicePixelRatio;
    const MIN_OPACITY = 0.1;
    const MAX_OPACITY = 0.2;
    const BLINK_FADE_MIN = 0.05;
    const BLINKING_STAR_COUNT = 20;
    const CITY_BOTTOM_Y = -600;

    let starGroup: THREE.Points;
    let starMaterials: THREE.PointsMaterial;
    let geometry: THREE.BufferGeometry;

    const setupStarfield = () => {
        geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(STAR_COUNT * 3);
        const colors = new Float32Array(STAR_COUNT * 4);

        const fovRad = THREE.MathUtils.degToRad(camera.fov);
        const aspect = camera.aspect;
        const heightAtDistance = 2 * STAR_DISTANCE * Math.tan(fovRad / 2);
        const widthAtDistance = heightAtDistance * aspect;

        const starColors = [
            new THREE.Color(1, 0, 0),
            new THREE.Color(0, 1, 0),
            new THREE.Color(0, 0, 1),
            new THREE.Color(1, 1, 1)
        ];

        const opacityValues = new Float32Array(STAR_COUNT);

        for (let i = 0; i < STAR_COUNT; i++) {
            const x = THREE.MathUtils.randFloatSpread(widthAtDistance);
            const y = THREE.MathUtils.randFloat(CITY_BOTTOM_Y, CITY_BOTTOM_Y + heightAtDistance);
            const z = -STAR_DISTANCE;
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
            const opacity = THREE.MathUtils.randFloat(MIN_OPACITY, MAX_OPACITY);
            opacityValues[i] = opacity;
            const color = starColors[Math.floor(Math.random() * starColors.length)];
            colors[i * 4] = color.r;
            colors[i * 4 + 1] = color.g;
            colors[i * 4 + 2] = color.b;
            colors[i * 4 + 3] = opacity;
        }

        // Test static opacity change
        colors[3] = 0.5; // Star 0 alpha to 0.5
        console.log('Star 0 static alpha set to:', colors[3]);

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 4));

        starMaterials = new THREE.PointsMaterial({
            size: STAR_SIZE,
            transparent: true,
            vertexColors: true,
            fog: false,
            sizeAttenuation: false,
            blending: THREE.NormalBlending
        });
        console.log('Material transparent:', starMaterials.transparent, 'vertexColors:', starMaterials.vertexColors);

        starGroup = new THREE.Points(geometry, starMaterials);
        scene.add(starGroup);

        setupBlinkingStars(geometry, opacityValues);
    };

    const setupBlinkingStars = (geometry: THREE.BufferGeometry, opacityValues: Float32Array) => {
        const colorAttribute = geometry.getAttribute('color') as THREE.BufferAttribute;

        // Star 0
        const testIndex = 0;
        const initialOpacity0 = opacityValues[testIndex];
        colorAttribute.array[testIndex * 4 + 3] = initialOpacity0;
        gsap.to(colorAttribute.array, {
            [testIndex * 4 + 3]: BLINK_FADE_MIN,
            duration: 3,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            onUpdate: () => {
                colorAttribute.needsUpdate = true;
                console.log('Star 0 opacity:', colorAttribute.array[testIndex * 4 + 3]);
            }
        });

        // Other stars
        const indices = Array.from({ length: STAR_COUNT }, (_, i) => i).slice(1);
        const blinkingIndices: number[] = [];
        for (let i = 0; i < BLINKING_STAR_COUNT - 1; i++) {
            const randomIndex = Math.floor(Math.random() * indices.length);
            blinkingIndices.push(indices.splice(randomIndex, 1)[0]);
        }

        blinkingIndices.forEach((starIndex) => {
            const initialOpacity = opacityValues[starIndex];
            colorAttribute.array[starIndex * 4 + 3] = initialOpacity;
            gsap.to(colorAttribute.array, {
                [starIndex * 4 + 3]: BLINK_FADE_MIN,
                duration: THREE.MathUtils.randFloat(3, 6),
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
                onUpdate: () => {
                    colorAttribute.needsUpdate = true;
                    console.log('Star', starIndex, 'opacity:', colorAttribute.array[starIndex * 4 + 3]);
                }
            });
        });
    };

    setupStarfield();

    const dispose = () => {
        scene.remove(starGroup);
        starMaterials.dispose();
        geometry.dispose();
        gsap.killTweensOf(geometry.getAttribute('color')?.array);
    };

    return {
        starGroup,
        dispose
    };
}
