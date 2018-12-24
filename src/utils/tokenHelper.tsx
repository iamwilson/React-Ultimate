export const setToken = (token: any) => {
    localStorage.setItem("TOKEN", token);
};

export const getToken = () => {
    return localStorage.getItem("TOKEN");
};

export const removeToken = () => {
    localStorage.removeItem("TOKEN");
};
