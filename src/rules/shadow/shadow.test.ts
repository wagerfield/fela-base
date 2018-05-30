import shadow from "./shadow"

describe("shadow(props)", () => {
  it("renders expected snapshots", () => {
    expect(shadow()).toMatchSnapshot()
    expect(
      shadow({
        x: "4px",
        spread: "8px"
      })
    ).toMatchSnapshot()
  })
})
