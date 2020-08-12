import {
  AccessesState,
  AccessesActionTypes,
  ADD_ACCESSES,
  DELETE_ACCESSES
} from '../types'

const initialState: AccessesState = {
  accesses: []
}

export function accessesReducer(
  state: AccessesState = initialState,
  action: AccessesActionTypes
  ): AccessesState {
  switch (action.type) {
    case ADD_ACCESSES:
      return {
        ...state,
        accesses: [...state.accesses, action.payload]
      }
    case DELETE_ACCESSES: {
      return {
        ...state,
        accesses: state.accesses.filter(
          a => a.clientName !== action.meta.clientName
        )
      }
    }
    default:
      return state
  }
}