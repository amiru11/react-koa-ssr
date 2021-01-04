import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from 'pages/home/Home.module.scss';

const cx = classNames.bind(styles);

class HomePage extends Component {
  render() {
    return (
      <div className={cx('home-container')}>
        <h1>Home</h1>
      </div>
    );
  }
}

export default HomePage;
