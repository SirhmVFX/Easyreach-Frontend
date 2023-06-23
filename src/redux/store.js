import thunk from "redux-thunk";
import { combineReducers, compose, legacy_createStore, applyMiddleware } from "redux";

import { signinReducer, signupReducer } from "./reducers/authReducers";

const initialState = {
  signInInfo: {
    userInfo: localStorage.getItem("easyreachUser")
      ? JSON.parse(localStorage.getItem("easyreachUser"))
      : null,
  },
};

const reducers = combineReducers({
  signInInfo: signinReducer,
  signUpInfo: signupReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
