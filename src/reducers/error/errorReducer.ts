import { initialState } from '../initialState';
import * as types from '../../constants/actionTypes';

const errorReducer = (state = initialState.error, action: any) => {
  switch (action.type) {
    case types.GET_EMPLOYEE_ERROR:
      return { ...state, ...action.error };
    default:
      return state;
  }
};

export default errorReducer;
