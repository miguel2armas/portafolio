import React, {useContext, useState, useEffect} from "react";
import {Badge, Button, Card, CardImg, Col, Form, FormControl, Modal, Row, Spinner, Table} from "react-bootstrap";
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
import {db} from "../../firebase";
import {FaMedal, RiMedalLine, BiMedal} from "react-icons/all";
import moment from "moment";

export default function GameMemory(props){

    const [historyGame, setHistoryGame] = useState([])
    const getLink = ()=>{
        db.collection("history_memory")
            .onSnapshot((res)=>{
                const docs = [];
                res.forEach((doc) =>{
                    docs.push({...doc.data(), id: doc.id});
                });

                docs.sort(function (a, b) {
                    if (a.time > b.time) {
                        return 1;
                    }
                    if (a.time < b.time) {
                        return -1;
                    }
                    return 0;
                });
                setHistoryGame(docs)
            })
    }
    useEffect(()=>{
        getLink();
    }, []);
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
    const [data, setData] = useState(initData());
    const [userGame, setUserGame]=useState('');
    const [dataKeySelect, setDataKeySelect] = useState(-1);
    const [dataIdSelect, setDataIdSelect] = useState(0);
    const [loadCompro, setLoadCompro] = useState(false);
    const [timeStart, setTimeStart] = useState(false);
    const [countFail, setCountFail] = useState(0);
    const [endCaseGame, setendCaseGame] = useState(false);
    const [btnLoad, setBtnLoad] = useState(false);

    const setTimeOut = () =>{
        play5();
        //pause
        props.setPause();
        setendCaseGame(true);
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
            //iniciar
            props.setStart();
            setTimeStart(true)
        }
        if(endgame) setTimeOut()
    }
    const sendDataGamer = async () =>{
        setBtnLoad(true)
        const data = {
            name:userGame,
            time:props.seconds,
            failCount:countFail,
            create_at: moment().format()
        }
        await db.collection('history_memory').doc().set(data);
        handleCloseModal();
    }
    const handleCloseModal = ()=>{
        setData(initData());
        setUserGame('');
        setDataKeySelect(-1);
        setDataIdSelect(0);
        setLoadCompro(false);
        setTimeStart(false);
        //reset
        props.setReset();
        setCountFail(0);
        setendCaseGame(false);
        setBtnLoad(false);
    }
    return (
        <section className="pt-5">
            <div>
                <h2>{context.state.leng==='en'?('Memory game'):('Juego de memoria')}</h2>
                <h5>{context.state.leng==='en'?('Exercise your memory while trying to get first place!'):('¡Ejercita tu memoria mientras intentas conseguir el primer lugar!')}</h5>
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
                            <Badge bg="secondary"><h5 className="m-0">{props.seconds}</h5></Badge>
                        </li>
                        <li className={context.state.darkTheme?('list-group-item bg-dark'):
                            ('list-group-item')}>
                            <span className={context.state.darkTheme?('text-white'):('text-dark')}>
                                <Modal aria-labelledby="contained-modal-title-vcenter" show={endCaseGame} onHide={handleCloseModal} >
                                    <Form>
                                            <Modal.Header closeButton>
                                                <Modal.Title><span className="text-dark">{context.state.leng==='en'?('Enter your name:'):('Introduzca su nombre:')}</span></Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div>
                                                    <Flip right spy={context.state.checkedLengcount}>
                                                        <Col className="my-2 text-dark">{context.state.leng==='en'?('Enter your name to save your record'):('Ingresa tu nombre para guardar tu récord')}</Col>
                                                        <Col className="my-2 text-dark">{context.state.leng==='en'?('Time elapsed:'):('Tiempo transcurrido:')} {props.seconds}</Col>
                                                        <Col className="my-2 text-dark">{context.state.leng==='en'?('Number of errors:'):('Cantidad de errores:')} {countFail}</Col>
                                                        <FormControl
                                                            onChange={(e)=>setUserGame(e.target.value.length<9?e.target.value:userGame)}
                                                            type="text"
                                                            value={userGame}
                                                            placeholder={context.state.leng==='en'?('Enter your name (max: 8 characters)'):('Ingresa tu nombre (max: 8 caracteres)')}
                                                            className="mr-2"
                                                        />
                                                    </Flip>
                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                {btnLoad?(
                                                    <Button disabled={true} variant="success" className="py-0 px-3">
                                                        <Spinner animation="border" variant="light" />
                                                    </Button>
                                                ):(
                                                    <Button onClick={sendDataGamer} variant="success">
                                                        {context.state.leng==='en'?('Send'):('Enviar')}
                                                    </Button>
                                                )}
                                            </Modal.Footer>
                                    </Form>
                                </Modal>
                                {timeStart?endCaseGame?(
                                    <>{context.state.leng==='en'?('Game over'):('fin del juego')}</>
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
                                <Col className="px-0" xs={3} sm={2} key={key}>
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
                            <h4 className="fs-lg-1 fs-0">
                                {context.state.leng==='en'?('Top Players:'):('Mejores jugadores:')}
                            </h4>
                        </Card.Header>
                        <Table striped bordered hover className={context.state.darkTheme?('bg-dark mb-0'):('bg-white mb-0')}>
                            <thead>
                            <tr className={context.state.darkTheme?("text-white"):("text-dark")}>
                                <th className="text-center">#</th>
                                {context.state.leng==='en'?(<th>Name</th>):(<th>Nombre</th>)}
                                {context.state.leng==='en'?(<th>Time</th>):(<th>Tiempo</th>)}
                            </tr>
                            </thead>
                            <tbody>

                            {historyGame.map((history, key)=>{
                                if(key<10){
                                    return(
                                        <tr key={key} className={context.state.darkTheme?("text-white"):("text-dark")}>
                                            <td className="text-center">{key+1===1?(<FaMedal className="shadow-black-2" size="1.5em" color={"#f8ff00"}/>):
                                                key+1===2?(<RiMedalLine className="shadow-black-2" size="1.2em" color={"#83cc04"}/>):
                                                    key+1===3?(<BiMedal className="shadow-black-2" size="1.1em" color={"#06ab98"}/>):(key+1)}</td>
                                            <td>{history.name!==''?history.name:context.state.leng==='en'?('Anonymous'):'Anónimo'}</td>
                                            <td className="text-end">{history.time}</td>
                                        </tr>
                                    );
                                }else{
                                    return null;
                                }
                            })}
                            {historyGame.length===0?(
                                <tr className={context.state.darkTheme?("text-white"):("text-dark")}>
                                    <td colSpan={3}><div className="text-center">Cargando...</div></td>
                                </tr>
                            ):(
                                <></>
                            )}
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </section>
    );
}