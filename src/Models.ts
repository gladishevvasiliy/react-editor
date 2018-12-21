export type Category = {
  name: string;
  list: Array<Symbol>;
};

export type Symbol = {
  id: number;
  value: string;
  pitch: string;
  name: string;
  sounds: number;
  opts: Array<string>;
};
