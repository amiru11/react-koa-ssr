import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'modules';
import { increase, decrease, increaseBy } from 'modules/counter';
import classNames from 'classnames/bind';
import styles from 'pages/counter/Counter.module.scss';

// const { useState } = React;

const cx = classNames.bind(styles);

function CounterPage(): JSX.Element {
  const count = useSelector((state: RootState) => state.counter.count); // Get State from redux
  const dispatch = useDispatch(); // Get Dispatch from redux

  // const [count, setCount] = useState<number>(0);

  // const increaseCount = (): void => {
  //   setCount(count + 1);
  // };
  // const decreaseCount = (): void => {
  //   if (count < 1) return;
  //   setCount(count - 1);
  // };
  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  const onIncreaseBy = (count: number) => {
    dispatch(increaseBy(count));
  };

  return (
    <div className={cx('counter-container')}>
      <h1>Counter: {count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
}

export default CounterPage;
