import { initialState } from "../initialState";
import * as types from "../../constants/actionTypes";

const employeeReducer = (state = initialState, action: any) => {
  switch (action.type) {

    case types.GET_DATA:
      return Object.assign({}, state, { isLoading: action.payload });

    case types.GET_EMPLOYEES_SUCCESS:
      return Object.assign([], state, { employees: action.payload });

    case types.GET_EMPLOYEE_SUCCESS:
      return Object.assign({}, state, { employeeDetails: action.payload });

    case types.GET_DATA_ERROR:
      return Object.assign({}, state, { error: action.payload });
   
    default:
      return state;
  }
};

export default employeeReducer;
