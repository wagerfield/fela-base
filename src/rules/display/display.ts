import * as CSS from "csstype"
import { getRuleProps } from "../defaults"

export interface DisplayRuleProps {
  display?: CSS.DisplayProperty
}

export const NAME = "display"
export const DEFAULTS: DisplayRuleProps = {}

export default (props?: DisplayRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    display: p.display
  }
}
