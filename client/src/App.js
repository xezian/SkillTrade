import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Banner from './components/Banner';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

const App = () => (
  <Router>
    <div>
      <Banner />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route path="/users/:username" component={UserPage} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
