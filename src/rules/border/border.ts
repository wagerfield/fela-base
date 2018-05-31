import { arrayReduce } from "fast-loops"
import { EdgeKey, EdgeSet, Style } from "../../types"
import { ALL } from "../../core/edges"
import {
  isArray,
  parseEdge,
  wrapKey
} from "../../core/utils"

export interface BorderRuleProps {
  edge?: EdgeKey | EdgeSet
  width?: string | number
  style?: string
  color?: string
}

export default ({
  edge = ALL,
  color = "black",
  style = "solid",
  width = 1
}: BorderRuleProps = {}) => {
  const keys = parseEdge(edge)
  if (isArray(keys)) {
    if (keys.length === 4) {
      return {
        borderWidth: width,
        borderStyle: style,
        borderColor: color
      }
    } else {
      const borderStyle: Style = {}
      return arrayReduce(
        keys,
        (result, key) => {
          result[wrapKey(key, "border", "width")] = width
          result[wrapKey(key, "border", "style")] = style
          result[wrapKey(key, "border", "color")] = color
          return result
        },
        borderStyle
      )
    }
  } else {
    throw new Error("invalid edge value")
  }
}
