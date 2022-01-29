import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Container, Button } from 'react-bootstrap';
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="white" variant="light" fixed="top" >
        <Container>
            <Navbar.Brand href="#home"><img src={logo} id='logo' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-center">
                    <Nav.Link href="#features" id="about" >About Us</Nav.Link>
                    <Nav.Link href="#features" id="courses" >Courses</Nav.Link>
                    <Nav.Link href="#pricing" id="contact" >Contact Us</Nav.Link>
                    <Nav.Link href="#pricing" id="contact" >Testimonials</Nav.Link>
                    <Nav.Link href="#pricing" id="contact" >Clients</Nav.Link>                
                </Nav>
                <div className='button-div' >
                    <Button variant="primary" id="login" >Login</Button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="secondary" id="signup">Sign Up</Button>
                </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  )
}

export default Header
