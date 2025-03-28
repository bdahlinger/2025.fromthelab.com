// resources/js/Global/useFontLoader.ts
import { ref, Ref } from 'vue';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

export function useFontLoader(fontUrl: string = '/fonts/Poppins_Regular.json') {
    const font: Ref<THREE.Font | null> = ref(null);
    const loadingProgress: Ref<number> = ref(0); // Progress from 0 to 100 for this asset
    const isLoaded: Ref<boolean> = ref(false);

    const loadFont = (): Promise<THREE.Font> => {
        return new Promise((resolve, reject) => {
            const fontLoader = new FontLoader();
            fontLoader.load(
                fontUrl,
                (loadedFont) => {
                    console.log('Font loaded successfully:', {
                        timestamp: Date.now(),
                        url: fontUrl,
                        userAgent: navigator.userAgent,
                    });
                    font.value = loadedFont;
                    loadingProgress.value = 100;
                    isLoaded.value = true;
                    resolve(loadedFont);
                },
                (event) => {
                    // Progress callback (optional refinement if loader supports it)
                    if (event.lengthComputable) {
                        loadingProgress.value = (event.loaded / event.total) * 100;
                    }
                },
                (error) => {
                    console.error('Font loading error details:', {
                        url: fontUrl,
                        message: error.message,
                        userAgent: navigator.userAgent,
                    });
                    loadingProgress.value = 100; // Mark as complete even on error to avoid stalling
                    isLoaded.value = true;
                    reject(error);
                }
            );
        });
    };

    // Expose a method to trigger loading and get the promise
    const initialize = () => loadFont();

    return {
        font,
        loadingProgress,
        isLoaded,
        initialize,
    };
}
