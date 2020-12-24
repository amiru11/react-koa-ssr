import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from 'components/common/Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('header-container')}>
      <Link to={'/'}>
        <img src='' alt='logo' />
      </Link>
      <nav className={cx('nav-container')}>
        <ul>
          <li>
            <NavLink to='/' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/counter' activeClassName='active'>
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink to='/tasks' activeClassName='active'>
              Tasks
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
