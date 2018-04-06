import React from 'react';
import { Navbar, NavItem, Icon, Row, Col } from 'react-materialize';
import './Banner.css';

const Banner = () => (
	<Row>
		<Col s={12}>
		  <Navbar brand={<Icon>menu</Icon>} right>
		    <NavItem href='Login'>Login</NavItem>
		    <NavItem href='Register'>Register</NavItem>
		  </Navbar>
		</Col>
	</Row>
);

export default Banner;