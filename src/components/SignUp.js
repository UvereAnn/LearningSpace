import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import signUpImage from './images/sign-up-image.png';
import { Envelope, Lock, Eye } from 'react-bootstrap-icons';


const SignUp = () => {
  return (
    <div className='signup'>
       <Header />
        <Container className='signup-container'>
            <Row className='signup-row'>
                <Col xs={12} md={4} className='signup-left'>
                    <Image src={signUpImage} style={{width: '100%', height: 'auto', marginTop: '100px', marginLeft: '50px'}} />
                </Col>
                <Col xs={12} md={8} className='signup-right'>
                    <Form className='signup-column'>
                        <h2 id='signup-h2'>SIGN UP</h2>
                        <div className='signup-email-input'>
                            <Envelope style={{marginLeft: '10px', marginTop: '13px', fontSize: '20px'}}/>
                            <h3>Password</h3>
                        </div>
                        <div className='signup-email-input'>
                            <Envelope style={{marginLeft: '10px', marginTop: '13px', fontSize: '20px'}}/>
                            <h3>Password</h3>
                        </div>
                        <div className='signup-last-div'>
                            <div className='signup-password-input'>
                                <Lock style={{marginLeft: '10px', marginTop: '13px', fontSize: '20px'}}/>
                                <h3>Password</h3>
                                <Eye style={{marginLeft: '340px', marginRight: '-40px', marginTop: '13px', fontSize: '20px', cursor: 'pointer'}}/>
                            </div>
                            <div className='signup-password-input'>
                                <Lock style={{marginLeft: '10px', marginTop: '13px', fontSize: '20px'}}/>
                                <h3>Password</h3>
                                <Eye style={{marginLeft: '340px', marginRight: '-40px', marginTop: '13px', fontSize: '20px', cursor: 'pointer'}}/>
                            </div>
                            <div className='signup-password-input'>
                                <Lock style={{marginLeft: '10px', marginTop: '13px', fontSize: '20px'}}/>
                                <h3>Password</h3>
                                <Eye style={{marginLeft: '340px', marginRight: '-40px', marginTop: '13px', fontSize: '20px', cursor: 'pointer'}}/>
                            </div>
                            <div className='signup-password-input'>
                                <Lock style={{marginLeft: '10px', marginTop: '13px', fontSize: '20px'}}/>
                                <h3>Password</h3>
                                <Eye style={{marginLeft: '340px', marginRight: '-40px', marginTop: '13px', fontSize: '20px', cursor: 'pointer'}}/>
                            </div>
                            <div className='remember'>
                                <input type="checkbox" />
                                <label>Remember me</label>
                            </div>
                            <div className='signup-text'>
                                <span>SIGN UP</span>
                            </div>
                            <div>
                                <p>By signing up, you agree to our <span id='signup-span'>TOC</span> and <span id='signup-span'>Privacy Policy</span></p>
                            </div>
                            <div className='signup-last-div'>
                                <p> Already have an account? <span  id='signup-span'>Sign Up</span></p>
                            </div>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
      <Footer />
    </div>
  )
}

export default SignUp