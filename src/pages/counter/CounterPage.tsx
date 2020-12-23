import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from 'pages/counter/Counter.module.scss';

const cx = classNames.bind(styles);

class CounterPage extends Component {
  render() {
    return (
      <div className={cx('counter-container')}>
        <h1>Counter</h1>
      </div>
    );
  }
}

export default CounterPage;
