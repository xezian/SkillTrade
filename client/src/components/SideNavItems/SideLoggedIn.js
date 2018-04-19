import React from 'react';
import { SideNavItem } from 'react-materialize';

export const SideLoggedIn = ({ data }) => (
  <div>
    <SideNavItem
      userView
      user={{
        background: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBGhqWD.img?h=373&w=624&m=6&q=60&o=f&l=f&x=621&y=477',
        image: 'https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg',
        name: `${data.firstName} ${data.lastName}`,
        email: `${data.email}`,
      }}
    />
    <SideNavItem href="#!icon" icon="portrait">Profile</SideNavItem>
    <SideNavItem href="#!second" icon="list">Postings</SideNavItem>
    <SideNavItem divider />
    <SideNavItem subheader>About</SideNavItem>
    <SideNavItem waves href="#!third" icon="rate_review">Reviews</SideNavItem>
    <SideNavItem waves href="#!third" icon="notifications">Notifications</SideNavItem>
  </div>
);
