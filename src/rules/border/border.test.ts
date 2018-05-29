import border from "./border"

describe("border", () => {
  it("throws error with invalid edges", () => {
    expect(() => {
      border({ edges: null })
    }).toThrowErrorMatchingSnapshot()
  })

  it("renders expected snapshot with no options", () => {
    expect(border()).toMatchSnapshot()
  })

  it("renders expected snapshot when edges is a string", () => {
    expect(
      border({ edges: "left|right" })
    ).toMatchSnapshot()
  })

  it("renders expected snapshot when edges is an array", () => {
    expect(
      border({ edges: ["top", "bottom"] })
    ).toMatchSnapshot()
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
