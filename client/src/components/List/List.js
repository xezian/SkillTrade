import React from 'react';
import { ListGroup } from 'reactstrap';

export const List = ({ children }) => (
	<div style={{"minHeight": 200, "border": "1px solid #000"}}>
    <ListGroup>{children}</ListGroup>
  </div>
);