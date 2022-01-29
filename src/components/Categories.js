import React from 'react';
import { 
    ThreeDots, 
    PersonBoundingBox,
    CloudCheck,
    Globe,
    PencilSquare,
    ChevronRight
 } from 'react-bootstrap-icons';
import {Accordion}from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Categories = () => {
  return (
    <div className='categories'>
        <div className='categories-h2'>
            <h2>Top Categories</h2>
            <ThreeDots style={{color: '#257F9B', fontSize: '64px', marginTop: '-30px', marginLeft: '-5px'}} />
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12  col-lg-3 cate">
                    <PersonBoundingBox 
                        style={{
                            color: '#257F9B', 
                            fontSize: '54px', 
                            marginTop: '10px', 
                            marginLeft: '90px', 
                            display: 'flex',
                            alignItems: 'center'
                            }} 
                    />
                    <p style={{color: '#257F9B', fontSize: '16px', marginTop: '20px', textAlign: 'center'}}>UI/UX Designing</p>   
                </div>
                <div className="col-12  col-lg-3 cate">
                    <CloudCheck 
                        style={{
                            color: '#257F9B', 
                            fontSize: '54px', 
                            marginTop: '10px', 
                            marginLeft: '100px',
                            display: 'flex',
                            alignItems: 'center'
                        }} 
                    />
                    <p style={{color: '#257F9B', fontSize: '16px', marginTop: '20px', textAlign: 'center'}}>Cloud Engineeriing</p>
                </div>
                <div className="col-12  col-lg-3 cate">
                    <Globe 
                        style={{
                            color: '#257F9B', 
                            fontSize: '54px', 
                            marginTop: '10px', 
                            marginLeft: '100px',
                            display: 'flex',
                            alignItems: 'center',
                            verticalAlign: 'middle'
                        }} 
                    />

                    <p style={{color: '#257F9B', fontSize: '16px', marginTop: '20px', textAlign: 'center'}}>Web Development</p>
                </div>
                <div className="col-12  col-lg-3 cate">
                    <PencilSquare 
                        style={{
                            color: '#257F9B', 
                            fontSize: '54px', 
                            marginTop: '10px', 
                            marginLeft: '100px',
                            display: 'flex',
                            alignItems: 'center'
                        }} 
                    />
                    <p style={{color: '#257F9B', fontSize: '16px', marginTop: '20px', textAlign: 'center'}}>Content Creation</p>
                </div>
            </div>         
        </div>
        <Accordion>  
            <Accordion.Item eventKey="1">
                <Accordion.Header>View More
                    <ChevronRight />
                </Accordion.Header>
                <Accordion.Body>
                    <div className="container">
                        <div className="row">
                            <div className="col-12  col-lg-3 cate">
                                <PersonBoundingBox 
                                    style={{
                                        color: '#257F9B', 
                                        fontSize: '54px', 
                                        marginTop: '10px', 
                                        marginLeft: '90px', 
                                        display: 'flex',
                                        alignItems: 'center'
                                        }} 
                                />
                                <p style={{color: '#257F9B', fontSize: '16px', marginTop: '20px', textAlign: 'center'}}>UI/UX Designing</p>   
                            </div>
                            <div className="col-12  col-lg-3 cate">
                                <CloudCheck 
                                    style={{
                                        color: '#257F9B', 
                                        fontSize: '54px', 
                                        marginTop: '10px', 
                                        marginLeft: '100px',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }} 
                                />
                                <p style={{color: '#257F9B', fontSize: '16px', marginTop: '20px', textAlign: 'center'}}>Cloud Engineeriing</p>
                            </div>
                            <div className="col-12  col-lg-3 cate">
                                <Globe 
                                    style={{
                                        color: '#257F9B', 
                                        fontSize: '54px', 
                                        marginTop: '10px', 
                                        marginLeft: '100px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        verticalAlign: 'middle'
                                    }} 
                                />

                                <p style={{color: '#257F9B', fontSize: '16px', marginTop: '20px', textAlign: 'center'}}>Web Development</p>
                            </div>
                            <div className="col-12  col-lg-3 cate">
                                <PencilSquare 
                                    style={{
                                        color: '#257F9B', 
                                        fontSize: '54px', 
                                        marginTop: '10px', 
                                        marginLeft: '100px',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }} 
                                />
                                <p style={{color: '#257F9B', fontSize: '16px', marginTop: '20px', textAlign: 'center'}}>Content Creation</p>
                            </div>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
                    
    </div>
  )
}

export default Categories
