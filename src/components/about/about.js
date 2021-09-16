import React, {useContext, useState} from "react";
import {Tab, Tabs} from "react-bootstrap";
import {GlobalContext} from "../../context/GlobalContext";
import AboutWeb from "./about_web";
import AboutMe from "./about_me";

const About = () =>{
    const context = useContext(GlobalContext)
    const [key, setKey] = useState('home');
    return  <div className="py-md-5">
                <Tabs
                    fill
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="home" title={context.state.leng==='en'?('About the website'):('Sobre el sitio web')}>
                        <AboutWeb/>
                    </Tab>
                    <Tab eventKey="profile" title={context.state.leng==='en'?('About me'):('Sobre mi')}>
                        <AboutMe/>
                    </Tab>
                </Tabs>
            </div>
}
export default About