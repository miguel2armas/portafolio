import { randomArray } from "./Funtions";

export interface CardData {
    id: number;
    img: string;
    check: boolean;
}
const createCards = (index:number[]) =>{
    let cards:CardData[] = [];
    index.forEach((i)=>{
        let card ={
            id: i,
            img: `/assets/image/${i}.webp`,
            check : false
        }
        cards = [...cards, card];
    })
    return cards;
}
export const getCards = (cantCard:number)=>{
    let index:number[] = [];
    for(let i=0; i<62; i++){ index = [...index, i] }
    randomArray(index);
    index = index.slice(0, cantCard)
    const deckOne = createCards(index);
    const deckTwo = createCards(index);
    const cards = [...deckOne, ...deckTwo];
    randomArray(cards);
    return cards;
}