import React from 'react';
import { Input, Row } from 'react-materialize';
import './Form.css';

const Form = () => (
  <Row>
    <Input placeholder="Placeholder" s={6} label="First Name" />
    <Input s={6} label="Last Name" />
    <Input s={6} type="textarea" />
  </Row>
);

export default Form;
