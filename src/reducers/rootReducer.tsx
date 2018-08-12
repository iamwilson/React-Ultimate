import { combineReducers } from "redux";

import employee from "./employee/employeeReducer";
import employees from "./employees/employeesReducer";
import error from "./error/errorReducer";
import isLoading from "./loading/loadingReducer";

export const rootReducer = combineReducers({
  employee,
  employees,
  error,
  isLoading
});
