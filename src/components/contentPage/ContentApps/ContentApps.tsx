import { FormattedMessage } from "react-intl"
import AuthMeImg from "../../../../assets/img/portfolio/authme-2fa.png"
import {ReactComponent as Arrow} from "../../../../assets/img/icons/arrow_link.svg";

const AUTHME_PLAY_URL = "https://play.google.com/store/apps/details?id=com.miguelarmas.authenticator";
const AUTHME_PRIVACY_URL = "/privacy/authme-2fa/";

/** Apps propias publicadas en Google Play, con su ficha y su política de privacidad. */
export const ContentApps = () => {
  return (
    <section className="ContentApps" id="apps">
      <h2>
        <FormattedMessage
            id="app.ContentAppsTitle"
            defaultMessage={`Mis apps`}
          />
      </h2>
      <h3>
        <FormattedMessage
            id="app.ContentAppsSubTitle"
            defaultMessage={`Aplicaciones publicadas en Google Play`}
          />
      </h3>
      <article className="AppCard">
        <img loading="lazy" src={AuthMeImg} alt="AuthMe 2FA" className="AppCard__icon" width={112} height={112} />
        <div className="AppCard__body">
          <h2 className="AppCard__title">AuthMe 2FA</h2>
          <p className="AppCard__description">
            <FormattedMessage
                id="app.ContentAppsAuthMeDescription"
                defaultMessage={`Autenticador de dos pasos (2FA) para Android, sin anuncios ni registro. Tus códigos se guardan cifrados en el teléfono, protegidos con PIN o huella, y la copia de seguridad opcional va cifrada de extremo a extremo a tu propio Google Drive: ni siquiera el desarrollador puede verla.`}
              />
          </p>
          <div className="AppCard__links">
            <a className="AppCard__link AppCard__link--primary" href={AUTHME_PLAY_URL} target={"_blank"} rel="noopener noreferrer">
              <FormattedMessage
                  id="app.ContentAppsGooglePlay"
                  defaultMessage={`Descargar en Google Play`}
                /> <Arrow/>
            </a>
            <a className="AppCard__link" href={AUTHME_PRIVACY_URL}>
              <FormattedMessage
                  id="app.ContentAppsPrivacy"
                  defaultMessage={`Política de privacidad`}
                />
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}
