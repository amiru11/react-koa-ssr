import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from 'pages/home/Home.module.scss';

const cx = classNames.bind(styles);

class Counter extends Component {
  render() {
    return (
      <div className={cx('counter-container')}>
        <h1>Counter</h1>
      </div>
    );
  }
}

export default Counter;
