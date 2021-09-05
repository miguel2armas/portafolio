import React, {Component} from 'react';
import Memory from "./memory";
import {Container} from "react-bootstrap";
import Navbarweb from "../navbarweb";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbarweb changeThemeDark={this.props.changeThemeDark} checkedTheme={this.props.checkedTheme} checkedThemecount={this.props.checkedThemecount}/>
                <Container>
                    <Memory/>
                </Container>
            </div>
        );
    }
}

export default Home;