import React from 'react';
import { ThreeDots } from 'react-bootstrap-icons';
import banner from './images/banner.jpg';
import Image from 'react-bootstrap/Image';
import { Row, Container, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div className="about">
        <div className='about-h2'>
            <h2>About Us</h2>
            <ThreeDots style={{color: '#257F9B', fontSize: '64px', marginTop: '-30px', marginLeft: '-5px'}} />
        </div>
        <Container>
            <Row>
                <Col><Image src={banner} responsive id='about-img' /></Col>
                <Col id='about-text'>
                    <p>Dummy text some dummy text Dummy text some dummy text Dummy text some dummy text
                        Dummy text some dummy text Dummy text some dummy text Dummy text some dummy text
                    </p>
                    <p>Dummy text some dummy text Dummy text some dummy text Dummy text some dummy text
                        Dummy text some dummy text Dummy text some dummy text Dummy text some dummy text
                    </p>
                    <p>Dummy text some dummy text Dummy text some dummy text Dummy text some dummy text
                        Dummy text some dummy text Dummy text some dummy text Dummy text some dummy text
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default About
