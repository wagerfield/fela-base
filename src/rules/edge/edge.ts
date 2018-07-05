import { arrayReduce, objectReduce } from "fast-loops"
import { Edge, EdgeKey, Style } from "../../types"
import { ALL } from "../../core/edges"
import { isArray, isEdge, isObject, parseEdge, wrapKey } from "../../core/utils"
import { getRuleProps } from "../defaults"

export interface EdgeRuleProps {
  edge?: Edge<any>
  value?: any
  prefix?: string
  postfix?: string
}

export const NAME = "edge"
export const DEFAULTS: EdgeRuleProps = {}

const setEdge = ({ prefix, postfix }: EdgeRuleProps) => (
  style: Style,
  key: EdgeKey,
  value: any
) => {
  if (isEdge(key)) style[wrapKey(key, prefix, postfix)] = value
  return style
}

export default (props?: EdgeRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  const keys = parseEdge(p.edge || ALL)
  const setValue = setEdge(p)
  const style: Style = {}
  if (isArray(keys)) {
    return arrayReduce(
      keys,
      (result, key) => setValue(result, key, p.value),
      style
    )
  } else if (isObject(keys)) {
    return objectReduce(
      keys,
      (result, value, key) => setValue(result, key as EdgeKey, value),
      style
    )
  } else {
    throw new Error("Invalid edge value")
  }
}
