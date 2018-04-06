import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import { Banner } from './components/Banner';

const App = () => (
  <Router>
    <div>
      <Banner />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
