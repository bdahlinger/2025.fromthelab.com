import { ref, watch } from 'vue'
import * as THREE from 'three'
import { useAudioStore } from '@/Stores/audioStore'

type AudioSource = {
    buffer: AudioBuffer
    source?: AudioBufferSourceNode
    gain: GainNode
    panner: StereoPannerNode
    isPlaying: boolean
    loop?: boolean
    maxVolume: number
    updatePosition?: (source: AudioSource, camera: THREE.PerspectiveCamera) => { pan: number; gain: number }
}

type PendingAudio = {
    id: string
    audioData: ArrayBuffer
    options: {
        loop?: boolean
        maxVolume?: number
        updatePosition?: (source: AudioSource, camera: THREE.PerspectiveCamera) => { pan: number; gain: number }
    }
}

export function useAudioManager(updateProgress: (count: number) => void) {
    const audioStore = useAudioStore()
    const audioContext = ref<AudioContext | null>(null)
    const masterGain = ref<GainNode | null>(null)
    const sources = new Map<string, AudioSource>()
    const pendingAudios = ref<PendingAudio[]>([])

    const loadRawAudio = async (url: string) => {
        const response = await fetch(url)
        if (!response.ok) throw new Error(`Failed to fetch ${url}`)
        const data = await response.arrayBuffer()
        updateProgress(1)
        return data
    }

    const registerAudio = async (id: string, urlOrData: string | ArrayBuffer, options: {
        loop?: boolean
        maxVolume?: number
        updatePosition?: (source: AudioSource, camera: THREE.PerspectiveCamera) => { pan: number; gain: number }
    } = {}) => {
        const audioData = typeof urlOrData === 'string' ? await loadRawAudio(urlOrData) : urlOrData
        pendingAudios.value.push({ id, audioData, options })

        // If AudioContext is already initialized, process immediately
        if (audioContext.value) {
            const buffer = await audioContext.value.decodeAudioData(audioData)
            registerSource(id, buffer, options)
            pendingAudios.value = pendingAudios.value.filter(audio => audio.id !== id)
        }
    }

    watch(() => audioStore.userEngaged, (engaged) => {
        if (engaged && !audioContext.value) {
            audioContext.value = new (window.AudioContext || window.webkitAudioContext)()
            masterGain.value = audioContext.value.createGain()
            masterGain.value.connect(audioContext.value.destination)
            masterGain.value.gain.value = audioStore.masterVolume

            // Process all pending audios
            pendingAudios.value.forEach(async ({ id, audioData, options }) => {
                const buffer = await audioContext.value.decodeAudioData(audioData)
                registerSource(id, buffer, options)
            })
            pendingAudios.value = [] // Clear after processing
        }
    }, { immediate: true })

    watch(() => audioStore.isMuted, (muted) => {
        if (masterGain.value) {
            masterGain.value.gain.value = muted ? 0 : audioStore.masterVolume
        }
    })

    watch(() => audioStore.masterVolume, (volume) => {
        if (masterGain.value && !audioStore.isMuted) {
            masterGain.value.gain.value = volume
        }
    })

    watch(() => audioStore.audioEnabled, (enabled) => {
        if (!enabled) {
            sources.forEach((source, id) => {
                if (source.isPlaying) {
                    stop(id)
                }
            })
        }
    })

    function registerSource(
        id: string,
        buffer: AudioBuffer,
        options: {
            loop?: boolean
            maxVolume?: number
            updatePosition?: (source: AudioSource, camera: THREE.PerspectiveCamera) => { pan: number; gain: number }
        } = {}
    ) {
        if (!audioContext.value || !masterGain.value) return
        if (sources.has(id)) {
            console.warn(`Source ${id} already registered. Overwriting.`)
            stop(id)
        }

        const gain = audioContext.value.createGain()
        const panner = audioContext.value.createStereoPanner()
        gain.connect(panner).connect(masterGain.value)

        sources.set(id, {
            buffer,
            gain,
            panner,
            isPlaying: false,
            loop: options.loop ?? false,
            maxVolume: options.maxVolume ?? 1.0,
            updatePosition: options.updatePosition
        })
    }

    function play(id: string, camera?: THREE.PerspectiveCamera) {
        const source = sources.get(id)
        if (!source || !audioContext.value || !audioStore.userEngaged || !audioStore.audioEnabled) return
        if (source.isPlaying) return

        const audioSource = audioContext.value.createBufferSource()
        audioSource.buffer = source.buffer
        audioSource.loop = source.loop ?? false
        audioSource.connect(source.gain)
        audioSource.start()
        source.source = audioSource
        source.isPlaying = true

        // Set initial gain to maxVolume if no updatePosition is provided
        if (!source.updatePosition) {
            source.gain.gain.value = source.maxVolume
        }

        if (camera && source.updatePosition) {
            updatePositionalAudio(id, camera)
        }
    }

    function stop(id: string) {
        const source = sources.get(id)
        if (!source || !source.source) return
        source.source.stop()
        source.source.disconnect()
        source.source = undefined
        source.isPlaying = false
    }

    function updatePositionalAudio(id: string, camera: THREE.PerspectiveCamera) {
        const source = sources.get(id)
        if (!source || !source.updatePosition || !source.isPlaying) return

        const { pan, gain } = source.updatePosition(source, camera)
        source.panner.pan.value = THREE.MathUtils.clamp(pan, -1, 1)
        source.gain.gain.value = THREE.MathUtils.clamp(gain * source.maxVolume, 0, 1)
    }

    function dispose(id: string) {
        stop(id)
        const source = sources.get(id)
        if (source) {
            source.gain.disconnect()
            source.panner.disconnect()
            sources.delete(id)
        }
    }

    function disposeAll() {
        sources.forEach((_, id) => dispose(id))
        if (masterGain.value) masterGain.value.disconnect()
        if (audioContext.value) audioContext.value.close()
        audioContext.value = null
        masterGain.value = null
    }

    return {
        registerAudio,
        play,
        stop,
        updatePositionalAudio,
        dispose,
        disposeAll
    }
}
