import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { useCookie } from "./useCookie";

export const useCountPage = () =>{
    const {value, setCookie } = useCookie('countPage', '');
    const [count, setCount] = useState({id:'', value:0})
    const getCount = async ()=>{
        await db.collection("countPage")
            .onSnapshot((res)=>{
                res.forEach((doc) =>{
                    setCount({id:doc.id, value:doc.data().count})
                });
            });
    }
    useEffect(() => {
      if(value==='' && count.id!==''){
        addCountPage();
        setCookie('set');
      }
    }, [value, count])
    useEffect(() => {
      getCount();
    }, [])
    const addCountPage = async() =>{
        await db.collection('countPage').doc(count.id).update({count:(count.value+1)});
    }
    const countPage = count.value
    return { countPage };
}