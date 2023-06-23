import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { combineReducers, compose } from "redux";

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
const store = configureStore({
  reducer: reducers,
  preloadedState: initialState,
  middleware: [thunk],
  enhancers: composeEnhancers,
});

export default store;
