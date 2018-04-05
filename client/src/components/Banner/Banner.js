import React from 'react';
import './Banner.css';

export const Banner = () => (
  <Navbar brand='logo' right>
    <NavItem href='Login'>Getting started</NavItem>
    <NavItem href='Register'>Components</NavItem>
  </Navbar>
)