import React from 'react';
import { SideNav, SideNavItem, Button, Icon } from 'react-materialize';
import './Side.css';

const Side = () => (
  <SideNav
    trigger={<Button floating large className="menu-btn"><Icon>menu</Icon></Button>}
    options={{ closeOnClick: true }}
  >
    <SideNavItem
      userView
      user={{
        background: 'https://dzrlz2ysbzk1i.cloudfront.net/directblinds/media/direct-blinds/' +
                    'product%20images%20-%20lifestyles%20closeups%20swatches/vertical%20blinds/' +
                    'vertical%20swatches/bermuda-plain_dark-grey-(2).jpg?ext=.jpg',
        image: 'http://gustenyvean.com/sites/all/themes/gusten/images/icon-4.png',
        name: 'Please login',
        email: '...',
      }}
    />
    <SideNavItem href="#" icon="person">Log in</SideNavItem>
    <SideNavItem href="#" icon="person_add">Register</SideNavItem>
    <SideNavItem divider />
    <SideNavItem subheader>About</SideNavItem>
    <SideNavItem waves href="#" icon="info">SkillTrade</SideNavItem>
    <SideNavItem waves href="#" icon="contact_mail">Contact</SideNavItem>
  </SideNav>
);

export default Side;
