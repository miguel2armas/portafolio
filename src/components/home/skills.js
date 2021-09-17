import React, {useContext} from 'react';
import {Accordion, Col, Container, ProgressBar, Row} from "react-bootstrap";
import {ReactComponent as CodeSlash} from "../../assets/img/icons/code-slash.svg";
import {ReactComponent as Braces} from "../../assets/img/icons/braces.svg";
import {ReactComponent as Bookmark} from "../../assets/img/icons/bookmark-fill.svg";
import {GlobalContext} from "../../context/GlobalContext";
import {Flip} from "react-reveal";

const Skills = ()=> {
    const context = useContext(GlobalContext)
    return (
        <div>
            <Container className="text-center pt-sm-5 pb-sm-3">
                <Flip right spy={context.state.checkedLengcount}>
                    {context.state.leng==='en'?(
                        <>
                            <h2>Skills</h2>
                            <h3>My technical level</h3>
                        </>
                    ):(
                        <>
                            <h2>Habilidades</h2>
                            <h3>Mi nivel técnico</h3>
                        </>
                    )}
                </Flip>
            </Container>
            <Accordion defaultActiveKey="0">
                <Row>
                    <Col xs={12} md={4}>
                        <Accordion.Item eventKey="0" className={context.state.darkTheme?('bg-dark'):('bg-light')}>
                            <Accordion.Header className="bg-dark">
                                <CodeSlash className="mx-2" width="30" height="30"/>
                                <Flip right spy={context.state.checkedLengcount}>
                                    {context.state.leng==='en'?(
                                        <>
                                            Developer language
                                        </>
                                    ):(
                                        <>
                                            Lenguajes
                                        </>
                                    )}
                                </Flip>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex justify-content-between my-2">
                                    <b>HTML</b><b>100%</b>
                                </div>
                                <ProgressBar variant="success" now={100}/>
                                <div className="d-flex justify-content-between my-2">
                                    <b>CSS</b><b>80%</b>
                                </div>
                                <ProgressBar variant="success" now={80}/>
                                <div className="d-flex justify-content-between my-2">
                                    <b>JAVASCRIPT</b><b>90%</b>
                                </div>
                                <ProgressBar variant="success" now={90}/>
                                <div className="d-flex justify-content-between my-2">
                                    <b>PHP</b><b>100%</b>
                                </div>
                                <ProgressBar variant="success" now={100}/>
                                <div className="d-flex justify-content-between my-2">
                                    <b>DART</b><b>80%</b>
                                </div>
                                <ProgressBar variant="success" now={80}/>
                                <div className="d-flex justify-content-between my-2">
                                    <b>JAVA</b><b>50%</b>
                                </div>
                                <ProgressBar variant="success" now={50}/>
                                <div className="d-flex justify-content-between my-2">
                                    <b>KOTLIN</b><b>40%</b>
                                </div>
                                <ProgressBar variant="success" now={40}/>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Col>
                    <Col xs={12} md={4}>
                        <Accordion.Item eventKey="1" className={context.state.darkTheme?('bg-dark'):('bg-light')}>
                            <Accordion.Header>
                                <Braces className="mx-2" width="30" height="30"/>
                                <Flip right spy={context.state.checkedLengcount}>
                                    {context.state.leng==='en'?(
                                        <>
                                            Developer framework
                                        </>
                                    ):(
                                        <>
                                            Framework
                                        </>
                                    )}
                                </Flip>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex justify-content-between my-2">
                                    <b>BOOSTRAP</b><b>90%</b>
                                </div>
                                <ProgressBar variant="success" now={90}/>
                                <div className="d-flex justify-content-between my-2">
                                    <b>REACT</b><b>90%</b>
                                </div>
                                <ProgressBar variant="success" now={90}/>

                                <div className="d-flex justify-content-between my-2">
                                    <b>LARAVEL</b><b>90%</b>
                                </div>
                                <ProgressBar variant="success" now={90}/>
                                <div className="d-flex justify-content-between my-2">
                                    <b>ANDROID NATIVO</b><b>60%</b>
                                </div>
                                <ProgressBar variant="success" now={60}/>
                                <div className="d-flex justify-content-between my-2">
                                    <b>FLUTTER</b><b>80%</b>
                                </div>
                                <ProgressBar variant="success"   now={80}/>
                                <div className="d-flex justify-content-between my-2">
                                    <b>GIT</b><b>80%</b>
                                </div>
                                <ProgressBar variant="success"   now={80}/>
                                <div className="d-flex justify-content-between my-2">
                                    <b>PRESTASHOP</b><b>80%</b>
                                </div>
                                <ProgressBar variant="success"   now={80}/>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Col>
                    <Col xs={12} md={4}>
                        <Accordion.Item eventKey="2" className={context.state.darkTheme?('bg-dark'):('bg-light')}>
                            <Accordion.Header>
                                <Bookmark className="mx-2" width="30" height="30"/>
                                <Flip right spy={context.state.checkedLengcount}>
                                    {context.state.leng==='en'?(
                                        <>
                                            Additional skills
                                        </>
                                    ):(
                                        <>
                                            Habilidades adicionales
                                        </>
                                    )}
                                </Flip>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex justify-content-between my-2">
                                    <b>GOOGLE ADWORDS (SEM)</b><b>90%</b>
                                </div>
                                <ProgressBar variant="success" now={90}/>
                                <div className="d-flex justify-content-between my-2">
                                    <b>SEO</b><b>80%</b>
                                </div>
                                <ProgressBar variant="success" now={80}/>
                                <div className="d-flex justify-content-between my-2">
                                    {context.state.leng==='en'?(
                                        <>
                                            <b>PAYMENT GATEWAY (MERCADOPAGO, PAYU, GLOBALPAY)</b><b>100%</b>
                                        </>
                                    ):(
                                        <>
                                            <b>PASARELA DE PAGO (MERCADOPAGO, PAYU, GLOBALPAY)</b><b>100%</b>
                                        </>
                                    )}
                                </div>
                                <ProgressBar variant="success" now={100}/>
                                <div className="d-flex justify-content-between my-2">
                                    {context.state.leng==='en'?(
                                        <>
                                            <b>IMAGE OPTIMIZATION (WEBP AND SVG)</b><b>100%</b>
                                        </>
                                    ):(
                                        <>
                                            <b>OPTIMIZACIÓN DE IMAGENES (WEBP Y SVG)</b><b>100%</b>
                                        </>
                                    )}
                                </div>
                                <ProgressBar variant="success" now={100}/>
                                <div className="d-flex justify-content-between my-2">
                                    {context.state.leng==='en'?(
                                        <>
                                            <b>REDUX IN REACT</b><b>80%</b>
                                        </>
                                    ):(
                                        <>
                                            <b>REDUX EN REACT</b><b>80%</b>
                                        </>
                                    )}
                                </div>
                                <ProgressBar variant="success" now={80}/>
                                <div className="d-flex justify-content-between my-2">
                                    {context.state.leng==='en'?(
                                        <>
                                            <b>PROVIDER IN FLUTTER</b><b>80%</b>
                                        </>
                                    ):(
                                        <>
                                            <b>PROVIDER EN FLUTTER</b><b>80%</b>
                                        </>
                                    )}
                                </div>
                                <ProgressBar variant="success" now={80}/>
                                <div className="d-flex justify-content-between my-2">
                                    {context.state.leng==='en'?(
                                        <>
                                            <b>BLOC IN FLUTTER</b><b>60%</b>
                                        </>
                                    ):(
                                        <>
                                            <b>BLOC EN FLUTTER</b><b>60%</b>
                                        </>
                                    )}
                                </div>
                                <ProgressBar variant="success" now={60}/>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Col>
                </Row>
            </Accordion>
        </div>
    );
}

export default Skills;