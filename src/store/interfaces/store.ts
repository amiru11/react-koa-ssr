export interface ICounterStore {
  counter: number;
  increase: () => void;
  decrease: () => void;
  increaseBy: (counter: number) => void;
}

export interface IRootStore {
  counterStore?: ICounterStore;
}
