import * as CSS from "csstype"
import { SizeProperty } from "../../types"
import { getRuleProps } from "../defaults"

export interface DiscRuleProps {
  color?: CSS.BackgroundColorProperty
  size?: SizeProperty
}

export const NAME = "disc"
export const DEFAULTS: DiscRuleProps = {
  color: "black",
  size: 40
}

export default (props?: DiscRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    borderRadius: typeof p.size === "number" ? p.size * 0.5 : p.size,
    backgroundColor: p.color,
    boxSizing: "border-box",
    size: p.size
  }
}
