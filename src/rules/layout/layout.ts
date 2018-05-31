export interface LayoutRuleProps {
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
}: LayoutRuleProps = {}) => ({
  display,
  flexWrap: wrap,
  flexDirection: direction,
  justifyContent: justify,
  alignItems: align
})
