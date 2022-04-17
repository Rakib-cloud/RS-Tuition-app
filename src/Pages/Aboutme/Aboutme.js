import React from 'react';
import { Card } from 'react-bootstrap';
import me from '../../images/1.JPG'
const Aboutme = () => {
    return (


<div className='container '>
<Card style={{ width: '50%',marginLeft:'200px'  }}>
  <Card.Img variant="top" src={me} />
  <Card.Body>
    <Card.Title>ITS Me Rakibul islam</Card.Title>
    <Card.Text>
    A self-driven attitude, willingness to learn and a strong presence of mind. Energetic, devoted, sincere and hardworking is my one and only motto for doing any work.

              Currently i am working with ANTT Robotics LtdAs a Research Associate and Head of Education.Here i develop STEM Curriculum.Besides my activities i want to be a successfull web developer in this year.For fullfill this target i try my best to learn with programming hero.
    </Card.Text>
  </Card.Body>
  
 
</Card>
</div>
    );
};

export default Aboutme;