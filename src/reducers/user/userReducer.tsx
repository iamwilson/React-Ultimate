import { initialState } from "../initialState";
import * as types from "../../constants/actionTypes";

const userReducer = (state = initialState.user, action: any) => {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true
      });

    case types.LOG_IN_ERROR:
      return Object.assign({}, state, {
        isAuthenticated: false
      });

    case types.LOG_OUT_USER:
      return Object.assign({}, state, {
        isAuthenticated: false
      });

    default:
      return state;
  }
};

export default userReducer;
