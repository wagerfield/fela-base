import * as CSS from "csstype"
import { Length } from "../../types"
import { getRuleProps } from "../defaults"

export interface ButtonRuleProps {
  background?: CSS.BackgroundColorProperty // custom prop
  userSelect?: CSS.UserSelectProperty
  boxSizing?: CSS.BoxSizingProperty
  outline?: CSS.OutlineProperty<Length> // custom prop
  padding?: CSS.PaddingProperty<Length> // custom prop
  border?: CSS.BorderProperty<Length> // custom prop
  cursor?: CSS.CursorProperty
}

export const NAME = "button"
export const DEFAULTS: ButtonRuleProps = {
  background: "#DDD",
  userSelect: "none",
  boxSizing: "border-box",
  padding: 0,
  border: "none",
  cursor: "pointer"
}

export default (props?: ButtonRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    backgroundColor: p.background,
    userSelect: p.userSelect,
    boxSizing: p.boxSizing,
    outline: p.outline,
    padding: p.padding,
    border: p.border,
    cursor: p.cursor
  }
}
