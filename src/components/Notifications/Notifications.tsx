import {ReactComponent as SuccessSvg} from "../../assets/img/icons/success.svg";
import {ReactComponent as WarningSvg} from "../../assets/img/icons/warning.svg";
import {ReactComponent as CloseSvg} from "../../assets/img/icons/close.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { NotificationOptions, setShowNotification } from "../../redux/reducers/notificationReducer";

export const Notifications = () => {
    const [timer, setTimer] = useState(null as any);
    const dispatch = useAppDispatch();
    const notificationState = useAppSelector(NotificationOptions);
    
  const setCloseNotification = () => {
    dispatch(setShowNotification({...notificationState, show:false}));
    
  }
  const changeDelay =()=> {
      if (timer) {
        clearTimeout(timer);
        setTimer(null);
      }
      setTimer(
        setTimeout(() => {
        dispatch(setShowNotification({
            text:'',
            type: 'warning',
            show: false
          }));
        }, 3000)
      );
  }
  useEffect(() => {
      changeDelay();
  }, [notificationState])
  return (
    <div className={`notifications ${notificationState.show ? 'notifications__active': ''}`}>
        <div className={`notifications__content 
        ${notificationState.show ? 'notifications__content--active':''} 
        ${notificationState.type==='warning' ? 'notifications__content--warning':''}`}>
            <div className={`${notificationState.show ? 'notifications__content--svg': ''}`}>
                {notificationState.type==='success'?
                <SuccessSvg/> : <WarningSvg/>}
            </div>
            <div className={`${notificationState.show ? 'notifications__content--text': 'notifications__content--textClose'}`}>
            {notificationState.text}
            </div>
            <div className={`${notificationState.show ? 'notifications__content--close': 'notifications__content--closeNone'}`} onClick={()=>setCloseNotification()} >
                <CloseSvg/>
            </div>
        </div>
    </div>
  )
}
