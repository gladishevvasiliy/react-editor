import { SET_DATA, ADD_SYMBOL } from '../res/constants';
import { random } from 'lodash';
import { AnyAction } from 'redux';

const initialState: Array<Object> = [];

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    // помещает в store.list передаваемые ему значения (в нашем случае, список стран от API)
    case SET_DATA: {
      return action.payload;
    }

    case ADD_SYMBOL: {
      const newSymbol = action.payload;
      const categoryToInsert = state.find(
        category => category._id === newSymbol.categoryId
      );
      const newSymbolToCategory = {
        name: newSymbol.name,
        pitch: newSymbol.pitch,
        sounds: newSymbol.sounds,
        opts: newSymbol.opts,
        value: newSymbol.value,
        _id: random(1, 1000000),
      };
      categoryToInsert.symbols.push(newSymbolToCategory);
      console.log('ADD_SYMBOL');
      return [...state];
    }

    default: {
      return state;
    }
  }
};
