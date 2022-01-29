import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { ThreeDots, Telephone, EnvelopeOpen, GeoAlt } from 'react-bootstrap-icons';


const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-h2'>
            <h2>Contacts</h2>
            <ThreeDots style={{color: '#257F9B', fontSize: '64px', marginTop: '-30px', marginLeft: '-5px'}} />
        </div>
        <Container className='contact-container'>
            <Row className='contact-row'>
                <Col xs={6} md={4} className='contact-left'>
                    <div className='contact-left-parent'>
                        <div className='contact-left-phone'>
                            <Telephone style={{fontSize: '30px', color: '#ffffff', marginBottom: '10px'}} />
                            <p>0700-000-1234</p>
                        </div>
                        
                        <div className='contact-left-message'>
                            <EnvelopeOpen style={{fontSize: '30px', color: '#ffffff', marginBottom: '10px'}} />
                            <p>learningspace@email.com</p>
                        </div>
                        
                        <div className='contact-left-location'>
                            <GeoAlt style={{fontSize: '30px', color: '#ffffff', marginBottom: '10px'}} />
                            <p>31, Lprem Ipsum, Lagos</p>
                        </div> 
                    </div>
                </Col>
                <Col xs={12} md={8} className='contact-right'>
                    <Form className='form'>
                        <h3 id="contact-right-h3">SEND US A MESSAGE</h3>
                        <div className='contact-right-first-div'>
                            <Form.Group controlId="form.Name" className='contact-form-group'>
                                <Form.Control type="text" placeholder="Fullname" />
                            </Form.Group>
                            <Form.Select className='contact-form-group'>
                                <option value="1">Student</option>
                                <option value="2">Teacher</option>
                                <option value="3">Others</option>
                            </Form.Select>   
                        </div>
                        <div className='contact-right-first-div'>
                            <Form.Group controlId="form.Name" className='contact-form-group'>
                                <Form.Control type="text" placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group controlId="form.Email" className='contact-form-group'>
                                <Form.Control type="email" placeholder="Email Address" />
                            </Form.Group>
                        </div>
                        <Form.Group controlId="form.Textarea" className='contact-form-group'>
                            <Form.Control as="textarea" rows={3} placeholder='Comment'/>
                        </Form.Group>
                        <Button className="contact-submit-button" value="submit" type="submit" 
                            style={{backgroundColor: '#257F9B', fontWeight: 'bold'}}>Send Message</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        
    </div>
  )
}

export default Contact
