import React, {Component} from 'react';
import {Card, CardImg, Col, Row} from "react-bootstrap";
import Shake from 'react-reveal/Shake';
import Pulse from 'react-reveal/Pulse';
import Img1 from "../../assets/img/1.webp"
import Img2 from "../../assets/img/2.webp"
import Img3 from "../../assets/img/3.webp"
import Img4 from "../../assets/img/4.webp"
import Img5 from "../../assets/img/5.webp"
import Img6 from "../../assets/img/6.webp"
import Img7 from "../../assets/img/7.webp"
import Img8 from "../../assets/img/8.webp"
import Img9 from "../../assets/img/9.webp"
import Check from "../../assets/img/check.webp"
import ReactCardFlip from "react-card-flip";
import BiteSound from '../../assets/sounds/bite.mp3'
import useSound from 'use-sound';

const BoopButton = () => {
    const [play] = useSound(BiteSound);

    return <button onClick={play}>Boop!</button>;
};
class Memory extends Component {
    state={
        data:[],
        datakeyselect:-1,
        dataidselect:0,
        loadcompro:false,
        time:0,
        timeStart:false,
        seconds: 0,
        countFail:0,
        endCaseGame:false
    }
    setdata = ()=>{
        let data = []
        for(let i=1; i<10; i++){
            let imgselect = Img1;
            i===1? imgselect = Img1:
                i===2? imgselect = Img2:
                    i===3? imgselect = Img3:
                        i===4? imgselect = Img4:
                            i===5? imgselect = Img5:
                                i===6? imgselect = Img6:
                                    i===7? imgselect = Img7:
                                        i===8? imgselect = Img8:
                                            imgselect = Img9;
            let data1 ={
                "id": `${i}`,
                "img": imgselect,
                "check" : false,
                "countfail":0,
                "countcorrect":0
            }
            data.push(data1);
        }
        return data;
    }
    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }
    setTimeStart = ()=>{
        this.interval = setInterval(() => this.tick(), 1000);
    }
    setTimeOut = () =>{
        clearInterval(this.interval);
        this.setState({
            endCaseGame:true
        })
    }
    componentDidMount() {
        let data = this.setdata();
        let data2 = this.setdata();
        data.push(...data2);
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
        shuffle(data);
        this.setState({
            data
        })
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    onCheck = (e, key) =>{
        if(!this.state.setTimeStart){
            this.setTimeStart();
            this.setState({
                setTimeStart:true
            })
        }
        let data = this.state.data;
        let countFail = this.state.countFail+1;
        if(!data[key].check&&!this.state.loadcompro){
            let datakeyselect = this.state.datakeyselect;
            if(this.state.datakeyselect>=0){
                if(this.state.dataidselect===data[key].id){
                    data[key].check = true;
                    data.forEach((dat)=>{
                        if(dat.id===this.state.dataidselect) dat.countcorrect = 1;
                    })
                    setTimeout(
                        ()=>{
                            this.setState({
                                data,
                                datakeyselect:-1,
                                dataidselect:0
                            })
                        },
                        300);
                }else{
                    data[key].check = true;
                    this.setState({
                        data,
                        loadcompro:true,
                        countFail
                    })
                    setTimeout(
                        ()=>{
                            data[key].countfail = data[key].countfail+1;
                            data[datakeyselect].countfail = data[datakeyselect].countfail+1;
                            this.setState({
                                data
                            })
                        },
                        300);
                    setTimeout(
                        ()=>{
                            data[key].check = false;
                            data[datakeyselect].check = false;
                            this.setState({
                                data,
                                datakeyselect:-1,
                                dataidselect:0,
                                loadcompro:false
                            })
                        },
                        1000);
                }
            }else{
                data[key].check = true;
                this.setState({
                    data,
                    datakeyselect:key,
                    dataidselect:data[key].id
                })
            }
        }
        let endgame = true;
        for(let dat in data){
            if(!data[dat].check){
                endgame = false;
            }
        }
        if(endgame) this.setTimeOut()
    }
    render() {
        return (
            <section className="py-5">
                <Row>
                    <Col sm={9}>
                        <Col>
                            Cantidad de fallas: {this.state.countFail}
                        </Col>
                        <Col>tiempo transcurrido: {this.state.seconds}</Col>
                        <Col>{this.state.endCaseGame?('Juego finalizado'):('')} </Col>
                        <Col>
                            <button onClick={BoopButton}>asd</button>
                        </Col>
                        <Row>
                            {this.state.data.map((data, key)=>{
                                return (
                                    <Col className="px-0" sm={2} key={key}>
                                        <Shake spy={data.countfail} >
                                            <Pulse spy={data.countcorrect}>
                                                <ReactCardFlip isFlipped={data.check} flipDirection="horizontal">
                                                    <Card className="shadow-lg m-1 rounded" onClick={(e)=>this.onCheck(e, key)}>
                                                        <CardImg src={Check}/>
                                                    </Card>
                                                    <Card className="shadow-lg m-1 rounded" onClick={(e)=>this.onCheck(e, key)}>
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
}

export default Memory;