import axios from 'axios';

const url = ``;

export const getEmployees = () => {
  return axios.get(url);
};

export const getEmployee = () => {
  return axios.get(url);
};
