<!-- Preloader.vue -->
<script setup lang="ts">
import {gsap} from "gsap";
import {TextPlugin} from "gsap/TextPlugin";
import {onMounted, ref, watch} from "vue";
const initTextRef = ref<HTMLElement | null>(null)

gsap.registerPlugin(TextPlugin)

const showProgress = ref<boolean>(false)
const stopLooking = ref<boolean>(false)

const props = defineProps<{
    progress: number; // Progress percentage (0 to 100)
}>();

watch( () => props.progress, (val) => {
    if( val > 0 && !stopLooking ) {
        stopLooking.value = true
    }

} )

onMounted(() => {
    gsap.to(initTextRef.value, {
        duration: 0.5,
        text: {
            value: 'INITIALIZING...',
        },
        delay: 0.25,
        onComplete: () => {
            gsap.to(initTextRef.value, {
                duration: 0.5,
                alpha: 0,
                y: -30,
                onComplete: () => {
                    showProgress.value = true

                }
            })

        }
    })
})

</script>

<template>
    <div class="preloader ">
        <div ref="initTextRef" class="drop-shadow-white" v-if="!showProgress"></div>
        <div v-else class="progress-label font-mono drop-shadow-white">{{ Math.round(progress) }}%</div>
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
    text-align: center;
}
</style>
