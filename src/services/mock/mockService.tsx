export const getEmployees = () => {
  const data = require("./data/employees.json");
  return resolvePromise(data, 200, 500);
};

export const getEmployee = (id: any) => {
  const data = require("./data/employees.json");
  // tslint:disable-next-line:triple-equals
  const result = data.find((x: { id: any; }) => x.id == id);
  return resolvePromise(result, 200, 500);
};

export const authenticateUser = (credentials: any) => {
  const data = require("./data/token.json");
  return resolvePromise(data, 200, 100);
};

/**
 *
 * @param data input data to be returned
 * @param status http status of the call
 * @param timeOut timeout for the setTimeout function
 */

export const resolvePromise = (data: any, status: number, timeOut: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: data, status: status });
    }, timeOut);
  });
};
