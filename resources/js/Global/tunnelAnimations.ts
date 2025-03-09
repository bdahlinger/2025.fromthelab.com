// tunnelAnimations.ts
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
    // Use a default length if allCubes is undefined or empty
    const cubeCount = allCubes?.length || 0;
    const MAX_Z = FIRST_CUBE_Z - (cubeCount + 1) * CUBE_SPACING
    let isInPortalFocus = false
    let originalCameraPosition: THREE.Vector3 | null = null
    let originalCameraTarget: THREE.Vector3 | null = null
    let isReverting = false

    if (onPortalFocusChange) {
        onPortalFocusChange((focused, position, target) => {
            isInPortalFocus = focused
            originalCameraPosition = position || null
            originalCameraTarget = target || null
            isReverting = focused ? false : isReverting
        })
    }

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: wrapper.value,
            start: 'top top',
            end: () => {
                const totalDistance = Math.abs(MAX_Z)
                const distancePerCube = CUBE_SPACING
                const totalCubes = cubeCount
                const additionalSpace = totalCubes * distancePerCube
                return `${totalDistance + additionalSpace}px`
            },
            scrub: 1,
            pin: true,
            onUpdate: (self) => {
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

    const setReverting = (value: boolean) => {
        isReverting = value
    }

    return { setReverting }
}
