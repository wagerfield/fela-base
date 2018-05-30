import transition from "./transition"

describe("transition(props)", () => {
  it("renders expected snapshots", () => {
    expect(transition()).toMatchSnapshot()
    expect(
      transition({
        property: "opacity",
        delay: "2s"
      })
    ).toMatchSnapshot()
  })
})
