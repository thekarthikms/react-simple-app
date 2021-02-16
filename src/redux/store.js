import { createStore } from "redux"

import {res} from "./reducers"

const store  = createStore(res)

export default store