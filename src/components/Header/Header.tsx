import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeTheme, selectTheme } from "../../redux/reducers/themeReducer";
import {ReactComponent as Sun} from "../../../assets/img/icons/sun.svg";
import {ReactComponent as Moon} from "../../../assets/img/icons/moon.svg";
import {ReactComponent as Es} from "../../../assets/img/icons/es_white.svg";
import {ReactComponent as En} from "../../../assets/img/icons/en_white.svg";
import {ReactComponent as Menu} from "../../../assets/img/icons/menu_ico.svg";
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
  btnHover:BtnHover;
}
export const Header = ({goToMemoryDiv, goToContentTopDiv, goToContactRefDiv, goToAboutRefRefDiv, btnHover}:Props) => {
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
              <div className={`header__link--text ${btnHover === BtnHover.ABOUT? 'header__link--textHover': ''}`} onClick={goToAboutRefRefDiv}>
              <FormattedMessage
                  id="app.about"
                  defaultMessage={`Acerca de`}
                />
              </div>
            </div>
            <div className="header__right">
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
              <div className={`menuList__link ${btnHover === BtnHover.ABOUT? 'menuList__link--textHover': ''}`} onClick={()=>{ setOpenMenu(false); goToAboutRefRefDiv();}}>
              <FormattedMessage
                  id="app.about"
                  defaultMessage={`Acerca de`}
                />
              </div>
          </div>
        </>
      )
}
