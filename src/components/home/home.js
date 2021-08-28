import React, {Component} from 'react';
import Memory from "./memory";
import {Container} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Memory/>
                </Container>
            </div>
        );
    }
}

export default Home;