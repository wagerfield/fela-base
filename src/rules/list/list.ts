import { getRuleProps } from "../defaults"

export interface ListRuleProps {
  padding?: any
  margin?: any
  style?: any
}

export const NAME = "list"
export const DEFAULTS = {
  style: "none",
  padding: 0,
  margin: 0
}

export default (props?: ListRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    listStyle: p.style,
    padding: p.padding,
    margin: p.margin
  }
}
