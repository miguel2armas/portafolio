import React, {Component} from 'react';
import Footerweb from "../footerweb";
import Skills from "./skills";
import Portafolio from "./portafolio"
import TimeLine from "./time_line";
import Heading from "../heading";
import HomeInit from "./home_init";
import MemoryPage from "../game_memory/memory_page";
import About from "../about/about";
import ContactPage from "../contact/contact_page";
class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Heading/>
                <div className="container-lg">
                    <div id="home">
                        <HomeInit/>
                    </div>
                    <Skills/>
                    <TimeLine/>
                    <Portafolio/>
                    <div id="memory">
                        <MemoryPage/>
                    </div>

                    <div id="contact">
                        <ContactPage/>
                    </div>

                    <div id="about">
                        <About/>
                    </div>
                </div>
                <Footerweb/>
            </div>
        );
    }
}

export default Home;