// resources/js/sceneManager.ts
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

export const sceneManager = (() => {
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let renderer: THREE.WebGLRenderer | null = null;
    let composer: EffectComposer | null = null;
    let bloomPass: UnrealBloomPass | null = null;
    let stats: Stats | null = null;
    let container: HTMLElement | null = null;

    const init = (domContainer: HTMLElement) => {
        if (scene) {
            // Reattach renderer if container changes
            if (container !== domContainer) {
                container?.removeChild(renderer!.domElement);
                domContainer.appendChild(renderer!.domElement);
                container = domContainer;
            }
            return;
        }

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);
        scene.fog = new THREE.Fog(0x000000, 700, 4000);

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 60000);
        camera.position.set(0, 0, 0);
        camera.lookAt(0, 0, 1000);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;
        renderer.outputEncoding = THREE.sRGBEncoding;
        domContainer.appendChild(renderer.domElement);
        container = domContainer;

        composer = new EffectComposer(renderer);
        const renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);
        bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 6.0, 0.4, 0.0);
        bloomPass.renderToScreen = true;
        composer.addPass(bloomPass);

        import('three/examples/jsm/libs/stats.module').then(({ default: Stats }) => {
            stats = new Stats();
            stats.dom.style.position = 'fixed';
            stats.dom.style.top = '0px';
            stats.dom.style.left = '0px';
            stats.dom.style.zIndex = '1000';
            document.body.appendChild(stats.dom);
        });
    };

    const dispose = () => {
        if (renderer && container) container.removeChild(renderer.domElement);
        if (renderer) renderer.dispose();
        if (composer) composer.dispose();
        if (scene) scene.clear();
        if (stats) document.body.removeChild(stats.dom);
        scene = null;
        camera = null;
        renderer = null;
        composer = null;
        bloomPass = null;
        stats = null;
        container = null;
    };

    return {
        getScene: () => scene!,
        getCamera: () => camera!,
        getRenderer: () => renderer!,
        getComposer: () => composer!,
        getBloomPass: () => bloomPass!,
        getStats: () => stats!,
        init,
        dispose,
    };
})();
