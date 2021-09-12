import React, { useState } from "react";
import {Badge, Card, CardImg, Col, Row} from "react-bootstrap";
import Shake from "react-reveal/Shake";
import Pulse from "react-reveal/Pulse";
import ReactCardFlip from "react-card-flip";
import Check from "../../assets/img/check.webp";
import { setDataImg } from "./const_memory";
import useSound from "use-sound";
import SoundCard from "../../assets/sounds/plunger.mp3";

export default function GameMemory(props){
    const [play] = useSound(SoundCard);
    let initData = ()=>{
        let data1 = setDataImg();
        let data2 = setDataImg();
        data1.push(...data2);
        function shuffle(array) {
            let currentIndex = array.length,  randomIndex;
            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }
            return array;
        }
        shuffle(data1);
        return data1;
    }
    let counvar=0;
    let intervalTime
    const [data, setData] = useState(initData());
    const [dataKeySelect, setDataKeySelect] = useState(-1);
    const [dataIdSelect, setDataIdSelect] = useState(0);
    const [loadCompro, setLoadCompro] = useState(false);
    const [timeStart, setTimeStart] = useState(false);
    const [secondsGame, setSecondsGame] = useState(0);
    const [endSecondsGame, setEndSecondsGame] = useState(-1);
    const [countFail, setCountFail] = useState(0);
    const [endCaseGame, setendCaseGame] = useState(false);

    const tick = () => {
        counvar = counvar+1;
        setSecondsGame(counvar);
    }
    const setTimeStart1 = ()=>{
        intervalTime = setInterval(() => tick(), 1000);
    }
    const setTimeOut = () =>{
        clearInterval(intervalTime);
        setendCaseGame(true);
        setEndSecondsGame(secondsGame);
    }
    const onCheck = (e, key) =>{
        let newcountFail = countFail+1;
        if(!data[key].check&&!loadCompro){
            play()
            if(dataKeySelect>=0){
                if(dataIdSelect===data[key].id){
                    data[key].check = true;
                    data.forEach((dat)=>{
                        if(dat.id===dataIdSelect) dat.countcorrect = 1;
                    })
                    setTimeout(
                        ()=>{
                            setData(data);
                            setDataKeySelect(-1);
                            setDataIdSelect(0);
                        },
                        300);
                }else{
                    data[key].check = true;
                    setData(data);
                    setLoadCompro(true);
                    setCountFail(newcountFail);
                    setTimeout(
                        ()=>{
                            data[key].countfail = data[key].countfail+1;
                            data[dataKeySelect].countfail = data[dataKeySelect].countfail+1;
                            setData(data);
                        },
                        300);
                    setTimeout(
                        ()=>{
                            data[key].check = false;
                            data[dataKeySelect].check = false;
                            setData(data);
                            setDataKeySelect(-1);
                            setDataIdSelect(0);
                            setLoadCompro(false);
                        },
                        1000);
                }
            }else{
                data[key].check = true;
                setDataKeySelect(key);
                setDataIdSelect(data[key].id);
            }
        }
        let endgame = true;
        for(let dat in data){
            if(!data[dat].check){
                endgame = false;
            }
        }
        if(!timeStart){
            setTimeStart1();
            setTimeStart(true)
        }
        if(endgame) setTimeOut()
    }

    return (
        <section className="py-5">
            <Row>
                <Col sm={9}>
                    <ul className="list-group mb-2">
                        <li className={props.checkedTheme?('list-group-item d-flex justify-content-between align-items-center bg-dark'):
                            ('list-group-item d-flex justify-content-between align-items-center')}>
                            <span className={props.checkedTheme?('text-white'):('text-dark')}>Cantidad de fallas:</span>
                            <Badge bg="secondary"><h5 className="m-0">{countFail}</h5></Badge>
                        </li>
                        <li className={props.checkedTheme?('list-group-item d-flex justify-content-between align-items-center bg-dark'):
                            ('list-group-item d-flex justify-content-between align-items-center')}>
                            <span className={props.checkedTheme?('text-white'):('text-dark')}>tiempo transcurrido:</span>
                            <Badge bg="secondary"><h5 className="m-0">{endSecondsGame===-1? secondsGame : endSecondsGame}</h5></Badge>
                        </li>
                        <li className={props.checkedTheme?('list-group-item d-flex justify-content-between align-items-center bg-dark'):
                            ('list-group-item d-flex justify-content-between align-items-center')}>
                            <span className={props.checkedTheme?('text-white'):('text-dark')}>
                                {timeStart?endCaseGame?('Juego finalizado'):('En proceso'):('Inicia el juego')}
                            </span>

                        </li>
                    </ul>
                    <Row>
                        {data.map((data, key)=>{
                            return (
                                <Col className="px-0" sm={2} key={key}>
                                    <Shake spy={data.countfail} >
                                        <Pulse spy={data.countcorrect}>
                                            <ReactCardFlip isFlipped={data.check} flipDirection="horizontal">
                                                <Card className="shadow-lg m-1 rounded" onClick={(e)=>onCheck(e, key)}>
                                                    <CardImg src={Check}/>
                                                </Card>
                                                <Card className="shadow-lg m-1 rounded" onClick={(e)=>onCheck(e, key)}>
                                                    <CardImg src={data.check? data.img : Check}/>
                                                </Card>

                                            </ReactCardFlip>
                                        </Pulse>
                                    </Shake>
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
                <Col sm={3}>
                    <Card>
                        datos de los demas
                    </Card>
                </Col>

            </Row>
        </section>
    );
}