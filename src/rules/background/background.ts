import { Unit } from "../../types"
import { getRuleProps } from "../defaults"

export interface BackgroundRuleProps {
  attachment?: string
  position?: string
  origin?: string
  repeat?: string
  color?: string
  image?: string
  clip?: string
  size?: Unit
}

export const NAME = "background"
export const DEFAULTS = {}

export default (props?: BackgroundRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    backgroundAttachment: p.attachment,
    backgroundPosition: p.position,
    backgroundOrigin: p.origin,
    backgroundRepeat: p.repeat,
    backgroundColor: p.color,
    backgroundImage: p.image,
    backgroundClip: p.clip,
    backgroundSize: p.size
  }
}
