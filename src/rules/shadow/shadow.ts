import { UnitValue } from "../../types"

export interface ShadowRuleOptions {
  x?: UnitValue
  y?: UnitValue
  blur?: UnitValue
  spread?: UnitValue
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
