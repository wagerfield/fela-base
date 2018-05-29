import { createRenderer } from "fela"
import createConfig from "./config"

describe("createConfig(options)", () => {
  it("returns an object", () => {
    expect(createConfig()).toEqual({
      enhancers: expect.any(Array),
      plugins: expect.any(Array)
    })
  })
})
