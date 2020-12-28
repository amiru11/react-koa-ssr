import React from 'react';
import classNames from 'classnames/bind';
import styles from 'pages/home/Home.module.scss';

const cx = classNames.bind(styles);

function HomePage(): JSX.Element {
  return (
    <div className={cx('home-container')}>
      <h1>Home</h1>
    </div>
  );
}

export default HomePage;
