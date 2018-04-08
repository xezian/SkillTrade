import React from 'react';
import { Row, Input, Button } from 'react-materialize';

export const LoginForm = () => (
  <Row>
    <Input label="Username" s={12} />
    <Input label="Password" s={12} />
    <Button>Log In</Button>
  </Row>
);

