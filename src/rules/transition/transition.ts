import { Unit } from "../../types"
import { QUAD } from "../../core/easing"

export interface TransitionRuleOptions {
  property?: string
  duration?: Unit
  delay?: Unit
  easing?: string
}

export default ({
  property = "all",
  duration = "0.5s",
  delay,
  easing = QUAD.OUT
}: TransitionRuleOptions = {}) => ({
  transitionTimingFunction: easing,
  transitionProperty: property,
  transitionDuration: duration,
  transitionDelay: delay
})
