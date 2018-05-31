export interface FlexRuleProps {
  grow?: any
  shrink?: any
  basis?: any
  align?: any
  justify?: any
}

export default ({
  grow,
  shrink,
  basis,
  align,
  justify
}: FlexRuleProps = {}) => ({
  flexGrow: grow,
  flexShrink: shrink,
  flexBasis: basis,
  alignSelf: align,
  justifySelf: justify
})
