import * as appSetting from "../../configs/config";

export const getEmployees = () => {
    const data = require("./data/employees.json");
    return new Promise((resolve) => {
        resolveData(resolve, data, 200, appSetting.config.delay);
    });
};

export const getEmployee = (id: any) => {
    const data = require("./data/employees.json");
    const result = data.find((x: { id: any; }) => x.id === id);

    return new Promise((resolve) => {
        resolveData(resolve, result, 200, appSetting.config.delay);
    });
};

export const authenticateUser = (credentials: any) => {
    const data = require("./data/token.json");
    return new Promise((resolve) => {
        resolveData(resolve, data, 200);
    });
};

export const resolveData = (resolve: any, data: any, status: number, timeOut?: number) => {
    return setTimeout(() => { resolve({ data: data, status: status }); }, timeOut);
};
