import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  PATH_HOME,
  PATH_COUNTER,
  PATH_TASKS,
  PATH_NOTFOUND,
} from 'config/routes';
import { Home, Tasks, Counter, NotFound } from 'pages';

function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path={PATH_HOME} component={Home} exact />
      <Route path={PATH_COUNTER} component={Counter} exact />
      <Route path={PATH_TASKS} component={Tasks} exact />
      <Route path={PATH_NOTFOUND} component={NotFound} exact />
      <Redirect from='*' to={PATH_NOTFOUND} />
    </Switch>
  );
}

export default Routes;
