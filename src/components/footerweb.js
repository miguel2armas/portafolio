import React, {useContext} from 'react';
import { ReactComponent as Logo } from '../assets/img/logo.svg'
import {AiFillGithub} from "react-icons/all";
import {FaFacebook, FaWhatsapp} from "react-icons/all";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {GlobalContext} from "../context/GlobalContext";
const Footerweb = () =>{
    const context = useContext(GlobalContext)
    const today = new Date();
    const year = today.getFullYear();

    return <div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <Container className="py-3">
                <Row >
                    <Col xs={12} sm={6} className="d-flex align-items-center">
                        <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <Logo width="172" height="90" />
                        </Link>
                        <span className="text-muted">{year} Miguel Armas, Developer</span>
                    </Col>
                    <Col xs={12} sm={6} className="justify-content-sm-end justify-content-center align-items-center list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/miguel.armasmoreno/" target="_blank" rel="noreferrer">
                            <FaFacebook color={context.state.darkTheme?('white'):('black')} size="3rem"/>
                        </a></li>
                        <li className="ms-3"><a className="text-muted" href="https://github.com/miguel2armas" target="_blank" rel="noreferrer">
                            <AiFillGithub color={context.state.darkTheme?('white'):('black')} size="3rem"/>
                        </a></li>
                        <li className="ms-3"><a className="text-muted" href="https://wa.me/573146869798" target="_blank" rel="noreferrer">
                            <FaWhatsapp color={context.state.darkTheme?('white'):('black')} size="3rem"/>
                        </a></li>
                    </Col>
                </Row>
            </Container>
        </footer>
    </div>;
}

export default Footerweb;