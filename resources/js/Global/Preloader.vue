<!-- Preloader.vue -->
<script setup lang="ts">
defineProps<{
    progress: number; // Progress percentage (0 to 100)
}>();
</script>

<template>
    <div class="preloader">
        <div class="progress-label">{{ Math.round(progress) }}%</div>
    </div>
</template>

<style scoped>
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9); /* Dark semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5; /* Above the canvas */
}

.progress-label {
    color: #ffffff;
    font-size: 48px;
    font-family: 'Poppins', sans-serif; /* Match your project’s font if desired */
    text-align: center;
}
</style>
