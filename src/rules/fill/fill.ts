import { ALL } from "../../core/edges"
import { Edge } from "../../types"
import edgeRule from "../edge/edge"

export interface FillRuleProps {
  position?: string
  value?: any
  edge?: Edge
}

export default ({
  position = "absolute",
  value = 0,
  edge = ALL
}: FillRuleProps = {}) => ({
  position,
  ...edgeRule({ edge, value })
})
