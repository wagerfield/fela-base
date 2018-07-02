import * as CSS from "csstype"
import { getRuleProps } from "../defaults"

export interface LayoutRuleProps {
  display?: CSS.DisplayProperty
  direction?: CSS.FlexDirectionProperty
  justify?: CSS.JustifyContentProperty
  align?: CSS.AlignItemsProperty
  wrap?: CSS.FlexWrapProperty
}

export const NAME = "layout"
export const DEFAULTS: LayoutRuleProps = {
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
