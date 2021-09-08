import React, {Component} from 'react';
import {Accordion, Col, Container, ProgressBar, Row} from "react-bootstrap";
import {ReactComponent as CodeSlash} from "../../assets/img/icons/code-slash.svg";
import {ReactComponent as Braces} from "../../assets/img/icons/braces.svg";
import {ReactComponent as Bookmark} from "../../assets/img/icons/bookmark-fill.svg";

class Skills extends Component {
    render() {
        return (
            <div>
                <Container className="text-center pt-sm-5 pb-sm-3">
                    <h2>Skills</h2>
                    <h3>My technical level</h3>
                </Container>
                <Accordion defaultActiveKey="0">
                    <Row>
                        <Col>
                            <Accordion.Item eventKey="0" className={this.props.checkedTheme?('bg-dark'):('bg-light')}>
                                <Accordion.Header className="bg-dark">
                                    <CodeSlash className="mx-2" width="30" height="30"/>
                                    Developer language</Accordion.Header>
                                <Accordion.Body>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>HTML</b><b>100%</b>
                                    </div>
                                    <ProgressBar variant="success" now={100}/>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>CSS</b><b>80%</b>
                                    </div>
                                    <ProgressBar variant="success" now={80}/>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>JAVASCRIPT</b><b>90%</b>
                                    </div>
                                    <ProgressBar variant="success" now={90}/>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>PHP</b><b>100%</b>
                                    </div>
                                    <ProgressBar variant="success" now={100}/>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>DART</b><b>80%</b>
                                    </div>
                                    <ProgressBar variant="success" now={80}/>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>JAVA</b><b>50%</b>
                                    </div>
                                    <ProgressBar variant="success" now={50}/>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>KOTLIN</b><b>40%</b>
                                    </div>
                                    <ProgressBar variant="success" now={40}/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Col>
                        <Col>
                            <Accordion.Item eventKey="1" className={this.props.checkedTheme?('bg-dark'):('bg-light')}>
                                <Accordion.Header>
                                    <Braces className="mx-2" width="30" height="30"/>
                                    Developer framework</Accordion.Header>
                                <Accordion.Body>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>BOOSTRAP</b><b>90%</b>
                                    </div>
                                    <ProgressBar variant="success" now={90}/>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>REACT</b><b>90%</b>
                                    </div>
                                    <ProgressBar variant="success" now={90}/>

                                    <div className="d-flex justify-content-between my-2">
                                        <b>LARAVEL</b><b>90%</b>
                                    </div>
                                    <ProgressBar variant="success" now={90}/>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>ANDROID NATIVO</b><b>60%</b>
                                    </div>
                                    <ProgressBar variant="success" now={60}/>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>FLUTTER</b><b>80%</b>
                                    </div>
                                    <ProgressBar variant="success"   now={80}/>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>GIT</b><b>80%</b>
                                    </div>
                                    <ProgressBar variant="success"   now={80}/>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>PRESTASHOP</b><b>80%</b>
                                    </div>
                                    <ProgressBar variant="success"   now={80}/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Col>
                        <Col>
                            <Accordion.Item eventKey="2" className={this.props.checkedTheme?('bg-dark'):('bg-light')}>
                                <Accordion.Header>
                                    <Bookmark className="mx-2" width="30" height="30"/>
                                    additional skills</Accordion.Header>
                                <Accordion.Body>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>GOOGLE ADWORDS (CEO)</b><b>90%</b>
                                    </div>
                                    <ProgressBar variant="success" now={90}/>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>SEO</b><b>80%</b>
                                    </div>
                                    <ProgressBar variant="success" now={80}/>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>PAYMENT GATEWAY (MERCADOPAGO, PAYU, GLOBALPAY)</b><b>100%</b>
                                    </div>
                                    <ProgressBar variant="success" now={100}/>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>IMAGE OPTIMIZATION (WEBP AND SVG)</b><b>100%</b>
                                    </div>
                                    <ProgressBar variant="success" now={100}/>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>REDUX IN REACT</b><b>80%</b>
                                    </div>
                                    <ProgressBar variant="success" now={80}/>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>PROVIDER IN FLUTTER</b><b>80%</b>
                                    </div>
                                    <ProgressBar variant="success" now={80}/>
                                    <div className="d-flex justify-content-between my-2">
                                        <b>BLOC IN FLUTTER</b><b>60%</b>
                                    </div>
                                    <ProgressBar variant="success" now={60}/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Col>
                    </Row>
                </Accordion>
            </div>
        );
    }
}

export default Skills;