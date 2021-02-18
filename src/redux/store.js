import { createStore,combineReducers } from "redux"

import {res,cart} from "./reducers"

const store  = createStore(combineReducers({res,cart}))

export default store