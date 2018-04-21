import React from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Input, Button, ProgressBar } from 'react-materialize';
import { Side } from '../../components/SideNav';
import API from '../../utils/API';
import './SignInForm.css';

class SignInForm extends React.Component {
  state = {
    username: '',
    password: '',
    signedIn: false,
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
            this.props.onSignedIn(this.state.signedIn);
          } else {
            this.setState({
              signedIn: true,
              preloader: false,
              systemError: false,
              message: '',
            });
            this.props.onSignedIn(this.state.signedIn);
          }
        })
        .catch(err => {
          this.setState({
            preloader: false,
            systemError: true,
            message: 'Something went wrong, try again later',
          });
          this.props.onSignedIn(this.state.signedIn);
          console.log(err);
        });
    }, 2000);
  }

  render() {
    return (
      <div>
        <Side />
        <div className="signin-div">
          <h4 className="center-align" style={{ color: '#26a69a' }}>Sign In</h4>
          <Row>
            <Input
              label="Username"
              s={12}
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <Input
              label="Password"
              s={12}
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Row>

          <Row>
            <div className="msg-div">
              {this.state.preloader ? (
                <ProgressBar />
              ) : (
                this.state.signedIn ? (
                  <Redirect to={`/users/${this.state.username}`} />
                ) : (
                  <span>{this.state.message}</span>
                )
              )}
            </div>
          </Row>

          <Row>
            <Button
              disabled={!this.state.username || !this.state.password}
              onClick={this.handleSubmit}
              style={{ width: '100%'}}
            >
              Log In
            </Button>
          </Row>
        </div>
      </div>
    );
  }
}

export default SignInForm;