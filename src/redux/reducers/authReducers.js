import {
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
  } from "../constants/authConstants";
  
  export const signinReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { ...state, loading: true };
      case USER_SIGNIN_SUCCESS:
        return { ...state, loading: false, userInfo: action.payload };
      case USER_SIGNIN_FAIL:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export const signupReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_SIGNUP_REQUEST:
        return { ...state, loading: true };
      case USER_SIGNUP_SUCCESS:
        return { ...state, loading: false, userInfo: action.payload };
      case USER_SIGNUP_FAIL:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };