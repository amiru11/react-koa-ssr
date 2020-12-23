import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from 'pages/common/NotFound.module.scss';

const cx = classNames.bind(styles);

class NotFoundPage extends Component {
  render() {
    return (
      <div className={cx('notfound-container')}>
        <h1>Not Found</h1>
      </div>
    );
  }
}

export default NotFoundPage;
