type NewSymbol = {
  name: String;
  pitch: String;
  sounds: Number;
  opts: Array<String>;
  value: String;
  categoryId: String;
};

export const sendNewSymbolToServer = (url: string, newSymbol: NewSymbol) => {
  fetch(url, {
    method: 'put',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      name: newSymbol.name,
      pitch: newSymbol.pitch,
      sounds: newSymbol.sounds,
      opts: newSymbol.opts,
      value: newSymbol.value,
    }),
  }).then(response => {});
};

export const removeSymbolFromServer = (url: string) => {
  fetch(url, {
    method: 'put',
  }).then(response => {});
};

export const getDataFromServer = (url: string) => {
  return fetch(url).then(resp => {
    const data = resp.json();
    return data;
  });
};

