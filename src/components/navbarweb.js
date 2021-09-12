import React, {Component} from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";
import { ReactComponent as Logo } from '../assets/img/logo.svg'
import {RiHomeLine, RiSunLine, RiMoonClearFill} from 'react-icons/ri'
import {MdGames, MdContactMail} from 'react-icons/md'
import {FaBook} from 'react-icons/fa'
import Roll from 'react-reveal/Roll';
import {Animated} from "react-animated-css";
import {Link} from "react-router-dom";

class Navbarweb extends Component {

    render() {
        return (
            <Navbar className="nav-masthead" bg={this.props.checkedTheme?('dark'):('light')} variant={this.props.checkedTheme?('dark'):('light')} expand="lg">
                <Container>
                    <Navbar.Brand>

                        <Link to="/">
                            <Logo height="50" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Animated className="me-auto" animationIn="bounceInLeft" isVisible={true}>
                            <Nav>
                                <Nav.Link href="#home" className="border-end">
                                    <div className="text-center ">
                                        <RiHomeLine color={this.props.checkedTheme?('white'):('black')}/>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-theme-1">Home</span>
                                    </div>
                                </Nav.Link>
                                <Nav.Link href="#features" className="border-end">
                                    <div className="text-center">
                                        <MdGames color={this.props.checkedTheme?('white'):('black')}/>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-theme-2">Games</span>
                                    </div>
                                </Nav.Link>
                                <Nav.Link href="#pricing" className="border-end">
                                    <div className="text-center">
                                        <FaBook color={this.props.checkedTheme?('white'):('black')}/>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-theme-2">About</span>
                                    </div>
                                </Nav.Link>
                                <Nav.Link href="#pricing">
                                    <div className="text-center">
                                        <MdContactMail color={this.props.checkedTheme?('white'):('black')}/>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-theme-2">Contact</span>
                                    </div>
                                </Nav.Link>
                            </Nav>
                        </Animated>

                        <Nav>
                            <Nav.Link className="text-center">
                                <span className="py-1">{this.props.checkedTheme?('EN'):('ES')}</span>
                            </Nav.Link>
                            <Nav.Link className="text-center">
                                <Roll spy={this.props.checkedThemecount}>
                                    {this.props.checkedTheme?(
                                        <div onClick={() => this.props.changeThemeDark()}>
                                            <RiSunLine title="sun" size="2em" color={this.props.checkedTheme?('white'):('black')}/>
                                        </div>
                                    ):(
                                        <div onClick={() => this.props.changeThemeDark()}>
                                            <RiMoonClearFill title="moon" size="2em" color={this.props.checkedTheme?('white'):('black')}/>
                                        </div>
                                    )}
                                </Roll>

                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Navbarweb;