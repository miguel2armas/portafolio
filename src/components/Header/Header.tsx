import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeTheme, selectTheme } from "../../redux/reducers/themeReducer";
import {ReactComponent as Sun} from "../../assets/img/icons/sun.svg";
import {ReactComponent as Moon} from "../../assets/img/icons/moon.svg";
import {ReactComponent as Es} from "../../assets/img/icons/es_white.svg";
import {ReactComponent as En} from "../../assets/img/icons/en_white.svg";
import LogoImg from "../../assets/img/img/logo.svg"
import { changeLanguage, selectLanguage } from "../../redux/reducers/languageReducer";
import { FormattedMessage } from "react-intl";

export const Header = () => {
  const currentTheme = useAppSelector(selectTheme);
  const currentLanguage = useAppSelector(selectLanguage);
  const dispatch = useAppDispatch();
  return (
        <header className="header">
          <div className="header__container">
            <div className="header__left">
              <a className="header__link" href="/" rel="noreferrer">
                <img className="header__link--img" src={LogoImg} alt="mad"/>
              </a>
              <div className="header__link--text">
              <FormattedMessage
                  id="app.memory_game"
                  defaultMessage={`juego de memoria`}
                />
              </div>
              <div className="header__link--text">
              <FormattedMessage
                  id="app.contact"
                  defaultMessage={`contacto`}
                />
              </div>
              <div className="header__link--text">
              <FormattedMessage
                  id="app.about"
                  defaultMessage={`Acerca de`}
                />

              </div>
            </div>
            <div className="header__right">
              <div className="header__link" onClick={() => dispatch(changeLanguage(currentLanguage==="es-CO"?"en-US":"es-CO"))}>
                {currentLanguage==="es-CO"?<Es className="header__animation--text"/>:<En className="header__animation--text"/>}
              </div>
              <div className="header__link" onClick={() => dispatch(changeTheme(currentTheme==="light"?"dark":"light"))}>
                {currentTheme==="light"?<Moon className="header__animation"/>:<Sun className="header__animation"/>}
              </div>
            </div>
          </div>
        </header>
      )
}
