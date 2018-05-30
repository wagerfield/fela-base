export interface ScrollRuleOptions {
  scrolling?: any
  x?: boolean
  y?: boolean
}

export default ({
  scrolling = "touch",
  x = false,
  y = true
}: ScrollRuleOptions = {}) => ({
  overflowX: x ? "auto" : "hidden",
  overflowY: y ? "auto" : "hidden",
  scrolling
})
