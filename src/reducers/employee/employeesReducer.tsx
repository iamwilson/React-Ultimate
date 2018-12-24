import { initialState } from "../initialState";
import * as types from "../../constants/actionTypes";

const employeesReducer = (state = initialState.employees, action: any) => {
  switch (action.type) {
    case types.GET_EMPLOYEES_SUCCESS:
      return { ...state, ...action.employees };

    default:
      return state;
  }
};

export default employeesReducer;
