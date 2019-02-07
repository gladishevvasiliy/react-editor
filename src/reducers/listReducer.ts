import {
  SET_DATA,
  ADD_SYMBOL,
  REMOVE_SYMBOL,
  API,
  API_SEND_NEW_SYMBOL,
} from '../res/constants';
import { sendNewSymbolToServer } from '../res/utils';
import { random, findIndex } from 'lodash';
import { AnyAction } from 'redux';

const initialState: Array<Object> = [];

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_DATA: {
      return action.payload;
    }

    case ADD_SYMBOL: {
      const {newSymbol, categoryId} = action.payload;
      const categoryToInsert = state.find(
        category => category._id === categoryId
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
      return [...state];
    }
[]
    case REMOVE_SYMBOL: {
      const { categoryId, symbolId } = action.payload;
      const category = state.find(category => category._id === categoryId);
      const indexOfSymbol = findIndex(
        category.symbols,
        symbol => symbol._id === symbolId
      );
      category.symbols.splice(indexOfSymbol, 1);
      return [...state];
    }

    default: {
      return state;
    }
  }
};
