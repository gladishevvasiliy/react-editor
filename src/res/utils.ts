type NewSymbol = {
  name: String;
  pitch: String;
  sounds: Number;
  opts: Array<String>;
  value: String;
  categoryId: String;
};

export const sendNewSymbolToServer = (url: string, newSymbol: NewSymbol) => {
  // console.log(newSymbol);
  // console.log(newSymbol.opts);
  // newSymbol.opts = [];
  console.log(newSymbol);
  console.log(JSON.stringify(newSymbol));
  fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      name: 'lol',
      pitch: 'lol',
      sounds: 1,
      opts: 'lol',
      value: 'lol',
      categoryId: '5c1d696fd1e96b1c61a3d57d',
    }),
  }).then(response => {});
};

export const getDataFromServer = (url: string) => {
  return fetch(url).then(resp => {
    const data = resp.json();
    return data;
  });
};
