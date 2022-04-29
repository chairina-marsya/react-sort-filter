import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/** pages */
import SortFilter from './container/SortFilter';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SortFilter} />
      </Switch>
    </Router>
  );
}

export default App;
