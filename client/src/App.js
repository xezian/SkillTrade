import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './pages/Homepage';
import NoMatch from './pages/NoMatch';
import Banner from './components/Banner';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Banner />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
