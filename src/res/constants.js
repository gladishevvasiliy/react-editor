const SET_SYMBOLS = 'SET_SYMBOLS'
const ADD_SYMBOL = 'ADD_SYMBOL'
const EDIT_SYMBOL = 'EDIT_SYMBOL'
const OPEN_MODAL_CONFIRM_REMOVE = 'OPEN_MODAL_CONFIRM_REMOVE'
const CLOSE_MODAL_CONFIRM_REMOVE = 'CLOSE_MODAL_CONFIRM_REMOVE'
const REMOVE_SYMBOL = 'REMOVE_SYMBOL'
const OPEN_MODAL_EDIT_SYMBOL = 'OPEN_MODAL_EDIT_SYMBOL'
const CLOSE_MODAL_EDIT_SYMBOL = 'CLOSE_MODAL_EDIT_SYMBOL'
const OPEN_MODAL_ADD_CATEGORY = 'OPEN_MODAL_ADD_CATEGORY'
const CLOSE_MODAL_ADD_CATEGORY = 'CLOSE_MODAL_ADD_CATEGORY'

const SET_COMPOSITIONS = 'SET_COMPOSITIONS'
const ADD_COMPOSITION = 'ADD_COMPOSITION'
const REMOVE_COMPOSITION = 'REMOVE_COMPOSITION'
const OPEN_MODAL_CONFIRM_REMOVE_COMPOSITION =
  'OPEN_MODAL_CONFIRM_REMOVE_COMPOSITION'
const CLOSE_MODAL_CONFIRM_REMOVE_COMPOSITION =
  'CLOSE_MODAL_CONFIRM_REMOVE_COMPOSITION'

export {
  SET_SYMBOLS,
  ADD_SYMBOL,
  CLOSE_MODAL_CONFIRM_REMOVE,
  OPEN_MODAL_CONFIRM_REMOVE,
  REMOVE_SYMBOL,
  OPEN_MODAL_EDIT_SYMBOL,
  CLOSE_MODAL_EDIT_SYMBOL,
  EDIT_SYMBOL,
  OPEN_MODAL_ADD_CATEGORY,
  CLOSE_MODAL_ADD_CATEGORY,
  SET_COMPOSITIONS,
  ADD_COMPOSITION,
  REMOVE_COMPOSITION,
  OPEN_MODAL_CONFIRM_REMOVE_COMPOSITION,
  CLOSE_MODAL_CONFIRM_REMOVE_COMPOSITION,
}

// API

export const API_KRUK = 'https://84.201.133.135:8443/kruk'
export const API_COMPOSITIONS = 'https://84.201.133.135:8443/composition'
export const API_GET_ALL = '/all'
export const API_SEND_NEW = '/add'
export const API_EDIT_SYMBOL = '/edit'
export const CREATE_COMPOSITIONS_CATEGORY = '/createCompositionCategory'
