var employee = require('./mockData/employee.json');
var employeesList = require('./mockData/employees.json');

export const getEmployees = () => {
  return employeesList;
};

export const getEmployee = (id : any) => {
  return employee;
};
