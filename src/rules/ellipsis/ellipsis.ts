import * as CSS from "csstype"
import { getRuleProps } from "../defaults"

export interface EllipsisRuleProps {
  textOverflow?: CSS.TextOverflowProperty
  whiteSpace?: CSS.WhiteSpaceProperty
  overflow?: CSS.OverflowProperty
}

export const NAME = "ellipsis"
export const DEFAULTS: EllipsisRuleProps = {
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
