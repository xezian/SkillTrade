import React from 'react';
import { Row, Input, Button, ProgressBar } from 'react-materialize';
import API from '../../utils/API';

export class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    preloader: false,
    message: false,
    systemError: false,
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    
    this.setState({ preloader: true });
    
    API.getVerification(this.state.username, this.state.password)
      .then((res) => {
        this.setState({
          username: '',
          password: '',
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Row style={{ marginBottom: 0 }}>
        <div>
          <Input
            label="Username"
            s={12}
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <Input
            label="Password"
            s={12}
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        {this.state.preloader ? (
          <ProgressBar />
        ) : (
          this.state.message ? (
            <span className="err-msg">Invalid username or password</span>
          ) : (
            this.state.systemError ? (
              <span className="err-msg">Something went wrong, please try again</span>
            ) : (
              <span className="err-msg">Enter your username and password</span>
            )
          )
        )}
        <Button
          disabled={!this.state.username || !this.state.password}
          onClick={this.handleSubmit}
        >
          Log In
        </Button>
      </Row>
    );
  }
}

