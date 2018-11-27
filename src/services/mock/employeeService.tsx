export const getEmployees = () => {
  let sampleData = require("./data/employees.json");

  return new Promise(r => { setTimeout(() => { r({ data: sampleData }); }, 1500);
  });
};
