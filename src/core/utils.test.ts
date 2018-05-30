import {
  ifElse,
  isType,
  isNull,
  isString,
  camelToKebab,
  kebabToCamel,
  parseEdge,
  wrapKey
} from "./utils"

describe("ifElse(condition)", () => {
  it("returns a function", () => {
    expect(ifElse(true)).toEqual(expect.any(Function))
  })
  it("returns first arg when condition is true", () => {
    expect(ifElse(true)(1, 2)).toBe(1)
  })
  it("returns second arg when condition is false", () => {
    expect(ifElse(false)(1, 2)).toBe(2)
  })
})

describe("isType(type)", () => {
  it("returns a function", () => {
    expect(isType("string")).toEqual(expect.any(Function))
  })
  it("returns true for correct type", () => {
    expect(isType("string")("hello")).toBe(true)
  })
  it("returns false for incorrect type", () => {
    expect(isType("string")(1)).toBe(false)
  })
})

describe("isNull(value)", () => {
  it("returns true for correct type", () => {
    expect(isNull(null)).toBe(true)
  })
  it("returns false for incorrect type", () => {
    expect(isNull(undefined)).toBe(false)
    expect(isNull("foo")).toBe(false)
    expect(isNull(1)).toBe(false)
  })
})

describe("isString(value)", () => {
  it("returns true for correct type", () => {
    expect(isString("hello")).toBe(true)
  })
  it("returns false for incorrect type", () => {
    expect(isString(1)).toBe(false)
  })
})

describe("camelToKebab(value)", () => {
  it("returns expected string", () => {
    expect(camelToKebab("FooBarBaz")).toBe("foo-bar-baz")
    expect(camelToKebab("fooBarBaz")).toBe("foo-bar-baz")
  })
})

describe("kebabToCamel(value)", () => {
  it("returns expected string", () => {
    expect(kebabToCamel("foo-bar-baz")).toBe("fooBarBaz")
  })
})

describe("wrapKey(key, prefix, postfix)", () => {
  it("returns expected string", () => {
    expect(wrapKey("key")).toBe("key")
    expect(wrapKey("key", "prefix")).toBe("prefixKey")
    expect(wrapKey("key", null, "postfix")).toBe(
      "keyPostfix"
    )
    expect(wrapKey("key", "prefix", "postfix")).toBe(
      "prefixKeyPostfix"
    )
  })
})

describe("parseEdge(edges)", () => {
  it("returns an array of edges from a formatted string", () => {
    expect(parseEdge("top|left|right")).toEqual([
      "top",
      "left",
      "right"
    ])
  })
  it("returns an array of edges", () => {
    const edges = ["top", "left", "right"]
    expect(parseEdge(edges)).toBe(edges)
  })
})
