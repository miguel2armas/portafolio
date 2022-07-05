import {useRef, useEffect, useCallback, useState, ReactNode, TouchEvent} from "react"
import {ReactComponent as ArrowLeft} from "../../assets/img/icons/arrow_left_slider.svg";
import {ReactComponent as ArrowRight} from "../../assets/img/icons/arrow_right_slider.svg";
interface Props {
    children:ReactNode;
    controls:boolean;
    autoplay:boolean;
    speed?:number;
    interval?:number;
}
export const Slider = ({ children, controls, autoplay, speed=1500, interval=6000 }:Props) =>{
    const slideshow = useRef<HTMLDivElement | null>(null);
    let intervalSlideshow:NodeJS.Timeout;
    const [ondrag, setOndrag] = useState({init:0, end:0})
    const clearTime = () => clearInterval(intervalSlideshow);
    const setTime = () => intervalSlideshow =  setInterval(btn_next, interval);
	useEffect(() => {
		if(autoplay){
               setTime();
                if(slideshow.current){
                    slideshow.current.addEventListener('mouseenter', clearTime);
                    slideshow.current.addEventListener('mouseleave', setTime);
                }
		}
        return () => {
            if(slideshow.current){
                slideshow.current.removeEventListener('mouseenter', clearTime);
                slideshow.current.removeEventListener('mouseleave', setTime);
            }
        }
	}, []);

    const btn_next = useCallback(() => {
		if(slideshow.current!==null && slideshow.current.children.length > 0){
            const firstChildren = slideshow.current.children[0] as typeof slideshow.current.children[0] & {
                offsetWidth:number
            }
			const firstElement = firstChildren;
			slideshow.current.style.transition = `${speed}ms ease-out all`;
			const tamSlide = firstChildren.offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamSlide}px)`;

			const transition = () => {
                if(slideshow.current!==null){
                    slideshow.current.style.transition = 'none';
                    slideshow.current.style.transform = `translateX(0)`;
                    slideshow.current.appendChild(firstElement);
                    slideshow.current.removeEventListener('transitionend', transition);
                }
			}
			slideshow.current.addEventListener('transitionend', transition);
		}
	}, [speed]);
    const btn_back  = () => {
		if(slideshow.current!==null && slideshow.current.children.length > 0){
			const index = slideshow.current.children.length - 1;
            const firstChildren = slideshow.current.children[0] as typeof slideshow.current.children[0] & {
                offsetWidth:number
            }
			const lastElement = slideshow.current.children[index];
			slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);
			slideshow.current.style.transition = 'none';
			const tamSlide = firstChildren.offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamSlide}px)`;
			setTimeout(() => {
                if(slideshow.current!==null){
                    slideshow.current.style.transition = `${speed}ms ease-out all`;
                    slideshow.current.style.transform = `translateX(0)`;
                }
			}, 30);
		}
	}
        useEffect(() => {
            if(ondrag.init!==ondrag.end){
                ondrag.init>ondrag.end ? btn_next() : btn_back();
            }
        }, [ondrag])
       const dragStart=(e:TouchEvent<HTMLDivElement>)=>{
           const touch = e.touches[0];
           setOndrag({init:touch.clientX, end:touch.clientX})
       }     
       const dragEnd=(e:TouchEvent<HTMLDivElement>)=>{
            const touch = e.changedTouches[0];
           setOndrag({init:ondrag.init, end:touch.clientX})
       }       
    return <>
            <div onTouchEnd={dragEnd} onTouchStart={dragStart} className="Slider">
                <div className="Slider__content">
                    <div className="Slider__content--show" ref={slideshow}>
                        {children}
                    </div>
                </div>
            </div>
            <div className="Slider__content">
                    {controls && <div className="Slider__content--controls">
                        <button className="Slider__content--btnLeft" 
                        onClick={()=>btn_back()}>
                            <ArrowLeft/>
                        </button>
                        <button className="Slider__content--btnRight" 
                        onClick={()=>btn_next()}>
                            <ArrowRight/>
                        </button>
                    </div>}
                </div>
            </>
}
