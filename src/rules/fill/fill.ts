import * as CSS from "csstype"
import { ALL } from "../../core/edges"
import { Edge, Length, Value } from "../../types"
import { getRuleProps } from "../defaults"
import edgeRule from "../edge/edge"

export interface FillRuleProps {
  position?: CSS.PositionProperty
  width?: CSS.WidthProperty<Length>
  height?: CSS.HeightProperty<Length>
  value?: Value
  edge?: Edge<Value>
}

export const NAME = "fill"
export const DEFAULTS: FillRuleProps = {
  position: "absolute",
  value: 0,
  edge: ALL
}

export default (props?: FillRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    position: p.position,
    width: p.width,
    height: p.height,
    ...edgeRule({
      edge: p.edge,
      value: p.value
    })
  }
}
