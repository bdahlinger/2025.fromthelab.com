import * as THREE from 'three'

export function useCityscape(scene: THREE.Scene) {
    // Constants
    const BUILDING_BASE_SIZE = 100; // X and Z dimensions
    const BUILDING_MIN_HEIGHT = 100;
    const BUILDING_MAX_HEIGHT = 300;
    const BUILDING_COLOR = 0x222222;
    const BUILDING_COUNT_X = 32; // Number of buildings along X
    const BUILDING_COUNT_Z = 60; // Number of buildings along Z
    const CITY_POSITION_Y = -600; // Below tunnel cubes
    const CITY_POSITION_Z = -500; // Starting Z offset from tunnel
    const FADE_COLUMNS = 10; // Number of columns to fade from 0.05 to 1.0
    const MIN_OPACITY = 0.05;
    const MAX_OPACITY = 1.0;

    let cityGroup: THREE.Group;
    let instancedLines: THREE.LineSegments;

    const setupCityscape = () => {
        cityGroup = new THREE.Group();

        // Base geometry: single wireframe box
        const baseGeometry = new THREE.BoxGeometry(BUILDING_BASE_SIZE, BUILDING_BASE_SIZE, BUILDING_BASE_SIZE);
        const edgesGeometry = new THREE.EdgesGeometry(baseGeometry);

        // Instanced geometry
        const totalInstances = BUILDING_COUNT_X * BUILDING_COUNT_Z; // 1920
        const instancedGeometry = new THREE.InstancedBufferGeometry();
        instancedGeometry.copy(edgesGeometry); // Copy vertex positions
        instancedGeometry.instanceCount = totalInstances;

        // Material
        const material = new THREE.LineBasicMaterial({
            color: BUILDING_COLOR,
            transparent: true,
            fog: true,
            vertexColors: true // Use vertex colors for opacity
        });

        // Instanced attributes
        const positions = new Float32Array(totalInstances * 3); // x, y, z
        const scales = new Float32Array(totalInstances * 3); // x, y, z scale
        const colors = new Float32Array(totalInstances * 3); // r, g, b (opacity proxy)

        // Grid dimensions
        const totalWidth = BUILDING_COUNT_X * BUILDING_BASE_SIZE; // 3200
        const totalDepth = BUILDING_COUNT_Z * BUILDING_BASE_SIZE; // 6000
        const startX = -totalWidth / 2 + BUILDING_BASE_SIZE / 2; // -1550
        const startZ = CITY_POSITION_Z; // -500

        // Populate attributes
        for (let i = 0; i < BUILDING_COUNT_X; i++) {
            const opacity = calculateOpacity(i);
            for (let j = 0; j < BUILDING_COUNT_Z; j++) {
                const index = i * BUILDING_COUNT_Z + j;

                // Position
                const x = startX + i * BUILDING_BASE_SIZE; // -1550 to 1550
                const z = startZ - j * BUILDING_BASE_SIZE; // -500 to -6500
                const height = THREE.MathUtils.randFloat(BUILDING_MIN_HEIGHT, BUILDING_MAX_HEIGHT);
                const yScale = height / BUILDING_BASE_SIZE; // 1.0 to 3.0
                const y = CITY_POSITION_Y + (height / 2); // Bottom at -600, adjust by half height
                positions[index * 3] = x;
                positions[index * 3 + 1] = y;
                positions[index * 3 + 2] = z;

                // Scale
                scales[index * 3] = 1.0; // X
                scales[index * 3 + 1] = yScale; // Y: 1.0 to 3.0
                scales[index * 3 + 2] = 1.0; // Z

                // Color (opacity)
                colors[index * 3] = opacity; // R as opacity
                colors[index * 3 + 1] = opacity; // G
                colors[index * 3 + 2] = opacity; // B
            }
        }

        // Add attributes
        instancedGeometry.setAttribute('instancePosition', new THREE.InstancedBufferAttribute(positions, 3));
        instancedGeometry.setAttribute('instanceScale', new THREE.InstancedBufferAttribute(scales, 3));
        instancedGeometry.setAttribute('color', new THREE.InstancedBufferAttribute(colors, 3));

        // Custom shader to apply scale and opacity
        material.onBeforeCompile = (shader) => {
            shader.vertexShader = `
                attribute vec3 instancePosition;
                attribute vec3 instanceScale;
                ${shader.vertexShader}
            `.replace(
                `#include <begin_vertex>`,
                `#include <begin_vertex>
                transformed *= instanceScale; // Apply scale
                transformed += instancePosition; // Then translate`
            );
        };

        // Create instanced LineSegments
        instancedLines = new THREE.LineSegments(instancedGeometry, material);

        // Fix bounding box for proper culling
        instancedGeometry.boundingBox = new THREE.Box3(
            new THREE.Vector3(-1550, -600, -6500), // min: left, bottom, back
            new THREE.Vector3(1550, -300, -500)    // max: right, top, front
        );
        instancedGeometry.boundingSphere = new THREE.Sphere(
            new THREE.Vector3(0, -450, -3500),     // center of the city
            6500                                   // radius to encompass full extent
        );

        cityGroup.add(instancedLines);
        scene.add(cityGroup);
    };

    const calculateOpacity = (columnIndex: number): number => {
        if (columnIndex < FADE_COLUMNS) {
            const step = (MAX_OPACITY - MIN_OPACITY) / (FADE_COLUMNS - 1); // 0.1056
            return MIN_OPACITY + columnIndex * step;
        } else if (columnIndex >= BUILDING_COUNT_X - FADE_COLUMNS) {
            const reverseIndex = BUILDING_COUNT_X - 1 - columnIndex;
            const step = (MAX_OPACITY - MIN_OPACITY) / (FADE_COLUMNS - 1);
            return MIN_OPACITY + reverseIndex * step;
        }
        return MAX_OPACITY;
    };

    setupCityscape();

    return {
        cityGroup,
        buildingLines: [instancedLines] // Consistent return type
    };
}
