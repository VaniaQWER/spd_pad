import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LoginPage from './routes/login';

function RouterConfig({ history, app }) {

  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginPage}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
