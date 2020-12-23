import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from 'pages/task/Tasks.module.scss';

const cx = classNames.bind(styles);

class TasksPage extends Component {
  render() {
    return (
      <div className={cx('tasks-container')}>
        <h1>Tasks</h1>
      </div>
    );
  }
}

export default TasksPage;
