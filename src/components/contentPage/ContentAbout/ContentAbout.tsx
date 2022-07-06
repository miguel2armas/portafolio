import { MutableRefObject, useState } from "react"
import { FormattedMessage } from "react-intl"
import { ContentAboutPage } from "./ContentAboutPage"
import { ContentAboutProfile } from "./ContentAboutProfile"

enum Pages {
  profile,
  page
}

interface Props {
  aboutRef:MutableRefObject<HTMLDivElement | null>
}

export const ContentAbout = ({aboutRef}:Props) => {
  const [pageSelect, setPageSelect] = useState(Pages.profile)
  return (
    <div className="contentAbout" ref={aboutRef}>
      <div className="contentAbout__top">
        <button className={`${pageSelect === Pages.page ? 'contentAbout__top--btnSelect': 'contentAbout__top--btn'}`} onClick={()=>setPageSelect(Pages.page)}>
          <FormattedMessage
            id="app.ContentAboutBtnSite"
            defaultMessage={`Sobre el sitio web`}
          />
        </button>
        <button className={`${pageSelect === Pages.profile ? 'contentAbout__top--btnSelect': 'contentAbout__top--btn'}`} onClick={()=>setPageSelect(Pages.profile)}>
          <FormattedMessage
            id="app.ContentAboutBtnMe"
            defaultMessage={`Sobre mi`}
          />
        </button>
      </div>
      {pageSelect === Pages.page ? <ContentAboutPage/> : <ContentAboutProfile/>}
    </div>
  )
}
