import * as CSS from "csstype"
import { Length } from "../../types"
import { getRuleProps } from "../defaults"

export interface OutlineRuleProps {
  color?: CSS.ColorProperty
  style?: CSS.OutlineStyleProperty
  width?: CSS.OutlineWidthProperty<Length>
  offset?: CSS.OutlineOffsetProperty<Length>
}

export const NAME = "outline"
export const DEFAULTS: OutlineRuleProps = {}

export default (props?: OutlineRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    outlineColor: p.color,
    outlineStyle: p.style,
    outlineWidth: p.width,
    outlineOffset: p.offset
  }
}
