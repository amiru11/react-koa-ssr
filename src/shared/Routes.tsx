import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  PATH_HOME,
  PATH_COUNTER,
  PATH_TASKS,
  PATH_NOTFOUND,
} from 'config/routes';
import { HomePage, TasksPage, CounterPage, NotFoundPage } from 'pages';

function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path={PATH_HOME} component={HomePage} exact />
      <Route path={PATH_COUNTER} component={CounterPage} exact />
      <Route path={PATH_TASKS} component={TasksPage} exact />
      <Route path={PATH_NOTFOUND} component={NotFoundPage} exact />
      <Redirect from='*' to={PATH_NOTFOUND} />
    </Switch>
  );
}

export default Routes;
