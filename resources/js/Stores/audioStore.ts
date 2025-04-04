// @/Stores/audioStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAudioStore = defineStore('audio', () => {
    const isMuted = ref(false);
    const masterVolume = ref(1.0); // 0.0 to 1.0
    const userEngaged = ref(false);
    const audioEnabled = ref(false); // Moved from projectStore

    function toggleMute() {
        isMuted.value = !isMuted.value;
    }

    function setVolume(volume: number) {
        masterVolume.value = Math.max(0, Math.min(1, volume));
    }

    function unlockAudio() {
        if (!userEngaged.value) {
            userEngaged.value = true;
            audioEnabled.value = true; // Enable audio on user engagement
        }
    }

    function toggleAudioEnabled() {
        if (userEngaged.value) { // Only toggle if user has engaged
            audioEnabled.value = !audioEnabled.value;
        }
    }

    return {
        isMuted,
        masterVolume,
        userEngaged,
        audioEnabled, // Exported for components to use
        toggleMute,
        setVolume,
        unlockAudio,
        toggleAudioEnabled,
    };
});
