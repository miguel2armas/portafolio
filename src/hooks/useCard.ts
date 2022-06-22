import { useState } from 'react';
import useSound from 'use-sound';
import { useInterval } from 'usehooks-ts'
import { CardData, getCards } from "../static/cards";

export const useCard = () =>{
    const [soundStartGame] = useSound('/src/assets/sounds/startGame.mp3', { volume: 0.2 });
    const [soundViewCard] = useSound('/src/assets/sounds/viewCard.mp3', { volume: 0.2 });
    const [soundCorrect] = useSound('/src/assets/sounds/correct.wav', { volume: 0.2 });
    const [soundError] = useSound('/src/assets/sounds/error.wav', { volume: 0.2 });
    const [soundEndGame] = useSound('/src/assets/sounds/endGame.mp3', { volume: 0.2 });

    const [cardData, setCardData] = useState([] as CardData[]);
    const [progress, setProgress] = useState(false);
    const [cardsCorrect, setCardsCorrect] = useState(0);
    const [currentSelectCard, setCurrentSelectCard] = useState({} as CardData);
    const [twoSelectCard, setTwoSelectCard] = useState([] as number[]);
    const [timeGame, setTimeGame] = useState(0);
    const [errorCheck, setErrorCheck] = useState(0);
    const [initGame, setInitGame] = useState(false);
    useInterval(
        () => {
            setTimeGame(timeGame + 1)
        },
        initGame ? 1000 : null,
      )
    
    const getCard = (cantCard:number) =>{
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
            soundStartGame();
        };
        let newCardData = [...cardData]
        newCardData[index].check=true;
        soundViewCard();
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
                    soundEndGame();
                }
                setCardData(newCardData);
                soundCorrect();
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
                    soundError();
                }
            }, 600)

        }

    }
    return {
        cardData,
        getCard,
        onCheck,
        cardsCorrect,
        twoSelectCard,
        progress,
        currentSelectCard,
        errorCheck,
        timeGame,
        initGame
    }
}