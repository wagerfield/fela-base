import * as CSS from "csstype"
import { Length } from "../../types"
import { getRuleProps } from "../defaults"

export interface BackgroundRuleProps {
  attachment?: CSS.BackgroundAttachmentProperty
  positionX?: CSS.BackgroundPositionXProperty<Length>
  positionY?: CSS.BackgroundPositionXProperty<Length>
  position?: CSS.BackgroundPositionProperty<Length>
  origin?: CSS.BackgroundOriginProperty
  repeat?: CSS.BackgroundRepeatProperty
  color?: CSS.BackgroundColorProperty
  image?: CSS.BackgroundImageProperty
  clip?: CSS.BackgroundClipProperty
  size?: CSS.BackgroundSizeProperty<Length>
}

export const NAME = "background"
export const DEFAULTS: BackgroundRuleProps = {}

export default (props?: BackgroundRuleProps) => {
  const p = getRuleProps(NAME, DEFAULTS, props)
  return {
    backgroundAttachment: p.attachment,
    backgroundPositionX: p.positionX,
    backgroundPositionY: p.positionY,
    backgroundPosition: p.position,
    backgroundOrigin: p.origin,
    backgroundRepeat: p.repeat,
    backgroundColor: p.color,
    backgroundImage: p.image,
    backgroundClip: p.clip,
    backgroundSize: p.size
  }
}
