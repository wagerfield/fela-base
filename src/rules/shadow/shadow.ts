import { Unit } from "../../types"

export interface ShadowRuleOptions {
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
}: ShadowRuleOptions = {}) => ({
  boxShadow: `${x} ${y} ${blur} ${spread} ${color}`
})
