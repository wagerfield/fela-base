export interface OutlineRuleOptions {
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
}: OutlineRuleOptions = {}) => ({
  outlineColor: color,
  outlineStyle: style,
  outlineWidth: width,
  outlineOffset: offset
})
