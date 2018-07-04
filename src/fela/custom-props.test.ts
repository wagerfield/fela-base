import { createRenderer, IRenderer as FelaRenderer } from "fela"
import { CustomProps, Style } from "../types"
import customProps from "./custom-props"

const snapshotStyle = (name?: string) => (style) => {
  expect(style).toMatchSnapshot(name)
  return style
}

const createTestRenderer = (props?: CustomProps) => {
  return createRenderer({
    plugins: [customProps(props), snapshotStyle()]
  })
}

const renderStyle = (renderer: FelaRenderer, style: Style) => {
  renderer.renderRule(() => style, {})
}

describe("customProps(props)", () => {
  const renderer = createTestRenderer()

  it("returns a function", () => {
    expect(customProps()).toEqual(expect.any(Function))
  })

  it("adds custom props", () => {
    const customRenderer = createTestRenderer({
      customProp: (value) => ({
        customPropA: value,
        customPropB: value
      })
    })
    renderStyle(customRenderer, {
      customProp: "duplicate"
    })
  })

  it("renders background value", () => {
    renderStyle(renderer, {
      background: "red"
    })
  })

  it("renders background object", () => {
    renderStyle(renderer, {
      background: {
        color: "blue",
        repeat: "no-repeat"
      }
    })
  })

  it("renders border value", () => {
    renderStyle(renderer, {
      border: "none"
    })
  })

  it("renders border object", () => {
    renderStyle(renderer, {
      border: {
        edge: ["left", "right"],
        width: "10px",
        color: "blue"
      }
    })
  })

  it("renders outline value", () => {
    renderStyle(renderer, {
      outline: "none"
    })
  })

  it("renders outline object", () => {
    renderStyle(renderer, {
      outline: {
        width: "10px",
        color: "blue"
      }
    })
  })

  it("renders default ellipsis object", () => {
    renderStyle(renderer, {
      ellipsis: true
    })
  })

  it("renders custom ellipsis object", () => {
    renderStyle(renderer, {
      ellipsis: {
        overflow: "visible"
      }
    })
  })

  it("does not render ellipsis object", () => {
    renderStyle(renderer, {
      ellipsis: false
    })
  })

  it("renders font feature object", () => {
    renderStyle(renderer, {
      fontFeatures: "liga"
    })
  })

  it("renders font smoothing object", () => {
    renderStyle(renderer, {
      fontSmoothing: "antialiased"
    })
  })

  it("renders margin value", () => {
    renderStyle(renderer, {
      margin: 10
    })
  })

  it("renders margin object", () => {
    renderStyle(renderer, {
      margin: {
        right: 20,
        top: 10
      }
    })
  })

  it("renders padding value", () => {
    renderStyle(renderer, {
      padding: 10
    })
  })

  it("renders padding object", () => {
    renderStyle(renderer, {
      padding: {
        right: 20,
        top: 10
      }
    })
  })

  it("renders scrolling object", () => {
    renderStyle(renderer, {
      scrolling: "touch"
    })
  })

  it("renders size object", () => {
    renderStyle(renderer, {
      size: 10
    })
  })

  it("renders tap color object", () => {
    renderStyle(renderer, {
      tapColor: "red"
    })
  })
})
