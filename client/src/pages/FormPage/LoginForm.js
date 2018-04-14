import React from 'react';
import { Row, Input, Button, ProgressBar } from 'react-materialize';
import API from '../../utils/API';

export class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
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
          if (res.data.message === 'No Such User') {
            this.setState({
              preloader: false,
              systemError: true,
              message: 'Invalid username or password',
            });
          } else {
            this.setState({
              preloader: false,
              systemError: false,
              message: '',
            });
          console.log('welcome')
          }
        })
        .catch(err => console.log(err));
    }, 2000);
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
          <span className="err-msg">{this.state.message}</span>
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

