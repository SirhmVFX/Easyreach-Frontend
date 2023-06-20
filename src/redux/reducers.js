import { combineReducers } from "redux";
import { signinReducer, signupReducer } from "./reducers/authReducers";

const rootReducer = combineReducers({
  signInInfo: signinReducer,
  signUpInfo: signupReducer,
});

export default rootReducer;
