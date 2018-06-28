import { TPlugin as FelaPlugin } from "fela"
import customKeys from "fela-plugin-custom-property"
import { border, edge, ellipsis, outline } from "../rules"
import { CustomProps, Rule } from "../types"
import { isObject } from "../core/utils"
import { ALL } from "../core/edges"

const customProp = (rule: Rule, key: string) => (value: any) =>
  isObject(value) ? rule(value) : { [key]: value }

export default (props?: CustomProps): FelaPlugin =>
  customKeys({
    border: customProp(border, "border"),

    outline: customProp(outline, "outline"),

    ellipsis: (value) => (value ? ellipsis() : {}),

    fontFeatures: (value) => ({
      "-webkit-font-feature-settings": value,
      "font-feature-settings": value
    }),

    fontSmoothing: (value) => ({
      "-webkit-font-smoothing": value,
      "-moz-osx-font-smoothing": "grayscale"
    }),

    margin: (value) =>
      edge({
        prefix: "margin",
        edge: ALL,
        value
      }),

    padding: (value) =>
      edge({
        prefix: "padding",
        edge: ALL,
        value
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
