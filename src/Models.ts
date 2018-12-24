export type Category = {
  name: string;
  symbols: Array<Symbol>;
};

export type Symbol = {
  _id: number;
  value: string;
  pitch: string;
  name: string;
  sounds: number;
  opts: Array<string>;
};
