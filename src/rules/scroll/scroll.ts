export interface ScrollRuleProps {
  scrolling?: any
  x?: boolean
  y?: boolean
}

export default ({
  scrolling = "touch",
  x = false,
  y = true
}: ScrollRuleProps = {}) => ({
  overflowX: x ? "auto" : "hidden",
  overflowY: y ? "auto" : "hidden",
  scrolling
})
