import { useEffect, useRef, useState } from "react"
import { ContentAbout } from "./contentPage/ContentAbout/ContentAbout"
import { ContentContact } from "./contentPage/ContentContact/ContentContact"
import { ContentPortfolio } from "./contentPage/ContentPortfolio/ContentPortfolio"
import { ContentSkills } from "./contentPage/ContentSkills/ContentSkills"
import { ContentTop } from "./contentPage/ContentTop/ContentTop"
import { MemoryGame } from "./contentPage/MemoryGame/MemoryGame"
import { OpenAi } from "./contentPage/OpenAi/OpenAi"
import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"
import { Notifications } from "./Notifications/Notifications"

export enum BtnHover {
    TOP,
    MEMORY,
    CONTACT,
    OPEN_AI,
    ABOUT
}
export const Page = () => {
    const contentTopRef = useRef<HTMLDivElement>(null);
    const memoryGameRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const openAiRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const [btnHover, setBtnHover] = useState(BtnHover.TOP)

    const onScrollSelect = (e:Event)=>{
        const target = e.target as typeof e.target & {
            documentElement:{
                scrollTop:number;
            }
        }
        if(memoryGameRef.current && contactRef.current && aboutRef.current/*  && openAiRef.current */){
            const siteMemory =  memoryGameRef.current.getBoundingClientRect().top + scrollY - 100;
            const siteContact =  contactRef.current.getBoundingClientRect().top + scrollY - 150;
            //const siteOpenAi =  openAiRef.current.getBoundingClientRect().top + scrollY - 150;
            const siteAbout =  aboutRef.current.getBoundingClientRect().top + scrollY - 150;
            const siteCurrent = target?.documentElement?.scrollTop;
            if(siteCurrent<siteMemory){
                setBtnHover(BtnHover.TOP);
            }else if(siteCurrent>siteMemory && siteCurrent<siteContact){
                setBtnHover(BtnHover.MEMORY);
            }else if(siteCurrent>siteContact && siteCurrent<siteAbout){
                setBtnHover(BtnHover.CONTACT);
            //}else if(siteCurrent>siteOpenAi && siteCurrent<siteAbout){
            //    setBtnHover(BtnHover.OPEN_AI);
            }else if(siteCurrent>siteAbout){
                setBtnHover(BtnHover.ABOUT);
            }
        }
        
    }

    useEffect(() => {
        addEventListener('scroll', onScrollSelect)
        return () =>removeEventListener('scroll', onScrollSelect)
    }, [])
    const goToContentTopDiv = () =>{
        if(contentTopRef.current){
            contentTopRef.current.offsetTop;
            const y =  contentTopRef.current.getBoundingClientRect().top + scrollY -70;
            scrollTo({top: y, behavior: 'smooth'});
        }
    }
    const goToMemoryDiv = () =>{
        if(memoryGameRef.current){
            memoryGameRef.current.offsetTop;
            const y =  memoryGameRef.current.getBoundingClientRect().top + scrollY -50;
            scrollTo({top: y, behavior: 'smooth'});
        }
    }
    const goToContactRefDiv = () =>{
        if(contactRef.current){
            contactRef.current.offsetTop;
            const y =  contactRef.current.getBoundingClientRect().top + scrollY -100;
            scrollTo({top: y, behavior: 'smooth'});
        }
    }
    const goToAboutRefRefDiv = () =>{
        if(aboutRef.current){
            aboutRef.current.offsetTop;
            const y =  aboutRef.current.getBoundingClientRect().top + scrollY -100;
            scrollTo({top: y, behavior: 'smooth'});
        }
    }
    const goToOpenAiRefDiv = () =>{
        if(openAiRef.current){
            openAiRef.current.offsetTop;
            const y =  openAiRef.current.getBoundingClientRect().top + scrollY -100;
            scrollTo({top: y, behavior: 'smooth'});
        }
    }
    
  return (
            <main className="main">
                <Notifications/>
                <Header btnHover={btnHover} goToMemoryDiv={goToMemoryDiv} goToOpenAiRefDiv={goToOpenAiRefDiv}
                goToContentTopDiv={goToContentTopDiv} goToContactRefDiv={goToContactRefDiv} 
                goToAboutRefRefDiv={goToAboutRefRefDiv} />
                <ContentTop contentTopRef={contentTopRef} goToContactRefDiv={goToContactRefDiv}/>
                <ContentSkills/>
                <ContentPortfolio/>
                <MemoryGame memoryGameRef={memoryGameRef}/>
                <ContentContact contactRef={contactRef}/>
                {/* <OpenAi openAiRef={openAiRef}/> */}
                <ContentAbout aboutRef={aboutRef}/>
                <Footer/>
            </main>
        )
}
