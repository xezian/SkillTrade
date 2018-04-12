import React from 'react';
import { Row, Input, Button } from 'react-materialize';
import API from '../../utils/API';
import './Form.css';

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
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      usernameError: '',
      passwordError: '',
      confirmError: '',
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
    this.setState({
      firstName: event.target.value,
      firstNameError: '',
    });
  }

  handleLastChange(event) {
    this.setState({
      lastName: event.target.value,
      lastNameError: '',
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
      emailError: '',
    });
  }

  handleUserChange(event) {
    this.setState({
      username: event.target.value,
      usernameError: '',
    });
  }

  handlePassChange(event) {
    this.setState({
      password: event.target.value,
      passwordError: '',
    });
  }

  handleConfirmChange(event) {
    this.setState({
      confirm: event.target.value,
      confirmError: '',
    });
  }

  validateForm() {
    let result = true;
    // Firstname must consist of letters only
    if (!(/^[a-zA-Z\-]+$/).test(this.state.firstName)) {
      result = false;
      this.setState({
        firstNameError: 'Use letters only',
      });
    }
    // Lastname must consist of letters only
    if (!(/^[a-zA-Z\-]+$/).test(this.state.lastName)) {
      result = false;
      this.setState({
        lastNameError: 'Use letters only',
      });
    }
    // Email must match an email format
    if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(this.state.email)) {
      result = false;
      this.setState({
        emailError: 'Not a valid email address',
      });
    }
    // Username must consist of letters and/or numbers
    if (!(/^[a-zA-Z0-9]+$/).test(this.state.username)) {
      result = false;
      this.setState({
        usernameError: 'Use letters and/or numbers only',
      });
    }
    // Password must consist of at least:
    // 8 characters, 1 lowercase, 1 uppercase , 1 number, and 1 special character
    if (!(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/).test(this.state.password)) {
      result = false;
      this.setState({
        passwordError: 'Not secure enough',
      });
    }
    // Confirmation must match the password
    if (this.state.password !== this.state.confirm) {
      result = false;
      this.setState({
        confirmError: 'Passwords do not match',
      });
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
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            usernameError: '',
            passwordError: '',
            confirmError: '',
          });
          console.log(res);
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <Row>
        <div className="input-div">
          <Input
            label="First Name"
            s={12}
            value={this.state.firstName}
            onChange={this.handleFirstChange}
          />
          <div className="error-msg">{this.state.firstNameError}</div>
        </div>
        <div className="input-div">
          <Input
            label="Last Name"
            s={12}
            value={this.state.lastName}
            onChange={this.handleLastChange}
          />
          <div className="error-msg">{this.state.lastNameError}</div>
        </div>
        <div className="input-div">
          <Input
            label="Email"
            s={12}
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <div className="error-msg">{this.state.emailError}</div>
        </div>
        <div className="input-div">
          <Input
            label="Username"
            s={12}
            value={this.state.username}
            onChange={this.handleUserChange}
          />
          <div className="error-msg">{this.state.usernameError}</div>
        </div>
        <div className="input-div">
          <Input
            label="Password"
            s={12}
            value={this.state.password}
            onChange={this.handlePassChange}
          />
          <div className="error-msg">{this.state.passwordError}</div>
        </div>
        <div className="input-div">
          <Input
            label="Confirm Password"
            s={12}
            value={this.state.confirm}
            onChange={this.handleConfirmChange}
          />
          <div className="error-msg">{this.state.confirmError}</div>
        </div>
        <Button
          disabled={!this.state.firstName || !this.state.lastName ||
                    !this.state.email || !this.state.username ||
                    !this.state.password || !this.state.confirm}
          onClick={this.handleSubmit}
          className="btn-form"
        >
          Create
        </Button>
      </Row>
    );
  }
}
