import React, {Component} from 'react';
import {Carousel, Col, Row} from "react-bootstrap";
import img1 from "../../assets/img/img_page/e-tournament.webp"

class Portafolio extends Component {
    render() {
        return (
            <div>

                <Carousel>
                    <Carousel.Item >
                        <img src={img1}/>
                        <Carousel.Caption>
                            <Row>
                                <Col>
                                    <img src={img1} className="img-fluid"/>
                                </Col>
                                <Col>
                                    text
                                </Col>
                            </Row>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img src={img1}/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img1}/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Portafolio;