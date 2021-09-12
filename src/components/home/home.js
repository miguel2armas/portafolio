import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import Footerweb from "../footerweb";
import Skills from "./skills";
import Portafolio from "./portafolio"
import TimeLine from "./time_line";
import Heading from "../heading";
import HomeInit from "./home_init";

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Heading/>
                <Container>
                    <HomeInit/>
                    <Skills/>
                    <TimeLine/>
                    <Portafolio/>
                </Container>
                <Footerweb checkedTheme={this.props.checkedTheme}/>
            </div>
        );
    }
}

export default Home;