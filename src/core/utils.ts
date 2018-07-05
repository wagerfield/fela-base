import isPlainObject = require("isobject")
import { Edge, EdgeKey } from "../types"
import { ALL } from "../core/edges"

export function ifElse(condition: boolean) {
  return (then: any, otherwise: any) => (condition ? then : otherwise)
}

export function isType(type: string) {
  return (value: any) => typeof value === type
}

export const isNull = (value: any) => value === null

export const isArray = Array.isArray

export const isObject = isPlainObject

export const isString = isType("string")

export const isEdge = (edge: EdgeKey) => ALL.indexOf(edge) !== -1

export const parseEdge = (edge: Edge<any>) =>
  typeof edge === "string" ? edge.split("|") : edge

export const camelToKebab = (value: string) =>
  value.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()

export const kebabToCamel = (value: string) =>
  value.replace(/(-\w)/g, (m) => m[1].toUpperCase())

export const wrapKey = (key: string, prefix?: string, postfix?: string) => {
  let result = key
  if (prefix) {
    result = `${prefix}-${result}`
  }
  if (postfix) {
    result = `${result}-${postfix}`
  }
  return kebabToCamel(result)
}
