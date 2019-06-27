import { initialState } from '../initialState';
import * as types from '../../constants/actionTypes';

const employeeReducer = (state = initialState.employee, action: any) => {
  switch (action.type) {
    case types.GET_EMPLOYEE_SUCCESS:
      return { ...state, ...action.employeeResponse };
    default:
      return state;
  }
};

export default employeeReducer;
