import { observable, action } from 'mobx';

import { IRootStore } from 'store/interfaces/store';

export default class CounterStore {
  root: IRootStore;
  @observable
  public counter: number;

  constructor(root, initialState?: { counter: number }) {
    this.root = root;
    this.counter = initialState?.counter ? initialState.counter : 0;
  }

  @action
  increase = (): void => {
    this.counter++;
  };

  @action
  decrease = (): void => {
    this.counter--;
  };

  @action
  increaseBy = (counter: number): void => {
    this.counter = this.counter + counter;
  };

  toJson() {
    return {
      counter: this.counter,
    };
  }
}
