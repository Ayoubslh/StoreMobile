// components/ParticleBurst.tsx
import React from 'react'
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated'
import Svg, { Circle } from 'react-native-svg'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

type Props = {
  trigger: boolean
}

export default function ParticleBurst({ trigger }: Props) {
  const radius = useSharedValue(0)
  const opacity = useSharedValue(1)

  const animatedProps = useAnimatedProps(() => ({
    r: radius.value,
    opacity: opacity.value,
  }))

  React.useEffect(() => {
    if (trigger) {
      radius.value = 0
      opacity.value = 1

      radius.value = withTiming(30, { duration: 300, easing: Easing.out(Easing.exp) })
      opacity.value = withTiming(0, { duration: 300 })
    }
  }, [trigger,opacity,radius])

  return (
    <Svg height="60" width="60" style={{ position: 'absolute', top: -20, left: -20 }}>
      <AnimatedCircle cx="30" cy="30" fill="#C67C4E" animatedProps={animatedProps} />
    </Svg>
  )
}
