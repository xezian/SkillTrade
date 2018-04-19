import React from 'react';
import { SideNav, Button, Icon } from 'react-materialize';
import { SideLoggedIn } from '../SideNavItems';
import './Side.css';

export const SideActive = () => (
  <SideNav
    trigger={<Button floating large className="menu-btn"><Icon>menu</Icon></Button>}
    options={{ closeOnClick: true }}
  >
    <SideLoggedIn />
  </SideNav>
);

