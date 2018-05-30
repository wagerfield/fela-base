import { ALL } from "../../core/edges"
import { Edge } from "../../types"
import edgeRule from "../edge/edge"

export interface FillRuleOptions {
  position?: string
  value?: any
  edge?: Edge
}

export default ({
  position = "absolute",
  value = 0,
  edge = ALL
}: FillRuleOptions = {}) => ({
  position,
  ...edgeRule({ edge, value })
})
