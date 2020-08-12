import {Accesses, AccessesActionTypes, ADD_ACCESSES, DELETE_ACCESSES} from '../types'

export function addAccesses(newAccesses: Accesses): AccessesActionTypes {
  return {
    type: ADD_ACCESSES,
    payload: newAccesses
  }
}

export function deleteAccesses(clientName: string): AccessesActionTypes {
  return {
    type: DELETE_ACCESSES,
    meta: {
      clientName
    }
  }
}