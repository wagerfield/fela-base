import { getRuleProps } from "../defaults"

export interface DiscRuleProps {
  color?: string
  size?: number
}

export const NAME = "disc"
export const DEFAULTS = {
  color: "black",
  size: 40
}

export default (props?: DiscRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    borderRadius: p.size ? p.size * 0.5 : null,
    backgroundColor: p.color,
    boxSizing: "border-box",
    size: p.size
  }
}
