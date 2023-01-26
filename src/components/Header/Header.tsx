import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeTheme, selectTheme } from "../../redux/reducers/themeReducer";
import {ReactComponent as Sun} from "../../../assets/img/icons/sun.svg";
import {ReactComponent as Moon} from "../../../assets/img/icons/moon.svg";
import {ReactComponent as Es} from "../../../assets/img/icons/es_white.svg";
import {ReactComponent as En} from "../../../assets/img/icons/en_white.svg";
import {ReactComponent as Menu} from "../../../assets/img/icons/menu_ico.svg";
import {ReactComponent as GitHub} from "../../../assets/img/icons/git_hub.svg";
import {ReactComponent as WhatsApp} from "../../../assets/img/icons/whatsapp.svg";
import {ReactComponent as Linkedin} from "../../../assets/img/icons/linkedin.svg";
import LogoImg from "../../../assets/img/img/logo.svg"
import { changeLanguage, selectLanguage } from "../../redux/reducers/languageReducer";
import { FormattedMessage } from "react-intl";
import { BtnHover } from "../Page";
import { useState } from "react";
interface Props {
  goToMemoryDiv:() => void;
  goToContentTopDiv:() => void;
  goToContactRefDiv:() => void;
  goToAboutRefRefDiv:() => void;
  goToOpenAiRefDiv:() => void;
  btnHover:BtnHover;
}
export const Header = ({goToMemoryDiv, goToContentTopDiv, goToContactRefDiv, goToAboutRefRefDiv, goToOpenAiRefDiv, btnHover}:Props) => {
  const currentTheme = useAppSelector(selectTheme);
  const currentLanguage = useAppSelector(selectLanguage);
  const [openMenu, setOpenMenu] = useState(false)
  const dispatch = useAppDispatch();
  return (
        <>
        <header className="header">
          <div className="header__container">
            <div className="header__left">
              <div className="header__link" onClick={goToContentTopDiv}>
                <img width="100%" height="100%" className="header__link--img" src={LogoImg} alt="mad"/>
              </div>
              <div className={`header__link--text ${btnHover === BtnHover.MEMORY? 'header__link--textHover': ''}`} onClick={goToMemoryDiv}>
              <FormattedMessage
                  id="app.memory_game"
                  defaultMessage={`juego de memoria`}
                />
              </div>
              <div className={`header__link--text ${btnHover === BtnHover.CONTACT? 'header__link--textHover': ''}`} onClick={goToContactRefDiv}>
              <FormattedMessage
                  id="app.contact"
                  defaultMessage={`contacto`}
                />
              </div>
              {/* <div className={`header__link--text ${btnHover === BtnHover.OPEN_AI? 'header__link--textHover': ''}`} onClick={goToOpenAiRefDiv}>
              <FormattedMessage
                  id="app.open_ai"
                  defaultMessage={`Openai`}
                />
              </div> */}
              <div className={`header__link--text ${btnHover === BtnHover.ABOUT? 'header__link--textHover': ''}`} onClick={goToAboutRefRefDiv}>
              <FormattedMessage
                  id="app.about"
                  defaultMessage={`Acerca de`}
                />
              </div>
            </div>
            <div className="header__right">
              <a title="linkedin" className="header__link--ico" href="https://www.linkedin.com/in/miguel-angel-armas/" target={"_blank"} rel="apple-touch-icon">
                <Linkedin width={16} height={16}/>
              </a>
              <a title="github" className="header__link--ico" href="https://github.com/miguel2armas" target={"_blank"} rel="apple-touch-icon">
                <GitHub width={16} height={16}/>
              </a>
              <a title="whatsApp" className="header__link--ico" href="https://wa.me/573146869798" target={"_blank"} rel="apple-touch-icon">
                <WhatsApp width={16} height={16}/>
              </a>
              <div className="header__link--lineC">
                <div className="header__link--line"/>
              </div>
              <div className="header__link" onClick={() => dispatch(changeLanguage(currentLanguage==="es-CO"?"en-US":"es-CO"))}>
                {currentLanguage==="es-CO"?<En className="header__animation--text"/>:<Es className="header__animation--text"/>}
              </div>
              <div className="header__link" onClick={() => dispatch(changeTheme(currentTheme==="light"?"dark":"light"))}>
                {currentTheme==="light"?<Moon className="header__animation"/>:<Sun className="header__animation"/>}
              </div>
              <div className={`header__menu ${openMenu ? 'openMenu':''}`} onClick={() => setOpenMenu(!openMenu)}>
                <Menu/>
              </div>
            </div>
          </div>
        </header>
          <div className={`${openMenu ? 'menuList menuList__open' : 'menuList'}`}>
          <div className={`menuList__link ${btnHover === BtnHover.MEMORY? 'menuList__link--textHover': ''}`} onClick={()=>{ setOpenMenu(false); goToMemoryDiv();}}>
              <FormattedMessage
                  id="app.memory_game"
                  defaultMessage={`juego de memoria`}
                />
              </div>
              <div className={`menuList__link ${btnHover === BtnHover.CONTACT? 'menuList__link--textHover': ''}`} onClick={()=>{ setOpenMenu(false); goToContactRefDiv();}}>
              <FormattedMessage
                  id="app.contact"
                  defaultMessage={`contacto`}
                />
              </div>
              {/* <div className={`menuList__link ${btnHover === BtnHover.OPEN_AI? 'menuList__link--textHover': ''}`} onClick={()=>{ setOpenMenu(false); goToOpenAiRefDiv();}}>
              <FormattedMessage
                  id="app.open_ai"
                  defaultMessage={`Openai`}
                />
              </div> */}
              <div className={`menuList__link ${btnHover === BtnHover.ABOUT? 'menuList__link--textHover': ''}`} onClick={()=>{ setOpenMenu(false); goToAboutRefRefDiv();}}>
              <FormattedMessage
                  id="app.about"
                  defaultMessage={`Acerca de`}
                />
              </div>
              <div className={`menuList__link--icoC`}>
                <a title="linkedin" className="menuList__link--ico" href="https://www.linkedin.com/in/miguel-angel-armas/" target={"_blank"} rel="apple-touch-icon">
                  <Linkedin width={26} height={26}/>
                </a>
                <a title="github" className="menuList__link--ico" href="https://github.com/miguel2armas" target={"_blank"} rel="apple-touch-icon">
                  <GitHub width={26} height={26}/>
                </a>
                <a title="whatsApp" className="menuList__link--ico" href="https://wa.me/573146869798" target={"_blank"} rel="apple-touch-icon">
                  <WhatsApp width={26} height={26}/>
                </a>
              </div>
              
              
          </div>
        </>
      )
}
