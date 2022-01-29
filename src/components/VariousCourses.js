import React,{ useState } from 'react';
import { Container, Row, Col, Button, Image} from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
import uiux from './images/ui-ux-image.png';
//import ReadMoreReact from 'read-more-react';


const VariousCourses = () => {
    
    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };
        return (
          <p className="var-text">
            {isReadMore ? text.slice(0, 70) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
              {isReadMore ? "...read more" : " show less"}
            </span>
          </p>
        );
      };
    
  return (
    <div className='various-resources'>
      <Header />
        <h2>Explore with various resources</h2>
        <Container className='var-con'>
            <Row className='var-row'>
                <Col xs={12} md={6} className='var-col1'>
                    <Row>
                        <Col  xs={12} md={6}>
                            <Image src={uiux}/>
                            <Button />
                        </Col>
                        <Col xs={12} md={6} className="var-container">
                            <h2>
                                <ReadMore className="readmore-text">
                                        GeeksforGeeks: A Computer Science portal for geeks. 
                                        It contains well written, well thought and well explained
                                        computer science, programming articles and quizzes. 
                                        It provides a variety of services for you to learn, so thrive
                                        and also have fun! Free Tutorials, Millions of Articles, Live, 
                                        Online and Classroom Courses ,Frequent Coding Competitions,
                                        Webinars by Industry Experts, Internship opportunities, and Job
                                        Opportunities. Knowledge is power!
                                </ReadMore>
                            </h2>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={6} className='var-col2'>
                    <Row>
                        <Col  xs={12} md={6}>
                            <Image src={uiux}/>
                            <Button />
                        </Col>
                        <Col xs={12} md={6} className="var-container">
                            <h2>
                                <ReadMore className="readmore-text">
                                        GeeksforGeeks: A Computer Science portal for geeks. 
                                        It contains well written, well thought and well explained
                                        computer science, programming articles and quizzes. 
                                        It provides a variety of services for you to learn, so thrive
                                        and also have fun! Free Tutorials, Millions of Articles, Live, 
                                        Online and Classroom Courses ,Frequent Coding Competitions,
                                        Webinars by Industry Experts, Internship opportunities, and Job
                                        Opportunities. Knowledge is power!
                                </ReadMore>
                            </h2>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={6} className='var-col1'>
                    <Row>
                        <Col  xs={12} md={6}>
                            <Image src={uiux}/>
                            <Button />
                        </Col>
                        <Col xs={12} md={6}>
                            <h3>Title</h3>
                            <h6>Description</h6>
                            <p>lorem ipsum dolo met beedolo met beedolo met bee dolo met bee</p>
                            <p>lorem ipsum dolo met bee met beedolo met bee dolo met bee </p>
                            <p>lorem ipsum dolo met bee met beedolo met bee dolo met bee met beedolo met bee dolo met bee</p>
                            
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={6} className='var-col1'>
                    <Row>
                        <Col  xs={12} md={6}>
                            <Image src={uiux}/>
                            <Button />
                        </Col>
                        <Col xs={12} md={6}>
                            <h3>Title</h3>
                            <h6>Description</h6>
                            <p>lorem ipsum dolo met beedolo met beedolo met bee dolo met bee</p>
                            <p>lorem ipsum dolo met bee met beedolo met bee dolo met bee </p>
                            <p>lorem ipsum dolo met bee met beedolo met bee dolo met bee met beedolo met bee dolo met bee</p>
                            
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
      <Footer />
    </div>
  )
}

export default VariousCourses
