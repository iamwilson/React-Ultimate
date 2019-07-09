// misc
import * as types from '../constants/actionTypes';
import { Credentials } from '../models/credentials';
import * as api from '../services/authenticationService';

export const loginUser = (credentials: Credentials) => {
    return async (dispatch: any) => {
        try {
            const loginResponse = await api.AuthenticateUser(credentials);
            dispatch({
                type: types.LOG_IN_SUCCESS,
                loginResponse
            });
        } catch (loginError) {
            dispatch({
                type: types.LOG_IN_ERROR,
                loginError
            });
        }
    };
};

export const logoutUser = () => {
    return (dispatch: any) => {
        dispatch({ type: types.LOG_OUT_USER });
    };
};
