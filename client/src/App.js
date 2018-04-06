import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Banner from './components/Banner';
import HomePage from './pages/HomePage';
import Posting from './pages/Posting';

const App = () => (
  <Router>
    <div>
      <Banner />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/posting" component={Posting} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
