import { combineReducers } from 'redux';
import listReducer from './listReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  list: listReducer,
  form: formReducer,
});

export default rootReducer;
