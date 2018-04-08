import React from 'react';
import { Navbar, NavItem, Icon, Row, Col } from 'react-materialize';
import { LoginForm, RegisterForm } from '../Form';
import ModalBox from '../Modal';
import './Banner.css';

const Banner = () => (
  <Row>
    <Col s={12} id="banner">
      <Navbar brand={<Icon>menu</Icon>} id="navbar" right>
        <ModalBox
          header="User Login"
          trigger={<NavItem href="Login">Login</NavItem>}
        >
          <LoginForm />
        </ModalBox>
        <ModalBox
          header="Register"
          trigger={<NavItem href="Register">Register</NavItem>}
        >
          <RegisterForm />
        </ModalBox>
      </Navbar>
    </Col>
  </Row>
);

export default Banner;
