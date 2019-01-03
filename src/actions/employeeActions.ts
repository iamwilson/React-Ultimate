import * as types from "../constants/actionTypes";
import * as api from "../services/employeeService";
import { beginApiCall, endApiCall } from "./commonActions";

export const getEmployeesData = () => {
  return (dispatch: any) => {
    dispatch(beginApiCall());
    return api.getEmployees()
      .then((employeesResponse) => {
        dispatch({ type: types.GET_EMPLOYEES_SUCCESS, employeesResponse });
        dispatch(endApiCall());
      })
      .catch((error: any) => {
        dispatch({ type: types.GET_EMPLOYEES_ERROR, error: error });
      });
  };
};

export const getEmployeeData = (id: any) => {
  return (dispatch: any) => {
    dispatch(beginApiCall());
    return api.getEmployee(id)
      .then((employeeResponse) => {
        dispatch({ type: types.GET_EMPLOYEE_SUCCESS, employeeResponse });
        dispatch(endApiCall());
      })
      .catch((error: any) => {
        dispatch({ type: types.GET_EMPLOYEE_ERROR, error: error });
      });
  };
};

export const addEmployee = (data: any) => {
  return (dispatch: any) => {
    dispatch(beginApiCall());
    return api.addEmployee(data)
      .then((response) => {
        dispatch({ type: types.ADD_EMPLOYEE_SUCCESS, response });
        dispatch(endApiCall());
      })
      .catch((error: any) => {
        dispatch({ type: types.ADD_EMPLOYEE_ERROR, error: error });
      });
  };
};
