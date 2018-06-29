import { Length } from "../../types"
import { getRuleProps } from "../defaults"

export interface TransitionRuleProps {
  property?: string
  duration?: Length
  delay?: Length
  easing?: string
}

export const NAME = "transition"
export const DEFAULTS = {}

export default (props?: TransitionRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    transitionTimingFunction: p.easing,
    transitionProperty: p.property,
    transitionDuration: p.duration,
    transitionDelay: p.delay
  }
}
