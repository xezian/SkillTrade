import React from 'react';
import { Row, Col } from 'react-materialize';
import { LoginForm, RegisterForm } from '../../pages/FormPage';
import Side from '../SideNav';
import { ModalLogin, ModalRegister } from '../Modal';
import './Banner.css';

const Banner = () => (
  <Row id="banner">
    <Col l={1} m={1} />
    <Col s={1} m={1} l={1}>
      <Side />
    </Col>
    <Col s={11} m={5} l={7} />
    <Col m={2} l={1} className="link-div right-align">
      <ModalLogin
        header="User Login"
        trigger={<a href="Login">Login</a>}
      >
        <LoginForm />
      </ModalLogin>
    </Col>
    <Col m={2} l={1} className="link-div">
      <ModalRegister
        header="Register"
        trigger={<a href="Register">Register</a>}
      >
        <RegisterForm />
      </ModalRegister>
    </Col>
    <Col m={1} l={1} />
  </Row>
);

export default Banner;
