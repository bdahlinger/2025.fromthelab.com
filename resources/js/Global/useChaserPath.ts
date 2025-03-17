import * as THREE from 'three';

export function useChaserPath(scene: THREE.Scene, projectMaxZ: number) {
    const CHASER_PATH_Z_START = 0;
    const CHASER_PATH_Z_END = projectMaxZ - 1500;
    const POINTS_COUNT = 100;
    const CHASER_SIZE = 2;
    const CHASERS_PER_SET = 64;
    const CHASER_SPEED = 1000;
    const POOL_SIZE = CHASERS_PER_SET * 3;
    const EMIT_INTERVALS = [4, 4.5, 5];
    const TRAIL_SPACING = 6;
    const showChasers = false; // Toggle to disable chasers for debugging

    let chaserPath: THREE.CatmullRomCurve3;
    let chaserPath2: THREE.CatmullRomCurve3;
    let chaserPath3: THREE.CatmullRomCurve3;
    let chaserPathLine: THREE.Line;
    let chaserPathLine2: THREE.Line;
    let chaserPathLine3: THREE.Line;
    const chaserGroups: THREE.Group[] = [];
    const chasers: THREE.Mesh[][] = [[], [], []];
    const distances: number[][] = [[], [], []];
    const activeChasers: boolean[][] = [[], [], []];
    let lastEmitTimes: number[] = [0, 0, 0];

    const setupChaserPaths = () => {
        if (!showChasers) return; // Skip setup if chasers are disabled

        const zRange = CHASER_PATH_Z_START - CHASER_PATH_Z_END;
        const points1: THREE.Vector3[] = [];
        for (let i = 0; i < POINTS_COUNT; i++) {
            const t = i / (POINTS_COUNT - 1);
            const z = CHASER_PATH_Z_START - t * zRange;
            const theta = t * 5 * 2 * Math.PI;
            const radius = 90 * (0.8 + 0.2 * Math.sin(theta * 2));
            const point = new THREE.Vector3(radius * Math.cos(theta), radius * Math.sin(theta), z);
            if (isNaN(point.x) || isNaN(point.y) || isNaN(point.z)) {
                console.error('NaN in chaserPath points', { t, z, projectMaxZ });
            }
            points1.push(point);
        }
        chaserPath = new THREE.CatmullRomCurve3(points1);
        const geometry1 = new THREE.BufferGeometry().setFromPoints(chaserPath.getPoints(200));
        chaserPathLine = new THREE.Line(geometry1, new THREE.LineBasicMaterial({ color: 0xff00ff, linewidth: 2, visible: false }));
        scene.add(chaserPathLine);

        const points2: THREE.Vector3[] = [];
        for (let i = 0; i < POINTS_COUNT; i++) {
            const t = i / (POINTS_COUNT - 1);
            const z = CHASER_PATH_Z_START - t * zRange;
            const theta = t * 3 * 2 * Math.PI;
            const radius = 60 * (0.8 + 0.2 * Math.sin(theta * 4));
            const point = new THREE.Vector3(radius * Math.cos(theta), radius * Math.sin(theta), z);
            if (isNaN(point.x) || isNaN(point.y) || isNaN(point.z)) {
                console.error('NaN in chaserPath2 points', { t, z, projectMaxZ });
            }
            points2.push(point);
        }
        chaserPath2 = new THREE.CatmullRomCurve3(points2);
        const geometry2 = new THREE.BufferGeometry().setFromPoints(chaserPath2.getPoints(200));
        chaserPathLine2 = new THREE.Line(geometry2, new THREE.LineBasicMaterial({ color: 0x00ffff, linewidth: 2, visible: false }));
        scene.add(chaserPathLine2);

        const points3: THREE.Vector3[] = [];
        for (let i = 0; i < POINTS_COUNT; i++) {
            const t = i / (POINTS_COUNT - 1);
            const z = CHASER_PATH_Z_START - t * zRange;
            const theta = t * 7 * 2 * Math.PI;
            const baseRadiusX = 100;
            const baseRadiusY = 90;
            const modulation = 0.1 * Math.sin(theta);
            const point = new THREE.Vector3(baseRadiusX * (1 + modulation) * Math.cos(theta), baseRadiusY * (1 - modulation) * Math.sin(theta), z);
            if (isNaN(point.x) || isNaN(point.y) || isNaN(point.z)) {
                console.error('NaN in chaserPath3 points', { t, z, projectMaxZ });
            }
            points3.push(point);
        }
        chaserPath3 = new THREE.CatmullRomCurve3(points3);
        const geometry3 = new THREE.BufferGeometry().setFromPoints(chaserPath3.getPoints(200));
        chaserPathLine3 = new THREE.Line(geometry3, new THREE.LineBasicMaterial({ color: 0xffff00, linewidth: 2, visible: false }));
        scene.add(chaserPathLine3);

        const paths = [chaserPath, chaserPath2, chaserPath3];
        const colors = [0xff0000, 0x00ff00, 0x0000ff];
        const geometry = new THREE.BoxGeometry(CHASER_SIZE, CHASER_SIZE, CHASER_SIZE);
        if (geometry.attributes.color) {
            delete geometry.attributes.color;
        }

        for (let pathIdx = 0; pathIdx < 3; pathIdx++) {
            const group = new THREE.Group();
            group.opacity = 1;
            group.renderOrder = 1;
            chaserGroups[pathIdx] = group;
            scene.add(group);

            for (let i = 0; i < POOL_SIZE; i++) {
                const material = new THREE.MeshBasicMaterial({
                    color: colors[pathIdx],
                    transparent: true,
                    opacity: 0,
                    blending: THREE.NormalBlending,
                    fog: true,
                    depthWrite: false,
                });
                const chaser = new THREE.Mesh(geometry, material);
                chaser.renderOrder = 1;
                chaser.visible = false;
                group.add(chaser);
                chasers[pathIdx][i] = chaser;
                distances[pathIdx][i] = 0;
                activeChasers[pathIdx][i] = false;
            }
        }
    };

    const emitChaserSet = (pathIdx: number) => {
        if (!showChasers) return; // Skip emission if chasers are disabled

        const path = [chaserPath, chaserPath2, chaserPath3][pathIdx];
        const totalLength = path.getLength();
        const activeCount = activeChasers[pathIdx].filter(active => active).length;
        const available = POOL_SIZE - activeCount;

        if (available >= CHASERS_PER_SET) {
            let emitted = 0;
            for (let i = 0; i < CHASERS_PER_SET; i++) {
                const chaserIdx = activeChasers[pathIdx].findIndex((active) => !active);
                if (chaserIdx === -1) {
                    console.warn(`No available chasers for path ${pathIdx}, emitted ${emitted}/${CHASERS_PER_SET}`);
                    break;
                }

                const t = emitted / (CHASERS_PER_SET - 1);
                const opacity = 0.05 + (1.0 - 0.05) * Math.pow(t, 3);
                const material = new THREE.MeshBasicMaterial({
                    color: [0xff0000, 0x00ff00, 0x0000ff][pathIdx],
                    transparent: true,
                    opacity: opacity,
                    blending: THREE.AdditiveBlending,
                    fog: true,
                    depthWrite: false,
                });
                chasers[pathIdx][chaserIdx].material = material;

                chasers[pathIdx][chaserIdx].visible = true;
                const offset = emitted * TRAIL_SPACING;
                distances[pathIdx][chaserIdx] = offset;
                activeChasers[pathIdx][chaserIdx] = true;

                const tParam = offset / totalLength;
                const point = path.getPointAt(tParam);
                chasers[pathIdx][chaserIdx].position.copy(point);
                emitted++;
            }
        }
    };

    const updateChasers = (delta: number) => {
        if (!showChasers) return; // Skip updates if chasers are disabled

        const currentTime = performance.now() / 1000;
        const paths = [chaserPath, chaserPath2, chaserPath3];

        for (let pathIdx = 0; pathIdx < 3; pathIdx++) {
            if (currentTime - lastEmitTimes[pathIdx] >= EMIT_INTERVALS[pathIdx]) {
                emitChaserSet(pathIdx);
                lastEmitTimes[pathIdx] = currentTime;
            }

            const path = paths[pathIdx];
            const totalLength = path.getLength();
            const distancePerFrame = CHASER_SPEED * delta;

            for (let i = 0; i < POOL_SIZE; i++) {
                if (activeChasers[pathIdx][i]) {
                    distances[pathIdx][i] += distancePerFrame;
                    const t = distances[pathIdx][i] / totalLength;

                    if (t >= 1) {
                        chasers[pathIdx][i].visible = false;
                        activeChasers[pathIdx][i] = false;
                        distances[pathIdx][i] = 0;
                    } else {
                        const point = path.getPointAt(t);
                        chasers[pathIdx][i].position.copy(point);
                    }
                }
            }
        }
    };

    // Initialize chaser paths only if enabled
    setupChaserPaths();

    const dispose = () => {
        if (!showChasers) return; // Skip disposal if chasers were never created

        scene.remove(chaserPathLine);
        scene.remove(chaserPathLine2);
        scene.remove(chaserPathLine3);
        chaserPathLine.geometry.dispose();
        chaserPathLine.material.dispose();
        chaserPathLine2.geometry.dispose();
        chaserPathLine2.material.dispose();
        chaserPathLine3.geometry.dispose();
        chaserPathLine3.material.dispose();
        chaserGroups.forEach(group => {
            group.children.forEach(chaser => {
                (chaser as THREE.Mesh).geometry.dispose();
                ((chaser as THREE.Mesh).material as THREE.Material).dispose();
            });
            scene.remove(group);
        });
    };

    return { chaserPath, chaserPath2, chaserPath3, updateChasers, dispose };
}
