import { combineReducers } from "redux";

// TODO importing all the reducers
import counterReducer from "./counter";
import loggedReducer from "./isLogged";

const allReducers = combineReducers({
  myCount: counterReducer,
  isUser: loggedReducer, //* shortHand for  loggedReducer:loggedReducer,
});

export default allReducers;
