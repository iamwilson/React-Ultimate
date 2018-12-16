import axios from 'axios';
import { config } from '../configs/config';
import * as mockService from './mock/mockService';

const url = config.url;

export const getEmployees = () => {
  if (config.mode === 'online'){
    return axios.get(url);
  } else{
    return mockService.getEmployees();
  }
  
};

export const getEmployee = (id: any) => {
  return axios.get(url + id);
};
