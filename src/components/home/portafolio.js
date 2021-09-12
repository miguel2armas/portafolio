import React, {useContext} from 'react';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import EtournamentImg from "../../assets/img/img_page/e-tournament.webp"
import TallmobileImg from "../../assets/img/img_page/tallmobile.webp"
import TallmobileApkImg from "../../assets/img/img_page/tallmobile_apk.webp"
import AllCodeReaderImg from "../../assets/img/img_page/allcodereader.webp"
import Enfermedic24Img from "../../assets/img/img_page/enfermedic24.webp"
import SaludMedicosImg from "../../assets/img/img_page/saludmedicos.webp"
import VerificarPep from "../../assets/img/img_page/verificarPep.webp"
import FondTransp from "../../assets/img/img_page/fond_transp.png"
import {GlobalContext} from "../../context/GlobalContext";

const Portafolio = ()=> {
    const context = useContext(GlobalContext)
    return (
        <div>
            <Container className="text-center pt-sm-5 pb-sm-3">
                <h2>Portfolio</h2>
                <h3>Most recent work</h3>
            </Container>
            <Carousel className={context.state.darkTheme?('bg-dark'):('bg-light')} >
                <Carousel.Item interval={4500}>
                    <img src={FondTransp} alt="fondo-transparente"/>
                    <Carousel.Caption>
                        <Row>
                            <Col xs={8} sm={6}>
                                <img src={EtournamentImg} className="rounded img-fluid" alt="e-tournament"/>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className="text-start">
                                    <h3 className={context.state.darkTheme?('text-white'):('text-dark')}><span className="fs-1 fs-sm-2">E-tournament</span></h3>
                                    <h4 className={context.state.darkTheme?('text-white'):('text-dark')}>
                                            <span className="fs-0 fs-sm-1">Pagina de torneos de juegos electronicos
                                            con creador de torneos en React, con backend en laravel y venta por medio de la pasarela de pago de MercadoPago en proceso.
                                        </span></h4>
                                    <a href="https://e-turnament.net" target="_blank" rel="noreferrer" className="btn btn-theme my-sm-5">Visitar</a>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4500}>
                    <img src={FondTransp} alt="fondo-transparente"/>
                    <Carousel.Caption>
                        <Row>
                            <Col xs={8} sm={6}>
                                <img src={TallmobileImg} className="rounded img-fluid" alt="tallmobile"/>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className="text-start">
                                    <h3 className={context.state.darkTheme?('text-white'):('text-dark')}><span className="fs-1 fs-sm-2">Tallmobile</span></h3>
                                    <h4 className={context.state.darkTheme?('text-white'):('text-dark')}>
                                            <span className="fs-0 fs-sm-1">Pagina en PrestaShop de venta de SIM card
                                        internacional con pasarela de pago de GlobalPay personalizada según espesificaciones del cliente.</span> </h4>
                                    <a href="https://tallmobile.com" target="_blank" rel="noreferrer" className="btn btn-theme my-sm-5">Visitar</a>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4500}>
                    <img src={FondTransp} alt="fondo-transparente"/>
                    <Carousel.Caption>
                        <Row>
                            <Col xs={8} sm={6}>
                                <img src={TallmobileApkImg} className="rounded img-fluid" alt="tallmobile apk"/>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className="text-start">
                                    <h3 className={context.state.darkTheme?('text-white'):('text-dark')}><span className="fs-1 fs-sm-2">Tallmobile Apk</span></h3>
                                    <h4 className={context.state.darkTheme?('text-white'):('text-dark')}>
                                            <span className="fs-0 fs-sm-1">Aplicacion creada en flutter para venta
                                        de SIM card usando provider y metodo bloc, con backend en laravel y pasarela de pago de GlobalPay según documentacion.</span></h4>
                                    <a href="https://play.google.com/store/apps/details?id=engineeringserviceseu.co.tallmobile"
                                       target="_blank" rel="noreferrer" className="btn btn-theme my-sm-5">Visitar</a>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4500}>
                    <img src={FondTransp} alt="fondo-transparente"/>
                    <Carousel.Caption>
                        <Row>
                            <Col xs={8} sm={6}>
                                <img src={AllCodeReaderImg} className="rounded img-fluid" alt="tallmobile apk"/>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className="text-start">
                                    <h3 className={context.state.darkTheme?('text-white'):('text-dark')}><span className="fs-1 fs-sm-2">AllCodeReader Apk</span></h3>
                                    <h4 className={context.state.darkTheme?('text-white'):('text-dark')}>
                                            <span className="fs-0 fs-sm-1">Simple aplicacion creada en android nativo
                                            usando codigo Kotlin y una libreria para leer codigos QR.</span>
                                    </h4>
                                    <a href="https://play.google.com/store/apps/details?id=engineeringserviceseu.co.tallmobile"
                                       target="_blank" rel="noreferrer" className="btn btn-theme my-sm-5">Visitar</a>
                                    <a href="https://github.com/miguel2armas/LectorQrSinPublicidad"
                                       target="_blank" rel="noreferrer" className="mx-2 btn btn-theme my-sm-5">Codigo Fuente</a>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4500}>
                    <img src={FondTransp} alt="fondo-transparente"/>
                    <Carousel.Caption>
                        <Row>
                            <Col xs={8} sm={6}>
                                <img src={VerificarPep} className="rounded img-fluid" alt="verificarPEP apk"/>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className="text-start">
                                    <h3 className={context.state.darkTheme?('text-white'):('text-dark')}><span className="fs-1 fs-sm-2">VerificarPEP Apk</span></h3>
                                    <h4 className={context.state.darkTheme?('text-white'):('text-dark')}>
                                            <span className="fs-0 fs-sm-1">Simple aplicacion creada en android nativo
                                            usando codigo Java y una libreria para leer codigos QR.</span></h4>
                                    <a href="https://play.google.com/store/apps/details?id=engineeringserviceseu.co.tallmobile"
                                       target="_blank" rel="noreferrer" className="btn btn-theme my-sm-5">Visitar</a>
                                    <a href="https://github.com/miguel2armas/VerificarPEP"
                                       target="_blank" rel="noreferrer" className="mx-2 btn btn-theme my-sm-5">Codigo Fuente</a>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4500}>
                    <img src={FondTransp} alt="fondo-transparente"/>
                    <Carousel.Caption>
                        <Row>
                            <Col xs={8} sm={6}>
                                <img src={Enfermedic24Img} className="rounded img-fluid" alt="Enfermedic24"/>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className="text-start">
                                    <h3 className={context.state.darkTheme?('text-white'):('text-dark')}>
                                        <span className="fs-1 fs-sm-2">Enfermedic24</span></h3>
                                    <h4 className={context.state.darkTheme?('text-white'):('text-dark')}>
                                            <span className="fs-0 fs-sm-1">Pagina de publicidad creada
                                            segun espesificaciones del cliente con contador de visitas, con backend en laravel y
                                            sistema de historial medico para pacientes personalizado.</span></h4>
                                    <a href="https://enfermedic24.com"
                                       target="_blank" rel="noreferrer" className="btn btn-theme my-sm-5">Visitar</a>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4500}>
                    <img src={FondTransp} alt="fondo-transparente"/>
                    <Carousel.Caption>
                        <Row>
                            <Col xs={8} sm={6}>
                                <img src={SaludMedicosImg} className="rounded img-fluid" alt="SaludMedicos"/>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className="text-start">
                                    <h3 className={context.state.darkTheme?('text-white'):('text-dark')}>
                                        <span className="fs-1 fs-sm-2">SaludMedicos</span></h3>
                                    <h4 className={context.state.darkTheme?('text-white'):('text-dark')}>
                                            <span className="fs-0 fs-sm-1">Pagina de publicidad creada
                                            segun espesificaciones del cliente con contador de visitas y formulario de contacto.</span></h4>
                                    <a href="https://saludmedicos.com/"
                                       target="_blank" rel="noreferrer" className="btn btn-theme my-sm-5">Visitar</a>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Portafolio;