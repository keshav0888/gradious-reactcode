import { combineReducers } from "redux";
import InsertData from "./dataReducer";
const rootReducer = combineReducers({
  InsertData: InsertData,
});

export default rootReducer;
