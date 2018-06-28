import { ALL } from "../../core/edges"
import { Edge } from "../../types"
import { getRuleProps } from "../defaults"
import edgeRule from "../edge/edge"

export interface FillRuleProps {
  position?: string
  value?: any
  edge?: Edge
}

export const NAME = "fill"
export const DEFAULTS = {
  position: "absolute",
  value: 0,
  edge: ALL
}

export default (props?: FillRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    position: p.position,
    ...edgeRule({
      edge: p.edge,
      value: p.value
    })
  }
}
