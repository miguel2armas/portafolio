import { useState } from "react";


export const useCookie = (key: string, valueCookie: string) =>{

    const [value, setValue] = useState(()=>{
        const keyName = key + "="; 
        const allCookies = document.cookie.split(';');
        for(let i=0;i < allCookies.length;i++) {
            while (allCookies[i].charAt(0)==' ') allCookies[i] = allCookies[i].substring(1,allCookies[i].length);
            if (allCookies[i].indexOf(keyName) == 0) {
              return decodeURIComponent( allCookies[i].substring(keyName.length,allCookies[i].length) );
            }
          }
            document.cookie = `${key}=${encodeURIComponent( valueCookie )};`;
    });

    const setCookie = (newValueCookie: string, expire = 1440000) =>{
        const expireDate = new Date(Date.now()+expire);
        document.cookie = `${key}=${encodeURIComponent( newValueCookie )}; expires=${expireDate.toUTCString()}`;
        setValue(newValueCookie);
    }

return { value, setCookie }
}