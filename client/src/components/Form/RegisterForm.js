import React from 'react';
import { Row, Input, Button } from 'react-materialize';

export const RegisterForm = () => (
  <Row>
    <Input label="First Name" s={6} />
    <Input label="Last Name" s={6} />
    <Input label="Email" s={6} />
    <Input label="Username" s={6} />
    <Input label="Password" s={6} />
    <Input label="Confirm Password" s={6} />
    <Input label="Describe your skill/need" s={12} />
    <Button>Create</Button>
  </Row>
);
