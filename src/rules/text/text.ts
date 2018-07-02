import * as CSS from "csstype"
import { EllipsisProperty, Length } from "../../types"
import { getRuleProps } from "../defaults"

export interface TextRuleProps {
  family?: CSS.FontFamilyProperty
  size?: CSS.FontSizeProperty<Length>
  style?: CSS.FontStyleProperty
  weight?: CSS.FontWeightProperty
  color?: CSS.ColorProperty
  align?: CSS.TextAlignProperty
  margin?: CSS.MarginProperty<Length> // custom prop
  lineHeight?: CSS.LineHeightProperty<Length>
  transform?: CSS.TextTransformProperty
  ellipsis?: EllipsisProperty
}

export const NAME = "text"
export const DEFAULTS: TextRuleProps = {}

export default (props?: TextRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    fontFamily: p.family,
    fontSize: p.size,
    fontStyle: p.style,
    fontWeight: p.weight,
    textAlign: p.align,
    textTransform: p.transform,
    lineHeight: p.lineHeight,
    ellipsis: p.ellipsis,
    margin: p.margin,
    color: p.color
  }
}
