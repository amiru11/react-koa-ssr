import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { HelmetProvider } from 'react-helmet-async';

import App from 'shared/App';
import RootStore from 'store';

const store = new RootStore();

function Root(): JSX.Element {
  return (
    <HelmetProvider>
      <Provider {...store}>
        <BrowserRouter>
          <Route path='/' component={App} />
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  );
}

export default Root;
