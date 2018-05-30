// Edge

export type EdgeKey = "top" | "right" | "bottom" | "left"

export type EdgeMap = Partial<Record<EdgeKey, any>>

export type EdgeSet = EdgeKey[]

export type Edge = EdgeKey | EdgeMap | EdgeSet

// Ease

export type EaseKey = "IN" | "OUT" | "IN_OUT"

export type Ease = Record<EaseKey, string>

// Style

export type UnitValue = string | 0

export interface Style {
  [key: string]: any
}

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
