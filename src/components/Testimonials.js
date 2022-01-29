import React from 'react';
import { ThreeDots } from 'react-bootstrap-icons';
import { Quote } from 'react-bootstrap-icons';
import { Image } from 'react-bootstrap';
import banner from './images/banner.jpg';

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className='testimonials-h2'>
            <h2>Testimonials</h2>
            <ThreeDots style={{color: '#257F9B', fontSize: '64px', marginTop: '-30px', marginLeft: '-5px'}} />
        </div>
        <div className='testimonial-card-parent'>
            <div className="col-12  col-lg-6 testimonial-card">
                <div>
                    <Quote 
                        style={{
                            transform: 'rotate(180deg)', 
                            color: 'rgb(236, 232, 232)', 
                            fontSize: '100px', 
                            marginLeft: '250px'
                        }}
                    />
                    <p 
                        style={{
                            fontSize: '18px', 
                            marginTop: '-40px', 
                            textAlign: 'start', 
                            fontWeight: 'bold', 
                            position: 'relative'
                        }}
                    >
                        The Course and trainer was awesome, and he took time explaining in details.
                    </p>
                    <Image 
                        src={banner} responsive 
                            style={{height: '100px', width: '100px', borderRadius: '50%', marginTop: '5%', marginLeft: '30%'
                        }}
                    />
                    <b>Ann Uvere</b>
                </div>
            </div>
            <div className="col-12  col-lg-6 testimonial-card">
                <div>
                    <Quote 
                        style={{
                            transform: 'rotate(180deg)', 
                            color: 'rgb(236, 232, 232)', 
                            fontSize: '100px', 
                            marginLeft: '250px',
                        }}
                    />
                    <p 
                        style={{
                            fontSize: '18px', 
                            marginTop: '-40px', 
                            textAlign: 'start', 
                            fontWeight: 'bold', 
                            position: 'relative'
                        }}
                    >
                        It was worth my time and money, I give my recommendation. They are the bomb!
                    </p>
                    <Image 
                        src={banner} responsive 
                            style={{height: '100px', width: '100px', borderRadius: '50%', marginTop: '5%', marginLeft: '5%'
                        }}
                    />
                    <p  style={{marginTop: '-100px', marginLeft: '240px', color: 'rgb(236, 232, 232)'}}>Ann Uvere</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
