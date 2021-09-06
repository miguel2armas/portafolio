import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import LogMig from '../../assets/img/logomiguel.svg'
import EngranajeHome from '../../assets/img/logo_inicio_miguel.svg'
import { ReactComponent as ChatDots } from '../../assets/img/icons/chat-dots-fill.svg'
import {Animated} from "react-animated-css";
import Navbarweb from "../navbarweb";
import {Link} from "react-router-dom";
import Footerweb from "../footerweb";

class Home extends Component {
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
                </Container>
                <Footerweb checkedTheme={this.props.checkedTheme}/>
            </div>
        );
    }
}

export default Home;