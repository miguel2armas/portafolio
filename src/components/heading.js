import React, {useContext} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../assets/img/logo.svg";
import {Animated} from "react-animated-css";
import {RiMoonClearFill, RiSunLine} from "react-icons/ri";
import {MdContactMail, MdGames} from "react-icons/md";
import {FaBook} from "react-icons/fa";
import {Flip, Roll} from "react-reveal";
import {GlobalContext} from "../context/GlobalContext";

 const Heading = () => {
  const context = useContext(GlobalContext)
  const {changeThemeTrue, changeThemeFalse, changeLengES, changeLengEN} = useContext(GlobalContext)
  return(
      <Navbar className="nav-masthead" bg={context.state.darkTheme?('dark'):('light')} variant={context.state.darkTheme?('dark'):('light')} expand="lg">
       <Container>
        <Navbar.Brand>
         <Link to="/">
          <Logo className="img-top img-top-md" />
         </Link>
        </Navbar.Brand>
        <Nav.Link className="text-center only-movil">
         <Flip right spy={context.state.checkedLengcount}>
          {context.state.leng==='en'?(
              <div className={context.state.darkTheme?('text-white'):('text-dark')} onClick={() => changeLengES()}> ES </div>
          ):(
              <div className={context.state.darkTheme?('text-white'):('text-dark')} onClick={() => changeLengEN()}> EN </div>
          )}
         </Flip>
        </Nav.Link>
        <Nav.Link className="text-center only-movil">
         <Roll spy={context.state.checkedThemecount}>
          {context.state.darkTheme?(
              <div onClick={() => changeThemeFalse()}>
               <RiSunLine title="sun" size="1.5em" color={context.state.darkTheme?('white'):('black')}/>
              </div>
          ):(
              <div onClick={() => changeThemeTrue()}>
               <RiMoonClearFill title="moon" size="1.5em" color={context.state.darkTheme?('white'):('black')}/>
              </div>
          )}
         </Roll>

        </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         <Animated className="me-auto" animationIn="bounceInLeft" isVisible={true}>
          <Nav>
           <Nav.Link className="border-end">
            <Link className="text-nav-decoration" to="/memory">
              <div className="text-center">
               <MdGames color={context.state.darkTheme?('white'):('black')}/>
              </div>
              <div className="text-center">
              <span className="text-theme-2">
                 <Flip right spy={context.state.checkedLengcount}>
                     {context.state.leng==='en'?(
                         <>
                          Games
                         </>
                     ):(
                         <>
                          Juegos
                         </>
                     )}
                 </Flip>
              </span>
              </div>
            </Link>
           </Nav.Link>
           <Nav.Link href="#pricing" className="border-end">
               <Link className="text-nav-decoration" to="/about">
                   <div className="text-center">
                       <FaBook color={context.state.darkTheme?('white'):('black')}/>
                   </div>
                   <div className="text-center">
             <span className="text-theme-2">
                <Flip right spy={context.state.checkedLengcount}>
                    {context.state.leng==='en'?(
                        <>
                            About
                        </>
                    ):(
                        <>
                            Acerca de
                        </>
                    )}
                </Flip>
              </span>
                   </div>
               </Link>
           </Nav.Link>
           <Nav.Link href="#pricing">
               <Link className="text-nav-decoration" to="/contact">
                   <div className="text-center">
                       <MdContactMail color={context.state.darkTheme?('white'):('black')}/>
                   </div>
                   <div className="text-center">
                     <span className="text-theme-2">
                        <Flip right spy={context.state.checkedLengcount}>
                            {context.state.leng==='en'?(
                                <>
                                    Contact
                                </>
                            ):(
                                <>
                                    Contacto
                                </>
                            )}
                        </Flip>
                      </span>
                   </div>
               </Link>
           </Nav.Link>
          </Nav>
         </Animated>

         <Nav>
          <Nav.Link className="text-center only-web">
           <Flip right spy={context.state.checkedLengcount}>
              {context.state.leng==='en'?(
                  <div onClick={() => changeLengES()}> ES </div>
              ):(
                  <div onClick={() => changeLengEN()}> EN </div>
              )}
           </Flip>
          </Nav.Link>
          <Nav.Link className="text-center only-web">
           <Roll spy={context.state.checkedThemecount}>
            {context.state.darkTheme?(
                <div onClick={() => changeThemeFalse()}>
                 <RiSunLine title="sun" size="2em" color={context.state.darkTheme?('white'):('black')}/>
                </div>
            ):(
                <div onClick={() => changeThemeTrue()}>
                 <RiMoonClearFill title="moon" size="2em" color={context.state.darkTheme?('white'):('black')}/>
                </div>
            )}
           </Roll>

          </Nav.Link>
         </Nav>

        </Navbar.Collapse>
       </Container>
      </Navbar>
  );
}
export default Heading