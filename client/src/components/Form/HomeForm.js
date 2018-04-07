import React from 'react';
import { Row, Col, Input, Button, Icon } from 'react-materialize';

export const HomeForm = () => (
  <Row>
    <Col s={2} />
    <Input s={3} type="select" label="Options" defaultValue="1">
      <option value="1">I can ...</option>
      <option value="2">I need ...</option>
    </Input>
    <Input placeholder="Search..." s={4} label="What's up?" />
    <Button waves="light">Search<Icon left>search</Icon></Button>
  </Row>
);

