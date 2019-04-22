import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import GlobalLayout from './Layout';
import NotFound from './notfound';
import Home from './views/Home';

const Root = () => (
  <GlobalLayout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  </GlobalLayout>
);

export default withRouter(Root);
