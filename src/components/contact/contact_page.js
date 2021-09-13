import React, {Component} from 'react';
import Contact from "./contact";
import Heading from "../heading";
import {Container} from "react-bootstrap";
import Footerweb from "../footerweb";

class ContactPage extends Component {
    render() {
        return (
            <div>
                <Heading/>
                <Container>
                    <Contact/>
                </Container>
                <Footerweb/>
            </div>
        );
    }
}

export default ContactPage;