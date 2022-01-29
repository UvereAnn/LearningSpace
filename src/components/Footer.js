import React from 'react';
import {Container, Image, Row, Col} from 'react-bootstrap';
import googlePlay from './images/google-play.png';
import appStore from './images/app-store.png';
import { ChevronDown, Globe } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-row">
            <div className="footer-column footer-col-one">
                <p>Login</p>
                <p>Sign Up</p>
            </div>
            <div className="footer-column footer-col-two">
                <p>Terms and Conditions</p>
                <p>Privacy and Cookie Policy</p>
                <p>Site map</p>
                <p>Help and Support</p>
            </div>
            <div className="footer-column footer-col-three">
                <Image src={appStore} style={{width: '63%', height: '20%'}} />
                <Image src={googlePlay} style={{width: '75%', height: '30%', marginLeft: '-15px', marginTop: '-15px'}} />                
            </div>
            <div className="footer-column footer-col-four">
                <div className='footer-search'>
                    <Globe style={{marginLeft: '-40px', marginTop: '13px', fontSize: '20px'}}/>
                    <h3>English</h3>
                    <ChevronDown style={{marginLeft: '80px', marginRight: '-40px', marginTop: '13px', fontSize: '20px', cursor: 'pointer'}}/>
                </div>
            </div>
            
        </div>

        <div id='horizontal-line'></div>
        <Container>
            <Row className='footer-last-div' >
                <Col md={9}><h3>Learning Space</h3></Col>
                <Col md={3}><p>&copy; 2022 Learning Space, All rights reserved</p></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer