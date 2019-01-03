import { combineReducers } from "redux";

import error from "./error/errorReducer";
import login from "./login/loginReducer";
import isLoading from "./loading/loadingReducer";
import employee from "./employee/employeeReducer";
import employees from "./employees/employeesReducer";

export const rootReducer = combineReducers({
  login,
  error,
  employee,
  employees,
  isLoading
});
