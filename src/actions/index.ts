import { SET_DATA, ADD_SYMBOL } from '../res/constants';

// list actions
export const setData = value => ({ type: SET_DATA, payload: value });

export const addSymbol = value => ({ type: ADD_SYMBOL, payload: value });
