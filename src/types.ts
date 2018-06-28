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

// Edge

export type EdgeKey = "top" | "right" | "bottom" | "left"

export type EdgeMap = Partial<Record<EdgeKey, any>>

export type EdgeSet = EdgeKey[]

export type Edge = EdgeKey | EdgeMap | EdgeSet

// Ease

export type EaseKey = "IN" | "OUT" | "IN_OUT"

export type EaseMap = Record<EaseKey, string>

// Fela

export interface Props {
  [key: string]: any
}

export interface Style {
  [key: string]: any
}

export interface RuleDefaults {
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

export type Unit = number | string

// Config

export interface Aliases {
  [name: string]: string
}

export interface Breakpoints {
  [name: string]: number
}

export interface CustomProps {
  [key: string]: (value: any) => Style
}
