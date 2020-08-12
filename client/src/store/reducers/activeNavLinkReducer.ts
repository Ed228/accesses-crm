import {
  ActiveNavLinkState,
  ActiveNavLinkActionTypes,
  CHANGE_ACTIVE_NAV_LINK
} from "../types";

const initialState: ActiveNavLinkState = {
  activeLinkIndex: 0
}

export function activeNavLinkReducer(
  state: ActiveNavLinkState = initialState,
  action: ActiveNavLinkActionTypes
): ActiveNavLinkState {
  switch (action.type) {
    case CHANGE_ACTIVE_NAV_LINK:
      return {
        ...state,
        activeLinkIndex: action.payload
      }
    default:
      return state
  }
}