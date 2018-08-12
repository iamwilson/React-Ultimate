import { initialState } from "../initialState";
import * as types from "../../constants/actionTypes";

const employeesListReducer = (state = initialState.employees, action: any) => {
  switch (action.type) {

    case types.GET_EMPLOYEES_SUCCESS:
      return Object.assign({}, state, action.employees);
   
    default:
      return state;
  }
};

export default employeesListReducer;
