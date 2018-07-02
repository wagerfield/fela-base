import * as CSS from "csstype"
import { Length } from "../../types"
import { getRuleProps } from "../defaults"

export interface TransitionRuleProps {
  property?: CSS.TransitionPropertyProperty
  duration?: Length
  delay?: Length
  easing?: CSS.TransitionTimingFunctionProperty
}

export const NAME = "transition"
export const DEFAULTS: TransitionRuleProps = {}

export default (props?: TransitionRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    transitionTimingFunction: p.easing,
    transitionProperty: p.property,
    transitionDuration: p.duration,
    transitionDelay: p.delay
  }
}
