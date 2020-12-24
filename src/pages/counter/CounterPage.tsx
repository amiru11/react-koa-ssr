import React from 'react';
import classNames from 'classnames/bind';
import styles from 'pages/counter/Counter.module.scss';

const { useState } = React;

const cx = classNames.bind(styles);

function CounterPage(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  const increaseCount = (): void => {
    setCount(count + 1);
  };
  const decreaseCount = (): void => {
    if (count < 1) return;
    setCount(count - 1);
  };

  return (
    <div className={cx('counter-container')}>
      <h1>Counter: {count}</h1>
      <button onClick={increaseCount}>+1</button>
      <button onClick={decreaseCount}>-1</button>
    </div>
  );
}

export default CounterPage;
