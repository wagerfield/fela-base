import { Unit } from "../../types"

export interface ShadowRuleProps {
  x?: Unit
  y?: Unit
  blur?: Unit
  spread?: Unit
  color?: string
}

export default ({
  x = 0,
  y = "2px",
  blur = "16px",
  spread = 0,
  color = "black"
}: ShadowRuleProps = {}) => ({
  boxShadow: `${x} ${y} ${blur} ${spread} ${color}`
})
