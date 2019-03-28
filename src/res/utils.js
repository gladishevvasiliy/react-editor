export const sendNewSymbolToServer = (url, newSymbol) => {
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
  }).then((response) => {});
};

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
  }).then((response) => {});
};

export const removeSymbolFromServer = (url) => {
  fetch(url, {
    method: 'put',
  }).then((response) => {});
};

export const getDataFromServer = url => fetch(url).then((resp) => {
    const data = resp.json();
    return data;
  });
