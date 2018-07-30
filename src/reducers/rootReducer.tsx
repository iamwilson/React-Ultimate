
import { combineReducers } from 'redux'
import { employeeReducer } from './Employee/employeeReducer';

export const rootReducer = combineReducers({
  employees: employeeReducer,
})

