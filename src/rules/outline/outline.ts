import { getRuleProps } from "../defaults"

export interface OutlineRuleProps {
  color?: string
  style?: string
  width?: string
  offset?: string
}

export const NAME = "outline"
export const DEFAULTS = {}

export default (props?: OutlineRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    outlineColor: p.color,
    outlineStyle: p.style,
    outlineWidth: p.width,
    outlineOffset: p.offset
  }
}
