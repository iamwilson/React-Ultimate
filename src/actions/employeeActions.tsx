import * as api from "../apis/api";
import * as types from "../constants/actionTypes";

const getData = (loading: boolean) => ({
  type: types.GET_DATA,
  payload: loading
});

const getEmployeesSuccess = (employees: any) => ({
  type: types.GET_EMPLOYEES_SUCCESS,
  payload: employees
});

const getEmployeeSuccess = (employee: any) => ({
  type: types.GET_EMPLOYEE_SUCCESS,
  payload: employee
});

const getDataError = (error: boolean) => ({
  type: types.GET_DATA_ERROR,
  payload: error
});

export const getEmployeesData = () => {
  return (dispatch: any) => {
    dispatch(getData(true));

    api
      .Api()
      .getEmployees()
      .then(response => {
        dispatch(getEmployeesSuccess(response.data));
        dispatch(getData(false));
      })
      .catch(() => dispatch(getDataError(true)));
  };
};

export const getEmployeeData = (id: any) => {
  return (dispatch: any) => {
    dispatch(getData(true));
    api
      .Api()
      .getEmployee(id)
      .then(response => {
        dispatch(getEmployeeSuccess(response.data));
        dispatch(getData(false));
      })
      .catch(() => {
        dispatch(getDataError(true));
      });
  };
};
