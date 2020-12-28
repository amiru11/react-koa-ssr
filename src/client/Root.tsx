import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { HelmetProvider } from 'react-helmet-async';
import rootReducer from 'modules';

import App from 'shared/App';

const store = createStore(
  rootReducer,
  (window as any).__REDUX_STATE__,
  composeWithDevTools()
); // Connect the Saga middleware to the Redux store

function Root(): JSX.Element {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Route path='/' component={App} />
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  );
}

export default Root;
