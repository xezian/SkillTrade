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
      usernameTaken: false,
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
    API.checkUsernames(this.state.username)
      .then((res) => {
        this.setState({ usernameTaken: res });
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  handlePassChange(event) {
    this.setState({ password: event.target.value });
  }

  handleConfirmChange(event) {
    this.setState({ confirm: event.target.value });
  }

  formIsValid() {
    // Must consist of letters only
    const nameRegex = /^[a-zA-Z\-]+$/;
    // Must match an email format
    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // Must consist of letters and/or numbers
    const userRegex = /^[a-zA-Z0-9]+$/;
    // Must consist of at least:
    // 8 characters, 1 lowercase, 1 uppercase , 1 number, and 1 special character
    const passRegex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
    // If first name does not meet the regex, return false
    if (!nameRegex.test(this.state.firstName)) {
      console.log('firstname:', false);
      return false;
    }
    // If last name does not meet the regex, return false
    if (!nameRegex.test(this.state.lastName)) {
      console.log('lastname:', false);
      return false;
    }
    // If email does not meet the regex, return false
    if (!emailRegex.test(this.state.email)) {
      console.log('email:', false);
      return false;
    }
    // If username does not meet  the regex or it is already taken return false
    if (!userRegex.test(this.state.username) || this.state.usernameTaken) {
      console.log('username:', false);
      return false;
    }
    // If password does not meet the regex or does not match the confirm, return false
    if (!passRegex.test(this.state.password) || this.state.password !== this.state.confirm) {
      console.log('confirm:', false);
      return false;
    }
    // If no above condition occurs, return true
    console.log(true);
    return true;
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.formIsValid()) {
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
            usernameTaken: '',
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
