import * as CSS from "csstype"
import { BackgroundRuleProps } from "./rules/background/background"
import { BorderRuleProps } from "./rules/border/border"
import { ButtonRuleProps } from "./rules/button/button"
import { DiscRuleProps } from "./rules/disc/disc"
import { DisplayRuleProps } from "./rules/display/display"
import { EdgeRuleProps } from "./rules/edge/edge"
import { EllipsisRuleProps } from "./rules/ellipsis/ellipsis"
import { FillRuleProps } from "./rules/fill/fill"
import { FlexRuleProps } from "./rules/flex/flex"
import { LayoutRuleProps } from "./rules/layout/layout"
import { ListRuleProps } from "./rules/list/list"
import { OutlineRuleProps } from "./rules/outline/outline"
import { ScrollRuleProps } from "./rules/scroll/scroll"
import { ShadowRuleProps } from "./rules/shadow/shadow"
import { TextRuleProps } from "./rules/text/text"
import { TransitionRuleProps } from "./rules/transition/transition"

// Fela

export interface Props {
  [key: string]: any
}

export interface Style {
  [key: string]: any
}

// Edges

export type EdgeKey = "top" | "right" | "bottom" | "left"

export type EdgeMap<T> = Partial<Record<EdgeKey, T>>

export type EdgeSet = EdgeKey[]

export type Edge<T> = EdgeKey | EdgeSet | EdgeMap<T>

// Easing

export type EaseKey = "IN" | "OUT" | "IN_OUT"

export type EaseMap = Record<EaseKey, string>

// Rules

export interface RuleDefaults {
  background?: BackgroundRuleProps
  border?: BorderRuleProps
  button?: ButtonRuleProps
  disc?: DiscRuleProps
  display?: DisplayRuleProps
  edge?: EdgeRuleProps
  ellipsis?: EllipsisRuleProps
  fill?: FillRuleProps
  flex?: FlexRuleProps
  layout?: LayoutRuleProps
  list?: ListRuleProps
  outline?: OutlineRuleProps
  scroll?: ScrollRuleProps
  shadow?: ShadowRuleProps
  text?: TextRuleProps
  transition?: TransitionRuleProps
}

export type RuleName = keyof RuleDefaults

export type Rule = (props: Props) => Style

// Custom Properties

export type Length = number | string

export type Value = CSS.Globals | Length | "auto"

export type BackgroundProperty =
  | BackgroundRuleProps
  | CSS.BackgroundProperty<Length>

export type BorderProperty = BorderRuleProps | CSS.BorderProperty<Length>

export type EllipsisProperty = EllipsisRuleProps | boolean

export type FontFeaturesProperty = CSS.FontFeatureSettingsProperty

export type FontSmoothingProperty =
  | "auto"
  | "none"
  | "antialiased"
  | "subpixel-antialiased"

export type OutlineProperty = OutlineRuleProps | CSS.OutlineProperty<Length>

export type ScrollingProperty = CSS.WebkitOverflowScrollingProperty

export type SizeProperty = Length

export type TapColorProperty = CSS.WebkitTapHighlightColorProperty

type Margin = CSS.MarginProperty<Length>
export type MarginProperty = Margin | Partial<Record<EdgeKey, Margin>>

type Padding = CSS.PaddingProperty<Length>
export type PaddingProperty = Padding | Partial<Record<EdgeKey, Padding>>

// Config Properties

export interface Aliases {
  [name: string]: string
}

export interface Breakpoints {
  [name: string]: number
}

export interface CustomProps {
  [key: string]: (value: any) => Style
}
