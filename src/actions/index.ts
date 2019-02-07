import {
  SET_DATA,
  ADD_SYMBOL,
  OPEN_MODAL_CONFIRM_REMOVE,
  CLOSE_MODAL_CONFIRM_REMOVE,
  REMOVE_SYMBOL,
} from '../res/constants';

export const setData = value => ({ type: SET_DATA, payload: value });

export const addSymbol = (newSymbol, categoryId) => ({ type: ADD_SYMBOL, payload: {newSymbol, categoryId} });

export const removeSymbol = (categoryId, symbolId) => ({
  type: REMOVE_SYMBOL,
  payload: { categoryId, symbolId },
});

export const openModalConfirmRemove = (categoryId, symbolId) => ({
  type: OPEN_MODAL_CONFIRM_REMOVE,
  payload: { categoryId, symbolId },
});

export const closeModalConfirmRemove = () => ({
  type: CLOSE_MODAL_CONFIRM_REMOVE,
});
