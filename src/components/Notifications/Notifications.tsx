import { useState } from "react";
import {ReactComponent as SuccessSvg} from "../../assets/img/icons/success.svg";
import {ReactComponent as CloseSvg} from "../../assets/img/icons/close.svg";

export const Notifications = () => {
    const [show, setShow] = useState(true);
    
  return (
    <div className={`notifications ${show ? 'notifications__active': ''}`}>
        <div className={`notifications__content ${show ? 'notifications__content--active':''}`}>
            <div className={`${show ? 'notifications__content--svg': ''}`}>
                <SuccessSvg/>
            </div>
            <div className={`${show ? 'notifications__content--text': 'notifications__content--textClose'}`}>
            This is a success message!
            </div>
            <div className={`${show ? 'notifications__content--close': 'notifications__content--closeNone'}`} onClick={()=>setShow(false)} >
                <CloseSvg/>
            </div>
        </div>
    </div>
  )
}
