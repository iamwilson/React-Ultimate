// misc
import * as types from '../constants/actionTypes';
import * as api from '../services/employeeService';
import { beginApiCall, endApiCall } from './commonActions';

export const getEmployeesData = () => {
    return async (dispatch: any) => {
        dispatch(beginApiCall());
        try {
            const employeesResponse = await api.getEmployees();
            dispatch({ type: types.GET_EMPLOYEES_SUCCESS, employeesResponse });
            dispatch(endApiCall());
        } catch (error) {
            dispatch({ type: types.GET_EMPLOYEES_ERROR, error: error });
        }
    };
};

export const getEmployeeData = (id: any) => {
    return async (dispatch: any) => {
        dispatch(beginApiCall());
        try {
            const employeeResponse = await api.getEmployee(id);
            dispatch({ type: types.GET_EMPLOYEE_SUCCESS, employeeResponse });
            dispatch(endApiCall());
        } catch (error) {
            dispatch({ type: types.GET_EMPLOYEE_ERROR, error: error });
        }
    };
};

export const addEmployee = (data: any) => {
    return async (dispatch: any) => {
        dispatch(beginApiCall());
        try {
            const response = await api.addEmployee(data);
            dispatch({ type: types.ADD_EMPLOYEE_SUCCESS, response });
            dispatch(endApiCall());
        } catch (error) {
            dispatch({ type: types.ADD_EMPLOYEE_ERROR, error: error });
        }
    };
};
