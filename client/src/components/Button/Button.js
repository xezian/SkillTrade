import React from 'react';
import { Button, Icon } from 'react-materialize';

export const Btn = () => (
  <div>
    <Button waves='light'>button</Button>
    <Button waves='light'>button<Icon left>cloud</Icon></Button>
    <Button waves='light'>button<Icon right>cloud</Icon></Button>
  </div>
);

