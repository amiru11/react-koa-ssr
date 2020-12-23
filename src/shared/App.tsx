import React from 'react';
import classNames from 'classnames/bind';
import styles from 'shared/App.module.scss';

const cx = classNames.bind(styles);

function App(): JSX.Element {
  return <div className={cx('view-container')}></div>;
}

export default App;
