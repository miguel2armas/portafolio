import React, {useContext} from "react";
import {Col, Row} from "react-bootstrap";
import LogMig from "../../assets/img/logomiguel.svg";
import {Animated} from "react-animated-css";
import {Link} from "react-router-dom";
import {ReactComponent as ChatDots} from "../../assets/img/icons/chat-dots-fill.svg";
import EngranajeHome from "../../assets/img/logo_inicio_miguel.svg";
import {GlobalContext} from "../../context/GlobalContext";
import {Flip} from "react-reveal";

const HomeInit = () => {
    const context = useContext(GlobalContext)
  return <Row>
      <Col xs={12} sm={5}>
          <div className="py-4">
              <div className="py-sm-5 py-2">
                  <object type="image/svg+xml" data={LogMig}>svg-animation</object>
              </div>
              <Animated className="me-auto" animationIn="bounceInLeft" isVisible={true}>
                  <h1 className="py-4">
                      <Flip right spy={context.state.checkedLengcount}>
                          {context.state.leng==='en'?(
                              <>Hi, I'am Miguel</>
                          ):(
                              <>Hola, Soy Miguel</>
                          )}
                      </Flip>
                  </h1>
              </Animated>
              <Animated className="me-auto" animationIn="flipInY" isVisible={true}>
                  <Flip right spy={context.state.checkedLengcount}>
                      {context.state.leng==='en'?(
                          <>
                              <h5>Full Stack developer</h5>
                              <p>I am passionate about programming and new challenges, creating and improving, always looking for a better level, I have great experience creating web pages using "react" in frontend and "laravel" in backend.</p>
                              <p>I work with the latest technologies, always seeking to improve and optimize the projects I work on, seeking excellence in each one of them.</p>
                              <Link to="/contact" className="btn btn-theme btn-lg">Contact me
                                  <span className="py-1 pl-3"><ChatDots width="25" height="25"/></span>
                              </Link>
                          </>
                      ):(
                          <>
                              <h5>Desarrollador Full Stack</h5>
                              <p>Me apasiona la programación y los nuevos retos, crear y mejorar, siempre buscando un mejor nivel, tengo gran experiencia creando páginas web usando "react" en frontend y "laravel" en backend.</p>
                              <p>Trabajo con las últimas tecnologías, buscando siempre mejorar y optimizar los proyectos en los que trabajo, buscando la excelencia en cada uno de ellos.</p>
                              <Link to="/contact" className="btn btn-theme btn-lg">Contactame
                                  <span className="py-1 pl-3"><ChatDots width="25" height="25"/></span>
                              </Link>
                          </>
                      )}
                  </Flip>


              </Animated>
          </div>
      </Col>
      <Col xs={12} sm={7} className="bg-home">
          <div className="py-3">
              <object type="image/svg+xml" data={EngranajeHome}>svg-animation</object>
          </div>
      </Col>
  </Row>
}
export default HomeInit