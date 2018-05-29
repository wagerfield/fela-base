import disc from "./disc"

describe("disc", () => {
  it("renders expected snapshots", () => {
    expect(disc()).toMatchSnapshot()
    expect(
      disc({
        size: 100,
        color: "red"
      })
    ).toMatchSnapshot()
  })
})
