// resources/js/Stores/tunnelStore.ts
import { defineStore } from 'pinia';

interface RootState {
    isMobile: boolean
    activeProjectSlug: string | null
    scrollPosition: number
    projects: App.Data.ProjectData[] | null
    project: App.Data.ProjectData | null
}

export const useTunnelStore = defineStore('tunnel', {
    state: (): RootState => ({
        isMobile: false,
        activeProjectSlug: null as string | null,
        scrollPosition: 0,
        projects: null,
        project: null,
    }),
    actions: {
        setProject(project: App.Data.ProjectData) {
            this.project = project;
        },
        setProjects(projects: App.Data.ProjectData[]) {
            this.projects = projects;
        },
        setActiveProject(slug: string) {
            this.activeProjectSlug = slug;
        },
        clearActiveProject() {
            this.activeProjectSlug = null;
        },
        setScrollPosition(position: number) {
            this.scrollPosition = position;
        },
        clearScrollPosition() {
            this.scrollPosition = 0;
        },
    },
    persist: true
});
