// base 
import * as types from "../constants/actionTypes";
import * as api from "../services/employeeService";
import * as commonActions from '../actions/commonActions';

export const getEmployeesData = () => {
  return (dispatch: any) => {
    dispatch(commonActions.beginApiCall());
    return api
      .getEmployees()
      .then(response => {
        dispatch({
          type: types.GET_EMPLOYEES_SUCCESS,
          employees: response
        });
        dispatch(commonActions.endApiCall());
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
    dispatch(commonActions.beginApiCall());
    return api
      .getEmployee(id)
      .then(response => {
        dispatch({
          type: types.GET_EMPLOYEE_SUCCESS,
          employee: response
        });
        dispatch(commonActions.endApiCall());
      })
      .catch((error: any) => {
        dispatch({
          type: types.GET_EMPLOYEE_ERROR,
          error: error
        });
      });
  };
};
