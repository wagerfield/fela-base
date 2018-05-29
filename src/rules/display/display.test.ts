import display from "./display"

describe("display", () => {
  it("renders expected snapshots", () => {
    expect(
      display({
        display: "inline"
      })
    ).toMatchSnapshot()
    expect(
      display({
        display: "block"
      })
    ).toMatchSnapshot()
  })
})
