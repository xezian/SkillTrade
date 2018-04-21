import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Banner from './components/Banner';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import SignInForm from './pages/SignInPage';
import SignUpForm from './pages/SignUpPage';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" render={() => (<Banner signedIn={false} />)} />
      <Route exact path="/signin" render={() => (<Banner signedIn={false} />)} />
      <Route exact path="/signup" render={() => (<Banner signedIn={false} />)} />
      <Route path="/users/:username" render={() => (<Banner signedIn={true} />)} />
      <Switch>
        <Route exact path="/" render={() => (<HomePage />)} />
        <Route exact path="/signin" render={() => (<SignInForm />)} />
        <Route exact path="/signup" render={() => (<SignUpForm />)} />
        <Route path="/users/:username" render={({ match }) => (<UserPage username={match.params.username} />)} />
        <Route render={() => (<NoMatch />)} />
      </Switch>
    </div>
  </Router>
);

export default App;
