import axios from "axios";

const url = `https://jsonplaceholder.typicode.com/users`;

export const getEmployees = () => {
  return axios.get(url);
};

export const getEmployee = (id: any) => {
  return axios.get(url, {
    params: {
      id: id,
    }
  });
};
