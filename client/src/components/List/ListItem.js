import React from 'react';
import { ListGroupItem } from 'reactstrap';

export const ListItem = props => (
  <ListGroupItem>{props.children}</ListGroupItem>
);