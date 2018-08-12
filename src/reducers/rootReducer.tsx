
import { combineReducers } from 'redux';

import error from './error/errorReducer';
import isLoading from './loading/loadingReducer';
import employees from './employeesList/employeesListReducer';
import employee from './employeeDetails/employeeDetailsReducer'


export const rootReducer = combineReducers({
  error,
  isLoading,
  employees,
  employee,
})