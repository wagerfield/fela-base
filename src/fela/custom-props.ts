import { TPlugin as FelaPlugin } from "fela"
import customKeys from "fela-plugin-custom-property"
import { ALL } from "../core/edges"
import { isObject } from "../core/utils"
import { background, border, edge, ellipsis, outline } from "../rules"
import {
  Rule,
  CustomProps,
  EllipsisProperty,
  FontFeaturesProperty,
  FontSmoothingProperty,
  ScrollingProperty,
  SizeProperty,
  TapColorProperty
} from "../types"

const customProp = (rule: Rule, key: string) => (value: any) =>
  isObject(value) ? rule(value) : { [key]: value }

const customEdge = (key: string) => (value: any) =>
  edge({
    edge: isObject(value) ? value : ALL,
    prefix: key,
    value
  })

export default (props?: CustomProps): FelaPlugin =>
  customKeys({
    background: customProp(background, "background"),

    border: customProp(border, "border"),

    outline: customProp(outline, "outline"),

    margin: customEdge("margin"),

    padding: customEdge("padding"),

    ellipsis: (value: EllipsisProperty) =>
      value === true
        ? ellipsis()
        : typeof value === "object"
          ? ellipsis(value)
          : {},

    fontFeatures: (value: FontFeaturesProperty) => ({
      "-webkit-font-feature-settings": value,
      "font-feature-settings": value
    }),

    fontSmoothing: (value: FontSmoothingProperty) => ({
      "-webkit-font-smoothing": value,
      "-moz-osx-font-smoothing": value === "antialiased" ? "grayscale" : "auto"
    }),

    scrolling: (value: ScrollingProperty) => ({
      "-webkit-overflow-scrolling": value
    }),

    size: (value: SizeProperty) => ({
      width: value,
      height: value
    }),

    tapColor: (value: TapColorProperty) => ({
      "-webkit-tap-highlight-color": value
    }),

    ...props
  })
