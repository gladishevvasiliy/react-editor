import { RFReactMultiSelect } from './RFReactSelect'
export { RFReactMultiSelect }
export const sendNewSymbolToServer = (url, newSymbol) => {
  return fetch(url, {
    method: 'put',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      id: newSymbol.id,
      name: newSymbol.name,
      pitch: newSymbol.pitch,
      sounds: newSymbol.sounds,
      opts: newSymbol.opts,
      value: newSymbol.value,
    }),
  })
}

export const editedSymbolSendToServer = (url, newSymbol) => {
  fetch(url, {
    method: 'put',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      id: newSymbol.id,
      name: newSymbol.name,
      pitch: newSymbol.pitch,
      sounds: newSymbol.sounds,
      opts: newSymbol.opts,
      value: newSymbol.value,
    }),
  }).then(() => {})
}

export const removeSymbolFromServer = (url) => {
  return fetch(url, {
    method: 'put',
  })
}

export const getDataFromServer = (url) =>
  fetch(url).then((resp) => {
    const data = resp.json()
    return data
  })

export const sendNewCompositionToServer = (url, newComposition) => {
  fetch(url, {
    method: 'put',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      id: newComposition.id,
      name: newComposition.name,
      view: newComposition.view,
      tone: newComposition.tone,
      value: newComposition.value,
      valueText: newComposition.valueText,
    }),
  }).then(() => {})
}

export const sendNewCompositionCategoryToServer = (url, categoryName) => {
  fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      name: categoryName,
      compositions: [],
    }),
  }).then(() => {})
}

export const sendEditedCompositionToServer = (url, newComposition) => {
  fetch(url, {
    method: 'put',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      _id: newComposition._id,
      name: newComposition.name,
      view: newComposition.view,
      tone: newComposition.tone,
      value: newComposition.value,
      valueText: newComposition.valueText,
    }),
  }).then(() => {})
}
