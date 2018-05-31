import { arrayReduce, objectReduce } from "fast-loops"
import { Edge, Style } from "../../types"
import {
  isNull,
  isArray,
  isObject,
  parseEdge,
  wrapKey
} from "../../core/utils"

export interface EdgeRuleProps {
  edge: Edge
  value?: any
  prefix?: string
  postfix?: string
}

export default ({
  edge,
  value,
  prefix,
  postfix
}: EdgeRuleProps) => {
  const keys = parseEdge(edge)
  const edgeStyle: Style = {}
  // Handle null values
  if (isNull(value)) {
    return edgeStyle
  } else if (isArray(keys)) {
    // Process edge arrays
    return arrayReduce(
      keys,
      (style, key) => {
        style[wrapKey(key, prefix, postfix)] = value
        return style
      },
      edgeStyle
    )
  } else if (isObject(keys)) {
    // Process edge objects
    return objectReduce(
      keys as object,
      (style, keyValue, key) => {
        style[wrapKey(key, prefix, postfix)] = keyValue
        return style
      },
      edgeStyle
    )
  } else {
    throw new Error("invalid edge value")
  }
}
