import { AxiosResponse } from "axios";
import * as types from "../constants/actionTypes";
import * as api from "../services/loginService";
import { Credentials } from "../models/credentials";

const loginSuccess = (token: any) => ({
  type: types.LOG_IN_SUCCESS,

  token: token
});

const loginError = (error: any) => ({
  type: types.LOG_IN_ERROR,

  error: error
});

const logout = () => ({
  type: types.LOG_OUT_USER
});

export const loginUser = (credentials: Credentials) => {
  return (dispatch: any) => {
    return api
      .AuthenticateUser(credentials)
      .then((response: AxiosResponse) => {
        dispatch(loginSuccess(response));
      })

      .catch((error: any) => {
        dispatch(loginError(error));
      });
  };
};

export const logoutUser = () => {
  return (dispatch: any) => {
    dispatch(logout());
  };
};
