export const getEmployees = () => {
  let data = require('./data/employees.json');
  return new Promise((resolve) => {
      setTimeout(() => { resolve({ data: data, status: 200 }) }, 1500);
  });
};

export const authenticateUser = (credentials: any) => {
  let data = require('./data/token.json');
  return new Promise((resolve) => {
      resolve({ data: data, status: 200 });
  })
}

