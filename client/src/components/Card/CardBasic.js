import React from 'react';
import Card from 'react-materialize';

const CardBasic = () => (
  <Col m={6} s={12}>
    <Card className='blue-grey darken-1' 
    			textClassName='white-text' 
    			title='Card title' 
    			actions={[<a href='#'>This is a link</a>]}>
    	Simple card.
    </Card>
	</Col>
);

export default CardBasic;