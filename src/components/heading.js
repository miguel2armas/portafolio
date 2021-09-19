import React, {useContext} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {ReactComponent as Logo} from "../assets/img/logo.svg";
import {ReactComponent as EsBlack} from "../assets/img/icons/es_img.svg";
import {ReactComponent as EnBlack} from "../assets/img/icons/en_img.svg";
import {ReactComponent as EsWhite} from "../assets/img/icons/es_white.svg";
import {ReactComponent as EnWhite} from "../assets/img/icons/en_white.svg";
import {Animated} from "react-animated-css";
import {RiMoonClearFill, RiSunLine} from "react-icons/ri";
import {MdContactMail, MdGames} from "react-icons/md";
import {FaBook} from "react-icons/fa";
import {Flip, Roll} from "react-reveal";
import {GlobalContext} from "../context/GlobalContext";
 const Heading = () => {
  const context = useContext(GlobalContext)
  const {changeThemeTrue, changeThemeFalse, changeLengES, changeLengEN} = useContext(GlobalContext)
     const scrollGame = ()=>{
         const element = document.getElementById('memory');
         const y = element.getBoundingClientRect().top + window.pageYOffset -40;
         window.scrollTo({top: y, behavior: 'smooth'});
     }
     const scrollAbout = ()=>{
         const element = document.getElementById('about');
         const y = element.getBoundingClientRect().top + window.pageYOffset -70;
         window.scrollTo({top: y, behavior: 'smooth'});
     }
     const scrollContact = ()=>{
         const element = document.getElementById('contact');
         const y = element.getBoundingClientRect().top + window.pageYOffset -50;
         window.scrollTo({top: y, behavior: 'smooth'});
     }
     const scrollHome = (e)=>{
      e.preventDefault()
         window.scrollTo({top: 0, behavior: 'smooth'});
     }
  return(
      <Navbar collapseOnSelect fixed={"top"} className="nav-masthead" bg={context.state.darkTheme?('dark'):('light')} variant={context.state.darkTheme?('dark'):('light')} expand="lg">
       <Container>
        <Navbar.Brand>
         <a href="#link" onClick={scrollHome}>
          <Logo className="img-top img-top-md" />
         </a>
        </Navbar.Brand>
        <Nav.Link className="text-center only-movil">
         <Flip right spy={context.state.checkedLengcount}>
             {context.state.leng==='en'?(
                 <div className={context.state.darkTheme?('text-white'):('text-dark')} onClick={() => changeLengES()}>
                     {context.state.darkTheme?(<EnWhite className="img-eng-es blob-white" />):(<EnBlack className="img-eng-es blob" />)}</div>
             ):(
                 <div className={context.state.darkTheme?('text-white'):('text-dark')} onClick={() => changeLengEN()}>
                     {context.state.darkTheme?(<EsWhite className="img-eng-es blob-white" />):(<EsBlack className="img-eng-es blob"/>)}</div>
             )}
         </Flip>
        </Nav.Link>
        <Nav.Link className="text-center only-movil">
         <Roll spy={context.state.checkedThemecount}>
          {context.state.darkTheme?(
              <div onClick={() => changeThemeFalse()}>

               <RiSunLine className="blob" title="sun" size="1.5em" color={context.state.darkTheme?('white'):('black')}/>
              </div>
          ):(
              <div onClick={() => changeThemeTrue()}>
               <RiMoonClearFill className="blob" title="moon" size="1.5em" color={context.state.darkTheme?('white'):('black')}/>
              </div>
          )}
         </Roll>

        </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         <Animated className="me-auto" animationIn="bounceInLeft" isVisible={true}>
          <Nav>
           <Nav.Link href="#" onClick={scrollGame} className="border-end">
              <div className="text-center">
               <MdGames color={context.state.darkTheme?('white'):('black')}/>
              </div>
              <div className="text-center">
              <span className="text-theme-2">
                 <Flip right spy={context.state.checkedLengcount}>
                     {context.state.leng==='en'?('Games' ):('Juegos')}
                 </Flip>
              </span>
              </div>
           </Nav.Link>
           <Nav.Link href="#" onClick={scrollAbout} className="border-end">
                   <div className="text-center">
                       <FaBook color={context.state.darkTheme?('white'):('black')}/>
                   </div>
                   <div className="text-center">
             <span className="text-theme-2">
                <Flip right spy={context.state.checkedLengcount}>
                    {context.state.leng==='en'?('About'):('Acerca de')}
                </Flip>
              </span>
                   </div>
           </Nav.Link>
           <Nav.Link href="#" onClick={scrollContact}>
                   <div className="text-center">
                       <MdContactMail color={context.state.darkTheme?('white'):('black')}/>
                   </div>
                   <div className="text-center">
                     <span className="text-theme-2">
                        <Flip right spy={context.state.checkedLengcount}>
                            {context.state.leng==='en'?('Contact'):('Contacto')}
                        </Flip>
                      </span>
                   </div>
           </Nav.Link>
          </Nav>
         </Animated>

         <Nav>
          <Nav.Link className="text-center only-web">
           <Flip right spy={context.state.checkedLengcount}>
               {context.state.leng==='en'?(
                   <div className={context.state.darkTheme?('text-white'):('text-dark')} onClick={() => changeLengES()}>
                        {context.state.darkTheme?(<EnWhite className="img-eng-es blob-white" />):(<EnBlack className="img-eng-es blob" />)}</div>
               ):(
                   <div className={context.state.darkTheme?('text-white'):('text-dark')} onClick={() => changeLengEN()}>
                        {context.state.darkTheme?(<EsWhite className="img-eng-es blob-white" />):(<EsBlack className="img-eng-es blob"/>)}</div>
               )}
           </Flip>
          </Nav.Link>
          <Nav.Link className="text-center only-web">
           <Roll spy={context.state.checkedThemecount}>
            {context.state.darkTheme?(
                <div onClick={() => changeThemeFalse()}>
                 <RiSunLine className="blob" title="sun" size="2em" color={context.state.darkTheme?('white'):('black')}/>
                </div>
            ):(
                <div onClick={() => changeThemeTrue()}>
                 <RiMoonClearFill className="blob" title="moon" size="2em" color={context.state.darkTheme?('white'):('black')}/>
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