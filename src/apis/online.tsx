import axios from 'axios';
import { config } from '../configs/config';

const url = config.url;

export const getEmployees = () => {
  return axios.get(url);
};

export const getEmployee = (id: any) => {
  return axios.get(url + id);
};
