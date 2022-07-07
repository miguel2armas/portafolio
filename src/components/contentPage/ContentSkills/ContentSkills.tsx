import { FormattedMessage } from "react-intl"
import imgHtml from "../../../assets/img/logo/html.webp"
import imgCss from "../../../assets/img/logo/css.webp"
import imgJs from "../../../assets/img/logo/js.webp"
import imgPhp from "../../../assets/img/logo/php.webp"
import imgDart from "../../../assets/img/logo/dart.webp"
import imgKotlin from "../../../assets/img/logo/kotlin.webp"
import imgJava from "../../../assets/img/logo/java.png"
import imgReact from "../../../assets/img/logo/react.png"
import imgTs from "../../../assets/img/logo/ts.webp"
import imgLaravel from "../../../assets/img/logo/laravel.png"
import imgSass from "../../../assets/img/logo/sass.png"
import imgVtex from "../../../assets/img/logo/vtex.png"
import imgGit from "../../../assets/img/logo/git.png"
import imgFlutter from "../../../assets/img/logo/flutter.webp"
import imgPrestashop from "../../../assets/img/logo/prestashop.webp"
import imgAndroid from "../../../assets/img/logo/android.png"

export const ContentSkills = () => {
  return (
    <div>
      <h2 className="ContentSkills__h2">
        <FormattedMessage
            id="app.ContentSkillsLanguage"
            defaultMessage={`Lenguajes que uso`}
          />
      </h2>
      <div className="ContentSkills">
        <div className="Item">
          <img className="Item__img" src={imgHtml} alt="html" />
          <div className="Item__text">Html</div>
          <div className="Item__textYear">4 <FormattedMessage id="app.ContentSkillsAges" defaultMessage={`años`} />
          </div>
        </div>
        <div className="Item">
            <img className="Item__img" src={imgCss} alt="css" />
          <div className="Item__text">Css</div>
          <div className="Item__textYear">4 <FormattedMessage id="app.ContentSkillsAges" defaultMessage={`años`} /></div>
        </div>
        <div className="Item">
            <img className="Item__img" src={imgJs} alt="js" />
          <div className="Item__text">Js</div>
          <div className="Item__textYear">2 <FormattedMessage id="app.ContentSkillsAges" defaultMessage={`años`} /></div>
        </div>
        <div className="Item">
          <img className="Item__img" src={imgTs} alt="ts" />
          <div className="Item__text">TypeScript</div>
          <div className="Item__textYear">8 <FormattedMessage id="app.ContentSkillsMonths" defaultMessage={`meses`} /></div>
        </div>
        <div className="Item">
            <img className="Item__img" src={imgPhp} alt="php" />
          <div className="Item__text">Php</div>
          <div className="Item__textYear">3 <FormattedMessage id="app.ContentSkillsAges" defaultMessage={`años`} /></div>
        </div>
        <div className="Item">
            <img className="Item__img" src={imgDart} alt="dart" />
          <div className="Item__text">Dart</div>
          <div className="Item__textYear">1 <FormattedMessage id="app.ContentSkillsAge" defaultMessage={`año`} /></div>
        </div>
        <div className="Item">
            <img className="Item__img" src={imgJava} alt="java" />
          <div className="Item__text">Java</div>
          <div className="Item__textYear">6 <FormattedMessage id="app.ContentSkillsMonths" defaultMessage={`meses`} /></div>
        </div>
        <div className="Item">
            <img className="Item__img" src={imgKotlin} alt="kotlin" />
          <div className="Item__text">Kotlin</div>
          <div className="Item__textYear">4 <FormattedMessage id="app.ContentSkillsMonths" defaultMessage={`meses`} /></div>
        </div>
      </div>
      
      <h2 className="ContentSkills__h2"><FormattedMessage id="app.ContentSkillsTechnology" defaultMessage={`Tecnologías que uso`} /></h2>
      <div className="ContentSkills">
        <div className="Item">
          <img className="Item__img" src={imgReact} alt="react" />
          <div className="Item__text">React</div>
          <div className="Item__textYear">1.5 <FormattedMessage id="app.ContentSkillsAges" defaultMessage={`años`} /></div>
        </div>
        <div className="Item">
          <img className="Item__img" src={imgSass} alt="sass" />
          <div className="Item__text">Sass</div>
          <div className="Item__textYear">4 <FormattedMessage id="app.ContentSkillsMonths" defaultMessage={`meses`} /></div>
        </div>
        <div className="Item">
          <img className="Item__img" src={imgVtex} alt="vtex" />
          <div className="Item__text">Vtex</div>
          <div className="Item__textYear">8 <FormattedMessage id="app.ContentSkillsMonths" defaultMessage={`meses`} /></div>
        </div>
        <div className="Item">
          <img className="Item__img" src={imgLaravel} alt="laravel" />
          <div className="Item__text">Laravel</div>
          <div className="Item__textYear">1 <FormattedMessage id="app.ContentSkillsAge" defaultMessage={`año`} /></div>
        </div>
        <div className="Item">
          <img className="Item__img" src={imgGit} alt="git" />
          <div className="Item__text">Git</div>
          <div className="Item__textYear">2 <FormattedMessage id="app.ContentSkillsAge" defaultMessage={`año`} /></div>
        </div>
        <div className="Item">
          <img className="Item__img" src={imgFlutter} alt="flutter" />
          <div className="Item__text">Flutter</div>
          <div className="Item__textYear">1 <FormattedMessage id="app.ContentSkillsAge" defaultMessage={`año`} /></div>
        </div>
        <div className="Item">
          <img className="Item__img" src={imgPrestashop} alt="prestashop" />
          <div className="Item__text">Prestashop</div>
          <div className="Item__textYear">1 <FormattedMessage id="app.ContentSkillsAge" defaultMessage={`año`} /></div>
        </div>
        <div className="Item">
          <img className="Item__img" src={imgAndroid} alt="android" />
          <div className="Item__text">Android</div>
          <div className="Item__textYear">1 <FormattedMessage id="app.ContentSkillsAge" defaultMessage={`año`} /></div>
        </div>

      </div>
    </div>
  )
}
