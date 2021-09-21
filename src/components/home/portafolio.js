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
import {Flip} from "react-reveal";

const Portafolio = ()=> {
    const context = useContext(GlobalContext)
    return (
        <div>
            <Container className="text-center pt-sm-5 pb-sm-3">
                <Flip right spy={context.state.checkedLengcount}>
                    {context.state.leng==='en'?(
                        <>
                            <h2>Portfolio</h2>
                            <h3>Most recent works</h3>
                        </>
                    ):(
                        <>
                            <h2>Portafolio</h2>
                            <h3>Trabajos más recientes</h3>
                        </>
                    )}
                </Flip>
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
                                        {context.state.leng==='en'?(
                                            <>
                                                <span className="fs-0 fs-sm-1">
                                                    Electronic games tournaments page in React, with backend in laravel and sale through MercadoPago payment gateway in process.
                                                </span>
                                            </>
                                        ):(
                                            <>
                                               <span className="fs-0 fs-sm-1">
                                                    Pagina de torneos de juegos electronicos en React, con backend en laravel y venta por medio de la pasarela de pago de MercadoPago en proceso.
                                                </span>
                                            </>
                                        )}
                                    </h4>
                                    {context.state.leng==='en'?(
                                        <>
                                            <a href="https://e-tournament.net" target="_blank" rel="noreferrer" className="btn btn-theme my-sm-4">Visit</a>
                                        </>
                                    ):(
                                        <>
                                            <a href="https://e-tournament.net" target="_blank" rel="noreferrer" className="btn btn-theme my-sm-4">Visitar</a>
                                        </>
                                    )}
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
                                        {context.state.leng==='en'?(
                                            <>
                                                <span className="fs-0 fs-sm-1">
                                                    Page in PrestaShop for the sale of international SIM card with GlobalPay payment gateway customized according to customer specifications.
                                                </span>
                                            </>
                                        ):(
                                            <>
                                               <span className="fs-0 fs-sm-1">
                                                    Pagina en PrestaShop de venta de SIM card internacional con pasarela de pago de GlobalPay personalizada según espesificaciones del cliente.
                                                </span>
                                            </>
                                        )}
                                    </h4>
                                    {context.state.leng==='en'?(
                                        <>
                                            <a href="https://tallmobile.com" target="_blank" rel="noreferrer" className="btn btn-theme my-sm-5">Visit</a>
                                        </>
                                    ):(
                                        <>
                                            <a href="https://tallmobile.com" target="_blank" rel="noreferrer" className="btn btn-theme my-sm-5">Visitar</a>
                                        </>
                                    )}
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
                                        {context.state.leng==='en'?(
                                            <>
                                                <span className="fs-0 fs-sm-1">
                                                    Application created in flutter for SIM card sales using provider and bloc method, with backend in laravel and GlobalPay payment gateway according to documentation.
                                                </span>
                                            </>
                                        ):(
                                            <>
                                               <span className="fs-0 fs-sm-1">
                                                    Aplicacion creada en flutter para venta de SIM card usando provider y metodo bloc, con backend en laravel y pasarela de pago de GlobalPay según documentacion.
                                                </span>
                                            </>
                                        )}
                                    </h4>
                                    {context.state.leng==='en'?(
                                        <>
                                            <a href="https://play.google.com/store/apps/details?id=engineeringserviceseu.co.tallmobile"
                                               target="_blank" rel="noreferrer" className="btn btn-theme my-sm-4">Visit</a>
                                        </>
                                    ):(
                                        <>
                                            <a href="https://play.google.com/store/apps/details?id=engineeringserviceseu.co.tallmobile"
                                               target="_blank" rel="noreferrer" className="btn btn-theme my-sm-4">Visitar</a>
                                        </>
                                    )}
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
                                        {context.state.leng==='en'?(
                                            <>
                                                <span className="fs-0 fs-sm-1">
                                                    Simple application created in native android using Kotlin code and a library to read QR codes.
                                                </span>
                                            </>
                                        ):(
                                            <>
                                               <span className="fs-0 fs-sm-1">
                                                    Simple aplicacion creada en android nativo usando codigo Kotlin y una libreria para leer codigos QR.
                                                </span>
                                            </>
                                        )}
                                    </h4>
                                    {context.state.leng==='en'?(
                                        <>
                                            <a href="https://play.google.com/store/apps/details?id=engineeringserviceseu.co.tallmobile"
                                               target="_blank" rel="noreferrer" className="btn btn-theme my-sm-5">Visit</a>
                                            <a href="https://github.com/miguel2armas/LectorQrSinPublicidad"
                                               target="_blank" rel="noreferrer" className="mx-2 btn btn-theme my-sm-5">Source code</a>
                                        </>
                                    ):(
                                        <>
                                            <a href="https://play.google.com/store/apps/details?id=engineeringserviceseu.co.tallmobile"
                                               target="_blank" rel="noreferrer" className="btn btn-theme my-sm-5">Visitar</a>
                                            <a href="https://github.com/miguel2armas/LectorQrSinPublicidad"
                                               target="_blank" rel="noreferrer" className="mx-2 btn btn-theme my-sm-5">Código Fuente</a>
                                        </>
                                    )}
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
                                        {context.state.leng==='en'?(
                                            <>
                                                <span className="fs-0 fs-sm-1">
                                                    Simple application created in native android using Java code and a library to read QR codes.
                                                </span>
                                            </>
                                        ):(
                                            <>
                                               <span className="fs-0 fs-sm-1">
                                                    Simple aplicacion creada en android nativo usando codigo Java y una libreria para leer codigos QR.
                                                </span>
                                            </>
                                        )}
                                    </h4>
                                    {context.state.leng==='en'?(
                                        <>
                                            <a href="https://play.google.com/store/apps/details?id=engineeringserviceseu.co.tallmobile"
                                               target="_blank" rel="noreferrer" className="btn btn-theme my-sm-5">Visit</a>
                                            <a href="https://github.com/miguel2armas/VerificarPEP"
                                               target="_blank" rel="noreferrer" className="mx-2 btn btn-theme my-sm-5">Source code</a>
                                        </>
                                    ):(
                                        <>
                                            <a href="https://play.google.com/store/apps/details?id=engineeringserviceseu.co.tallmobile"
                                               target="_blank" rel="noreferrer" className="btn btn-theme my-sm-5">Visitar</a>
                                            <a href="https://github.com/miguel2armas/VerificarPEP"
                                               target="_blank" rel="noreferrer" className="mx-2 btn btn-theme my-sm-5">Código Fuente</a>
                                        </>
                                    )}
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
                                        {context.state.leng==='en'?(
                                            <>
                                                <span className="fs-0 fs-sm-1">
                                                    Advertising page created according to customer specifications with visit counter and contact form.
                                                </span>
                                            </>
                                        ):(
                                            <>
                                               <span className="fs-0 fs-sm-1">
                                                    Página de publicidad creada según especificaciones del cliente con contador de visitas y formulario de contacto.
                                                </span>
                                            </>
                                        )}
                                    </h4>
                                    {context.state.leng==='en'?(
                                        <>
                                            <a href="https://saludmedicos.com" target="_blank" rel="noreferrer" className="btn btn-theme my-sm-5">Visit</a>
                                        </>
                                    ):(
                                        <>
                                            <a href="https://saludmedicos.com" target="_blank" rel="noreferrer" className="btn btn-theme my-sm-5">Visitar</a>
                                        </>
                                    )}
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