import React, {useContext, useEffect, useState} from "react";
import {Col} from "react-bootstrap";
import {GlobalContext} from "../context/GlobalContext";
import {db} from "../firebase";
import Cookies from 'universal-cookie'
const cookies = new Cookies();


const CountPage = ()=>{
    const [count, setcount] = useState([{
        count:"0",
        id:""
    }])
    const getCountPage = async ()=>{
        const docs = [];
        await db.collection("countPage")
            .onSnapshot((res)=>{
                res.forEach((doc) =>{
                    docs.push({...doc.data(), id: doc.id});
                });
                setcount(docs)
                return docs;
            });
    }
    const upCount = async ()=>{
        if(count[0].id!==""){
            const newNumber = parseInt(count[0].count)+1
            await db.collection('countPage').doc(count[0].id).update({count:newNumber})
            cookies.set('countPage', 'set', {path: "/", expires: new Date(Date.now()+1440000)});
        }

    }
    useEffect(()=>{
        if(!cookies.get('countPage')){
            upCount();
        }
        //

    }, [count])
    useEffect(()=>{
        getCountPage();
    }, []);
    const context = useContext(GlobalContext)
    return <Col className="text-md-end text-center">
        {context.state.leng==='en'?('You are visitor number:'):('Eres visitante número:')}
         <span className="badge bg-secondary mx-md-3 mx-1 p-2 mt-md-0 mt-3 fs-sm-1 fs-0"> {count[0].count==="0"?(<div className="py-2 px-3" />):(count[0].count)}</span>

    </Col>
}

export default CountPage
