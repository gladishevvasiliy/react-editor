import { combineReducers } from 'redux';
import listReducer from './listReducer';
import modalReducer from './modalReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  list: listReducer,
  form: formReducer,
  modal: modalReducer,
});

export default rootReducer;
