import { useState } from "react"
import { ContentAboutPage } from "./ContentAboutPage"
import { ContentAboutProfile } from "./ContentAboutProfile"

enum Pages {
  profile,
  page
}
export const ContentAbout = () => {
  const [pageSelect, setPageSelect] = useState(Pages.profile)
  return (
    <div className="contentAbout">
      <div className="contentAbout__top">
        <button className={`${pageSelect === Pages.page ? 'contentAbout__top--btnSelect': 'contentAbout__top--btn'}`} onClick={()=>setPageSelect(Pages.page)}>
          Sobre el sitio web
        </button>
        <button className={`${pageSelect === Pages.profile ? 'contentAbout__top--btnSelect': 'contentAbout__top--btn'}`} onClick={()=>setPageSelect(Pages.profile)}>
          Sobre mi
        </button>
      </div>
      {pageSelect === Pages.page ? <ContentAboutPage/> : <ContentAboutProfile/>}
    </div>
  )
}
