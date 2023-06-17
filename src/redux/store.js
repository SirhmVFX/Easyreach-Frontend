import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {
  signInInfo: {
    userInfo: localStorage.getItem("easyreachUser")
      ? JSON.parse(localStorage.getItem("easyreachUser"))
      : null,
  },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
