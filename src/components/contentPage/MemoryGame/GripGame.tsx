import Check from '../../../../assets/img/imgGame/check.webp'
import { CardData } from '../../../static/cards';
interface Props{
  onCheck:Function;
  cardData:CardData[]
  cardsCorrect:number;
  progress:boolean
  twoSelectCard:number[]
}
export const GripGame = ({cardData, onCheck, cardsCorrect, progress, twoSelectCard}:Props) => {
  return (
    <div className='GripGame'>
          {cardData.map((card, index)=>{
          return (
          <div key={index} className='GripGame__item' onClick={()=>!progress && !card.check && onCheck(index)}>
                <div className={`GripGame__card 
                ${twoSelectCard.some((i)=>i===index) && cardsCorrect===1?'GripGame__card--correct':''}
                ${twoSelectCard.some((i)=>i===index) && cardsCorrect===2?'GripGame__card--fail':''}`
                }>
                  <div className={`${!card.check?'GripGame__card--one':'GripGame__card--two'}`}>
                    <img className='GripGame__item--img' src={Check} alt={"back-card"}/>
                  </div>
                  <div className={`${card.check?'GripGame__card--one':'GripGame__card--two'}`}>
                    <img className='GripGame__item--img' src={card.check? card.img : Check} alt={"card"}/>
                  </div>
                </div>
            </div>
            )
          })}
      </div>
  )
}
