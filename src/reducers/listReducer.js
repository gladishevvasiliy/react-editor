import {
  SET_SYMBOLS,
  ADD_SYMBOL,
  EDIT_SYMBOL,
  REMOVE_SYMBOL,
} from '../res/constants'
import { sendNewSymbolToServer } from '../res/utils'
import { random, findIndex } from 'lodash'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SYMBOLS: {
      return action.payload
    }

    case ADD_SYMBOL: {
      const { newSymbol, categoryId } = action.payload
      const categoryToInsert = state.find(
        category => category._id === categoryId
      )
      const newSymbolToCategory = {
        name: newSymbol.name,
        pitch: newSymbol.pitch,
        sounds: newSymbol.sounds,
        opts: newSymbol.opts,
        value: newSymbol.value,
        _id: random(1, 1000000),
      }
      categoryToInsert.symbols.push(newSymbolToCategory)
      return [...state]
    }

    case EDIT_SYMBOL: {
      const { editedSymbol, categoryId } = action.payload
      const symbolsToEdit = state.find(category => category._id === categoryId)
        .symbols

      const newSymbols = symbolsToEdit.map(symbol => {
        if (symbol._id === editedSymbol._id) {
          return editedSymbol
        } else return symbol
      })

      state.map(category => {
        if (category._id === categoryId) {
          category.symbols = newSymbols
        }
      })
      return [...state]
    }
    case REMOVE_SYMBOL: {
      const { categoryId, symbolId } = action.payload
      const category = state.find(category => category._id === categoryId)
      const indexOfSymbol = findIndex(
        category.symbols,
        symbol => symbol._id === symbolId
      )
      category.symbols.splice(indexOfSymbol, 1)
      return [...state]
    }

    default: {
      return state
    }
  }
}
