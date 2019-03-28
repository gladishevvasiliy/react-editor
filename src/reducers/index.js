import { combineReducers } from 'redux'
import listReducer from './listReducer'
import compositionsReducer from './compositionsReducer'
import modalReducer from './modalReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  list: listReducer,
  compositions: compositionsReducer,
  form: formReducer,
  modal: modalReducer,
})

export default rootReducer
