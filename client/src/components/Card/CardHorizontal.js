import React from 'react';
import Card from 'react-materialize';

const CardHorizontal = () => (
  <Col m={7} s={12}>
	  <Card 
	  	horizontal header={<CardTitle image="#"></CardTitle>} 
			actions={[<a href='#'>Link</a>]}
		>
	  <p>Simple card</p>
	  </Card>
	</Col>
);

export default CardHorizontal;