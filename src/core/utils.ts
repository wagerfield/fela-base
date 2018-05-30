import isPlainObject = require("isobject")

export function ifElse(condition: boolean) {
  return (then: any, otherwise: any) =>
    condition ? then : otherwise
}

export function isType(type: string) {
  return (value: any) => typeof value === type
}

export const isNull = (value: any) => value === null

export const isArray = Array.isArray

export const isObject = isPlainObject

export const isString = isType("string")

export const camelToKebab = (value: string) =>
  value.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()

export const kebabToCamel = (value: string) =>
  value.replace(/(-\w)/g, (m) => m[1].toUpperCase())

export const wrapKey = (
  key: string,
  prefix?: string,
  postfix?: string
) => {
  let result = key
  if (prefix) {
    result = `${prefix}-${result}`
  }
  if (postfix) {
    result = `${result}-${postfix}`
  }
  return kebabToCamel(result)
}

export const parseEdge = (edge: any) =>
  isString(edge) ? edge.split("|") : edge
