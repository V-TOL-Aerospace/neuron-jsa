export interface CheckBase {
  id: string
  question: string
  comments?: boolean
}

export interface CheckYesNo extends CheckBase {}

export interface CheckOptions extends CheckBase {
  options: string[]
}

export interface CheckSelection extends CheckBase {
  selection: string[]
}

export type Checks = CheckYesNo | CheckOptions | CheckSelection
