import ellipsis from "./ellipsis"

describe("ellipsis(props)", () => {
  it("renders expected snapshots", () => {
    expect(ellipsis()).toMatchSnapshot()
  })
})
