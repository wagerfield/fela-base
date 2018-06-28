import { arrayReduce, objectReduce } from "fast-loops"
import { Edge, Style } from "../../types"
import { ALL } from "../../core/edges"
import { isArray, isObject, parseEdge, wrapKey } from "../../core/utils"
import { getRuleProps } from "../defaults"

export interface EdgeRuleProps {
  edge?: Edge
  value?: any
  prefix?: string
  postfix?: string
}

export const NAME = "edge"
export const DEFAULTS = {}

export default (props?: EdgeRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  const keys = parseEdge(p.edge || ALL)
  const style: Style = {}
  if (isArray(keys)) {
    return arrayReduce(
      keys,
      (result, key) => {
        result[wrapKey(key, p.prefix, p.postfix)] = p.value
        return result
      },
      style
    )
  } else if (isObject(keys)) {
    return objectReduce(
      keys,
      (result, value, key) => {
        result[wrapKey(key, p.prefix, p.postfix)] = value
        return result
      },
      style
    )
  } else {
    return style
  }
}
