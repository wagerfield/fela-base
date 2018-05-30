export interface OutlineRuleOptions {
  color?: string
  style?: string
  width?: string
  offset?: string
}

export default ({
  color = "initial",
  style = "initial",
  width = "initial",
  offset = "initial"
}: OutlineRuleOptions = {}) => ({
  outlineColor: color,
  outlineStyle: style,
  outlineWidth: width,
  outlineOffset: offset
})
