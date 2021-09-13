import React, {useContext, useState} from "react";
import {Badge, Button, Card, CardImg, Col, Form, FormControl, Row, Table} from "react-bootstrap";
import Shake from "react-reveal/Shake";
import Pulse from "react-reveal/Pulse";
import ReactCardFlip from "react-card-flip";
import Check from "../../assets/img/check.webp";
import { setDataImg } from "./const_memory";
import useSound from "use-sound";
import SoundCard from "../../assets/sounds/plunger.mp3";
import correctSount from '../../assets/sounds/correct.wav'
import failSount from '../../assets/sounds/error.wav'
import initGameSound from '../../assets/sounds/startgame.mp3'
import endGameSonund from '../../assets/sounds/endgame.mp3'
import {GlobalContext} from "../../context/GlobalContext";
import {Flip} from "react-reveal";

export default function GameMemory(){
    const context = useContext(GlobalContext)
    const [play] = useSound(SoundCard,
        { volume: 0.25 }
    );
    const [play2] = useSound(correctSount,
        { volume: 0.25 }
    );
    const [play3] = useSound(failSount,
        { volume: 0.25 }
    );
    const [play4] = useSound(initGameSound,
        { volume: 0.25 }
    );
    const [play5] = useSound(endGameSonund,
        { volume: 0.25 }
    );
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
        play5();
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
                            play2();
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
                            play3();
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
            play4();
            setTimeStart1();
            setTimeStart(true)
        }
        if(endgame) setTimeOut()
    }

    return (
        <section className="py-5">
            <div>
                <h2>{context.state.leng==='en'?('Memory game'):('Juego de memoria')}</h2>
                <h6>{context.state.leng==='en'?('More coming soon ...'):('Proximamente más...')}</h6>
            </div>
            <Row>
                <Col sm={9}>
                    <ul className="list-group mb-2">
                        <li className={context.state.darkTheme?('list-group-item d-flex justify-content-between align-items-center bg-dark'):
                            ('list-group-item d-flex justify-content-between align-items-center')}>
                            <span className={context.state.darkTheme?('text-white'):('text-dark')}>
                                {context.state.leng==='en'?('Number of failures:'):('Cantidad de fallas:')}
                            </span>
                            <Badge bg="secondary"><h5 className="m-0">{countFail}</h5></Badge>
                        </li>
                        <li className={context.state.darkTheme?('list-group-item d-flex justify-content-between align-items-center bg-dark'):
                            ('list-group-item d-flex justify-content-between align-items-center')}>
                            <span className={context.state.darkTheme?('text-white'):('text-dark')}>
                                {context.state.leng==='en'?('Time elapsed:'):('Tiempo transcurrido:')}
                            </span>
                            <Badge bg="secondary"><h5 className="m-0">{endSecondsGame===-1? secondsGame : endSecondsGame}</h5></Badge>
                        </li>
                        <li className={context.state.darkTheme?('list-group-item bg-dark'):
                            ('list-group-item')}>
                            <span className={context.state.darkTheme?('text-white'):('text-dark')}>
                                {timeStart?endCaseGame?(
                                    <div>
                                        <Flip right spy={context.state.checkedLengcount}>
                                            {context.state.leng==='en'?(
                                                <Form className="d-flex">
                                                    <Col xs={3}>Game over</Col>
                                                    <FormControl
                                                        type="text"
                                                        placeholder="Enter your name (max: 10 characters) "
                                                        className="mr-2"
                                                    />
                                                    <Button variant="success">Enviar</Button>
                                                </Form>
                                            ):(
                                                <Form className="d-flex">
                                                    <Col xs={3}>Fin del juego</Col>
                                                    <FormControl
                                                        type="text"
                                                        placeholder="Ingresa tu nombre (max: 10 caracteres)"
                                                        className="mr-2"
                                                    />
                                                    <Button variant="success">Enviar</Button>
                                                </Form>
                                            )}
                                        </Flip>
                                    </div>
                                ):(
                                    <>{context.state.leng==='en'?('In process'):('En proceso')}</>

                                ):(
                                    <>{context.state.leng==='en'?('Start the game'):('Inicia el juego')}</>
                                    )}
                            </span>

                        </li>
                    </ul>
                    <Row>
                        {data.map((data, key)=>{
                            return (
                                <Col className="px-0" xs={4} sm={2} key={key}>
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
                    <Card className={context.state.darkTheme?('bg-dark'):('bg-white')}>
                        <Card.Header>
                            <h4>
                                {context.state.leng==='en'?('Top Players:'):('Mejores jugadores:')}
                            </h4>
                        </Card.Header>
                        <Table striped bordered hover className={context.state.darkTheme?('bg-dark mb-0'):('bg-white mb-0')}>
                            <thead>
                            <tr className={context.state.darkTheme?("text-white"):("text-dark")}>
                                <th>#</th>
                                {context.state.leng==='en'?(<th>Name</th>):(<th>Nombre</th>)}
                                {context.state.leng==='en'?(<th>Time</th>):(<th>Tiempo</th>)}
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={context.state.darkTheme?("text-white"):("text-dark")}>
                                <td>1</td>
                                <td>miguel</td>
                                <td className="text-end">153</td>
                            </tr>
                            <tr className={context.state.darkTheme?("text-white"):("text-dark")}>
                                <td>2</td>
                                <td>angel</td>
                                <td className="text-end">124</td>
                            </tr>
                            <tr className={context.state.darkTheme?("text-white"):("text-dark")}>
                                <td>3</td>
                                <td>angel</td>
                                <td className="text-end">124</td>
                            </tr>
                            <tr className={context.state.darkTheme?("text-white"):("text-dark")}>
                                <td>4</td>
                                <td>angel</td>
                                <td className="text-end">124</td>
                            </tr>
                            <tr className={context.state.darkTheme?("text-white"):("text-dark")}>
                                <td>5</td>
                                <td>angel</td>
                                <td className="text-end">124</td>
                            </tr>
                            <tr className={context.state.darkTheme?("text-white"):("text-dark")}>
                                <td>6</td>
                                <td>angel</td>
                                <td className="text-end">124</td>
                            </tr>
                            <tr className={context.state.darkTheme?("text-white"):("text-dark")}>
                                <td>7</td>
                                <td>angel</td>
                                <td className="text-end">124</td>
                            </tr>
                            <tr className={context.state.darkTheme?("text-white"):("text-dark")}>
                                <td>8</td>
                                <td>angel</td>
                                <td className="text-end">124</td>
                            </tr>
                            <tr className={context.state.darkTheme?("text-white"):("text-dark")}>
                                <td>9</td>
                                <td>angel</td>
                                <td className="text-end">124</td>
                            </tr>
                            <tr className={context.state.darkTheme?("text-white"):("text-dark")}>
                                <td>10</td>
                                <td>angel</td>
                                <td className="text-end">124</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </section>
    );
}