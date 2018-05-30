export interface ButtonRuleOptions {
  background?: any
  userSelect?: any
  boxSizing?: any
  outline?: any
  padding?: any
  border?: any
  cursor?: any
}

export default ({
  background = "transparent",
  userSelect = "none",
  boxSizing = "border-box",
  outline = "none",
  padding = 0,
  border = "none",
  cursor = "pointer"
}: ButtonRuleOptions = {}) => ({
  backgroundColor: background,
  userSelect,
  boxSizing,
  outline,
  padding,
  border,
  cursor
})
