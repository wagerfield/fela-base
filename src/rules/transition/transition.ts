import { Unit } from "../../types"

export interface TransitionRuleProps {
  property?: string
  duration?: Unit
  delay?: Unit
  easing?: string
}

export default ({
  property,
  duration,
  delay,
  easing
}: TransitionRuleProps = {}) => ({
  transitionTimingFunction: easing,
  transitionProperty: property,
  transitionDuration: duration,
  transitionDelay: delay
})
