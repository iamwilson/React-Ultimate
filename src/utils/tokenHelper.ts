export const getToken = () => {
    try {
        const token = localStorage.getItem('token');
        if (token === null) { return undefined; }
        return token;
    } catch (error) {
        console.log('get token failed', error);
    }
};

export const setToken = (token: any) => {
    try {
        localStorage.setItem('token', token);
    } catch (error) {
        console.log('set token failed', error);
    }
};

export const removeToken = () => {
    localStorage.removeItem('token');
};

export const isTokenSet = () => {
    return localStorage.getItem('token') === null ? false : true;
};
