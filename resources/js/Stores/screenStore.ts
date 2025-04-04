import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useScreenStore = defineStore('screen', () => {
    // Tailwind breakpoint thresholds (in pixels)
    const breakpoints = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        '2xl': 1536,
        '3xl': 1600,
        '4xl': 1920,
    };

    // Reactive screen width and height
    const screenWidth = ref(window.innerWidth);
    const screenHeight = ref(window.innerHeight);

    // Check for touch support
    const hasTouchSupport = computed(() => {
        return (
            'ontouchstart' in window ||
            (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
            (navigator as any).msMaxTouchPoints > 0
        );
    });

    // Orientation (portrait or landscape)
    const orientation = computed(() => {
        return screenWidth.value <= screenHeight.value ? 'portrait' : 'landscape';
    });

    // Refined mobile and tablet detection
    const isMobile = computed(() => {
        const isSmallScreen = screenWidth.value < breakpoints.md; // < 768px
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobileUA = /iphone|android|windows phone|blackberry|mobile/i.test(userAgent);
        return (hasTouchSupport.value && isSmallScreen) || isMobileUA;
    });

    const isTablet = computed(() => {
        const isMediumScreen = screenWidth.value >= breakpoints.md && screenWidth.value < breakpoints.lg; // 768px - 1023px
        return hasTouchSupport.value && isMediumScreen && !isMobile.value;
    });

    // Current breakpoint based on screen width
    const currentBreakpoint = computed(() => {
        if (screenWidth.value >= breakpoints['4xl']) return '4xl';
        if (screenWidth.value >= breakpoints['3xl']) return '3xl';
        if (screenWidth.value >= breakpoints['2xl']) return '2xl';
        if (screenWidth.value >= breakpoints.xl) return 'xl';
        if (screenWidth.value >= breakpoints.lg) return 'lg';
        if (screenWidth.value >= breakpoints.md) return 'md';
        if (screenWidth.value >= breakpoints.sm) return 'sm';
        return 'xs'; // Default for < 640px
    });

    // Update screen dimensions and orientation on resize
    function updateScreenDimensions() {
        screenWidth.value = window.innerWidth;
        screenHeight.value = window.innerHeight;
    }

    // Initialize resize listener
    function initResizeListener() {
        window.addEventListener('resize', updateScreenDimensions);
        updateScreenDimensions(); // Initial call
    }

    return {
        screenWidth,
        screenHeight,
        currentBreakpoint,
        isMobile,
        isTablet,
        orientation,
        hasTouchSupport,
        initResizeListener,
    };
});
