import React from 'react';
import { Row, Input, Button } from 'react-materialize';
import API from '../../utils/API';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(`username: ${this.state.username}, password: ${this.state.password}`);
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
      <Row>
        <Input
          label="Username"
          s={12}
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <Input
          label="Password"
          s={12}
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
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

