<template>
    <slot />
</template>

<script setup lang="ts">
import { useScreenStore } from '@/Stores/screenStore';
import { onMounted, onUnmounted } from 'vue';

// Initialize the screen store listener
const screenStore = useScreenStore();

onMounted(() => {
    console.log('App.vue mounted')
    screenStore.initResizeListener();
});

onUnmounted(() => {
    window.removeEventListener('resize', screenStore.updateScreenWidth);
});
</script>
