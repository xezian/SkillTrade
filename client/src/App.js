import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { 
    authors: [] 
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(authors => this.setState({
        authors: authors
      }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Skill Share App</h1>
          <h2>Development Team</h2>
        </header>
        {this.state.authors.map(author => 
          <h4 key={author.id}>{author.name}</h4>
        )}
      </div>
    );
  }
}

export default App;
