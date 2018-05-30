import scroll from "./scroll"

describe("scroll(props)", () => {
  it("renders expected snapshots", () => {
    expect(scroll()).toMatchSnapshot()
    expect(
      scroll({
        x: true
      })
    ).toMatchSnapshot()
  })
})
