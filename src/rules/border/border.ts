import * as CSS from "csstype"
import { arrayReduce } from "fast-loops"
import { EdgeKey, EdgeSet, Length, Style } from "../../types"
import { ALL } from "../../core/edges"
import { isArray, isEdge, parseEdge, wrapKey } from "../../core/utils"
import { getRuleProps } from "../defaults"

export interface BorderRuleProps {
  edge?: EdgeKey | EdgeSet
  width?: CSS.BorderWidthProperty<Length>
  style?: CSS.BorderStyleProperty
  color?: CSS.BorderColorProperty
}

export const NAME = "border"
export const DEFAULTS: BorderRuleProps = {
  color: "black",
  style: "solid",
  width: 1
}

const setEdge = (props: BorderRuleProps) => (style: Style, key: EdgeKey) => {
  if (isEdge(key)) {
    style[wrapKey(key, "border", "color")] = props.color
    style[wrapKey(key, "border", "style")] = props.style
    style[wrapKey(key, "border", "width")] = props.width
  }
  return style
}

export default (props?: BorderRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  const keys = parseEdge(p.edge || ALL)
  const style: Style = {}
  if (isArray(keys)) {
    if (keys.length === 4) {
      style.borderColor = p.color
      style.borderStyle = p.style
      style.borderWidth = p.width
      return style
    } else {
      return arrayReduce(keys, setEdge(p), style)
    }
  } else {
    throw new Error("Invalid edge value")
  }
}
