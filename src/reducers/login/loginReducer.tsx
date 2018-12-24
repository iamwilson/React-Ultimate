import { initialState } from "../initialState";
import * as types from "../../constants/actionTypes";

const loginReducer = (state = initialState.login, action: any) => {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      return {...state,
              token: action.token,
              isAuthenticated: true};

    case types.LOG_IN_ERROR:
      return {...state,
              token: "",
              isAuthenticated: false};

    case types.LOG_OUT_USER:
      return {...state,
              token: "",
              isAuthenticated: false};

    default:
      return state;
  }
};

export default loginReducer;
