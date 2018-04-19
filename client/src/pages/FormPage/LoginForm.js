import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Row, Input, Button, ProgressBar } from 'react-materialize';
import API from '../../utils/API';

export class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    loggedIn: false,
    preloader: false,
    message: 'Enter your username and password',
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
    setTimeout(() => {
      API.getVerification(this.state.username, this.state.password)
        .then((res) => {
          if (res.data.message === 'No Such User' || res.data.message === 'Wrong Password') {
            this.setState({
              preloader: false,
              systemError: true,
              message: 'Invalid username or password',
            });
          } else {
            this.setState({
              loggedIn: true,
              preloader: false,
              systemError: false,
              message: '',
            });
          console.log(this.state.link);
          }
        })
        .catch(err => {
          this.setState({
            preloader: false,
            systemError: true,
            message: 'Something went wrong, try again later',
          });
        });
    }, 2000);
  }

  render() {
    return (
      <Row style={{ marginBottom: 0 }}>
        <div className="input-login">
          <Input
            label="Username"
            s={12}
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>
        <div className="input-login">
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
          this.state.loggedIn ? (
            <Redirect to="/users/:cuneyt" /> 
          ) : (
            <span className="err-msg err-msg-login">{this.state.message}</span>
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

