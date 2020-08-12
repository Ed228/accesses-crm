import { accessesReducer } from "./accessesReducer"
import { activeNavLinkReducer } from "./activeNavLinkReducer";
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  accesses: accessesReducer,
  navLink: activeNavLinkReducer
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>