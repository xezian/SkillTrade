import React from 'react';
import { Row, Col } from 'react-materialize';
import { LoginForm, RegisterForm } from '../../pages/FormPage';
import Side from '../SideNav';
import { ModalLogin, ModalRegister } from '../Modal';
import './Banner.css';

const Banner = () => (
  <Row id="banner">
    <Col s={1} />
    <Col s={1}>
      <Side />
    </Col>
    <Col s={7} />
    <Col s={1} className="link-div">
      <ModalLogin
        header="User Login"
        trigger={<a href="Login">Login</a>}
        style={{ width: '20%' }}
      >
        <LoginForm />
      </ModalLogin>
    </Col>
    <Col s={1} className="link-div">
      <ModalRegister
        header="Register"
        trigger={<a href="Register">Register</a>}
      >
        <RegisterForm />
      </ModalRegister>
    </Col>
    <Col s={1} />
  </Row>
);

export default Banner;
