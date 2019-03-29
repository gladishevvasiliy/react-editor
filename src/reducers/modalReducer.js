import {
  OPEN_MODAL_CONFIRM_REMOVE,
  CLOSE_MODAL_CONFIRM_REMOVE,
  OPEN_MODAL_EDIT_SYMBOL,
  CLOSE_MODAL_EDIT_SYMBOL,
  OPEN_MODAL_ADD_CATEGORY,
  CLOSE_MODAL_ADD_CATEGORY,
  OPEN_MODAL_CONFIRM_REMOVE_COMPOSITION,
  CLOSE_MODAL_CONFIRM_REMOVE_COMPOSITION,
} from '../res/constants'

const initialState = {
  showModalConfirmRemove: false,
  showModalConfirmRemoveComposition: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_CONFIRM_REMOVE: {
      const { categoryId, symbolId } = action.payload
      return {
        ...state,
        showModalConfirmRemove: true,
        removingSymbolId: symbolId,
        removingSymbolCategoryId: categoryId,
      }
    }

    case CLOSE_MODAL_CONFIRM_REMOVE: {
      return {
        ...state,
        showModalConfirmRemove: false,
        removingSymbolId: null,
        removingSymbolCategoryId: null,
      }
    }

    case OPEN_MODAL_EDIT_SYMBOL: {
      const { categoryId, symbol } = action.payload
      return {
        ...state,
        showModalEditSymbol: true,
        editingSymbol: symbol,
        editingSymbolCategoryId: categoryId,
      }
    }

    case CLOSE_MODAL_EDIT_SYMBOL: {
      return {
        ...state,
        showModalEditSymbol: false,
        editingSymbol: null,
        editingSymbolCategoryId: null,
      }
    }

    case OPEN_MODAL_ADD_CATEGORY: {
      return {
        ...state,
        showModalAddCategory: true,
      }
    }

    case CLOSE_MODAL_ADD_CATEGORY: {
      return {
        ...state,
        showModalAddCategory: false,
      }
    }

    case OPEN_MODAL_CONFIRM_REMOVE_COMPOSITION: {
      const { categoryId, compositionId } = action.payload
      return {
        ...state,
        showModalConfirmRemoveComposition: true,
        removingCompositionId: compositionId,
        removingCompositionCategoryId: categoryId,
      }
    }

    case CLOSE_MODAL_CONFIRM_REMOVE_COMPOSITION: {
      return {
        ...state,
        showModalConfirmRemoveComposition: false,
        removingCompositionId: null,
        removingCompositionCategoryId: null,
      }
    }

    default: {
      return state
    }
  }
}
