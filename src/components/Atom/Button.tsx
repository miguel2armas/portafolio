import { ReactNode } from "react";
import {ReactComponent as Loading} from "../../../assets/img/icons/loading.svg";
interface Props {
    paddingDesktop?:number | string | undefined;
    paddingMobile?:number | string | undefined;
    ClickBtn:Function;
    loading?:boolean | undefined;
    children:ReactNode
    variant?:string
    disabled?:boolean
    type?:"button" | "submit" | "reset" | undefined
}
export const Button = ({paddingDesktop, paddingMobile, ClickBtn, loading, children, variant, disabled, type="button"}:Props) => {

    const paddingStyle = (paddingDesktop && paddingMobile)? false?{
        paddingLeft:`${paddingMobile}px`, 
        paddingRight:`${paddingMobile}px`
    }:{
        paddingLeft:`${paddingDesktop}px`, 
        paddingRight:`${paddingDesktop}px`
    }:{}
  return (
    <button type={type} style={paddingStyle} className={`Button__${variant ? variant:''} Button`} onClick={()=>ClickBtn()} disabled={disabled}>
        {loading?<Loading/>:children}
    </button>
  )
}
