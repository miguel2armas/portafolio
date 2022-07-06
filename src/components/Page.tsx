import { useEffect, useRef, useState } from "react"
import { ContentAbout } from "./contentPage/ContentAbout/ContentAbout"
import { ContentContact } from "./contentPage/ContentContact/ContentContact"
import { ContentPortfolio } from "./contentPage/ContentPortfolio/ContentPortfolio"
import { ContentSkills } from "./contentPage/ContentSkills/ContentSkills"
import { ContentTop } from "./contentPage/ContentTop/ContentTop"
import { MemoryGame } from "./contentPage/MemoryGame/MemoryGame"
import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"
import { Notifications } from "./Notifications/Notifications"

export enum BtnHover {
    TOP,
    MEMORY,
    CONTACT,
    ABOUT
}
export const Page = () => {
    const contentTopRef = useRef<HTMLDivElement | null>(null);
    const memoryGameRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const [btnHover, setBtnHover] = useState(BtnHover.TOP)

    const onScrollSelect = (e:Event)=>{
        const target = e.target as typeof e.target & {
            documentElement:{
                scrollTop:number;
            }
        }
        if(memoryGameRef.current && contactRef.current && aboutRef.current){
            const siteMemory =  memoryGameRef.current.getBoundingClientRect().top + scrollY - 100;
            const siteContact =  contactRef.current.getBoundingClientRect().top + scrollY - 150;
            const siteAbout =  aboutRef.current.getBoundingClientRect().top + scrollY - 150;
            const siteCurrent = target?.documentElement?.scrollTop;
            if(siteCurrent<siteMemory){
                setBtnHover(BtnHover.TOP);
            }else if(siteCurrent>siteMemory && siteCurrent<siteContact){
                setBtnHover(BtnHover.MEMORY);
            }else if(siteCurrent>siteContact && siteCurrent<siteAbout){
                setBtnHover(BtnHover.CONTACT);
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
    
  return (
            <>
                <Notifications/>
                <Header btnHover={btnHover} goToMemoryDiv={goToMemoryDiv} goToContentTopDiv={goToContentTopDiv} goToContactRefDiv={goToContactRefDiv} goToAboutRefRefDiv={goToAboutRefRefDiv} />
                <ContentTop contentTopRef={contentTopRef} goToContactRefDiv={goToContactRefDiv}/>
                <ContentSkills/>
                <ContentPortfolio/>
                <MemoryGame memoryGameRef={memoryGameRef}/>
                <ContentContact contactRef={contactRef}/>
                <ContentAbout aboutRef={aboutRef}/>
                <Footer/>
            </>
        )
}
