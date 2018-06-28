import background from "./background"

describe("background(props)", () => {
  it("renders expected snapshots", () => {
    expect(background()).toMatchSnapshot()
    expect(
      background({
        color: "red"
      })
    ).toMatchSnapshot()
  })
})
