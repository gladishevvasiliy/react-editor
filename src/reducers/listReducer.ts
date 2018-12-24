import { SET_DATA, ADD_SYMBOL } from '../res/constants';
import isNil from 'lodash';

const initialState: Array<Object> = [];

export default (state = initialState, action) => {
  switch (action.type) {
    // помещает в store.list передаваемые ему значения (в нашем случае, список стран от API)
    case SET_DATA: {
      return action.payload;
    }

    case ADD_SYMBOL: {
      console.log('ADD_SYMBOL');
      return state;
    }

    default: {
      return state;
    }
  }
};
