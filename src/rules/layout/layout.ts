import { getRuleProps } from "../defaults"

export interface LayoutRuleProps {
  display?: any
  direction?: any
  justify?: any
  align?: any
  wrap?: any
}

export const NAME = "layout"
export const DEFAULTS = {
  display: "flex"
}

export default (props?: LayoutRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    display: p.display,
    flexWrap: p.wrap,
    flexDirection: p.direction,
    justifyContent: p.justify,
    alignItems: p.align
  }
}
