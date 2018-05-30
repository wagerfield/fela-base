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

export type Rule = (props: Props) => Style

export type Unit = string | 0

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
