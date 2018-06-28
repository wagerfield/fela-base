import { getRuleProps } from "../defaults"

export interface FlexRuleProps {
  grow?: any
  shrink?: any
  basis?: any
  align?: any
  justify?: any
}

export const NAME = "flex"
export const DEFAULTS = {}

export default (props?: FlexRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    flexGrow: p.grow,
    flexShrink: p.shrink,
    flexBasis: p.basis,
    alignSelf: p.align,
    justifySelf: p.justify
  }
}
