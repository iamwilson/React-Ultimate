import { AxiosResponse } from "axios";
import * as types from "../constants/actionTypes";
import * as api from "../services/loginService";
import { Credentials } from "../models/credentials";

export const loginUser = (credentials: Credentials) => {
  return (dispatch: any) => {
    return api
      .AuthenticateUser(credentials)
      .then((response: AxiosResponse) => {
        dispatch({
          type: types.LOG_IN_SUCCESS,
          token: response
        });
      })
      .catch((error: any) => {
        dispatch({
          type: types.LOG_IN_ERROR,
          error: error
        });
      });
  };
};

export const logoutUser = () => {
  return (dispatch: any) => {
    dispatch({
      type: types.LOG_OUT_USER
    });
  };
};
