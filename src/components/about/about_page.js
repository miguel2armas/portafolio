import React, {Component} from 'react';
import About from "./about";
import Heading from "../heading";
import {Container} from "react-bootstrap";
import Footerweb from "../footerweb";

class AboutPage extends Component {
    render() {
        return (
            <div>
                <Heading/>
                <Container>
                    <About/>
                </Container>
                <Footerweb/>
            </div>
        );
    }
}

export default AboutPage;