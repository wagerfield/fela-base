export interface DiscRuleOptions {
  color?: string
  size?: number
}

export default ({
  color = "black",
  size = 40
}: DiscRuleOptions = {}) => ({
  borderRadius: size ? size * 0.5 : null,
  backgroundColor: color,
  boxSizing: "border-box",
  size
})
