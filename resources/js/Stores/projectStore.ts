// resources/js/Stores/projectStore.ts
import { defineStore } from 'pinia';

interface RootState {
    activeProjectSlug: string | null
    scrollPosition: number
    projects: App.Data.ProjectData[] | null
    project: App.Data.ProjectData | null,
    progress: number,
    cubeSize: number,
    cubeSpacing: number,
    firstCubeZ: number
}

export const useProjectStore = defineStore('project', {
    state: (): RootState => ({
        activeProjectSlug: null as string | null,
        scrollPosition: 0,
        projects: null,
        project: null,
        progress: -1,
        cubeSize: 250,
        cubeSpacing: 500,
        firstCubeZ: -500
    }),
    actions: {
        setProgress( progress: number) {
            this.progress = progress;
        },
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
