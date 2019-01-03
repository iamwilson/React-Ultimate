import { initialState } from "../initialState";
import * as types from "../../constants/actionTypes";

const loginReducer = (state = initialState.login, action: any) => {
    switch (action.type) {

        case types.LOG_IN_SUCCESS:
            return { ...state, ...action.loginResponse };

        case types.LOG_IN_ERROR:
            return { ...state, ...action.loginError };

        case types.LOG_OUT_USER:
            return {
                ...state, ...{}
            };

        default:
            return state;
    }
};

export default loginReducer;
