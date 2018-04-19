import React from 'react';
import { SideNav, Button, Icon } from 'react-materialize';
import { SideLoggedIn, SideLoggedOut } from '../SideNavItems';
import './Side.css';

const Side = props => (
  <SideNav
    trigger={<Button floating large className="menu-btn"><Icon>menu</Icon></Button>}
    options={{ closeOnClick: true }}
  >
    {props.signedIn ? <SideLoggedIn /> : <SideLoggedOut />}
  </SideNav>
);

export default Side;
