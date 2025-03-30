// @/Stores/threeStore.ts
import { defineStore } from 'pinia';
import * as THREE from 'three';

// Plain JavaScript objects outside Pinia’s reactive state
let renderer: THREE.WebGLRenderer | null = null;
let scene: THREE.Scene | null = null;
let canvas: HTMLCanvasElement | null = null;
let animationFrameId: number | null = null;

export const useThreeStore = defineStore('three', {
    state: () => ({
        components: new Map<string, { objects: THREE.Object3D[], cleanup: () => void, camera?: THREE.Camera }>(),
    }),
    actions: {
        initialize() {
            if (!renderer) {
                canvas = document.createElement('canvas');
                document.body.appendChild(canvas); // Adjust container as needed
                renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
                renderer.setPixelRatio(window.devicePixelRatio);
                scene = new THREE.Scene();
                this.animate();
            }
        },
        registerComponent(id: string, objects: THREE.Object3D[], cleanup: () => void, camera?: THREE.Camera) {
            this.components.set(id, { objects, cleanup, camera });
            if (scene) {
                objects.forEach(obj => scene!.add(obj));
            }
        },
        unregisterComponent(id: string) {
            const component = this.components.get(id);
            if (component && scene) {
                component.objects.forEach(obj => scene!.remove(obj));
                component.cleanup();
                this.components.delete(id);
            }
        },
        animate() {
            animationFrameId = requestAnimationFrame(() => this.animate());
            if (renderer && scene) {
                // Render once with the first active camera (or a default)
                const activeComponent = Array.from(this.components.values()).find(comp => comp.camera && comp.objects.length > 0);
                if (activeComponent && activeComponent.camera) {
                    console.log(`Rendering with camera for component ${Array.from(this.components.keys())[0]}`);
                    renderer.render(scene, activeComponent.camera);
                }
            }
        },
        dispose() {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            this.components.forEach(component => component.cleanup());
            this.components.clear();
            if (renderer) {
                renderer.dispose();
                renderer.forceContextLoss();
                if (canvas && canvas.parentNode) {
                    canvas.parentNode.removeChild(canvas);
                }
            }
            renderer = null;
            scene = null;
            canvas = null;
        },
    },
});
