export interface LayoutRuleOptions {
  display?: any
  direction?: any
  justify?: any
  align?: any
  wrap?: any
}

export default ({
  display = "flex",
  direction,
  justify,
  align,
  wrap
}: LayoutRuleOptions = {}) => ({
  display,
  flexWrap: wrap,
  flexDirection: direction,
  justifyContent: justify,
  alignItems: align
})
