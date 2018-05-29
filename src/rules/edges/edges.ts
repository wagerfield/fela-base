import { arrayReduce, objectReduce } from "fast-loops"
import {
  isNull,
  isArray,
  isObject,
  parseEdges,
  wrapKey
} from "../../core/utils"

export interface EdgesStyle {
  [key: string]: any
}

export type Edges = string | string[] | EdgesStyle

export interface EdgesRuleOptions {
  edges?: Edges
  value?: any
  prefix?: string
  postfix?: string
}

export default ({
  value,
  edges,
  prefix,
  postfix
}: EdgesRuleOptions = {}) => {
  const keys = parseEdges(edges)
  const edgesStyle: EdgesStyle = {}
  // Handle null values
  if (isNull(value)) {
    return edgesStyle
  } else if (isArray(keys)) {
    // Process edge arrays
    return arrayReduce(
      keys,
      (style, key) => {
        style[wrapKey(key, prefix, postfix)] = value
        return style
      },
      edgesStyle
    )
  } else if (isObject(keys)) {
    // Process edge objects
    return objectReduce(
      keys,
      (style, keyValue, key) => {
        style[wrapKey(key, prefix, postfix)] = keyValue
        return style
      },
      edgesStyle
    )
  } else {
    throw new Error("invalid edges value")
  }
}
