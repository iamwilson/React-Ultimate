export const getEmployees = () => {
  let data = require("./data/employees.json");
  return resolvePromise(data, 200, 500);
};

export const authenticateUser = (credentials: any) => {
  let data = require("./data/token.json");
  return resolvePromise(data, 200, 100);
};

/**
 *
 * @param data input data to be returned
 * @param status http status of the call
 * @param timeOut timeout for the setTimeout function
 */

export const resolvePromise = (data: any, status: number, timeOut: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: data, status: status });
    }, timeOut);
  });
};
