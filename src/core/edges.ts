import { EdgeKey, EdgeSet } from "../types"

const KT: EdgeKey = "top"
const KR: EdgeKey = "right"
const KB: EdgeKey = "bottom"
const KL: EdgeKey = "left"

export const ALL: EdgeSet = [KT, KR, KB, KL]
export const TRB: EdgeSet = [KT, KR, KB]
export const TLB: EdgeSet = [KT, KL, KB]
export const LBR: EdgeSet = [KL, KB, KR]
export const LTR: EdgeSet = [KL, KT, KR]
export const BR: EdgeSet = [KB, KR]
export const BL: EdgeSet = [KB, KL]
export const LR: EdgeSet = [KL, KR]
export const TB: EdgeSet = [KT, KB]
export const TR: EdgeSet = [KT, KR]
export const TL: EdgeSet = [KT, KL]
export const B: EdgeSet = [KB]
export const R: EdgeSet = [KR]
export const L: EdgeSet = [KL]
export const T: EdgeSet = [KT]
