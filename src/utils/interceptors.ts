// core
import axios from 'axios';

export const requestInterceptor = (url: any, verb: any, timeOut: number) => {
    const axiosRequest = axios.request({
        url: url,
        method: verb,
        timeout: timeOut,
        headers: { 'X-Custom-Header': 'EMS-HEADER' },
    });
    return axiosRequest;
};

export const responseInterceptor = (response: any, success: (data: any) => void, fail: (data: any) => void) => {
    if (response.status === 200) {
        success(response.data);
    } else {
        fail(response.data);
    }
};
