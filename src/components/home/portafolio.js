import React, {Component} from 'react';
import {Carousel, Col, Row} from "react-bootstrap";
import img1 from "../../assets/img/img_page/e-tournament.webp"
import FondTransp from "../../assets/img/img_page/fond_transp.png"
import {Link} from "react-router-dom";

class Portafolio extends Component {
    render() {
        return (
            <div>

                <Carousel>
                    <Carousel.Item interval={1500}>
                        <img src={FondTransp}/>
                        <Carousel.Caption>
                            <Row>
                                <Col>
                                    <img src={img1} className="rounded img-fluid"/>
                                </Col>
                                <Col>
                                    <div className="text-start">
                                        <h3 className={this.props.checkedTheme?('text-white'):('text-dark')}>E-tournament</h3>
                                        <h4 className={this.props.checkedTheme?('text-white'):('text-dark')}>Pagina de torneos de juegos electronicos
                                            con creador de torneos y venta por medio de la pasarela de pago de mercado libre en proceso</h4>
                                        <Link className="btn btn-theme my-5">Visitar</Link>
                                    </div>
                                </Col>
                            </Row>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img src={FondTransp}/>
                        <Carousel.Caption>
                            <Row>
                                <Col>
                                    <img src={img1} className="rounded img-fluid"/>
                                </Col>
                                <Col>
                                    text
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img src={FondTransp}/>
                        <Carousel.Caption>
                            <Row>
                                <Col>
                                    <img src={img1} className="rounded img-fluid"/>
                                </Col>
                                <Col>
                                    <div>
                                        <h3>E-tournament</h3>
                                        <h4>Pagina de torneos de juegos electronicos
                                            con creador de torneos y venta por medio de la pasarela de pago de mercado libre en proceso</h4>
                                        <Link className="btn btn-theme">Visitar</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Portafolio;