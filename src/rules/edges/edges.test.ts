import edges from "./edges"

describe("edges", () => {
  it("throws error with no edges", () => {
    expect(() => {
      edges()
    }).toThrowErrorMatchingSnapshot()
  })

  it("throws error with invalid edges", () => {
    expect(() => {
      edges({ edges: null })
    }).toThrowErrorMatchingSnapshot()
  })

  it("renders expected snapshot when value is null", () => {
    expect(
      edges({
        edges: "top",
        value: null
      })
    ).toMatchSnapshot()
  })

  it("renders expected snapshot when edges is a string", () => {
    expect(
      edges({
        edges: "left|right",
        value: "foo"
      })
    ).toMatchSnapshot()
  })

  it("renders expected snapshot when edges is an array", () => {
    expect(
      edges({
        edges: ["left", "right"],
        value: "foo"
      })
    ).toMatchSnapshot()
  })

  it("renders expected snapshot when edges is an object", () => {
    expect(
      edges({
        edges: {
          left: "foo",
          right: "bar"
        }
      })
    ).toMatchSnapshot()
  })

  it("renders expected snapshot with prefixed props", () => {
    expect(
      edges({
        value: "10px",
        edges: "left|right",
        prefix: "padding"
      })
    ).toMatchSnapshot()
  })

  it("renders expected snapshot with postfixed props", () => {
    expect(
      edges({
        value: "red",
        edges: "left|right",
        prefix: "border",
        postfix: "color"
      })
    ).toMatchSnapshot()
  })
})
