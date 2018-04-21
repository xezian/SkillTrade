import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Banner from './components/Banner';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import SignInForm from './pages/SignInPage';
import SignUpForm from './pages/SignUpPage';

class App extends React.Component {
  state = { signedIn: false }

  signedInHandler = trueOrFalse => {
    this.setState({
      signedIn: trueOrFalse,
    });
    console.log('test')
    console.log(this.state.signedIn)
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => (<Banner signedIn={false} />)} />
          <Route exact path="/signin" render={() => (<Banner signedIn={false} />)} />
          <Route exact path="/signup" render={() => (<Banner signedIn={false} />)} />
          <Route path="/users/:username" render={() => (<Banner signedIn={true} />)} />
          <Switch>
            <Route exact path="/" render={() => (<HomePage />)} />
            <Route exact path="/signin" render={() => (<SignInForm onSignIn={this.signedInHandler} />)} />
            <Route exact path="/signup" render={() => (<SignUpForm />)} />
            <Route path="/users/:username" render={({ match }) => (
              this.state.signedIn ? (<UserPage username={match.params.username} />) : (<Redirect to='/' />)
            )} />
            <Route render={() => (<NoMatch />)} />
          </Switch>
        </div>
      </Router>
    );
  }
}  

export default App;
