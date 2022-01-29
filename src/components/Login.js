import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import loginImage from './images/login-image.png';
import { Envelope, Lock, Eye } from 'react-bootstrap-icons';


const Login = () => {
  return (
    <div className='login'>
      <Header />
      <Container className='login-container'>
            <Row className='login-row'>
                <Col xs={12} md={4} className='login-left'>
                    <Image src={loginImage} style={{border: 'none'}}/>
                </Col>
                <Col xs={12} md={8} className='login-right'>
                    <Form className='login-column'>
                        <h2 id='login-h2'>LOGIN</h2>
                        <div className='login-email-input'>
                            <Envelope style={{marginLeft: '10px', marginTop: '13px', fontSize: '20px'}}/>
                            <h3>Password</h3>
                        </div>
                        <div className='login-last-div'>
                            <div className='login-password-input'>
                                <Lock style={{marginLeft: '10px', marginTop: '13px', fontSize: '20px'}}/>
                                <h3>Password</h3>
                                <Eye style={{marginLeft: '340px', marginRight: '-40px', marginTop: '13px', fontSize: '20px', cursor: 'pointer'}}/>
                            </div>
                            <div className='login-text'>
                                <span>LOGIN</span>
                            </div>
                            <div className='login-last-div'>
                                <p>Forgot password</p>
                                <p> Dont have and account? <span  id='login-span'>Sign Up</span></p>
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

export default Login
