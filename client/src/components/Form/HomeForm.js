import React from 'react';
import { Row, Col, Input } from 'react-materialize';

const HomeForm = () => (
  <Row>
    <Col s={2} />
    <Input s={3} type="select" label="Options" defaultValue="1">
      <option value="1">I can ...</option>
      <option value="2">I need ...</option>
    </Input>
    <Input placeholder="Search..." s={5} label="What do you need?" />
  </Row>
);

export default HomeForm;
