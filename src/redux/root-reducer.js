import searchReducer from "./search/search-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  search: searchReducer
});

export default rootReducer;
