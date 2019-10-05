import { combineReducers } from "redux";
import commentsReducer from "./reducers/commentReducer";
import users from "./reducers/usersReducer";

const reducer = combineReducers({
  commentsReducer,
  users
});

export default reducer;