import {
  SET_COMPOSITIONS,
  ADD_COMPOSITIONS,
  REMOVE_COMPOSITIONS,
} from '../res/constants'
import { random, findIndex } from 'lodash'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPOSITIONS: {
      return action.payload
    }

    case ADD_COMPOSITIONS: {
      const { newComposition, categoryId } = action.payload
      console.log(newComposition)
      const categoryToInsert = state.find(
        category => category._id === categoryId
      )
      const newCompositionToCategory = {
        name: newComposition.name,
        tone: newComposition.tone,
        value: newComposition.value,
        _id: random(1, 1000000),
      }
      categoryToInsert.compositions.push(newCompositionToCategory)
      return [...state]
    }

    case REMOVE_COMPOSITIONS: {
      const { categoryId, compositionId } = action.payload
      const category = state.find(category => category._id === categoryId)
      const indexOfComposition = findIndex(
        category.compositions,
        composition => composition._id === compositionId
      )
      category.compositions.splice(indexOfComposition, 1)
      return [...state]
    }

    default: {
      return state
    }
  }
}
