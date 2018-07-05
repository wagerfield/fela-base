import border from "./border"

describe("border(props)", () => {
  it("throws error with invalid edge value", () => {
    expect(() => {
      border({
        edge: JSON.parse("true")
      })
    }).toThrowErrorMatchingSnapshot()
  })

  it("renders expected snapshot with no options", () => {
    expect(border()).toMatchSnapshot()
  })

  it("renders expected snapshot when edge is a string", () => {
    expect(border({ edge: "left" })).toMatchSnapshot()
  })

  it("renders expected snapshot when edge is an array", () => {
    expect(border({ edge: ["top", "bottom"] })).toMatchSnapshot()
  })

  it("renders expected snapshot when styles are set", () => {
    expect(
      border({
        style: "dashed",
        color: "red",
        width: 2
      })
    ).toMatchSnapshot()
  })
})
