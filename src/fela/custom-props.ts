import { TPlugin as FelaPlugin } from "fela"
import customKeys from "fela-plugin-custom-property"
import { background, border, edge, ellipsis, outline } from "../rules"
import { CustomProps, Rule } from "../types"
import { isObject } from "../core/utils"
import { ALL } from "../core/edges"

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

    ellipsis: (value) =>
      isObject(value) ? ellipsis(value) : value === true ? ellipsis() : {},

    fontFeatures: (value) => ({
      "-webkit-font-feature-settings": value,
      "font-feature-settings": value
    }),

    fontSmoothing: (value) => ({
      "-webkit-font-smoothing": value,
      "-moz-osx-font-smoothing": "grayscale"
    }),

    scrolling: (value) => ({
      "-webkit-overflow-scrolling": value
    }),

    size: (value) => ({
      width: value,
      height: value
    }),

    tapColor: (value) => ({
      "-webkit-tap-highlight-color": value
    }),

    ...props
  })
