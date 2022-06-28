import { FormattedMessage } from "react-intl"
import LogoImg from "../../assets/img/img/logo.svg"
import {ReactComponent as Facebook} from "../../assets/img/icons/facebook.svg";
import {ReactComponent as GitHub} from "../../assets/img/icons/git_hub.svg";
import {ReactComponent as WhatsApp} from "../../assets/img/icons/whatsapp.svg";
import { useCountPage } from "../../hooks/useCountPage";

export const Footer = () => {
  const { countPage } = useCountPage();
  return (
    <footer className="footer">
        <div className="footer__left">
          <img className="header__link--img" src={LogoImg} alt="mad"/>
          <span className="footer__left--span">
            <FormattedMessage
              id="app.footer_text"
              defaultMessage={`{date} Miguel Armas, Developer`}
              values={
                { date: new Date().getFullYear()}
              }
            />
          </span>
        </div>
        <div className="footer__right">
              <div>
                <div className="footer__right--link">
                  <a className="footer__right--ico" href="https://www.facebook.com/miguel.armasmoreno/" target={"_blank"} rel="noreferrer">
                    <Facebook/>
                  </a>
                  <a className="footer__right--ico" href="https://github.com/miguel2armas" target={"_blank"} rel="noreferrer">
                    <GitHub/>
                  </a>
                  <a className="footer__right--ico" href="https://wa.me/573146869798" target={"_blank"} rel="noreferrer">
                    <WhatsApp/>
                  </a>
                </div>
                <div>
                  Eres visitante número:
                  <span className="footer__right--span">
                    {countPage}
                  </span>
                </div>
              </div>
        </div>
    </footer>
  )
}
