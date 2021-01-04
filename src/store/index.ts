import CounterStore from 'store/counter';
import { ICounterStore } from './interfaces/store';

type TInitialState = {
  counterStore: ICounterStore;
};

class RootStore {
  counterStore: CounterStore;

  constructor(initialState?: TInitialState) {
    this.counterStore = new CounterStore(this, initialState?.counterStore);
  }
}

export default RootStore;
