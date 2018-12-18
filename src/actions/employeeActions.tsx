// base
import * as types from "../constants/actionTypes";
import * as api from "../services/employeeService";
import { beginApiCall, endApiCall } from "../actions/commonActions";

export const getEmployeesData = () => {
  return (dispatch: any) => {
    dispatch(beginApiCall());
    return api
      .getEmployees()
      .then(response => {
        dispatch({
          type: types.GET_EMPLOYEES_SUCCESS,
          employees: response
        });
        dispatch(endApiCall());
      })
      .catch((error: any) => {
        dispatch({
          type: types.GET_EMPLOYEES_ERROR,
          error: error
        });
      });
  };
};

export const getEmployeeData = (id: any) => {
  return (dispatch: any) => {
    dispatch(beginApiCall());
    return api
      .getEmployee(id)
      .then(response => {
        dispatch({
          type: types.GET_EMPLOYEE_SUCCESS,
          employee: response
        });
        dispatch(endApiCall());
      })
      .catch((error: any) => {
        dispatch({
          type: types.GET_EMPLOYEE_ERROR,
          error: error
        });
      });
  };
};
