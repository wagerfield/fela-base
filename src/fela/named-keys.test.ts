import { createRenderer, IStyle } from "fela"
import namedKeys, {
  buildMediaQuery,
  buildMediaQueries,
  NamedKeysOptions
} from "./named-keys"

interface CustomStyle extends IStyle {
  aboveMobile?: object
  belowMobile?: object
  aboveTablet?: object
  belowTablet?: object
  placeholder?: object
  supportsFlex?: object
}

const snapshotStyle = (name?: string) => (style) => {
  expect(style).toMatchSnapshot(name)
  return style
}

const testPlugin = (style: CustomStyle, options?: NamedKeysOptions) => {
  createRenderer({
    plugins: [namedKeys(options), snapshotStyle()]
  }).renderRule(() => style, {})
}

describe("buildMediaQuery(value, below)", () => {
  it("returns expected snapshots", () => {
    expect(buildMediaQuery(320, true)).toMatchSnapshot()
    expect(buildMediaQuery(320, false)).toMatchSnapshot()
  })
})

describe("buildMediaQueries(breakpoints)", () => {
  it("returns expected snapshots", () => {
    expect(
      buildMediaQueries({
        mobile: 320,
        tablet: 720
      })
    ).toMatchSnapshot()
  })
})

describe("namedKeys(options)", () => {
  it("returns a function", () => {
    expect(namedKeys()).toEqual(expect.any(Function))
  })
  it("renames placeholder alias", () => {
    testPlugin({
      placeholder: {
        color: "red"
      }
    })
  })
  it("renames media query aliases", () => {
    testPlugin(
      {
        aboveMobile: {
          color: "red"
        },
        belowTablet: {
          color: "red"
        }
      },
      {
        breakpoints: {
          mobile: 320,
          tablet: 720
        }
      }
    )
  })
  it("renames custom aliases", () => {
    testPlugin(
      {
        supportsFlex: {
          color: "red"
        }
      },
      {
        aliases: {
          supportsFlex: "@supports (display: flex)"
        }
      }
    )
  })
})
