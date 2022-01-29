import React from 'react';
import { ThreeDots } from 'react-bootstrap-icons';
import banner from './images/banner.jpg';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';

const Courses = () => {
  return (
    <div className="courses">
        <div className='courses-h2'>
            <h2>Courses</h2>
            <ThreeDots style={{color: '#257F9B', fontSize: '64px', marginTop: '-30px', marginLeft: '-5px'}} />
        </div>
        <Image src={banner} responsive className='courses-image' />
        <div className='courses-text'>
            <h1 >Courses on all I.T/Tech Space</h1>
            <p>Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text
                Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy textDummy text</p>
            <Button 
                    variant="outline-success" 
                    style={{
                        backgroundColor: 'transparent', 
                        color: '#ffffff',
                        fontSize: '20px',
                        border: '2px solid #ffffff',
                        marginLeft: '-70px',
                        borderRadius: '10px',
                        paddingLeft: '40px',
                        paddingRight: '50px'
                    }} >Enroll Now
            </Button> 
        </div>
    </div>
  )
}

export default Courses
