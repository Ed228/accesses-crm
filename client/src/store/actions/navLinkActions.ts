import {ActiveNavLinkActionTypes, CHANGE_ACTIVE_NAV_LINK} from "../types";

export function changeActiveNavLink(index: number): ActiveNavLinkActionTypes {
  return {
    type: CHANGE_ACTIVE_NAV_LINK,
    payload: index
  }
}