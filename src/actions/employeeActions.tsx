import * as api from '../apis/api';
import * as types from '../constants/actionTypes';

const beginApiCall = () => ({
  type: types.BEGIN_API_CALL
});

const endApiCall = () => ({
  type: types.END_API_CALL
});

const getEmployeesSuccess = (employees: any) => ({
  type: types.GET_EMPLOYEES_SUCCESS,
  employees: employees
});

const getEmployeesError = (error: any) => ({
  type: types.GET_EMPLOYEES_ERROR,
  error: error
});


const getEmployeeSuccess = (employee: any) => ({
  type: types.GET_EMPLOYEE_SUCCESS,
  employee: employee
});

const getEmployeeError = (error: any) => ({
  type: types.GET_EMPLOYEE_ERROR,
  error: error
});

export const getEmployeesData = () => {
  return (dispatch: any) => {
    dispatch(beginApiCall());
    return api
      .Api()
      .getEmployees()
      .then(response => {
        dispatch(getEmployeesSuccess(response));
        dispatch(endApiCall());
      })
      .catch((error: any) => {
        dispatch(getEmployeesError(error));
      });
  };
};

export const getEmployeeData = (id: any) => {
  return (dispatch: any) => {
    dispatch(beginApiCall());
    return api
      .Api()
      .getEmployee(id)
      .then(response => {
        dispatch(getEmployeeSuccess(response));
        dispatch(endApiCall());
      })
      .catch((error: any) => {
        dispatch(getEmployeeError(error));
      });
  };
};
