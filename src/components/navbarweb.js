import React, {Component} from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";
import { ReactComponent as Moon } from '../assets/img/icons/moon-fill.svg'
import { ReactComponent as Sun } from '../assets/img/icons/sun-fill.svg'
import { ReactComponent as House } from '../assets/img/icons/house.svg'
import { ReactComponent as Joystick } from '../assets/img/icons/joystick.svg'
import { ReactComponent as PersonSquare } from '../assets/img/icons/person-square.svg'
import { ReactComponent as InboxFill } from '../assets/img/icons/inbox-fill.svg'
import { ReactComponent as Logo } from '../assets/img/logo.svg'
import Roll from 'react-reveal/Roll';
import {Animated} from "react-animated-css";
class Navbarweb extends Component {
    render() {
        return (
            <Navbar className="nav-masthead" bg={this.props.checkedTheme?('dark'):('light')} variant={this.props.checkedTheme?('dark'):('light')} expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <Logo height="50" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Animated className="me-auto" animationIn="bounceInLeft" isVisible={true}>
                            <Nav>
                                <Nav.Link href="#home" className="border-end">
                                    <div className="text-center ">
                                        <House fill={this.props.checkedTheme?('white'):('black')}/>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-theme-1">Home</span>
                                    </div>
                                </Nav.Link>
                                <Nav.Link href="#features" className="border-end">
                                    <div className="text-center">
                                        <Joystick fill={this.props.checkedTheme?('white'):('black')}/>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-theme-2">Games</span>
                                    </div>
                                </Nav.Link>
                                <Nav.Link href="#pricing" className="border-end">
                                    <div className="text-center">
                                        <PersonSquare fill={this.props.checkedTheme?('white'):('black')}/>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-theme-2">About</span>
                                    </div>
                                </Nav.Link>
                                <Nav.Link href="#pricing">
                                    <div className="text-center">
                                        <InboxFill fill={this.props.checkedTheme?('white'):('black')}/>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-theme-2">Contact</span>
                                    </div>
                                </Nav.Link>
                            </Nav>
                        </Animated>

                        <Nav>
                            <Nav.Link className="text-center">
                                <Roll spy={this.props.checkedThemecount}>
                                    {this.props.checkedTheme?(
                                        <div onClick={() => this.props.changeThemeDark()}>
                                                <Sun width="26" height="26" fill={this.props.checkedTheme?('white'):('black')}/>
                                        </div>
                                    ):(
                                        <div onClick={() => this.props.changeThemeDark()}>
                                                <Moon width="26" height="26" fill={this.props.checkedTheme?('white'):('black')}/>
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