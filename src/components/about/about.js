import React, {useContext, useState} from "react";
import {Tab, Tabs} from "react-bootstrap";
import {GlobalContext} from "../../context/GlobalContext";

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

                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                            <h6 className="border-bottom pb-2 mb-0">Librerias usadas en el sitio web</h6>
                            <div className="d-flex text-muted pt-3">
                                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#007bff"/>
                                    <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                                </svg>
                                <p className="pb-3 mb-0 small lh-sm border-bottom">
                                    <strong className="d-block text-gray-dark"><a href="https://react-bootstrap.github.io/">https://react-bootstrap.github.io/</a></strong>
                                    Libreria usada en el diseño estetico de la pagina.
                                </p>
                            </div>
                            <div className="d-flex text-muted pt-3">
                                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#e83e8c"/>
                                    <text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text>
                                </svg>
                                <p className="pb-3 mb-0 small lh-sm border-bottom">
                                    <strong className="d-block text-gray-dark"><a href="https://react-icons.github.io/react-icons/">https://react-icons.github.io/react-icons/</a></strong>
                                    Libreria usada en los iconos del sitio web.
                                </p>
                            </div>
                            <div className="d-flex text-muted pt-3">
                                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#6f42c1"/>
                                    <text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text>
                                </svg>
                                <p className="pb-3 mb-0 small lh-sm border-bottom">
                                    <strong className="d-block text-gray-dark"><a href="https://reactrouter.com/web/guides/quick-start">https://reactrouter.com/web/guides/quick-start</a></strong>
                                    Libreria usada para crear las rutas del sitio web
                                </p>
                            </div>
                            <small className="d-block text-end mt-3">
                                <a href="#">All updates</a>
                            </small>
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title={context.state.leng==='en'?('About me'):('Sobre mi')}>
                        data2
                    </Tab>
                </Tabs>
            </div>
}
export default About