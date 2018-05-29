import { objectReduce } from "fast-loops"
import { TPlugin as FelaPlugin } from "fela"
import namedKeys from "fela-plugin-named-keys"

import { kebabToCamel } from "../core/utils"

export interface Breakpoints {
  [name: string]: number
}

export interface Aliases {
  [name: string]: string
}

export interface NamedKeysOptions {
  aliases?: Aliases
  breakpoints?: Breakpoints
}

export const buildMediaQuery = (
  value: number,
  below: boolean
) => {
  const prefix = below ? "max" : "min"
  const offset = below ? value : value + 1
  return `@media (${prefix}-width: ${offset}px)`
}

export const buildMediaQueries = (
  breakpoints: Breakpoints
) => {
  const acc: Aliases = {}
  return objectReduce(
    breakpoints,
    (result, value, key) => {
      const belowKey = kebabToCamel(`below-${key}`)
      const aboveKey = kebabToCamel(`above-${key}`)
      result[belowKey] = buildMediaQuery(value, true)
      result[aboveKey] = buildMediaQuery(value, false)
      return result
    },
    acc
  )
}

export default ({
  aliases = {},
  breakpoints = {}
}: NamedKeysOptions = {}): FelaPlugin =>
  namedKeys({
    placeholder: "::placeholder",
    ...buildMediaQueries(breakpoints),
    ...aliases
  })
