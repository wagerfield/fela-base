import { TPlugin as FelaPlugin } from "fela"
import customKeys from "fela-plugin-custom-property"
import ellipsis from "../rules/ellipsis/ellipsis"
import border from "../rules/border/border"
import edge from "../rules/edge/edge"
import { CustomProps } from "../types"
import { isObject } from "../core/utils"
import { ALL } from "../core/edges"

export default (props?: CustomProps): FelaPlugin =>
  customKeys({
    border: (value) =>
      isObject(value) ? border(value) : { border: value },

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
