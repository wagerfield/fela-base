import button from "./button"

describe("button(props)", () => {
  it("renders expected snapshots", () => {
    expect(button()).toMatchSnapshot()
    expect(
      button({
        background: "red"
      })
    ).toMatchSnapshot()
  })
})
