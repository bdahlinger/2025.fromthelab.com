// resources/js/Stores/tunnelStore.ts
import { defineStore } from 'pinia';

export const useTunnelStore = defineStore('tunnel', {
    state: () => ({
        isMobile: false,
        activeProjectSlug: null as string | null,
        scrollPosition: 0, // Store scroll position
    }),
    mutations: {
        storeIsMobile(state, value) {
            state.isMobile = value;
        },
    },
    actions: {

        setActiveProject(slug: string) {
            this.activeProjectSlug = slug;
        },
        clearActiveProject() {
            this.activeProjectSlug = null;
        },
        setScrollPosition(position: number) {
            this.scrollPosition = position;
            console.log('Scroll position stored:', position);
        },
        clearScrollPosition() {
            this.scrollPosition = 0;
        },
    },
    persist: true
});
