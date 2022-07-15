import { FormattedMessage } from "react-intl"
import {ReactComponent as IcoJs} from "../../../../assets/img/logo/js.svg"
import {ReactComponent as IcoHtml} from "../../../../assets/img/logo/html.svg"
import {ReactComponent as IcoCss} from "../../../../assets/img/logo/css.svg"
import {ReactComponent as IcoTs} from "../../../../assets/img/logo/ts.svg"
import {ReactComponent as IcoPhp} from "../../../../assets/img/logo/php.svg"
import {ReactComponent as IcoDart} from "../../../../assets/img/logo/dart.svg"
import {ReactComponent as IcoJava} from "../../../../assets/img/logo/java.svg"
import {ReactComponent as IcoKotlin} from "../../../../assets/img/logo/kotlin.svg"
import {ReactComponent as IcoReact} from "../../../../assets/img/logo/react.svg"
import {ReactComponent as IcoSass} from "../../../../assets/img/logo/sass.svg"
import {ReactComponent as IcoLaravel} from "../../../../assets/img/logo/laravel.svg"
import {ReactComponent as IcoGit} from "../../../../assets/img/logo/git.svg"
import {ReactComponent as IcoFlutter} from "../../../../assets/img/logo/flutter.svg"
import {ReactComponent as IcoPrestashop} from "../../../../assets/img/logo/prestashop.svg"
import {ReactComponent as IcoAndroid} from "../../../../assets/img/logo/android.svg"
import {ReactComponent as IcoVtex} from "../../../../assets/img/logo/vtex.svg"


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
            <div className="Item__img"><IcoHtml/></div>
          <div className="Item__text">Html</div>
          <div className="Item__textYear">4 <FormattedMessage id="app.ContentSkillsAges" defaultMessage={`años`} />
          </div>
        </div>
        <div className="Item">
            <div className="Item__img"><IcoCss/></div>
          <div className="Item__text">Css</div>
          <div className="Item__textYear">4 <FormattedMessage id="app.ContentSkillsAges" defaultMessage={`años`} /></div>
        </div>
        <div className="Item">
            <div className="Item__img"><IcoJs/></div>
          <div className="Item__text">Js</div>
          <div className="Item__textYear">2 <FormattedMessage id="app.ContentSkillsAges" defaultMessage={`años`} /></div>
        </div>
        <div className="Item">
            <div className="Item__img"><IcoTs/></div>
          <div className="Item__text">TypeScript</div>
          <div className="Item__textYear">8 <FormattedMessage id="app.ContentSkillsMonths" defaultMessage={`meses`} /></div>
        </div>
        <div className="Item">
            <div className="Item__img"><IcoPhp/></div>
          <div className="Item__text">Php</div>
          <div className="Item__textYear">3 <FormattedMessage id="app.ContentSkillsAges" defaultMessage={`años`} /></div>
        </div>
        <div className="Item">
            <div className="Item__img"><IcoDart/></div>
          <div className="Item__text">Dart</div>
          <div className="Item__textYear">1 <FormattedMessage id="app.ContentSkillsAge" defaultMessage={`año`} /></div>
        </div>
        <div className="Item">
            <div className="Item__img"><IcoJava/></div>
          <div className="Item__text">Java</div>
          <div className="Item__textYear">6 <FormattedMessage id="app.ContentSkillsMonths" defaultMessage={`meses`} /></div>
        </div>
        <div className="Item">
            <div className="Item__img"><IcoKotlin/></div>
          <div className="Item__text">Kotlin</div>
          <div className="Item__textYear">4 <FormattedMessage id="app.ContentSkillsMonths" defaultMessage={`meses`} /></div>
        </div>
      </div>
      
      <h2 className="ContentSkills__h2"><FormattedMessage id="app.ContentSkillsTechnology" defaultMessage={`Tecnologías que uso`} /></h2>
      <div className="ContentSkills">
        <div className="Item">
            <div className="Item__img"><IcoReact/></div>
          <div className="Item__text">React</div>
          <div className="Item__textYear">1.5 <FormattedMessage id="app.ContentSkillsAges" defaultMessage={`años`} /></div>
        </div>
        <div className="Item">
            <div className="Item__img"><IcoSass/></div>
          <div className="Item__text">Sass</div>
          <div className="Item__textYear">4 <FormattedMessage id="app.ContentSkillsMonths" defaultMessage={`meses`} /></div>
        </div>
        <div className="Item">
            <div className="Item__img"><IcoVtex/></div>
          <div className="Item__text">Vtex</div>
          <div className="Item__textYear">8 <FormattedMessage id="app.ContentSkillsMonths" defaultMessage={`meses`} /></div>
        </div>
        <div className="Item">
            <div className="Item__img"><IcoLaravel/></div>
          <div className="Item__text">Laravel</div>
          <div className="Item__textYear">1 <FormattedMessage id="app.ContentSkillsAge" defaultMessage={`año`} /></div>
        </div>
        <div className="Item">
            <div className="Item__img"><IcoGit/></div>
          <div className="Item__text">Git</div>
          <div className="Item__textYear">2 <FormattedMessage id="app.ContentSkillsAge" defaultMessage={`año`} /></div>
        </div>
        <div className="Item">
            <div className="Item__img"><IcoFlutter/></div>
          <div className="Item__text">Flutter</div>
          <div className="Item__textYear">1 <FormattedMessage id="app.ContentSkillsAge" defaultMessage={`año`} /></div>
        </div>
        <div className="Item">
            <div className="Item__img"><IcoPrestashop/></div>
          <div className="Item__text">Prestashop</div>
          <div className="Item__textYear">1 <FormattedMessage id="app.ContentSkillsAge" defaultMessage={`año`} /></div>
        </div>
        <div className="Item">
            <div className="Item__img"><IcoAndroid/></div>
          <div className="Item__text">Android</div>
          <div className="Item__textYear">1 <FormattedMessage id="app.ContentSkillsAge" defaultMessage={`año`} /></div>
        </div>

      </div>
    </div>
  )
}
