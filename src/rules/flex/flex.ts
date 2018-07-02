import * as CSS from "csstype"
import { Length } from "../../types"
import { getRuleProps } from "../defaults"

export interface FlexRuleProps {
  grow?: CSS.Globals | number
  shrink?: CSS.Globals | number
  basis?: CSS.FlexBasisProperty<Length>
  align?: CSS.AlignSelfProperty
  justify?: CSS.JustifySelfProperty
}

export const NAME = "flex"
export const DEFAULTS: FlexRuleProps = {}

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
