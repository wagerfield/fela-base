import * as CSS from "csstype"
import { Length } from "../../types"
import { getRuleProps } from "../defaults"

export interface ShadowRuleProps {
  x?: Length
  y?: Length
  blur?: Length
  spread?: Length
  color?: CSS.ColorProperty
}

export const NAME = "shadow"
export const DEFAULTS: ShadowRuleProps = {
  x: 0,
  y: "4px",
  blur: "8px",
  spread: 0,
  color: "rgba(0,0,0,0.5)"
}

export default (props?: ShadowRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    boxShadow: `${p.x} ${p.y} ${p.blur} ${p.spread} ${p.color}`
  }
}
