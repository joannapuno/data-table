import { combineReducers } from "@reduxjs/toolkit"
import tableReducer from "./tableReducer"

const rootReducer = combineReducers({
	table: tableReducer
})

export default rootReducer
