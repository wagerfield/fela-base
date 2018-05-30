import text from "./text"

describe("text(props)", () => {
  it("renders expected snapshots", () => {
    expect(text()).toMatchSnapshot()
    expect(
      text({
        family: "Helvetica",
        size: "24px",
        weight: "bold"
      })
    ).toMatchSnapshot()
  })
})
