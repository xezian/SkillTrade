import React from 'react';
import { Card } from 'react-materialize';

export const ImageCard = () => (
  <Card 
  	className='small'
  	header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
  	actions={[<a href='#'>This is a Link</a>]}>
  	Simple card with image
	</Card>
);
