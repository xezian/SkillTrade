import React from 'react';
import { Link } from 'react-router-dom';
import { SideNavItem } from 'react-materialize';

export const SideLoggedOut = () => (
  <div>
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
    <SideNavItem icon="home"><Link to="/">Homepage</Link></SideNavItem>
    <SideNavItem icon="person"><Link to="/signin">Sign In</Link></SideNavItem>
    <SideNavItem icon="person_add"><Link to="/signup">Sign Up</Link></SideNavItem>
    <SideNavItem divider />
    <SideNavItem subheader>About</SideNavItem>
    <SideNavItem waves href="#" icon="info">SkillTrade</SideNavItem>
    <SideNavItem waves href="#" icon="contact_mail">Contact</SideNavItem>
  </div>
);

