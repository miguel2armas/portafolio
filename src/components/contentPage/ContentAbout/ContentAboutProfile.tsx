import {ReactComponent as ProfileIco} from "../../../../assets/img/icons/profile_ico.svg";
import {ReactComponent as CalendarIco} from "../../../../assets/img/icons/profile_ico.svg";
import {ReactComponent as GitHubIco} from "../../../../assets/img/icons/github_ico.svg";
import {ReactComponent as WhatsAppIco} from "../../../../assets/img/icons/whatsapp_ico.svg";
import {ReactComponent as ArrowLeftIco} from "../../../../assets/img/icons/arrow_left_ico.svg";
import {ReactComponent as OccupationIco} from "../../../../assets/img/icons/occupation_ico.svg";
import {ReactComponent as MobileIco} from "../../../../assets/img/icons/mobile_ico.svg";
import {ReactComponent as MapIco} from "../../../../assets/img/icons/map_ico.svg";
import {ReactComponent as PageIco} from "../../../../assets/img/icons/page_ico.svg";
import {ReactComponent as EmailIco} from "../../../../assets/img/icons/email_ico.svg";
import {ReactComponent as LinkedinIco} from "../../../../assets/img/icons/linkedin_ico.svg";
import ImgBackground from '../../../../assets/img/background-profile.webp'
import ImgProfile from '../../../../assets/img/profile-miguel-img.webp'
import { FormattedMessage } from "react-intl";
export const ContentAboutProfile = () => {
  return (
    <div className="contentAboutProfile">
        <div className="Card">
            <div className="Card__img">
                <img width="100%" height="100%" loading="lazy" className="Card__img--img" src={ImgBackground} alt="background-code" />
            </div>
            <div className="Card__top">
                <img className="Card__top--img" src={ImgProfile} alt="img-profile" />
                <div>
                    <div className="Card__top--name">
                       <ProfileIco/> Miguel Armas
                    </div>
                    <div className="Card__top--title">
                        <FormattedMessage
                            id="app.ContentAboutProfileTitle"
                            defaultMessage={`Desarrollador Frontend y Móvil`}
                        />
                    </div>
                </div>
            </div>
            <div className="Card__button">
                <div className="Card__button--div">
                    <div className="Card__button--title">
                        <CalendarIco/> <FormattedMessage
                            id="app.ContentAboutProfileExp"
                            defaultMessage={`EXPERIENCIA`}
                        />
                    </div>
                    <div className="Card__button--description">
                        4 <FormattedMessage
                            id="app.ContentSkillsAges"
                            defaultMessage={`años`}
                        />
                    </div>
                </div>
                <div className="Card__button--div">
                    <div className="Card__button--title">
                        <GitHubIco/> GITHUB
                    </div>
                    <div className="Card__button--description">
                        <a className="Card__button--descriptionA" href="https://github.com/miguel2armas" target={"_blank"} rel="apple-touch-icon">
                            https://github.com/miguel2armas
                        </a>
                    </div>
                </div>
                <div className="Card__button--div">
                    <div className="Card__button--title">
                        <WhatsAppIco/> WHATSAPP
                    </div>
                    <div className="Card__button--description">
                        <a className="Card__button--descriptionA" href="https://wa.me/573146869798" target={"_blank"} rel="apple-touch-icon">
                            +57 3146869798
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="Card Card__mt">
            <div className="Card__description">
                <div className="Card__description--title">
                    <FormattedMessage
                        id="app.ContentAboutBtnMe"
                        defaultMessage={`Sobre mi`}
                    />
                </div>
                <div className="Card__description--description">
                    <FormattedMessage
                        id="app.ContentAboutProfileDescription"
                        defaultMessage={`Me apasiona la informática, siempre busco estar al día en las tecnologías que utilizo, además soy autodidacta y proactivo`}
                    />
                </div>
            </div>
            <div className="Card__item">
                <div className="Card__item--left">
                    <div className="Card__item--text">
                        <OccupationIco/>
                            <FormattedMessage
                                id="app.ContentAboutProfileOccupation"
                                defaultMessage={`Ocupación`}
                            />
                    </div>
                    <div className="Card__item--ico">
                      <ArrowLeftIco/>
                    </div>
                </div>
                <div className="Card__item--right">
                    <FormattedMessage
                        id="app.ContentAboutProfileTitle"
                        defaultMessage={`Desarrollador Frontend y Móvil`}
                    />
                </div>
            </div>
            <div className="Card__item">
                <div className="Card__item--left">
                    <div className="Card__item--text">
                        <MobileIco/>
                        <FormattedMessage
                            id="app.ContentAboutProfilePhone"
                            defaultMessage={`Teléfono`}
                        />
                    </div>
                    <div className="Card__item--ico">
                      <ArrowLeftIco/>
                    </div>
                </div>
                <div className="Card__item--right">
                    +57 (314) 686-9798
                </div>
            </div>
            <div className="Card__item">
                <div className="Card__item--left">
                    <div className="Card__item--text">
                        <MapIco/>
                        <FormattedMessage
                            id="app.ContentAboutProfileLocation"
                            defaultMessage={`Ubicación`}
                        />
                    </div>
                    <div className="Card__item--ico">
                      <ArrowLeftIco/>
                    </div>
                </div>
                <div className="Card__item--right">
                    Bogotá, Colombia
                </div>
            </div>
            <div className="Card__item">
                <div className="Card__item--left">
                    <div className="Card__item--text">
                        <PageIco/>
                        <FormattedMessage
                            id="app.ContentAboutProfileWebSite"
                            defaultMessage={`Sitio Web`}
                        />
                    </div>
                    <div className="Card__item--ico">
                      <ArrowLeftIco/>
                    </div>
                </div>
                <div className="Card__item--right">
                    www.miguel-armas.com
                </div>
            </div>
            <div className="Card__item">
                <div className="Card__item--left">
                    <div className="Card__item--text">
                        <EmailIco/>
                        <FormattedMessage
                            id="app.ContentAboutProfileEmail"
                            defaultMessage={`Correo`}
                        />
                    </div>
                    <div className="Card__item--ico">
                      <ArrowLeftIco/>
                    </div>
                </div>
                <div className="Card__item--right">
                    miguel.armas.developer@gmail.com
                </div>
            </div>
        </div>
        <div className="Card Card__mt">
            <div className="Card__description">
                <div className="Card__description--titleTwo">
                    <FormattedMessage
                        id="app.ContentAboutProfileLatestActivities"
                        defaultMessage={`Últimas actividades`}
                    />
                </div>
            </div>
            <div className="Card__timeLine--body">
                <ul className="Card__timeLine">
                    <li className="Card__timeLine--last">
                        <div className="Card__timeLine--date">
                            <FormattedMessage
                                id="app.ContentAboutProfileDateITGlobers"
                                defaultMessage={`Últimas actividades`}
                            />
                        </div>
                        <div className="Card__timeLine--title">
                            ITGlobers
                            <a className="Card__timeLine--link" title="ITGlobers" href="https://www.linkedin.com/company/itglobers/" target={"_blank"} rel="apple-touch-icon">
                                <LinkedinIco/>
                            </a>
                        </div>
                        <div className="Card__timeLine--description">
                            Developer Front End Specialist ( Vtex frontend )
                        </div>
                    </li>
                    <li className="Card__timeLine--pass">
                        <div className="Card__timeLine--date">
                            <FormattedMessage
                                id="app.ContentAboutProfileDateTitaMedia"
                                defaultMessage={`25 DE OCTUBRE DE 2021 - 08 DE ABRIL DE 2022`}
                            />
                        </div>
                        <div className="Card__timeLine--title">
                            Tita Media 
                            <a className="Card__timeLine--link" title="Tita Media" href="https://www.linkedin.com/company/tita-media/" target={"_blank"} rel="apple-touch-icon">
                                <LinkedinIco/>
                            </a>
                        </div>
                        <div className="Card__timeLine--description">
                            Mid Level Developer ( Vtex frontend )
                        </div>
                    </li>
                    <li className="Card__timeLine--pass">
                        <div className="Card__timeLine--date">
                            <FormattedMessage
                                id="app.ContentAboutProfileDateEAndS"
                                defaultMessage={`29 DE ENERO DE 2020 - 21 DE OCTUBRE DE 2021`}
                            />
                        </div>
                        <div className="Card__timeLine--title">
                            Engineering & Services
                        </div>
                        <div className="Card__timeLine--description">
                            <FormattedMessage
                                id="app.ContentAboutProfileEAndS"
                                defaultMessage={`Desarrollador de sitios web, aplicaciones móviles, publicidad ADS.`}
                            />
                        </div>
                    </li>
                    <li className="Card__timeLine--pass">
                        <div className="Card__timeLine--date">
                            <FormattedMessage
                                id="app.ContentAboutProfileDateUniversity"
                                defaultMessage={`01 DE MAYO DE 2018 - 20 DE MARZO DE 2019`}
                            />
                        </div>
                        <div className="Card__timeLine--title">
                            Instituto Universitario de Tecnología Dr. Cristóbal Mendoza
                        </div>
                        <div className="Card__timeLine--description">
                            <FormattedMessage
                                id="app.ContentAboutProfileDateUniversityTitle"
                                defaultMessage={`Profesor programación.`}
                            />
                        </div>
                    </li>
                    <li className="Card__timeLine--pass">
                        <div className="Card__timeLine--date">
                            2016 - 2018
                        </div>
                        <div className="Card__timeLine--title">
                            Instituto Universitario de Tecnología Dr. Cristóbal Mendoza
                        </div>
                        <div className="Card__timeLine--description">
                            <FormattedMessage
                                id="app.ContentAboutProfileDateUniversityTitleTitle"
                                defaultMessage={`Titulo`}
                            />: Técnico Superior Universitario en Informática
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
