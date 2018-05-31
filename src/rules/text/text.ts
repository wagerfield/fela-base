import { Unit } from "../../types"

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

export default ({
  family,
  size,
  style,
  weight,
  color,
  align,
  margin,
  lineHeight,
  transform,
  ellipsis
}: TextRuleProps = {}) => ({
  fontFamily: family,
  fontSize: size,
  fontStyle: style,
  fontWeight: weight,
  textAlign: align,
  textTransform: transform,
  lineHeight,
  ellipsis,
  margin,
  color
})
