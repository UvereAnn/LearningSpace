import React from 'react';
import {ThreeDots} from 'react-bootstrap-icons';
import {Button, Card, CardGroup }from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import banner from './images/banner.jpg';


const StudentsTeacher = () => {
  return (
    <div className='students-teachers'>
      <div className='students-teachers-div2'>
        <CardGroup style={{marginTop: '200px'}}>
            <Card>
                <Card.Img variant="top" src={banner} style={{height: '230px', width: '100%'}} />
                <Card.Body>
                <Card.Text>
                    <div className='students-h2'>
                        <h2>Students</h2>
                        <ThreeDots style={{color: '#257F9B', fontSize: '64px', marginTop: '-30px', marginLeft: '-5px'}} />
                        <br />
                        <p>Explore thousands of courses and get</p>
                        <Button>Get Started</Button>
                    </div>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Text>
                    <div className='teachers-h2'>
                        <h2>Teachers</h2>
                        <ThreeDots style={{color: '#257F9B', fontSize: '64px', marginTop: '-30px', marginLeft: '-5px'}} />
                        <br />
                        <p>provide tools and skills to teach what you love</p>
                        <Button>Start Teaching</Button>
                    </div>
                </Card.Text>
                </Card.Body>
                   <Card.Img variant="bottom" src={banner} style={{height: '190px', width: '100%'}} />
            </Card>
           
        </CardGroup>
        </div>
    </div>
  )
}

export default StudentsTeacher
