import React, {Component} from 'react';
import { ReactComponent as Logo } from '../assets/img/logo.svg'
import { ReactComponent as Facebook } from '../assets/img/icons/facebook.svg'
import { ReactComponent as GitHub } from '../assets/img/icons/github.svg'
import { ReactComponent as WhatsApp } from '../assets/img/icons/whatsapp.svg'
import {Col, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
let today = new Date();
let year = today.getFullYear();
class Footerweb extends Component {

    render() {
        return (
            <div>
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <Container className="py-3">
                            <div className="d-flex">
                                <Col xs={12} sm={6} className="d-flex align-items-center">
                                    <Link href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                        <Logo width="172" height="90" />
                                    </Link>
                                    <span className="text-muted">{year} Miguel Armas, Developer</span>
                                </Col>
                                <ul className="nav col-md-6 justify-content-end align-items-center list-unstyled d-flex">
                                    <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/miguel.armasmoreno/" target="_blank" rel="noreferrer">
                                        <Facebook width="40" height="40" fill={this.props.checkedTheme?('white'):('black')} />
                                    </a></li>
                                    <li className="ms-3"><a className="text-muted" href="https://github.com/miguel2armas" target="_blank" rel="noreferrer">
                                        <GitHub width="40" height="40" fill={this.props.checkedTheme?('white'):('black')} />
                                    </a></li>
                                    <li className="ms-3"><a className="text-muted" href="https://wa.me/573146869798" target="_blank" rel="noreferrer">
                                        <WhatsApp width="40" height="40" fill={this.props.checkedTheme?('white'):('black')} />
                                    </a></li>
                                </ul>
                            </div>
                        </Container>
                    </footer>
            </div>
        );
    }
}

export default Footerweb;