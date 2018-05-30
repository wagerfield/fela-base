import layout from "./layout"

describe("layout(props)", () => {
  it("renders expected snapshots", () => {
    expect(layout()).toMatchSnapshot()
    expect(
      layout({
        display: "none",
        direction: "column"
      })
    ).toMatchSnapshot()
  })
})
