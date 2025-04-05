// resources/js/Stores/projectStore.ts
import { defineStore } from 'pinia';
interface CubeMetadata {
    index: number;
    rotation: number; // in degrees
    flipped: boolean;
}
interface RootState {
    activeProjectSlug: string | null
    scrollPosition: number
    projects: App.Data.ProjectData[] | null
    project: App.Data.ProjectData | null
    progress: number
    cubeSize: number
    cubeSpacing: number
    firstCubeZ: number
    isInPortalLock: boolean // New
    activeProjectIndex: number | null
    cubeMetadata: CubeMetadata[] | null
    loadingProgress: number | null
    //audioEnabled: boolean
    //userEngaged: boolean
}

export const useProjectStore = defineStore('project', {
    state: (): RootState => ({
        activeProjectSlug: null,
        scrollPosition: 0,
        projects: null,
        project: null,
        progress: -1,
        cubeSize: 250,
        cubeSpacing: 500,
        firstCubeZ: -500,
        isInPortalLock: false,
        activeProjectIndex: null,
        projectCubes: null,
        cubeMetadata: null,
        loadingProgress: 0,
    }),
    actions: {
        setProgress(progress: number) {
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
        setPortalLock(isLocked: boolean, index: number | null = null) { // New action
            this.isInPortalLock = isLocked;
            this.activeProjectIndex = isLocked ? index : null;
        },
        setCubeMetadata(metadata: CubeMetadata[]) {
            this.cubeMetadata = metadata;
        },
        setLoadingProgress(val: number) {
            this.loadingProgress = val;
        },

    },
    persist: true
});
