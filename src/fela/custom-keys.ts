import { TPlugin as FelaPlugin } from "fela"
import customKeys, {
  Config as CustomKeys
} from "fela-plugin-custom-property"
import { ALL } from "../core/edges"
import { isObject } from "../core/utils"
import ellipsis from "../rules/ellipsis/ellipsis"
import border from "../rules/border/border"
import edges from "../rules/edges/edges"

export {
  Config as CustomKeys
} from "fela-plugin-custom-property"

export default (options: CustomKeys = {}): FelaPlugin =>
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
      edges({
        prefix: "margin",
        edges: ALL,
        value
      }),

    padding: (value) =>
      edges({
        prefix: "padding",
        edges: ALL,
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

    ...options
  })
