import { useEffect } from 'react';
import { useState } from 'react';
import { useInterval } from 'usehooks-ts'
import { CardData, getCards } from "../static/cards";
import {db} from "../firebase/firebase";
import { MemoryHistory } from '../types/types';
import { useSound } from './useSound';

export enum ModeGame {
    EASY,
    NORMAL,
    HARD,
    LEGEND,
    NIGHTMARE
}
export const getTypeGame = (type:ModeGame) =>{
    if(type===ModeGame.EASY)      return 'EASY'
    if(type===ModeGame.NORMAL)    return 'NORMAL'
    if(type===ModeGame.HARD)      return 'HARD'
    if(type===ModeGame.LEGEND)    return 'LEGEND'
    if(type===ModeGame.NIGHTMARE) return 'NIGHTMARE'
}
export const useCard = () =>{
    const soundStartGame = useSound('/assets/sounds/startGame.mp3', 0.1);
    const soundViewCard  = useSound('/assets/sounds/viewCard.mp3', 0.1);
    const soundCorrect   = useSound('/assets/sounds/correct.wav', 0.1);
    const soundError     = useSound('/assets/sounds/error.wav', 0.1);
    const soundEndGame   = useSound('/assets/sounds/endGame.mp3', 0.1);

    const [cardData, setCardData] = useState([] as CardData[]);
    const [progress, setProgress] = useState(false);
    const [cardsCorrect, setCardsCorrect] = useState(0);
    const [currentSelectCard, setCurrentSelectCard] = useState({} as CardData);
    const [twoSelectCard, setTwoSelectCard] = useState([] as number[]);
    const [timeGame, setTimeGame] = useState(0);
    const [errorCheck, setErrorCheck] = useState(0);
    const [initGame, setInitGame] = useState(false);
    const [modeGame, setModeGame] = useState(ModeGame.NORMAL);
    const [modalEndGame, setModalEndGame] = useState(false);
    const [memoryHistory, setMemoryHistory] = useState([] as MemoryHistory[]);
    const getLink = ()=>{
        db.collection("memoryHistory")
            .onSnapshot((res)=>{
                let docs:MemoryHistory[] = [];
                res.forEach((doc) =>{
                    const newData = {...doc.data() as MemoryHistory, id: doc.id}
                    docs=[...docs, newData];
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
                setMemoryHistory(docs)
            })
    }

    useInterval(
        () => {
            setTimeGame(timeGame + 1)
        },
        initGame ? 1000 : null,
      )
    useEffect(() => {
        getCard(modeGame);
        getLink();

    }, [modeGame])

    const getCard = (modeGameSelect:ModeGame) =>{
        let cantCard = 0;
        if(modeGameSelect===ModeGame.EASY) cantCard = 8;
        if(modeGameSelect===ModeGame.NORMAL) cantCard = 12;
        if(modeGameSelect===ModeGame.HARD) cantCard = 15;
        if(modeGameSelect===ModeGame.LEGEND) cantCard = 30;
        if(modeGameSelect===ModeGame.NIGHTMARE) cantCard = 60;
        const cards = getCards(cantCard);
        setProgress(false);
        setCardsCorrect(0);
        setCurrentSelectCard({} as CardData);
        setTwoSelectCard([] as number[]);
        setTimeGame(0);
        setErrorCheck(0);
        setInitGame(false);
        setCardData(cards);
    }
    const onCheck = (index:number) =>{
        if(!initGame){
            setInitGame(true);
            soundStartGame.play();
        };
        let newCardData = [...cardData]
        newCardData[index].check=true;
        soundViewCard.play();
        if(!currentSelectCard.id){
            setCardsCorrect(0);
            setCurrentSelectCard(newCardData[index]);
            setCardData(newCardData);
            setTwoSelectCard([index]);
        }else{
            setProgress(true);
            setCardData(newCardData);
            setTwoSelectCard((preValue)=>[...preValue, index])
            const filterCards = newCardData.filter((card)=>card.id===newCardData[index].id);
            let cardCorrect = true;
            filterCards.forEach((card)=>{
                if(!card.check)cardCorrect = false;
            })
            if(cardCorrect){
                setCardsCorrect(1);
                setProgress(false);
                setCurrentSelectCard({} as CardData);
                if(!newCardData.some((card)=>card.check===false)){
                    setInitGame(false);
                    setModalEndGame(true);
                    soundEndGame.play();
                }
                setCardData(newCardData);
                soundCorrect.play();
            }
            setTimeout(()=>{
                if(!cardCorrect){
                    newCardData = newCardData.map((card)=>{
                        if(currentSelectCard.id===card.id) card.check = false;
                        return card;
                    })
                    newCardData[index].check=false;
                    setCardsCorrect(2);
                    setErrorCheck(preValue=>preValue+1);
                    setProgress(false);
                    setCurrentSelectCard({} as CardData);
                    setCardData(newCardData);
                    soundError.play();
                }
            }, 600)

        }

    }
    return {
        cardData,
        getCard,
        onCheck,
        setModeGame,
        setModalEndGame,
        modeGame,
        modalEndGame,
        cardsCorrect,
        twoSelectCard,
        progress,
        currentSelectCard,
        errorCheck,
        timeGame,
        initGame,
        memoryHistory
    }
}