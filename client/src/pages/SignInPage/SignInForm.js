import React from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Input, Button, ProgressBar } from 'react-materialize';
import API from '../../utils/API';
import './SignInForm.css';

class SignInForm extends React.Component {
  state = {
    username: '',
    password: '',
    link: '',
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
      <div className="signin-div">
        <h4 className="center-align">Sign In</h4>
        <Row>
          <Col s={12}>
            <Input
              label="Username"
              s={12}
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Col>
 
          <Col s={12}>
            <Input
              label="Password"
              s={12}
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Col>
        </Row>

        <Row>
          <Col s={12}>
            <div className="msg-div">
              {this.state.preloader ? (
                <ProgressBar />
              ) : (
                this.state.loggedIn ? (
                  <Redirect to={`/users/${this.state.username}`} />
                ) : (
                  <span>{this.state.message}</span>
                )
              )}
            </div>
          </Col>
        </Row>

        <Row>
          <Col s={12}>
            <Button
              disabled={!this.state.username || !this.state.password}
              onClick={this.handleSubmit}
            >
              Log In
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SignInForm;