import React from 'react';
import { Row, Input, Button } from 'react-materialize';
import API from '../../utils/API';

export class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    API.getVerification(this.state.username, this.state.password)
      .then((res) => {
        this.setState({
          username: '',
          password: '',
        });
        console.log(res);
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
          <div
            style={{
              color: 'rgb(255, 0, 0)',
              fontSize: 12,
              fontStyle: 'italic',
              marginBottom: 30,
            }}
          >
            Invalid username or password
          </div>
        </div>
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

