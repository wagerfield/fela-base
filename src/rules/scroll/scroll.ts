import { ScrollingProperty } from "../../types"
import { getRuleProps } from "../defaults"

export interface ScrollRuleProps {
  scrolling?: ScrollingProperty
  x?: boolean
  y?: boolean
}

export const NAME = "scroll"
export const DEFAULTS: ScrollRuleProps = {
  scrolling: "touch",
  x: false,
  y: true
}

export default (props?: ScrollRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    overflowX: p.x ? "auto" : "hidden",
    overflowY: p.y ? "auto" : "hidden",
    scrolling: p.scrolling
  }
}
