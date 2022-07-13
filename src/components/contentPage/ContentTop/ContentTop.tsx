import { MutableRefObject } from "react";
import { FormattedMessage } from "react-intl"
import { Button } from "../../Atom/Button"
import { SvgLogoInitial } from "../../SvgAnimate/SvgLogoInitial"
import { SvgLogoMiguel } from "../../SvgAnimate/SvgLogoMiguel"
import {ReactComponent as Msn} from "../../../../assets/img/icons/msn.svg";
interface Props {
  contentTopRef:MutableRefObject<HTMLDivElement | null>
  goToContactRefDiv:() => void;
}
export const ContentTop = ({contentTopRef, goToContactRefDiv}:Props) => {
  return (
    <div className="contentTop" ref={contentTopRef}>
      <div className="contentTop__left">
        <div className="contentTop__left--svg">
          <SvgLogoMiguel/>
        </div>
        <div className="contentTop__left--text">
            <h1 className="contentTop__h1">
              <FormattedMessage
                id="app.salute"
                defaultMessage={`Hola, Soy Miguel`}
              />
            </h1>
          <h5>
            <FormattedMessage
              id="app.developer_title"
              defaultMessage={`Desarrollador Full Stack`}
            />
          </h5>
          <p>
            <FormattedMessage
              id="app.developer_p1"
              defaultMessage={`Me apasiona la programación y los nuevos retos, crear y mejorar, siempre buscando un mejor nivel, tengo gran experiencia creando páginas web usando "react" en frontend y "laravel" en backend.`}
            />
          </p>
          <p>
            <FormattedMessage
              id="app.developer_p2"
              defaultMessage={`Trabajo con las últimas tecnologías, buscando siempre mejorar y optimizar los proyectos en los que trabajo, buscando la excelencia en cada uno de ellos.`}
            />
          </p>
          <div className="contentTop__btn">
            <Button ClickBtn={()=>goToContactRefDiv()}>
              <>
                <FormattedMessage
                  id="app.contact_me"
                  defaultMessage={`contactame`}
                />
                <Msn/>
              </>
            </Button>
          </div>
        </div>
      </div>
      <div className="contentTop__right">
        <div className="contentTop__right--svg">
          <SvgLogoInitial/>
        </div>
      </div>
    </div>
  )
}
