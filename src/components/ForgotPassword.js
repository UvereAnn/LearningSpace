import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Container, Row, Col, Form, Image } from 'react-bootstrap';
import forgotPassword from './images/forgotten-password-image.png';
import { Envelope} from 'react-bootstrap-icons';


const ForgotPassword = () => {
  return (
    <div className='forgot'>
      <Header />
        <Container className='forgot-container'>
            <Row className='forgot-row'>
                <Col xs={12} md={4} className='forgot-left'>
                    <Image src={forgotPassword} style={{width: '100%', height: 'auto', marginTop: '-60px', marginLeft: '60px'}}/>
                </Col>
                <Col xs={12} md={8} className='forgot-right'>
                    <Form className='forgot-column'>
                        <h2 id='forgot-h2'>FORGOTTEN PASSWORD</h2>
                        <div className='forgot-email-input'>
                            <Envelope style={{marginLeft: '10px', marginTop: '13px', fontSize: '20px'}}/>
                            <h3>Email Address</h3>
                        </div>
                        <div className='login-text'>
                            <span>RESET PASSWORD</span>
                        </div>
                        <p id='forgot-login'>Login</p>
                    </Form>
                </Col>
            </Row>
        </Container>
      <Footer />
    </div>
  )
}

export default ForgotPassword