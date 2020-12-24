import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from 'shared/App';

function Root(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Route path='/' component={App} />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default Root;
