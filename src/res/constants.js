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

export const STATUS = {
  SUCCESS: 200,
}

export const OPTIONS = [
  {
    value: 0,
    label: 'Тихая',
  },
  {
    value: 1,
    label: 'Отсечка',
  },
  {
    value: 2,
    label: 'Задержка',
  },
  {
    value: 3,
    label: 'Подчашие',
  },
  {
    value: 4,
    label: 'Ломка',
  },
  {
    value: 5,
    label: 'Подвертка',
  },
  {
    value: 6,
    label: 'Равенство',
  },
  {
    value: 7,
    label: 'Ударка',
  },
  {
    value: 8,
    label: 'Борзая',
  },
  {
    value: 9,
    label: 'Доп. пометы фа и соль',
  },
  {
    value: 10,
    label: 'В лице Скачек средний',
  },
  {
    value: 11,
    label: 'Скобка',
  },
  {
    value: 12,
    label: 'В попевке кичиги',
  },
  {
    value: 13,
    label: 'Облачко',
  },
  {
    value: 14,
    label: 'Сорочья ножка',
  },
  {
    value: 15,
    label: 'Закидка',
  },
  {
    value: 17,
    label: '2 равенства',
  },
  {
    value: 18,
    label: 'Мережа',
  },
  {
    value: 19,
    label: 'Мережа с поддержкой',
  },
  {
    value: 20,
    label: 'Качка',
  },
  {
    value: 23,
    label: 'В кулизме',
  },
  {
    value: 24,
    label: 'Воздернутая',
  },
  {
    value: 25,
    label: 'В лице мережа',
  },
]

export const PITCH = [
  { value: 1, label: 'Ут низкое' },
  { value: 2, label: 'Ре низкое' },
  { value: 3, label: 'Ми низкое' },
  { value: 4, label: 'Ут' },
  { value: 5, label: 'Ре' },
  { value: 6, label: 'Ми' },
  { value: 7, label: 'Фа' },
  { value: 8, label: 'Соль' },
  { value: 9, label: 'Ля' },
  { value: 10, label: 'Фа высокое' },
  { value: 11, label: 'Соль высокое' },
  { value: 12, label: 'Ля высокое' },
  { value: 15, label: 'Гораздо высоко' },
  { value: 15, label: 'Крыжик' },
]

export const TONES = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
]
