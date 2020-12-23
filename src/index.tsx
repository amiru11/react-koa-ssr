import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component';
import 'index.scss';
import Root from 'client/Root';
import reportWebVitals from './reportWebVitals';

const CLIENT_ROOT = document.getElementById('root');

if (process.env.NODE_ENV === 'production') {
  loadableReady(() => {
    ReactDOM.hydrate(
      <React.StrictMode>
        <Root />
      </React.StrictMode>,
      CLIENT_ROOT
    );
  });
} else {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    CLIENT_ROOT
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
