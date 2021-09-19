import { LoginReducerType } from "./types";

const initialState: LoginReducerType = {
  loading: false,
  authed: false,
  language: "en",
  error: "",
};

const loginReducer = (
  state: LoginReducerType = initialState,
  action: any
): LoginReducerType => {
  switch (action.type) {
    default:
      return state;
  }
};

export default loginReducer;
