import outline from "./outline"

describe("outline(props)", () => {
  it("renders expected snapshots", () => {
    expect(outline()).toMatchSnapshot()
    expect(
      outline({
        width: "thick"
      })
    ).toMatchSnapshot()
  })
})
