import React, {Component} from 'react';
import {Accordion, Col, Container, ProgressBar, Row} from "react-bootstrap";
import LogMig from '../../assets/img/logomiguel.svg'
import EngranajeHome from '../../assets/img/logo_inicio_miguel.svg'
import { ReactComponent as ChatDots } from '../../assets/img/icons/chat-dots-fill.svg'
import {Animated} from "react-animated-css";
import Navbarweb from "../navbarweb";
import {Link} from "react-router-dom";
import Footerweb from "../footerweb";
import {ReactComponent as Braces} from "../../assets/img/icons/braces.svg";
import {ReactComponent as CodeSlash} from "../../assets/img/icons/code-slash.svg";
import {ReactComponent as Bookmark} from "../../assets/img/icons/bookmark-fill.svg";

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Navbarweb changeThemeDark={this.props.changeThemeDark} checkedTheme={this.props.checkedTheme} checkedThemecount={this.props.checkedThemecount}/>
                <Container>
                    <Row>
                        <Col xs={12} sm={5}>
                            <div className="py-4">
                                <div className="py-sm-5 py-2">
                                    <object type="image/svg+xml" data={LogMig}>svg-animation</object>
                                </div>
                                <Animated className="me-auto" animationIn="bounceInLeft" isVisible={true}>
                                <h1 className="py-4">Hi, I'am Miguel</h1>
                                </Animated>
                                <Animated className="me-auto" animationIn="flipInY" isVisible={true}>
                                <h5>Fullstack developer</h5>
                                    <p>I am passionate about programming and new challenges, creating and improving always looking for a better level, I have great experience creating web pages using "react" in frontend and "laravel" in backend. </p>
                                    <p>I work with the latest technologies, always seeking to improve and optimize the projects I work on, seeking excellence in each one of them.</p>
                                <Link to="/contact" className="btn btn-theme btn-lg">Contact
                                    <span className="py-1 pl-3"><ChatDots width="25" height="25"/></span>
                                </Link>
                                </Animated>
                            </div>
                        </Col>
                        <Col xs={12} sm={7} className="bg-home">
                            <div className="py-3">
                                <object type="image/svg+xml" data={EngranajeHome}>svg-animation</object>
                            </div>
                        </Col>
                    </Row>
                    <Container className="text-center pt-sm-5 pb-sm-3">
                        <h2>Skills</h2>
                        <h3>My technical level</h3>
                    </Container>
                    <Row>
                        <Col>
                            <Accordion defaultActiveKey="0">
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
                            </Accordion>
                        </Col>
                        <Col>

                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0" className={this.props.checkedTheme?('bg-dark'):('bg-light')}>
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
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col>

                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0" className={this.props.checkedTheme?('bg-dark'):('bg-light')}>
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
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
                <Footerweb checkedTheme={this.props.checkedTheme}/>
            </div>
        );
    }
}

export default Home;