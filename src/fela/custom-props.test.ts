import customProps from "./custom-props"

describe("customProps(props)", () => {
  it("returns a function", () => {
    expect(customProps()).toEqual(expect.any(Function))
  })
})
