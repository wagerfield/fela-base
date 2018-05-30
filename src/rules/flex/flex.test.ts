import flex from "./flex"

describe("flex(props)", () => {
  it("renders expected snapshots", () => {
    expect(flex()).toMatchSnapshot()
    expect(
      flex({
        grow: 1
      })
    ).toMatchSnapshot()
  })
})
