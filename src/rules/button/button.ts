import { getRuleProps } from "../defaults"

export interface ButtonRuleProps {
  background?: any
  userSelect?: any
  boxSizing?: any
  outline?: any
  padding?: any
  border?: any
  cursor?: any
}

export const NAME = "button"
export const DEFAULTS = {
  background: "#DDD",
  userSelect: "none",
  boxSizing: "border-box",
  padding: 0,
  border: "none",
  cursor: "pointer"
}

export default (props?: ButtonRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    backgroundColor: p.background,
    userSelect: p.userSelect,
    boxSizing: p.boxSizing,
    outline: p.outline,
    padding: p.padding,
    border: p.border,
    cursor: p.cursor
  }
}
