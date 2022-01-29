import React from 'react';
import banner from './images/banner.jpg';
import Image from 'react-bootstrap/Image';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Mortarboard } from 'react-bootstrap-icons';
import { Book } from 'react-bootstrap-icons';
import { PeopleFill } from 'react-bootstrap-icons';

const Main = () => {
    
  return (
    <div>
        <Image src={banner} responsive className='banner' />
        <h1 className='banner-text'>Browse the best courses</h1>
        <Form className="d-flex search">
            <FormControl
            type="search"
            placeholder="What do you want to learn?"
            className="me-2"
            aria-label="Search"
            style={{
                paddingLeft: '50px',
                borderRadius: '20px',
                fontSize: '20px',
                color: 'grey',
                left: '0px',
                border: 'none'
            }}
            />
            <Button 
                variant="outline-success" 
                style={{
                    backgroundColor: '#257F9B', 
                    color: '#ffffff',
                    fontSize: '20px',
                    border: 'none',
                    marginLeft: '-70px',
                    borderRadius: '20px',
                    paddingLeft: '40px',
                    paddingRight: '50px'
                }} >Search Courses
            </Button>
            
            
      </Form>
      <ButtonGroup size="lg" className="mb-2 button-group">
        <Button id='btn-grp1' >
            <Mortarboard 
                color="white" 
                size={46} 
                style={{marginLeft: '-130px'}} />&nbsp; 
                    <span 
                        className='mortarboard' >
                    </span>
                        <b> &nbsp; 1k+ 
                        </b><br />
                    <p id='student' >Students Enrolled</p>
        </Button>
        <Button id='btn-grp2' >
            <Book 
                color="white" 
                size={46} 
                style={{marginLeft: '-130px'}} />  &nbsp;
                    <span 
                        className='book' >
                    </span><b> &nbsp; 500+ 
                    </b> <br /> 
                    <p id='student'>Books Downloaded </p> 
        </Button>
        <Button id='btn-grp3' >
            <PeopleFill 
                color="white" 
                size={46} 
                style={{marginLeft: '-130px'}}/>  &nbsp;
                    <span 
                        className='people' >
                    </span><b> &nbsp; 50+ 
                    </b> <br /> 
                    <p id='student'> Courses Taught </p>
        </Button>
      </ButtonGroup>
      
      
    </div>
  )
}

export default Main
