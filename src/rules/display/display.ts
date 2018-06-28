import { getRuleProps } from "../defaults"

export interface DisplayRuleProps {
  display?: any
}

export const NAME = "display"
export const DEFAULTS = {}

export default (props?: DisplayRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    display: p.display
  }
}
