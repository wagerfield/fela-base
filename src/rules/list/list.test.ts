import list from "./list"

describe("list(props)", () => {
  it("renders expected snapshots", () => {
    expect(list()).toMatchSnapshot()
    expect(
      list({
        style: "square",
        padding: 10
      })
    ).toMatchSnapshot()
  })
})
