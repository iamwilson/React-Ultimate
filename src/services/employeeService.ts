// base
import axios from 'axios';

// configurations
import * as appSetting from '../configs/config';
import * as mockService from './mock/mockService';

const url = `https://jsonplaceholder.typicode.com/users/`;

export const getEmployees = () => {
    if (appSetting.config.mode === appSetting.ONLINE) {
        return axios.get(url);
    } else {
        return mockService.getEmployees();
    }
};

export const getEmployee = (id: any) => {
    if (appSetting.config.mode === appSetting.ONLINE) {
        return axios({
            method: 'get',
            url: url + id,
        });
    } else {
        return mockService.getEmployee(id);
    }
};

export const addEmployee = (data: any) => {
    return axios.post(url, data);
};
