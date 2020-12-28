import React from 'react';
import Routes from 'shared/Routes';
import { Helmet } from 'react-helmet-async';
import classNames from 'classnames/bind';
import styles from 'shared/App.scss';

import Header from 'components/common/Header';

const cx = classNames.bind(styles);

function App(): JSX.Element {
  return (
    <div className={cx('app-container')}>
      <Helmet>
        <title>React-Koa-SSR</title>
        <meta name='title' content={'React-Koa-SSR'} />
        <meta name='description' content={'React-Koa-SSR Description'} />
        <meta name='keyword' content={'React, Koa, Server-side-rendering'} />
        <meta name='author' content={'SaeMii'} />
        <link rel='image_src' href={''} />
      </Helmet>
      <Header />
      <main className={cx('main-container')}>
        <Routes />
      </main>
    </div>
  );
}

export default App;
