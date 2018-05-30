import { createRenderer } from "fela"
import createConfig from "./config"

describe("createConfig(options)", () => {
  it("returns a config object", () => {
    expect(createConfig()).toEqual({
      enhancers: expect.any(Array),
      plugins: expect.any(Array)
    })
  })
})
