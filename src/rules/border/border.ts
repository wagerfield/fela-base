import { arrayReduce } from "fast-loops"
import {
  isArray,
  parseEdges,
  wrapKey
} from "../../core/utils"
import { ALL } from "../../core/edges"

export interface BorderStyle {
  [key: string]: any
}

export interface BorderRuleOptions {
  edges?: string | string[]
  width?: string | number
  style?: string
  color?: string
}

export default ({
  edges = ALL,
  color = "black",
  style = "solid",
  width = 1
}: BorderRuleOptions = {}) => {
  const keys = parseEdges(edges)
  if (isArray(keys)) {
    if (keys.length === 4) {
      return {
        borderWidth: width,
        borderStyle: style,
        borderColor: color
      }
    } else {
      const borderStyle: BorderStyle = {}
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
    throw new Error("invalid edges value")
  }
}
