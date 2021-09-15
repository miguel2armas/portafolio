import React, {useContext, useState} from "react";
import {Tab, Tabs} from "react-bootstrap";
import {GlobalContext} from "../../context/GlobalContext";
import reactBoostrapImg from "../../assets/img/ico/favicon.ico"
import reactIcosImg from "../../assets/img/ico/reacticons.ico"
import reactRouterDonImg from "../../assets/img/ico/reactRouterDom.ico"
import firebaseIcoImg from "../../assets/img/ico/firebaseico.ico"
import reactAnimateImg from "../../assets/img/ico/react_animated.ico"
import npmIcoImg from "../../assets/img/ico/npmico.ico"
import reactIcoImg from "../../assets/img/ico/reactico.ico"
import freepikImg from "../../assets/img/ico/frepikico.ico"
import svgatoricoImg from "../../assets/img/ico/svgatorico.ico"
import githubImg from "../../assets/img/ico/github.ico"
import vscicoImg from "../../assets/img/ico/vscico.ico"
import nodejsImg from "../../assets/img/ico/nodejsico.ico"
import giticoImg from "../../assets/img/ico/gitico.ico"
import Fade from 'react-reveal/Fade';

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
                        <Fade right spy={context.state.checkedLengcount}>
                            <div className={context.state.darkTheme?("my-3 p-3 bg-body rounded shadow-sm"):("my-3 p-3 bg-light rounded shadow-sm")}>
                                <h6 className="border-bottom pb-2 mb-0">{context.state.leng==='en'?("Main library"):("Librería principal")}</h6>
                                <div className="d-flex text-muted pt-3">
                                    <img alt="reactico" src={reactIcoImg} width={32} height={32} className="m-1"/>
                                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                                        <strong className="d-block text-gray-dark"><a href="https://es.reactjs.org/">https://es.reactjs.org/</a></strong>
                                        {context.state.leng==='en'?("Main library to create the website."):("Librería principal para crear el sitio web.")}
                                    </p>
                                </div>

                            </div>
                        </Fade>
                        <Fade right spy={context.state.checkedLengcount}>
                            <div className={context.state.darkTheme?("my-3 p-3 bg-body rounded shadow-sm"):("my-3 p-3 bg-light rounded shadow-sm")}>
                                <h6 className="border-bottom pb-2 mb-0">
                                    {context.state.leng==='en'?("Applications used for the creation of this website."):("Aplicaciones usadas para la creación de este sitio web.")}
                                </h6>
                                <div className="d-flex text-muted pt-3">
                                    <img alt="nodejs" src={nodejsImg} width={32} height={32} className="m-1"/>
                                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                                        <strong className="d-block text-gray-dark"><a href="https://nodejs.org/es/">https://nodejs.org/es/</a></strong>
                                        {context.state.leng==='en'?("Application used for the creation of the website."):("Aplicación usada para la creación del sitio web.")}
                                    </p>
                                </div>
                                <div className="d-flex text-muted pt-3">
                                    <img alt="nodejs" src={giticoImg} width={32} height={32} className="m-1"/>
                                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                                        <strong className="d-block text-gray-dark"><a href="https://git-scm.com/">https://git-scm.com/</a></strong>
                                        {context.state.leng==='en'?("Application used for versioning."):("Aplicación usada para el versionamiento.")}
                                    </p>
                                </div>
                                <div className="d-flex text-muted pt-3">
                                    <img alt="nodejs" src={githubImg} width={32} height={32} className="m-1"/>
                                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                                        <strong className="d-block text-gray-dark"><a href="https://github.com/">https://github.com/</a></strong>
                                        {context.state.leng==='en'?("Page used to save versioning and page launch."):("Pagina usada para guardar el versionamiento y el lanzamiento de la pagina.")}
                                    </p>
                                </div>
                                <div className="d-flex text-muted pt-3">
                                    <img alt="nodejs" src={vscicoImg} width={32} height={32} className="m-1"/>
                                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                                        <strong className="d-block text-gray-dark"><a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a></strong>
                                        {context.state.leng==='en'?("Application used for the creation of the website."):("Aplicación usada para la creación del sitio web.")}
                                    </p>
                                </div>

                            </div>
                        </Fade>

                        <Fade right spy={context.state.checkedLengcount}>
                            <div className={context.state.darkTheme?("my-3 p-3 bg-body rounded shadow-sm"):("my-3 p-3 bg-light rounded shadow-sm")}>
                                <h6 className="border-bottom pb-2 mb-0">
                                    {context.state.leng==='en'?("Libraries used on the website."):("Librerías usadas en el sitio web.")}
                                </h6>
                                <div className="d-flex text-muted pt-3">
                                    <img alt="reactboostrap" src={reactBoostrapImg} width={32} height={32} className="m-1"/>
                                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                                        <strong className="d-block text-gray-dark"><a href="https://react-bootstrap.github.io/">https://react-bootstrap.github.io/</a></strong>
                                        {context.state.leng==='en'?("Library used in the aesthetic design of the website."):("Libreria usada en el diseño estetico del sitio web.")}
                                    </p>
                                </div>
                                <div className="d-flex text-muted pt-3">
                                    <img alt="reacticons" src={reactIcosImg} width={32} height={32} className="m-1"/>
                                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                                        <strong className="d-block text-gray-dark"><a href="https://react-icons.github.io/react-icons/">https://react-icons.github.io/react-icons/</a></strong>
                                        {context.state.leng==='en'?("Library used in website icons."):("Librería usada en los iconos del sitio web.")}
                                    </p>
                                </div>
                                <div className="d-flex text-muted pt-3">
                                    <img alt="reactrouterdon" src={reactRouterDonImg} width={32} height={32} className="m-1"/>
                                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                                        <strong className="d-block text-gray-dark"><a href="https://reactrouter.com/web/guides/quick-start">https://reactrouter.com/web/guides/quick-start</a></strong>
                                        {context.state.leng==='en'?("Library used to create the website routes."):("Librería usada para crear las rutas del sitio web.")}
                                    </p>
                                </div>
                                <div className="d-flex text-muted pt-3">
                                    <img alt="firebase" src={firebaseIcoImg} width={32} height={32} className="m-1"/>
                                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                                        <strong className="d-block text-gray-dark"><a href="https://firebase.google.com/docs/web/setup?hl=es">https://firebase.google.com/docs/web/setup?hl=es</a></strong>
                                        {context.state.leng==='en'?("Library used for the website database."):("Librería usada para la base de datos del sitio web.")}
                                    </p>
                                </div>
                                <div className="d-flex text-muted pt-3">
                                    <img alt="firebase" src={reactAnimateImg} width={32} height={32} className="m-1"/>
                                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                                        <strong className="d-block text-gray-dark"><a href="https://www.npmjs.com/package/react-animated-css">https://www.npmjs.com/package/react-animated-css</a></strong>
                                        {context.state.leng==='en'?("Library used for website animations."):("Librería usada para las animaciones del sitio web.")}
                                    </p>
                                </div>
                                <div className="d-flex text-muted pt-3">
                                    <img alt="npm ico" src={npmIcoImg} width={32} height={32} className="m-1"/>
                                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                                        <strong className="d-block text-gray-dark"><a href="https://www.npmjs.com/package/react-card-flip">https://www.npmjs.com/package/react-card-flip</a></strong>
                                        {context.state.leng==='en'?("Library used for the memory game."):("Librería usada para el juego de memoria.")}
                                    </p>
                                </div>
                                <div className="d-flex text-muted pt-3">
                                    <img alt="firebase" src={reactIcoImg} width={32} height={32} className="m-1"/>
                                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                                        <strong className="d-block text-gray-dark"><a href="https://www.react-reveal.com/">https://www.react-reveal.com/</a></strong>
                                        {context.state.leng==='en'?("Library used for animations in the memory game."):("Librería usada para animaciones en el juego de memoria.")}
                                    </p>
                                </div>
                                <div className="d-flex text-muted pt-3">
                                    <img alt="npm ico" src={npmIcoImg} width={32} height={32} className="m-1"/>
                                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                                        <strong className="d-block text-gray-dark"><a href="https://www.npmjs.com/package/use-sound">https://www.npmjs.com/package/use-sound</a></strong>
                                        {context.state.leng==='en'?("Library used for game sound."):("Librería usada para el sonido del juego.")}
                                    </p>
                                </div>
                            </div>
                        </Fade>
                        <Fade right spy={context.state.checkedLengcount}>
                            <div className={context.state.darkTheme?("my-3 p-3 bg-body rounded shadow-sm"):("my-3 p-3 bg-light rounded shadow-sm")}>
                                <h6 className="border-bottom pb-2 mb-0">Paginas web usadas para crear la pagina</h6>
                                <div className="d-flex text-muted pt-3">
                                    <img alt="freepik" src={freepikImg} width={32} height={32} className="m-1"/>
                                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                                        <strong className="d-block text-gray-dark"><a href="https://www.freepik.es/">https://www.freepik.es/</a></strong>
                                        {context.state.leng==='en'?("Images collected on the website."):("Imágenes recopiladas en el sitio web.")}
                                    </p>
                                </div>
                                <div className="d-flex text-muted pt-3">
                                    <img alt="svgator" src={svgatoricoImg} width={32} height={32} className="m-1"/>
                                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                                        <strong className="d-block text-gray-dark"><a href="https://www.svgator.com/">https://www.svgator.com/</a></strong>
                                        {context.state.leng==='en'?("Used to create animations in SVG images."):("Usada para crear las animaciones en las imágenes SVG.")}
                                    </p>
                                </div>

                            </div>
                        </Fade>
                    </Tab>
                    <Tab eventKey="profile" title={context.state.leng==='en'?('About me'):('Sobre mi')}>
                        data2
                    </Tab>
                </Tabs>
            </div>
}
export default About