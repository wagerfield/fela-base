import { Unit } from "../../types"
import { getRuleProps } from "../defaults"

export interface TextRuleProps {
  family?: string
  size?: string
  style?: string
  weight?: string
  color?: string
  align?: string
  margin?: Unit
  lineHeight?: Unit
  transform?: string
  ellipsis?: boolean
}

export const NAME = "text"
export const DEFAULTS = {}

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
