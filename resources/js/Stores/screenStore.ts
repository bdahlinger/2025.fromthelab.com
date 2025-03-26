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

    // Check for touch support
    const hasTouchSupport  = computed(() => {

        return 'ontouchstart' in window || // Works on most browsers
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) || // Modern browsers
        (navigator as any).msMaxTouchPoints > 0;

    });
    const isMobile = computed(() => {


        // Check if screen width is below a reasonable mobile threshold (e.g., md breakpoint)
        const isSmallScreen = screenWidth.value < breakpoints.md;

        // Fallback: Check user agent for common mobile patterns
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobileUA = /iphone|ipad|android|windows phone|blackberry|mobile/i.test(userAgent);

        // Combine checks: device is mobile if it has touch support AND a small screen,
        // or if the user agent strongly suggests it's a mobile device
        return (hasTouchSupport && isSmallScreen) || isMobileUA;
    });


    // Reactive screen width
    const screenWidth = ref(window.innerWidth);

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

    // Update screen width on resize
    function updateScreenWidth() {
        screenWidth.value = window.innerWidth;
    }

    // Initialize resize listener (to be called externally)
    function initResizeListener() {
        window.addEventListener('resize', updateScreenWidth);
        // Optionally, call it once on init
        updateScreenWidth();
    }

    return {
        screenWidth,
        currentBreakpoint,
        isMobile,
        initResizeListener,
        hasTouchSupport
    };
});
