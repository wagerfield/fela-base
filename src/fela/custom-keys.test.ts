import { createRenderer, IStyle } from "fela"
import customKeys, { CustomKeys } from "./custom-keys"

describe("customKeys(options)", () => {
  it("returns a function", () => {
    expect(customKeys()).toEqual(expect.any(Function))
  })
})
