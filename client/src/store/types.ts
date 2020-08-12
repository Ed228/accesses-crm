export interface Accesses {
  message: string
  readonly creatureDate: Date
  clientName: string
  email: string | string[]
  phone: string
}

export interface AccessesState {
  accesses: Accesses[]
}

export const ADD_ACCESSES = 'ADD_ACCESSES'
export const DELETE_ACCESSES = 'DELETE_ACCESSES'

interface AddAccesses {
  type: typeof ADD_ACCESSES
  payload: Accesses
}

interface DeleteAccesses {
  type: typeof DELETE_ACCESSES
  meta: {
    clientName: string
  }
}

export type AccessesActionTypes = AddAccesses | DeleteAccesses

/*------------------------------*/

export interface ActiveNavLinkState {
  activeLinkIndex: number
}

export const CHANGE_ACTIVE_NAV_LINK = 'CHANGE_ACTIVE_NAV_LINK'

interface ChangeActiveNavLink {
  type: typeof CHANGE_ACTIVE_NAV_LINK
  payload: number
}

export type ActiveNavLinkActionTypes = ChangeActiveNavLink