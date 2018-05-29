import ellipsis from "./ellipsis"

describe("ellipsis", () => {
  it("renders expected snapshots", () => {
    expect(ellipsis()).toMatchSnapshot()
  })
})
