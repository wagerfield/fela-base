import * as CSS from "csstype"
import {
  BackgroundProperty,
  BorderProperty,
  OutlineProperty,
  PaddingProperty
} from "../../types"
import { getRuleProps } from "../defaults"

export interface ButtonRuleProps {
  background?: BackgroundProperty
  userSelect?: CSS.UserSelectProperty
  boxSizing?: CSS.BoxSizingProperty
  outline?: OutlineProperty
  padding?: PaddingProperty
  border?: BorderProperty
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
    background: p.background,
    userSelect: p.userSelect,
    boxSizing: p.boxSizing,
    outline: p.outline,
    padding: p.padding,
    border: p.border,
    cursor: p.cursor
  }
}
