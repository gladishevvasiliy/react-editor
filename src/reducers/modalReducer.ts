import {
  OPEN_MODAL_CONFIRM_REMOVE,
  CLOSE_MODAL_CONFIRM_REMOVE,
} from '../res/constants';
import { AnyAction } from 'redux';

const initialState = { showModalConfirmRemove: false };

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case OPEN_MODAL_CONFIRM_REMOVE: {
      const { categoryId, symbolId } = action.payload
      return {
        ...state,
        showModalConfirmRemove: true,
        removingSymbolId: symbolId,
        removingSymbolCategoryId: categoryId,
      };
    }
    case CLOSE_MODAL_CONFIRM_REMOVE: {
      return {
        ...state,
        showModalConfirmRemove: false,
        removingSymbolId: null,
        removingSymbolCategoryId: null,
      };
    }
    default: {
      return state;
    }
  }
};
