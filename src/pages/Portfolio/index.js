import React from 'react';
import Projects from '../../components/Projects';
import {Container, Row, Col} from 'react-bootstrap';

const work = [
    {
        image: '/assets/photos/note-taker.png',
        title: 'Note-Taker',
        description: 'A simple note taker to keep track of your notes',
        github: 'https://github.com/cgcam95/note-taker',
        deployed: 'https://cams-notetaker.herokuapp.com/',
    },
    {
        image: '/assets/photos/food-festival.png',
        title: 'Food-Festival',
        description: 'A website that allows users to find food near them',
        github: 'https://github.com/cgcam95/food-festival',
        deployed: 'https://cgcam95.github.io/food-festival/',
    },
    {
        image: '/assets/photos/pizza-hunt.png',
        title: 'Pizza-Hunt',
        description: 'A website that allows users to order a customized pizza',
        github: 'https://github.com/cgcam95/pizza-hunt',
        deployed: 'https://enigmatic-cove-88683.herokuapp.com/',
    },
    {
        image: '/assets/photos/stack-underflo.png',
        title: 'Stack-Underflo',
        description: 'The Stack-Underflow app is a diversified resource center where fledgling coders go to expand their knowledge to the next level. It provides coders with resources to ignite their light about a subject matter. The application provides references to websites, books, coding puzzles, and answer to questions submitted',
        github: 'https://github.com/Patrena94/stack-underflow',
        deployed: 'https://stack-underflo.herokuapp.com/',
    },
];

function Portfolio() {
    return (
        <Container>
        <h2 id='project'>My Projects</h2>
        <Row>
            {work.map(project =>{
                console.log(project)
                return(
                    <Col>
                    <Projects
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    github={project.github}
                    deployed={project.deployed}
                    
                    />
                    </Col>
                )
            })}
        

        </Row>
        </Container>
    )
};

export default Portfolio;