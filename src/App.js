import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/** pages */
import SortFilter from "./container/SortFilter";

function App() {

  return (
    <Router>
      <ContextProvider>
        <Navbar />
          <Switch>
            <Route exact path="/" component={SortFilter} />
          </Switch>
      </ContextProvider>
    </Router>
  );
}

export default App;
