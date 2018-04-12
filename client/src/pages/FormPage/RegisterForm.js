import React from 'react';
import { Row, Input, Button } from 'react-materialize';
import API from '../../utils/API';

export class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      confirm: '',
    };

    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleLastChange = this.handleLastChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleConfirmChange = this.handleConfirmChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstChange(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastChange(event) {
    this.setState({ lastName: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleUserChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePassChange(event) {
    this.setState({ password: event.target.value });
  }

  handleConfirmChange(event) {
    this.setState({ confirm: event.target.value });
  }

  validateForm() {
    let result = true;
    // Firstname must consist of letters only
    if (!(/^[a-zA-Z\-]+$/).test(this.state.firstName)) {
      result = false;
    }
    // Lastname must consist of letters only
    if (!(/^[a-zA-Z\-]+$/).test(this.state.lastName)) {
      result = false;
    }
    // Email must match an email format
    if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(this.state.email)) {
      result = false;
    }
    // Username must consist of letters and/or numbers
    if (!(/^[a-zA-Z0-9]+$/).test(this.state.username)) {
      result = false;
    }
    // Password must consist of at least:
    // 8 characters, 1 lowercase, 1 uppercase , 1 number, and 1 special character
    if (!(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/).test(this.state.password)) {
      result = false;
    }
    // Confirmation must match the password
    if (this.state.password !== this.state.confirm) {
      result = false;
    }
    return result;
  }

  handleSubmit(event) {
    event.preventDefault();

    const valid = this.validateForm();

    if (valid) {
      const newUser = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      };

      console.log(newUser);

      API.createUser(newUser)
        .then((res) => {
          this.setState({
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            confirm: '',
          });
          console.log(res);
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <Row>
        <Input
          label="First Name"
          s={6}
          value={this.state.firstName}
          onChange={this.handleFirstChange}
        />
        <Input
          label="Last Name"
          s={6}
          value={this.state.lastName}
          onChange={this.handleLastChange}
        />
        <Input
          label="Email"
          s={6}
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <Input
          label="Username"
          s={6}
          value={this.state.username}
          onChange={this.handleUserChange}
        />
        <Input
          label="Password"
          s={6}
          value={this.state.password}
          onChange={this.handlePassChange}
        />
        <Input
          label="Confirm Password"
          s={6}
          value={this.state.confirm}
          onChange={this.handleConfirmChange}
        />
        <Button
          disabled={!this.state.email || !this.state.username ||
                    !this.state.password || !this.state.confirm}
          onClick={this.handleSubmit}
        >
          Create
        </Button>
      </Row>
    );
  }
}
