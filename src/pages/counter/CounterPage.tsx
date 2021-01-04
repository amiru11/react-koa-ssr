import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import classNames from 'classnames/bind';
import styles from 'pages/counter/Counter.module.scss';
import { ICounterStore } from 'store/interfaces/store';
interface ICounterPageProps {
  counterStore?: ICounterStore;
}

const cx = classNames.bind(styles);

@inject('counterStore')
@observer
class CounterPage extends Component<ICounterPageProps> {
  onIncrease = () => {
    const { increase } = this.props.counterStore;
    increase();
  };
  onDecrease = () => {
    const { decrease } = this.props.counterStore;
    decrease();
  };

  onIncreaseBy = (counter: number) => {
    const { increaseBy } = this.props.counterStore;
    increaseBy(counter);
  };

  render() {
    const { counter } = this.props.counterStore;
    return (
      <div className={cx('counter-container')}>
        <h1>Counter: {counter}</h1>
        <button onClick={this.onIncrease}>+1</button>
        <button onClick={this.onDecrease}>-1</button>
        <button onClick={() => this.onIncreaseBy(5)}>+5</button>
      </div>
    );
  }
}

export default CounterPage;
