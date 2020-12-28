import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from 'components/common/Header.scss';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('header__container')}>
      <div className={cx('header__wrap')}>
        <Link to={'/'}>
          <img src='' alt='logo' />
        </Link>
        <nav className={cx('nav__container')}>
          <ul>
            <li>
              <NavLink to='/' activeClassName='active' exact>
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
      </div>
    </header>
  );
}

export default Header;
