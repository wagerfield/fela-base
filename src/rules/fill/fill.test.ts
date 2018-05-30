import fill from "./fill"

describe("fill(props)", () => {
  it("renders expected snapshot with no props", () => {
    expect(fill()).toMatchSnapshot()
  })

  it("renders expected snapshot with position", () => {
    expect(
      fill({
        position: "fixed"
      })
    ).toMatchSnapshot()
  })

  it("renders expected snapshot with edge", () => {
    expect(
      fill({
        edge: "top"
      })
    ).toMatchSnapshot()
  })
})
