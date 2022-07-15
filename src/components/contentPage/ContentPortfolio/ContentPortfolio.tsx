import { Slider } from "../../Atom/Slider"
import EstraImg from "../../../../assets/img/portfolio/estra.webp"
import Yamaha1Img from "../../../../assets/img/portfolio/yamaha1.webp"
import ElectrobelloImg from "../../../../assets/img/portfolio/electrobello.webp"
import Yamaha3Img from "../../../../assets/img/portfolio/yamaha3.webp"
import Yamaha2Img from "../../../../assets/img/portfolio/yamaha2.webp"
import MiguelArmasImg from "../../../../assets/img/portfolio/miguel-armas.webp"
import {ReactComponent as Arrow} from "../../../../assets/img/icons/arrow_link.svg";
import { FormattedMessage } from "react-intl"
const VtexLink = () => <a className="ContentSlider__a" href="https://developers.vtex.com/vtex-developer-docs/docs/welcome" target={"_blank"} rel="apple-touch-icon">Vtex IO</a>;
export const ContentPortfolio = () => {
  return (
    <div className="ContentPortfolio">
      <h2>
        <FormattedMessage
            id="app.ContentPortfolioTitle"
            defaultMessage={`Portafolio`}
          />
        </h2>
      <h3>
        <FormattedMessage
            id="app.ContentPortfolioSubTitle"
            defaultMessage={`Trabajos más recientes`}
          />
      </h3>
      <Slider autoplay={false} controls={true}> 
        <div className="ContentSlider">
          <div className="ContentSlider__left">
            <img loading="lazy" src={Yamaha2Img} alt="yamaha" className="ContentSlider__left--img" />
          </div>
          <div className="ContentSlider__right">
            <div>
              <h2 className="ContentSlider__right--title">
                <FormattedMessage
                    id="app.ContentPortfolioYamaha2Title"
                    defaultMessage={`Componente customizado buscador de partes`}
                  />
              </h2>
              <div className="ContentSlider__right--description">
                <FormattedMessage
                    id="app.ContentPortfolioComponentDescription"
                    defaultMessage={`Componente customizado en`}
                  /> <VtexLink/> <FormattedMessage
                  id="app.ContentPortfolioComponentDescriptionYamaha2"
                  defaultMessage={`con React que a partir de una lista de partes (productos) crea un buscador con opciones de modelo, año y tipo, ademas al seleccionar una parte, esta envia a una pagina adicional donde salen los componentes relacionados (productos) a esa parte y se pueden agregar al carrito uno a uno.`}
                />
              </div>
            </div>
            <div>
              <a className="ContentSlider__right--a" href="https://www.tienda-yamaha.com.co/search-parts" target={"_blank"} rel="apple-touch-icon">
                <FormattedMessage
                    id="app.ContentPortfolioComponentLinkWebSite"
                    defaultMessage={`ir al sitio web.`}
                  /> <Arrow/>
              </a>
            </div>
          </div>
        </div>
        <div className="ContentSlider">
          <div className="ContentSlider__left">
            <img src={Yamaha3Img} alt="yamaha" className="ContentSlider__left--img" />
          </div>
          <div className="ContentSlider__right">
            <div>
              <h2 className="ContentSlider__right--title">
                <FormattedMessage
                    id="app.ContentPortfolioComponentLinkWebSite"
                    defaultMessage={`Componente customizado de lista de deseos`}
                  />
              </h2>
              <div className="ContentSlider__right--description">
                <FormattedMessage
                    id="app.ContentPortfolioComponentDescription"
                    defaultMessage={`Componente customizado en`}
                  /> <VtexLink/> <FormattedMessage
                      id="app.ContentPortfolioComponentDescriptionYamaha3"
                      defaultMessage={`con React que reemplaza el componente nativo de lista de deseos el cual aumenta las funcionalidades y ademas funciona usando contexto de los productos y botones de compra nativo.`}
                    />
              </div>
            </div>
            <div>
              <a className="ContentSlider__right--a" href="https://www.tienda-yamaha.com.co/favoritos" target={"_blank"} rel="apple-touch-icon">
              <FormattedMessage
                    id="app.ContentPortfolioComponentLinkWebSite"
                    defaultMessage={`ir al sitio web.`}
                  /> <Arrow/>
              </a>
            </div>
          </div>
        </div>
        <div className="ContentSlider">
          <div className="ContentSlider__left">
            <img src={Yamaha1Img} alt="yamaha" className="ContentSlider__left--img" />
          </div>
          <div className="ContentSlider__right">
            <div>
              <h2 className="ContentSlider__right--title">
              <FormattedMessage
                    id="app.ContentPortfolioComponentPageMap"
                    defaultMessage={`Pagina custom de mapa de tiendas`}
                  />
              </h2>
              <div className="ContentSlider__right--description">
                <FormattedMessage
                    id="app.ContentPortfolioComponentDescription"
                    defaultMessage={`Componente customizado en`}
                  /> <VtexLink/> <FormattedMessage
                        id="app.ContentPortfolioComponentPageMap2"
                        defaultMessage={`con React para mostrar y buscar las tiendas de la empresa.`}
                      />
              </div>
            </div>
            <div>
              <a className="ContentSlider__right--a" href="https://www.tienda-yamaha.com.co/tiendas" target={"_blank"} rel="apple-touch-icon">
              <FormattedMessage
                    id="app.ContentPortfolioComponentLinkWebSite"
                    defaultMessage={`ir al sitio web.`}
                  /> <Arrow/>
              </a>
            </div>
          </div>
        </div>
        <div className="ContentSlider">
          <div className="ContentSlider__left">
            <img src={EstraImg} alt="estra" className="ContentSlider__left--img" />
          </div>
          <div className="ContentSlider__right">
            <div>
              <h2 className="ContentSlider__right--title">
              <FormattedMessage
                    id="app.ContentPortfolioComponentPageMap"
                    defaultMessage={`Pagina custom de mapa de tiendas`}
                  />
              </h2>
              <div className="ContentSlider__right--description">
                <FormattedMessage
                    id="app.ContentPortfolioComponentDescription"
                    defaultMessage={`Componente customizado en`}
                  /> <VtexLink/> <FormattedMessage
                  id="app.ContentPortfolioComponentPageMap2"
                  defaultMessage={`con React para mostrar y buscar las tiendas de la empresa.`}
                />
              </div>
            </div>
            <div>
              <a className="ContentSlider__right--a" href="https://www.estra.com/mapa-tiendas" target={"_blank"} rel="apple-touch-icon">
              <FormattedMessage
                    id="app.ContentPortfolioComponentLinkWebSite"
                    defaultMessage={`ir al sitio web.`}
                  /> <Arrow/>
              </a>
            </div>
          </div>
        </div>
        <div className="ContentSlider">
          <div className="ContentSlider__left">
            <img src={ElectrobelloImg} alt="electrobello" className="ContentSlider__left--img" />
          </div>
          <div className="ContentSlider__right">
            <div>
              <h2 className="ContentSlider__right--title">
              <FormattedMessage
                    id="app.ContentPortfolioComponentPageMap"
                    defaultMessage={`Pagina custom de mapa de tiendas`}
                  />
              </h2>
              <div className="ContentSlider__right--description">
                <FormattedMessage
                    id="app.ContentPortfolioComponentDescription"
                    defaultMessage={`Componente customizado en`}
                  /> <VtexLink/> <FormattedMessage
                    id="app.ContentPortfolioComponentPageMap2"
                    defaultMessage={`con React para mostrar y buscar las tiendas de la empresa.`}
                  />
              </div>
            </div>
            <div>
              <a className="ContentSlider__right--a" href="https://www.electrobello.com/mapa-tiendas" target={"_blank"} rel="apple-touch-icon">
              <FormattedMessage
                    id="app.ContentPortfolioComponentLinkWebSite"
                    defaultMessage={`ir al sitio web.`}
                  /> <Arrow/>
              </a>
            </div>
          </div>
        </div>
        <div className="ContentSlider">
          <div className="ContentSlider__left">
            <img src={MiguelArmasImg} alt="electrobello" className="ContentSlider__left--img" />
          </div>
          <div className="ContentSlider__right">
            <div>
              <h2 className="ContentSlider__right--title">
              <FormattedMessage
                    id="app.ContentPortfolioComponentMyWebTitle"
                    defaultMessage={`Sitio web portafolio`}
                  />
              </h2>
              <div className="ContentSlider__right--description">
              <FormattedMessage
                    id="app.ContentPortfolioComponentMyWebDescription"
                    defaultMessage={`Sitio web creado con react usando typescript y scss como preprocesadores, ademas de usar algunas librerias para la base de datos y envio de correo electronico, se crearon imagenes SVG con animaciones y un juego de memoria con diferentes niveles.`}
                  />                
              </div>
            </div>
            <div>
              <a className="ContentSlider__right--a" href="https://github.com/miguel2armas/portafolio" target={"_blank"} rel="apple-touch-icon">
              <FormattedMessage
                    id="app.ContentPortfolioComponentLinkMyWeb"
                    defaultMessage={`ir al repositorio.`}
                  /> <Arrow/>
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}
