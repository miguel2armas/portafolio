import React, {useContext} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../assets/img/logo.svg";
import {Animated} from "react-animated-css";
import {RiHomeLine, RiMoonClearFill, RiSunLine} from "react-icons/ri";
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
          <Logo height="50" />
         </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         <Animated className="me-auto" animationIn="bounceInLeft" isVisible={true}>
          <Nav>
           <Nav.Link href="#features" className="border-end">
            <div className="text-center">
             <MdGames color={context.state.darkTheme?('white'):('black')}/>
            </div>
            <div className="text-center">
             <span className="text-theme-2">Games</span>
            </div>
           </Nav.Link>
           <Nav.Link href="#pricing" className="border-end">
            <div className="text-center">
             <FaBook color={context.state.darkTheme?('white'):('black')}/>
            </div>
            <div className="text-center">
             <span className="text-theme-2">About {context.state.darkTheme?('true'):('false')}</span>
            </div>
           </Nav.Link>
           <Nav.Link href="#pricing">
            <div className="text-center">
             <MdContactMail color={context.state.darkTheme?('white'):('black')}/>
            </div>
            <div className="text-center">
             <span className="text-theme-2">Contact</span>
            </div>
           </Nav.Link>
          </Nav>
         </Animated>

         <Nav>
          <Nav.Link className="text-center">
           <Flip right spy={context.state.checkedLengcount}>
              {context.state.leng==='en'?(
                  <div onClick={() => changeLengES()}> EN </div>
              ):(
                  <div onClick={() => changeLengEN()}> ES </div>
              )}
           </Flip>
          </Nav.Link>
          <Nav.Link className="text-center">
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