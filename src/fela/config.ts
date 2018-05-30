import { IConfig as FelaConfig } from "fela"
import monolithic from "fela-monolithic"
import extendPlugin from "fela-plugin-extend"
import embeddedPlugin from "fela-plugin-embedded"
import fallbackPlugin from "fela-plugin-fallback-value"
import pseudoPlugin from "fela-plugin-friendly-pseudo-class"
import placeholderPlugin from "fela-plugin-placeholder-prefixer"
import prefixerPlugin from "fela-plugin-prefixer"
import lvhaPlugin from "fela-plugin-lvha"
import unitPlugin, {
  Unit,
  UnitPerProperty
} from "fela-plugin-unit"
import { Aliases, Breakpoints, CustomProps } from "../types"
import customPropsPlugin from "./custom-props"
import namedKeysPlugin from "./named-keys"

export interface UnitOptions {
  unitMap: UnitPerProperty
  defaultUnit: Unit
}

export interface ConfigOptions {
  useMonolithicClasses?: boolean
  usePrettySelectors?: boolean
  customProps?: CustomProps
  breakpoints?: Breakpoints
  aliases?: Aliases
  units?: UnitOptions
}

export default ({
  useMonolithicClasses = false,
  usePrettySelectors = false,
  customProps,
  breakpoints,
  aliases,
  units
}: ConfigOptions = {}): FelaConfig => {
  // Add monolithic enhancer
  const enhancers = useMonolithicClasses
    ? [monolithic({ prettySelectors: usePrettySelectors })]
    : []

  // Unit plugin values
  const defaultUnit = (units && units.defaultUnit) || "px"
  const unitMap = (units && units.unitMap) || {}

  // Add plugins: order matters
  const plugins = [
    extendPlugin(),
    pseudoPlugin(),
    namedKeysPlugin({ aliases, breakpoints }),
    customPropsPlugin(customProps),
    placeholderPlugin(),
    embeddedPlugin(),
    prefixerPlugin(),
    fallbackPlugin(),
    lvhaPlugin(),
    unitPlugin(defaultUnit, unitMap)
  ]

  // Return config
  return { enhancers, plugins }
}
