export interface OutlineRuleProps {
  color?: string
  style?: string
  width?: string
  offset?: string
}

export default ({
  color,
  style,
  width,
  offset
}: OutlineRuleProps = {}) => ({
  outlineColor: color,
  outlineStyle: style,
  outlineWidth: width,
  outlineOffset: offset
})
