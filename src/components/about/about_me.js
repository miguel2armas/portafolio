import React, {useContext} from "react";
import profileImg from "../../assets/img/profile_miguel.webp"
import profileBackImg from "../../assets/img/profile_back.webp"
import {GlobalContext} from "../../context/GlobalContext";
import {
    FaUserCircle,
    FaGithub,
    FaWhatsapp,
    BsBriefcaseFill,
    RiArrowRightSFill,
    FaBirthdayCake,
    HiPhoneOutgoing, RiPagesLine, RiRoadMapFill
} from "react-icons/all";
import {BsCalendarFill} from "react-icons/all";
import Fade from "react-reveal/Fade";

const AboutMe = ()=>{
    const context = useContext(GlobalContext)

    return <>
        <div className="user-display">
            <div className="user-display-bg"><img src={profileBackImg} alt="Profile miguel"/>
            </div>
            <div className={context.state.darkTheme?("user-display-bottom bg-body"):("card user-display-bottom")}>
                <div className="user-display-avatar"><img src={profileImg} alt="miguel perfil"/></div>
                <Fade right spy={context.state.checkedLengcount}>
                    <div className="user-display-info">
                        <div className="name"> <FaUserCircle color={context.state.darkTheme?("#FFF"):("#000")}/> Miguel Armas</div>
                        <div className="nick">
                            {context.state.leng==='en'?("Full Stack Developer"):("Full Stack Developer")}
                            </div>
                    </div>
                    <div className="row user-display-details">
                        <div className="col-4">
                            <div className="title"><BsCalendarFill color={context.state.darkTheme?("#FFF"):("#000")}/> {context.state.leng==='en'?("Experience"):("Experiencia")}
                            </div>
                            <div className="fs-0 fs-md-1"> {context.state.leng==='en'?("3 Years"):("3 Años")}</div>
                        </div>
                        <div className="col-4">
                            <div className="title"><FaGithub color={context.state.darkTheme?("#FFF"):("#000")}/> GitHub</div>
                            <div className="fs-0 fs-md-1"><a href="https://github.com/miguel2armas" target="_blank" rel="noreferrer">Link</a></div>
                        </div>
                        <div className="col-4">
                            <div className="title"><FaWhatsapp color={context.state.darkTheme?("#FFF"):("#000")}/> {context.state.leng==='en'?("WhatsApp"):("WhatsApp")}</div>
                            <div className="fs-0 fs-md-1"><a href="https://api.whatsapp.com/send/?phone=573146869798&text&app_absent=0" target="_blank" rel="noreferrer">+57 3146869798</a></div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
        <Fade right spy={context.state.checkedLengcount}>
            <div className={context.state.darkTheme?("user-info-list card bg-body text-white"):("user-info-list card text-dark")}>
                <div className="card-header card-header-divider">{context.state.leng==='en'?("About me"):("Sobre mi")}
                    <span className="card-subtitle">
                        {context.state.leng==='en'?("I am passionate about computing, I always seek to be up to date in the technologies I use, I am also self-taught and proactive"):
                            ("Me apasiona la informática, siempre busco estar al día en las tecnologías que utilizo, además soy autodidacta y proactivo")}
                    </span>
                </div>
                <div className="card-body">
                    <table className="no-border no-strip skills">
                        <tbody className="no-border-x no-border-y">
                        <tr>
                            <td className="icon"><BsBriefcaseFill color={context.state.darkTheme?("#FFF"):("#000")}/></td>
                            <td className="item">{context.state.leng==='en'?("Occupation"):("Ocupación")}<RiArrowRightSFill color={context.state.darkTheme?("#FFF"):("#000")}/></td>
                            <td>Full Stack Developer</td>
                        </tr>
                        <tr>
                            <td className="icon"><FaBirthdayCake color={context.state.darkTheme?("#FFF"):("#000")}/> </td>
                            <td className="item">{context.state.leng==='en'?("Date of birth"):("Fecha de cumpleaños")}<RiArrowRightSFill color={context.state.darkTheme?("#FFF"):("#000")}/></td>
                            <td>{context.state.leng==='en'?("June 13, 1989"):("13 de Junio de 1989")}</td>
                        </tr>
                        <tr>
                            <td className="icon"><HiPhoneOutgoing color={context.state.darkTheme?("#FFF"):("#000")}/></td>
                            <td className="item">{context.state.leng==='en'?("Telephone"):("Teléfono")}<RiArrowRightSFill color={context.state.darkTheme?("#FFF"):("#000")}/></td>
                            <td>+57 (314) 686-9798</td>
                        </tr>
                        <tr>
                            <td className="icon"><RiRoadMapFill color={context.state.darkTheme?("#FFF"):("#000")}/></td>
                            <td className="item">{context.state.leng==='en'?("Location"):("Ubicación")}<RiArrowRightSFill color={context.state.darkTheme?("#FFF"):("#000")}/></td>
                            <td>Bogotá, Colombia</td>
                        </tr>
                        <tr>
                            <td className="icon"><RiPagesLine color={context.state.darkTheme?("#FFF"):("#000")}/></td>
                            <td className="item">{context.state.leng==='en'?("Website"):("Sitio Web")}<RiArrowRightSFill color={context.state.darkTheme?("#FFF"):("#000")}/></td>
                            <td>www.miguel-armas.com</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fade>
        <Fade right spy={context.state.checkedLengcount}>
            <div className={context.state.darkTheme?("card mt-3 bg-body text-white"):("mt-3 card text-dark")}>
                <div className="card-header card-header-divider">{context.state.leng==='en'?("Latest activities"):("Últimas actividades")}
                    <span className="card-subtitle">

                </span>
                </div>
                <div className="card-body">
                    <ul className="user-timeline">
                        <li className="latest">
                            <div className="user-timeline-date">{context.state.leng==='en'?("January 29, 2020 - Currently"):("29 de enero de 2020 - Actualmente")}</div>
                            <div className="user-timeline-title">Engineering & Services</div>
                            <div className="user-timeline-description">{context.state.leng==='en'?("Developer of websites, mobile applications, ADS advertising."):
                                ("Desarrollador de sitios web, aplicaciones móviles, publicidad ADS.")}
                            </div>
                        </li>
                        <li>
                            <div className="user-timeline-date">{context.state.leng==='en'?("May 01, 2018 - March 20, 2019"):("01 de Mayo de 2018 - 20 de Marzo de 2019")}</div>
                            <div className="user-timeline-title">{context.state.leng==='en'?("University Institute of Technology Dr. Cristobal Mendoza"):
                                ("Instituto Universitario de Tecnología Dr. Cristóbal Mendoza")}
                                </div>
                            <div className="user-timeline-description">{context.state.leng==='en'?("Programming teacher."):("Profesor programación.")}
                            </div>
                        </li>
                        <li>
                            <div className="user-timeline-date">2016 - 2018</div>
                            <div className="user-timeline-title">{context.state.leng==='en'?("University Institute of Technology Dr. Cristobal Mendoza"):
                                ("Instituto Universitario de Tecnología Dr. Cristóbal Mendoza")}</div>
                            <div className="user-timeline-description">{context.state.leng==='en'?("Title: Higher University Technician in Computer Science")
                                :("Titulo: Técnico Superior Universitario en Informática")}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Fade>
    </>
}

export default AboutMe