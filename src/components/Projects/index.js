import React from 'react';
import {Card} from 'react-bootstrap';



function Projects (props) {
    return (
        <Card className='mt-5' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.image} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.description}
    </Card.Text>
    <Card.Link href={props.github}>Github Repo:</Card.Link>
    <Card.Link href={props.deployed}>Deployed Link:</Card.Link>
  </Card.Body>
</Card>
    )
}

export default Projects;
