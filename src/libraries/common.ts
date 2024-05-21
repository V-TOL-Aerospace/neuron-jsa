export function is_array(o: any, t: string) {
  if (!Array.isArray(o)) return false

  for (const x of o) {
    if (typeof x !== t) return false
  }

  return true
}

export function is_array_of_strings(o: any) {
  return is_array(o, 'string')
}

export type CheckPrerequisitesMethod = 'and' | 'or'

export interface CheckPrerequisites {
  method: string
  prerequisites: Map<string, boolean>
}

export interface CheckBase {
  id: string
  question: string
  image?: string
  show_if?: CheckPrerequisites
  comments?: boolean | string
  checked?: boolean
}

export function is_check(o: any) {
  return typeof o.id === 'string' && typeof o.question === 'string'
}

// export function check_has_custom_comment_text(o: CheckBase) {
//   return typeof o.comments === 'string'
// }

export interface CheckYesNo extends CheckBase {}

export function is_check_yes_no(o: any): o is CheckYesNo {
  return is_check(o)
}

export interface CheckOptions extends CheckBase {
  options: string[]
}

export function is_check_options(o: any): o is CheckOptions {
  return is_check(o) && is_array_of_strings(o.options)
}

export interface CheckSelection extends CheckBase {
  selection: string[]
}

export function is_check_selection(o: any): o is CheckSelection {
  return is_check(o) && is_array_of_strings(o.selection)
}

export interface CheckTicker extends CheckBase {
  ticker: boolean
  label: string
}

export function is_check_number(o: any): o is CheckTicker {
  return is_check(o) && o.ticker && typeof o.label === 'string'
}

export type Checks = CheckYesNo | CheckOptions | CheckSelection | CheckTicker
