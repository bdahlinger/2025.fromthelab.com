import * as THREE from 'three'
import { gsap } from 'gsap'

export function setupScrollAnimation(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    wrapper: any,
    allCubes: THREE.Group[],
    updateCubeColors: (camera: THREE.PerspectiveCamera) => void,
    config: { CUBE_SIZE: number; CUBE_SPACING: number; FIRST_CUBE_Z: number },
    onPortalFocusChange?: (isFocused: boolean, originalPosition?: THREE.Vector3, originalTarget?: THREE.Vector3) => void
) {
    const { CUBE_SIZE, CUBE_SPACING, FIRST_CUBE_Z } = config
    const MAX_Z = FIRST_CUBE_Z - (allCubes.length + 1) * CUBE_SPACING
    let isInPortalFocus = false
    let originalCameraPosition: THREE.Vector3 | null = null
    let originalCameraTarget: THREE.Vector3 | null = null
    let isReverting = false // Track if we're in the middle of a reversion animation

    if (onPortalFocusChange) {
        onPortalFocusChange((focused, position, target) => {
            isInPortalFocus = focused
            originalCameraPosition = position || null
            originalCameraTarget = target || null
            isReverting = focused ? false : isReverting // Reset isReverting when entering focus mode
        })
    }

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: wrapper.value,
            start: 'top top',
            end: () => {
                const totalDistance = Math.abs(MAX_Z)
                const distancePerCube = CUBE_SPACING
                const totalCubes = allCubes.length
                const additionalSpace = totalCubes * distancePerCube
                return `${totalDistance + additionalSpace}px`
            },
            scrub: 1,
            pin: true,
            onUpdate: (self) => {
                // Only update camera position if not in portal focus or during reversion
                if (!isInPortalFocus && !isReverting) {
                    const progress = self.progress
                    const newZ = Math.min(0, THREE.MathUtils.lerp(0, MAX_Z, progress))
                    camera.position.set(0, 0, newZ)
                    camera.lookAt(0, 0, MAX_Z)
                }
                updateCubeColors(camera)
            }
        }
    })

    timeline.to(camera.position, {
        z: MAX_Z,
        duration: 1,
        ease: 'none'
    })

    // Expose a method to set isReverting from useProjectCubes
    const setReverting = (value: boolean) => {
        isReverting = value
    }

    return { setReverting }
}
