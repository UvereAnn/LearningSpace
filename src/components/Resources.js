import React from 'react';
import Footer from './Footer';
import Header from './Header';
import {CardGroup, Card} from 'react-bootstrap';
import {Search} from 'react-bootstrap-icons';
import UiUx from './images/ui-ux-image.png';
import backendImage from './images/backend-image.jfif';
import frontendImage from './images/frontend-image.jfif';
import contentImage from './images/content-image.png';
import graphicsImage from './images/graphics-image.jfif';
import cloudImage from './images/cloud-image.jfif';
import microsoftImage from './images/microsoft-image.png';
import digitalImage from './images/digital-image.jfif';

const Resources = () => {
  return (
    <div className='resources'>
      <Header />
        <h2 id='resources-h2'>Learning Space Courses Library</h2>
            <div className="row resources-search">
                <div className="col-md-5 mx-auto">
                    <div className="input-group">
                        <input className="form-control border-end-0 border rounded-pill" type="search" value="Search Courses" id="example-search-input" />
                        <span className="input-group-append">
                            <button className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5" type="button">
                                <Search style={{color: '#257F9B'}}/>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        <CardGroup className='resources-cardgroup'>
            <Card className='resources-card'>
                <Card.Img variant="top" src={UiUx} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card className='resources-card'>
                <Card.Img variant="top" src={cloudImage} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card className='resources-card'>
                <Card.Img variant="top" src={backendImage} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card className='resources-card'>
                <Card.Img variant="top" src={frontendImage} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup> <br /> <br /> <br />
        <CardGroup className='resources-cardgroup'>
            <Card className='resources-card'>
                <Card.Img variant="top" src={graphicsImage} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card className='resources-card'>
                <Card.Img variant="top" src={digitalImage} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card className='resources-card'>
                <Card.Img variant="top" src={microsoftImage} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card className='resources-card'>
                <Card.Img variant="top" src={contentImage} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
      <Footer />
    </div>
  )
}

export default Resources
