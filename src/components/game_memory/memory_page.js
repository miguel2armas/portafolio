import React, {Component} from 'react';
import Heading from "../heading";
import {Container} from "react-bootstrap";
import GameMemory from "./game_memory";
import Footerweb from "../footerweb";

class MemoryPage extends Component {
    state = {
        seconds: 0
    }
    tick() {
        this.setState({
            seconds: this.state.seconds + 1
        });
    }
    setStart=()=>{
        this.interval = setInterval(() => this.tick(), 1000);
    }
    setPause=()=>{
        clearInterval(this.interval);
    }
    setReset=()=>{
        this.setState({
            seconds:0
        })
    }

    render() {
        return (
            <div>
                <Heading/>
                <Container>
                    <GameMemory setStart={this.setStart} setPause={this.setPause} setReset={this.setReset} seconds={this.state.seconds}/>
                </Container>
                <Footerweb/>
            </div>
        );
    }
}

export default MemoryPage;