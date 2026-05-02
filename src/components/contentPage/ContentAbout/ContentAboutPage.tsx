import ReactIco from '../../../../assets/img/ico/reactico.ico'
import SassIco from '../../../../assets/img/ico/sassico.ico'
import TsIco from '../../../../assets/img/ico/tsico.ico'
import NodeJsIco from '../../../../assets/img/ico/nodejsico.ico'
import GitIco from '../../../../assets/img/ico/gitico.ico'
import GitHubIco from '../../../../assets/img/ico/githubico.ico'
import VscIco from '../../../../assets/img/ico/vscico.ico'
import FirebaseIco from '../../../../assets/img/ico/firebaseico.ico'
import EmailJsIco from '../../../../assets/img/ico/emailjsico.ico'
import ReactIntlIco from '../../../../assets/img/ico/react-intlico.ico'
import ReactReduxIco from '../../../../assets/img/ico/react-reduxico.ico'
import FreePikIco from '../../../../assets/img/ico/frepikico.ico'
import SvGatorIco from '../../../../assets/img/ico/svgatorico.ico'
import ViteIco from '../../../../assets/img/ico/viteico.ico'
import { FormattedMessage } from 'react-intl'
export const ContentAboutPage = () => {
  return (
    <div>
      <div className="Card Card__mt">
        <div className="Card__description">
            <div className="Card__description--titleTwo">
              <FormattedMessage
                  id="app.ContentAboutPagePrincipalLibrary"
                  defaultMessage={`Biblioteca principal`}
              />
            </div>
        </div>
        <div className="contentAboutPage">
          <div className="contentAboutPage__img">
            <img  src={ReactIco} width={32} height={32} alt="react ico" />
          </div>
          <div className="contentAboutPage__right">
            <div>
              <a className="contentAboutPage__right--link" target={"_blank"} rel="apple-touch-icon" href="https://es.reactjs.org/">https://es.reactjs.org/</a>
            </div>
            <div className="contentAboutPage__right--description">
              <FormattedMessage
                  id="app.ContentAboutPagePrincipalLibraryDescription"
                  defaultMessage={`Librería principal para crear el sitio web.`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="Card Card__mt">
        <div className="Card__description">
            <div className="Card__description--titleTwo">
              <FormattedMessage
                  id="app.ContentAboutPagePreprocessors"
                  defaultMessage={`Preprocesadores`}
              />
            </div>
        </div>
        <div className="contentAboutPage">
          <div className="contentAboutPage__img">
            <img  src={TsIco} width={32} height={32} alt="sass ico" />
          </div>
          <div className="contentAboutPage__right">
            <div>
              <a className="contentAboutPage__right--link" target={"_blank"} rel="apple-touch-icon" href="https://www.typescriptlang.org/">https://www.typescriptlang.org/</a>
            </div>
            <div className="contentAboutPage__right--description">
              <FormattedMessage
                  id="app.ContentAboutPagePreprocessorsJs"
                  defaultMessage={`Preprocesador de javascript.`}
              />
            </div>
          </div>
        </div>
        <div className="contentAboutPage">
          <div className="contentAboutPage__img">
            <img  src={SassIco} width={32} height={32} alt="sass ico" />
          </div>
          <div className="contentAboutPage__right">
            <div>
              <a className="contentAboutPage__right--link" target={"_blank"} rel="apple-touch-icon" href="https://sass-lang.com/">https://sass-lang.com/</a>
            </div>
            <div className="contentAboutPage__right--description">
              <FormattedMessage
                  id="app.ContentAboutPagePreprocessorsCss"
                  defaultMessage={`Preprocesador de css.`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="Card Card__mt">
        <div className="Card__description">
            <div className="Card__description--titleTwo">
              <FormattedMessage
                  id="app.ContentAboutPageApplication"
                  defaultMessage={`Aplicaciones usadas para la creación de este sitio web.`}
              />
            </div>
        </div>
        <div className="contentAboutPage">
          <div className="contentAboutPage__img">
            <img  src={NodeJsIco} width={32} height={32} alt="node js ico" />
          </div>
          <div className="contentAboutPage__right">
            <div>
              <a className="contentAboutPage__right--link" target={"_blank"} rel="apple-touch-icon" href="https://nodejs.org/es/">https://nodejs.org/es/</a>
            </div>
            <div className="contentAboutPage__right--description">
              <FormattedMessage
                  id="app.ContentAboutPageApplicationNode"
                  defaultMessage={`Aplicación usada para la creación del sitio web.`}
              />
            </div>
          </div>
        </div>
        <div className="contentAboutPage">
          <div className="contentAboutPage__img">
            <img  src={ViteIco} width={32} height={32} alt="node js ico" />
          </div>
          <div className="contentAboutPage__right">
            <div>
              <a className="contentAboutPage__right--link" target={"_blank"} rel="apple-touch-icon" href="https://vitejs.dev/">https://vitejs.dev/</a>
            </div>
            <div className="contentAboutPage__right--description">
              <FormattedMessage
                  id="app.ContentAboutPageApplicationVite"
                  defaultMessage={`Aplicación usada para crear y lanzar a producción el sitio web.`}
              />
            </div>
          </div>
        </div>
        <div className="contentAboutPage">
          <div className="contentAboutPage__img">
            <img  src={GitIco} width={32} height={32} alt="git ico" />
          </div>
          <div className="contentAboutPage__right">
            <div>
              <a className="contentAboutPage__right--link" target={"_blank"} rel="apple-touch-icon" href="https://git-scm.com/">https://git-scm.com/</a>
            </div>
            <div className="contentAboutPage__right--description">
              <FormattedMessage
                  id="app.ContentAboutPageApplicationGit"
                  defaultMessage={`Aplicación usada para el versionamiento.`}
              />
            </div>
          </div>
        </div>
        <div className="contentAboutPage">
          <div className="contentAboutPage__img">
            <img  src={GitHubIco} width={32} height={32} alt="git hub ico" />
          </div>
          <div className="contentAboutPage__right">
            <div>
              <a className="contentAboutPage__right--link" target={"_blank"} rel="apple-touch-icon" href="https://github.com/">https://github.com/</a>
            </div>
            <div className="contentAboutPage__right--description">
              <FormattedMessage
                  id="app.ContentAboutPageApplicationGitHub"
                  defaultMessage={`Pagina usada para guardar el versionamiento y el lanzamiento de la pagina.`}
              />
            </div>
          </div>
        </div>
        <div className="contentAboutPage">
          <div className="contentAboutPage__img">
            <img  src={VscIco} width={32} height={32} alt="visual studio code ico" />
          </div>
          <div className="contentAboutPage__right">
            <div>
              <a className="contentAboutPage__right--link" target={"_blank"} rel="apple-touch-icon" href="https://code.visualstudio.com/">https://code.visualstudio.com/</a>
            </div>
            <div className="contentAboutPage__right--description">
              <FormattedMessage
                  id="app.ContentAboutPageApplicationVSC"
                  defaultMessage={`Aplicación usada para la creación del sitio web.`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="Card Card__mt">
        <div className="Card__description">
            <div className="Card__description--titleTwo">
              <FormattedMessage
                  id="app.ContentAboutPageLibrary"
                  defaultMessage={`Bibliotecas usadas en el sitio web.`}
              />
            </div>
        </div>
        <div className="contentAboutPage">
          <div className="contentAboutPage__img">
            <img  src={FirebaseIco} width={32} height={32} alt="firebase ico" />
          </div>
          <div className="contentAboutPage__right">
            <div>
              <a className="contentAboutPage__right--link" target={"_blank"} rel="apple-touch-icon" href="https://firebase.google.com/docs/web/setup?hl=es">
                https://firebase.google.com/docs/web/setup?hl=es
              </a>
            </div>
            <div className="contentAboutPage__right--description">
              <FormattedMessage
                  id="app.ContentAboutPageLibraryFirebase"
                  defaultMessage={`Biblioteca usada para la base de datos del sitio web.`}
              />
            </div>
          </div>
        </div>
        <div className="contentAboutPage">
          <div className="contentAboutPage__img">
            <img  src={EmailJsIco} width={32} height={32} alt="emailjs ico" />
          </div>
          <div className="contentAboutPage__right">
            <div>
              <a className="contentAboutPage__right--link" target={"_blank"} rel="apple-touch-icon" href="https://www.emailjs.com/docs/examples/reactjs/">
                https://www.emailjs.com/docs/examples/reactjs/
              </a>
            </div>
            <div className="contentAboutPage__right--description">
              <FormattedMessage
                  id="app.ContentAboutPageLibraryEmailJs"
                  defaultMessage={`Biblioteca usada para el envío de correos desde el formulario.`}
              />
            </div>
          </div>
        </div>
        <div className="contentAboutPage">
          <div className="contentAboutPage__img">
            <img  src={TsIco} width={32} height={32} alt="ts ico" />
          </div>
          <div className="contentAboutPage__right">
            <div>
              <a className="contentAboutPage__right--link" target={"_blank"} rel="apple-touch-icon" href="https://usehooks-ts.com/">
                https://usehooks-ts.com/
              </a>
            </div>
            <div className="contentAboutPage__right--description">
              <FormattedMessage
                  id="app.ContentAboutPageLibraryUseHooks"
                  defaultMessage={`Biblioteca de hooks creadas en typescript más usados que no existen en React.`}
              />
            </div>
          </div>
        </div>
        <div className="contentAboutPage">
          <div className="contentAboutPage__img">
            <img  src={ReactIntlIco} width={32} height={32} alt="ts ico" />
          </div>
          <div className="contentAboutPage__right">
            <div>
              <a className="contentAboutPage__right--link" target={"_blank"} rel="apple-touch-icon" href="https://formatjs.io/docs/getting-started/installation/">
                https://formatjs.io/docs/getting-started/installation/
              </a>
            </div>
            <div className="contentAboutPage__right--description">
              <FormattedMessage
                  id="app.ContentAboutPageLibraryReactInt"
                  defaultMessage={`Biblioteca para la traducción del sitio web.`}
              />
            </div>
          </div>
        </div>
        <div className="contentAboutPage">
          <div className="contentAboutPage__img">
            <img  src={ReactReduxIco} width={32} height={32} alt="ts ico" />
          </div>
          <div className="contentAboutPage__right">
            <div>
              <a className="contentAboutPage__right--link" target={"_blank"} rel="apple-touch-icon" href="https://redux.js.org/usage/usage-with-typescript">
                https://redux.js.org/usage/usage-with-typescript
              </a>
            </div>
            <div className="contentAboutPage__right--description">
              <FormattedMessage
                  id="app.ContentAboutPageLibraryReactRedux"
                  defaultMessage={`Biblioteca para controlar el estado del sitio web.`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="Card Card__mt">
        <div className="Card__description">
            <div className="Card__description--titleTwo">
              <FormattedMessage
                  id="app.ContentAboutPageSite"
                  defaultMessage={`Sitios web utilizados para crear la página.`}
              />
            </div>
        </div>
        <div className="contentAboutPage">
          <div className="contentAboutPage__img">
            <img  src={FreePikIco} width={32} height={32} alt="react ico" />
          </div>
          <div className="contentAboutPage__right">
            <div>
              <a className="contentAboutPage__right--link" target={"_blank"} rel="apple-touch-icon" href="https://www.freepik.es/">https://www.freepik.es/</a>
            </div>
            <div className="contentAboutPage__right--description">
              <FormattedMessage
                  id="app.ContentAboutPageSiteFreePik"
                  defaultMessage={`Imágenes recopiladas en el sitio web.`}
              />
            </div>
          </div>
        </div>
        <div className="contentAboutPage">
          <div className="contentAboutPage__img">
            <img  src={SvGatorIco} width={32} height={32} alt="react ico" />
          </div>
          <div className="contentAboutPage__right">
            <div>
              <a className="contentAboutPage__right--link" target={"_blank"} rel="apple-touch-icon" href="https://www.svgator.com/">https://www.svgator.com/</a>
            </div>
            <div className="contentAboutPage__right--description">
              <FormattedMessage
                  id="app.ContentAboutPageSiteSvg"
                  defaultMessage={`Usada para crear las animaciones en las imágenes SVG.`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
