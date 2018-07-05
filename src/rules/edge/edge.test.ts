import edge from "./edge"

describe("edge(props)", () => {
  it("throws error with invalid edge value", () => {
    expect(() => {
      edge({
        edge: JSON.parse("true")
      })
    }).toThrowErrorMatchingSnapshot()
  })

  it("renders expected snapshot when value is null", () => {
    expect(
      edge({
        edge: "left",
        value: null
      })
    ).toMatchSnapshot()
  })

  it("renders expected snapshot when edge is a string", () => {
    expect(
      edge({
        edge: "left",
        value: "foo"
      })
    ).toMatchSnapshot()
  })

  it("renders expected snapshot when edge is an array", () => {
    expect(
      edge({
        edge: ["left", "right"],
        value: "foo"
      })
    ).toMatchSnapshot()
  })

  it("renders expected snapshot when edge is an object", () => {
    expect(
      edge({
        edge: {
          left: "foo",
          right: "bar"
        }
      })
    ).toMatchSnapshot()
  })

  it("renders expected snapshot with prefixed props", () => {
    expect(
      edge({
        edge: ["left", "right"],
        value: "10px",
        prefix: "padding"
      })
    ).toMatchSnapshot()
  })

  it("renders expected snapshot with postfixed props", () => {
    expect(
      edge({
        edge: ["left", "right"],
        value: "red",
        prefix: "border",
        postfix: "color"
      })
    ).toMatchSnapshot()
  })
})
