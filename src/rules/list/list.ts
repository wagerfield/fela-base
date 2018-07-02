import * as CSS from "csstype"
import { Length } from "../../types"
import { getRuleProps } from "../defaults"

export interface ListRuleProps {
  padding?: CSS.PaddingProperty<Length> // custom prop
  margin?: CSS.MarginProperty<Length> // custom prop
  style?: CSS.ListStyleProperty
}

export const NAME = "list"
export const DEFAULTS: ListRuleProps = {
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
