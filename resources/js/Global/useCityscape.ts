import * as THREE from 'three'

export function useCityscape(sceneNoGlow: THREE.Scene, sceneGlow: THREE.Scene) {
    const BUILDING_BASE_SIZE = 100;
    const BUILDING_MIN_HEIGHT = 100;
    const BUILDING_MAX_HEIGHT = 300;
    const BUILDING_COLOR = 0x222222;
    const BUILDING_COUNT_X = 32;
    const BUILDING_COUNT_Z = 60;
    const CITY_POSITION_Y = -600;
    const CITY_POSITION_Z = -500;
    const FADE_COLUMNS = 10;
    const MIN_OPACITY = 0.05;
    const MAX_OPACITY = 1.0;

    const PARTICLE_SIZE = 4;
    const EMITTER_COUNT = 6;
    const PARTICLE_SPEED = 100;
    const EMITTER_Y = -450;
    const CITY_END_Z = -6500;
    const PARTICLES_PER_PATH = 60;

    let cityGroup: THREE.Group;
    let instancedLines: THREE.LineSegments;
    let particleGroup: THREE.Group;
    let particles: THREE.Mesh[] = [];
    let paths: { points: THREE.Vector3[], totalLength: number }[] = [];
    let particleDistances: number[] = [];
    let particlePaths: number[] = [];
    let particleDirections: number[] = [];

    const setupCityscape = () => {
        cityGroup = new THREE.Group();

        const baseGeometry = new THREE.BoxGeometry(BUILDING_BASE_SIZE, BUILDING_BASE_SIZE, BUILDING_BASE_SIZE);
        const edgesGeometry = new THREE.EdgesGeometry(baseGeometry);
        const totalInstances = BUILDING_COUNT_X * BUILDING_COUNT_Z;
        const instancedGeometry = new THREE.InstancedBufferGeometry();
        instancedGeometry.copy(edgesGeometry);
        instancedGeometry.instanceCount = totalInstances;
        const material = new THREE.LineBasicMaterial({
            color: BUILDING_COLOR,
            transparent: true,
            fog: true,
            vertexColors: true
        });
        const positions = new Float32Array(totalInstances * 3);
        const scales = new Float32Array(totalInstances * 3);
        const colors = new Float32Array(totalInstances * 3);
        const totalWidth = BUILDING_COUNT_X * BUILDING_BASE_SIZE;
        const totalDepth = BUILDING_COUNT_Z * BUILDING_BASE_SIZE;
        const startX = -totalWidth / 2 + BUILDING_BASE_SIZE / 2;
        const startZ = CITY_POSITION_Z;

        for (let i = 0; i < BUILDING_COUNT_X; i++) {
            const opacity = calculateOpacity(i);
            for (let j = 0; j < BUILDING_COUNT_Z; j++) {
                const index = i * BUILDING_COUNT_Z + j;
                const x = startX + i * BUILDING_BASE_SIZE;
                const z = startZ - j * BUILDING_BASE_SIZE;
                const height = THREE.MathUtils.randFloat(BUILDING_MIN_HEIGHT, BUILDING_MAX_HEIGHT);
                const yScale = height / BUILDING_BASE_SIZE;
                const y = CITY_POSITION_Y + (height / 2);
                positions[index * 3] = x;
                positions[index * 3 + 1] = y;
                positions[index * 3 + 2] = z;
                scales[index * 3] = 1.0;
                scales[index * 3 + 1] = yScale;
                scales[index * 3 + 2] = 1.0;
                colors[index * 3] = opacity;
                colors[index * 3 + 1] = opacity;
                colors[index * 3 + 2] = opacity;
            }
        }

        instancedGeometry.setAttribute('instancePosition', new THREE.InstancedBufferAttribute(positions, 3));
        instancedGeometry.setAttribute('instanceScale', new THREE.InstancedBufferAttribute(scales, 3));
        instancedGeometry.setAttribute('color', new THREE.InstancedBufferAttribute(colors, 3));

        material.onBeforeCompile = (shader) => {
            shader.vertexShader = `
                attribute vec3 instancePosition;
                attribute vec3 instanceScale;
                ${shader.vertexShader}
            `.replace(
                `#include <begin_vertex>`,
                `#include <begin_vertex>
                transformed *= instanceScale;
                transformed += instancePosition;`
            );
        };

        instancedLines = new THREE.LineSegments(instancedGeometry, material);

        // Dynamic bounding box calculation
        const minX = -totalWidth / 2;
        const maxX = totalWidth / 2;
        const minY = CITY_POSITION_Y; // Base of the shortest building
        const maxY = CITY_POSITION_Y + BUILDING_MAX_HEIGHT; // Top of the tallest building
        const minZ = CITY_END_Z; // Farthest Z (end of city)
        const maxZ = CITY_POSITION_Z; // Nearest Z (start of city)
        instancedGeometry.boundingBox = new THREE.Box3(
            new THREE.Vector3(minX, minY, minZ),
            new THREE.Vector3(maxX, maxY, maxZ)
        );

        // Dynamic bounding sphere calculation
        const centerX = (minX + maxX) / 2;
        const centerY = (minY + maxY) / 2;
        const centerZ = (minZ + maxZ) / 2;
        const width = maxX - minX;
        const height = maxY - minY;
        const depth = maxZ - minZ;
        const radius = Math.sqrt(width * width + height * height + depth * depth) / 2;
        instancedGeometry.boundingSphere = new THREE.Sphere(
            new THREE.Vector3(centerX, centerY, centerZ),
            radius
        );

        cityGroup.add(instancedLines);
        sceneGlow.add(cityGroup); // Single scene usage, but keeping glow intent

        // Particle setup (unchanged)
        particleGroup = new THREE.Group();

        const emitterSpacing = totalWidth / (EMITTER_COUNT - 1);
        const startXBase = -totalWidth / 2;

        for (let i = 0; i < EMITTER_COUNT; i++) {
            const startX = startXBase + i * emitterSpacing;
            let currentX = startX;
            let currentZ = CITY_POSITION_Z;
            const points: THREE.Vector3[] = [new THREE.Vector3(currentX, EMITTER_Y, currentZ)];
            let totalLength = 0;

            while (currentZ > CITY_END_Z) {
                const zLength = currentZ === CITY_POSITION_Z
                    ? THREE.MathUtils.randFloat(300, 800)
                    : Math.min(THREE.MathUtils.randFloat(300, 800), Math.abs(currentZ - CITY_END_Z));
                currentZ -= zLength;
                points.push(new THREE.Vector3(currentX, EMITTER_Y, currentZ));
                totalLength += zLength;

                if (currentZ <= CITY_END_Z) {
                    points[points.length - 1].z = CITY_END_Z;
                    break;
                }

                const xDirection = Math.random() < 0.5 ? -1 : 1;
                const xLength = THREE.MathUtils.randFloat(100, 300);
                currentX += xDirection * xLength;
                points.push(new THREE.Vector3(currentX, EMITTER_Y, currentZ));
                totalLength += xLength;
            }

            paths.push({ points, totalLength });
        }

        const particleGeometry = new THREE.BoxGeometry(PARTICLE_SIZE, PARTICLE_SIZE, PARTICLE_SIZE);

        for (let i = 0; i < EMITTER_COUNT; i++) {
            const path = paths[i];
            const totalLength = path.totalLength;
            const distanceStep = totalLength / PARTICLES_PER_PATH;

            for (let j = 0; j < PARTICLES_PER_PATH; j++) {
                const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, fog: true });
                const particle = new THREE.Mesh(particleGeometry, particleMaterial);
                const distance = j * distanceStep;
                let traveled = distance;
                for (let k = 0; k < path.points.length - 1; k++) {
                    const start = path.points[k];
                    const end = path.points[k + 1];
                    const segmentLength = start.distanceTo(end);
                    if (traveled <= segmentLength) {
                        const t = traveled / segmentLength;
                        particle.position.lerpVectors(start, end, t);
                        break;
                    }
                    traveled -= segmentLength;
                }
                particles.push(particle);
                particleDistances.push(distance);
                particlePaths.push(i);
                particleDirections.push(1);
                particleGroup.add(particle);
            }

            for (let j = 0; j < PARTICLES_PER_PATH; j++) {
                const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, fog: true });
                const particle = new THREE.Mesh(particleGeometry, particleMaterial);
                const distance = totalLength - (j * distanceStep);
                let traveled = totalLength - distance;
                const reversedPoints = [...path.points].reverse();
                for (let k = 0; k < reversedPoints.length - 1; k++) {
                    const start = reversedPoints[k];
                    const end = reversedPoints[k + 1];
                    const segmentLength = start.distanceTo(end);
                    if (traveled <= segmentLength) {
                        const t = traveled / segmentLength;
                        particle.position.lerpVectors(start, end, t);
                        break;
                    }
                    traveled -= segmentLength;
                }
                particles.push(particle);
                particleDistances.push(distance);
                particlePaths.push(i);
                particleDirections.push(-1);
                particleGroup.add(particle);
            }
        }

        sceneGlow.add(particleGroup); // Single scene usage
    };

    const calculateOpacity = (columnIndex: number): number => {
        if (columnIndex < FADE_COLUMNS) {
            const step = (MAX_OPACITY - MIN_OPACITY) / (FADE_COLUMNS - 1);
            return MIN_OPACITY + columnIndex * step;
        } else if (columnIndex >= BUILDING_COUNT_X - FADE_COLUMNS) {
            const reverseIndex = BUILDING_COUNT_X - 1 - columnIndex;
            const step = (MAX_OPACITY - MIN_OPACITY) / (FADE_COLUMNS - 1);
            return MIN_OPACITY + reverseIndex * step;
        }
        return MAX_OPACITY;
    };

    const updateParticles = (delta: number) => {
        const distancePerFrame = PARTICLE_SPEED * delta;

        for (let i = 0; i < particles.length; i++) {
            const direction = particleDirections[i];
            particleDistances[i] += distancePerFrame * direction;
            const pathIndex = particlePaths[i];
            const path = paths[pathIndex];
            const totalLength = path.totalLength;

            if (direction === 1 && particleDistances[i] >= totalLength) {
                particleDistances[i] = 0;
                particles[i].position.copy(path.points[0]);
            } else if (direction === -1 && particleDistances[i] <= 0) {
                particleDistances[i] = totalLength;
                particles[i].position.copy(path.points[path.points.length - 1]);
            } else {
                const distance = particleDistances[i];
                const points = direction === 1 ? path.points : [...path.points].reverse();
                let traveled = direction === 1 ? distance : totalLength - distance;
                for (let j = 0; j < points.length - 1; j++) {
                    const start = points[j];
                    const end = points[j + 1];
                    const segmentLength = start.distanceTo(end);
                    if (traveled <= segmentLength) {
                        const t = traveled / segmentLength;
                        particles[i].position.lerpVectors(start, end, t);
                        break;
                    }
                    traveled -= segmentLength;
                }
            }
        }
    };

    setupCityscape();

    return {
        cityGroup,
        buildingLines: [instancedLines],
        updateParticles
    };
}
