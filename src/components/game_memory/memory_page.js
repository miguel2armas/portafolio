import React, {Component} from 'react';
import GameMemory from "./game_memory";

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
                <GameMemory setStart={this.setStart} setPause={this.setPause} setReset={this.setReset} seconds={this.state.seconds}/>
            </div>
        );
    }
}

export default MemoryPage;