import React, { ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import PackageRoute from './routes/package';

export default function App(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/package/:name+">
          <PackageRoute />
        </Route>
      </Switch>
    </Router>
  );
}
