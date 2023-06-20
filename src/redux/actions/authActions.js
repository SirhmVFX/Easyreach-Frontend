import axios from "axios";
import env from "../../env";
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNOUT,
} from "../constants/authConstants";

export const signup =
  (username, email, firstName, lastName, password, phone) =>
  async (dispatch) => {
    dispatch({ type: USER_SIGNUP_FAIL, payload: null });
    dispatch({
      type: USER_SIGNUP_REQUEST,
      payload: { username, email, firstName, lastName, password },
    });

    try {
      const { data } = await axios.post(`${env.apiUrl}/user/sign-up`, {
        username,
        email,
        firstName,
        lastName,
        password,
        phone,
      });

      dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
      localStorage.setItem("flowdayUser", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_SIGNUP_FAIL,
        payload:
          error.response && error.response.data
            ? error.response.data.errors[0].detail
            : error.message,
      });
    }
  };

  export const signIn = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_FAIL, payload: null });
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
      const { data } = await axios.post(`${env.apiUrl}/auth/login`, {
        email,
        password,
      });
  
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem("flowdayUserAuth", JSON.stringify(data));
      localStorage.removeItem("flowdayUser");
    } catch (error) {
      dispatch({
        type: USER_SIGNIN_FAIL,
        payload:
          error.response && error.response.data
            ? error.response.data.errors[0].detail
            : error.message,
      });
    }
  };

  export const signout = () => async (dispatch) => {
    // await axios.post(`${env.apiUrl}/auth/logout`);
    localStorage.removeItem("easyreachUser");
    dispatch({ type: USER_SIGNOUT });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: null });
  };