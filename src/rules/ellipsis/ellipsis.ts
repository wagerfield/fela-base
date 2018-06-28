import { getRuleProps } from "../defaults"

export interface EllipsisRuleProps {
  textOverflow?: string
  whiteSpace?: string
  overflow?: string
}

export const NAME = "ellipsis"
export const DEFAULTS = {
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden"
}

export default (props?: EllipsisRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    textOverflow: p.textOverflow,
    whiteSpace: p.whiteSpace,
    overflow: p.overflow
  }
}
