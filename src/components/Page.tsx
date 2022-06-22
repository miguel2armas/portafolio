import { ContentAbout } from "./contentPage/ContentAbout/ContentAbout"
import { ContentContact } from "./contentPage/ContentContact/ContentContact"
import { ContentPortfolio } from "./contentPage/ContentPortfolio/ContentPortfolio"
import { ContentSkills } from "./contentPage/ContentSkills/ContentSkills"
import { ContentTop } from "./contentPage/ContentTop/ContentTop"
import { MemoryGame } from "./contentPage/MemoryGame/MemoryGame"
import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"


export const Page = () => {
  return (
            <>
                <Header/>
                <ContentTop/>
                <ContentSkills/>
                <ContentPortfolio/>
                <MemoryGame/>
                <ContentContact/>
                <ContentAbout/>
                <Footer/>
            </>
        )
}
