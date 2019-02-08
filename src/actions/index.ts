import {
  SET_DATA,
  ADD_SYMBOL,
  EDIT_SYMBOL,
  OPEN_MODAL_CONFIRM_REMOVE,
  CLOSE_MODAL_CONFIRM_REMOVE,
  OPEN_MODAL_EDIT_SYMBOL,
  CLOSE_MODAL_EDIT_SYMBOL,
  REMOVE_SYMBOL,
  OPEN_MODAL_ADD_CATEGORY,
  CLOSE_MODAL_ADD_CATEGORY
} from '../res/constants';

export const setData = value => ({ type: SET_DATA, payload: value });

export const addSymbol = (newSymbol, categoryId) => ({ type: ADD_SYMBOL, payload: { newSymbol, categoryId } });

export const editSymbol = (editedSymbol, categoryId) => ({ type: EDIT_SYMBOL, payload: { editedSymbol, categoryId } });

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

export const openModalEditSymbol = (symbol, categoryId) => ({
  type: OPEN_MODAL_EDIT_SYMBOL,
  payload: { categoryId, symbol },
});

export const closeModalEditSymbol = () => ({
  type: CLOSE_MODAL_EDIT_SYMBOL,
});

export const openModalAddCategory = () => ({
  type: OPEN_MODAL_ADD_CATEGORY,
});

export const closeModalAddCategory = () => ({
  type: CLOSE_MODAL_ADD_CATEGORY,
})