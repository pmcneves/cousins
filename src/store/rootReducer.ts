import { combineReducers, createStore } from "redux";
import loginReducer from "../screens/Login/reducer";

const rootReducer = combineReducers({
  auth: loginReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
