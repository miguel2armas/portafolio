import { useEffect, useState } from "react"
import { FormattedMessage } from "react-intl"
import { useCard } from "../../../hooks/useCard"
import { Button } from "../../Atom/Button"
import { GripGame } from "./GripGame"
import {ReactComponent as Puzzle} from "../../../assets/img/icons/puzzle.svg";
import {ReactComponent as Skull} from "../../../assets/img/icons/skull.svg";

export const MemoryGame = () => {
  const { getCard, onCheck, cardData, cardsCorrect, progress, twoSelectCard, errorCheck, timeGame, initGame } = useCard()
  const [cantCard, setCantCard] = useState(12);
  useEffect(() => {
    getCard(cantCard);
  }, [cantCard])
  
  
  return (
    <div>
    <div className="MemoryGame__title">
      <h2>
        <FormattedMessage
                    id="app.gameTitleMemory"
                    defaultMessage={`Juego de memoria`}
                  />
      </h2>
      <p>
        <FormattedMessage
                    id="app.gameDescriptionMemory"
                    defaultMessage={`¡Ejercita tu memoria mientras intentas conseguir el primer lugar!`}
                  />
      </p>
        <div className="MemoryGame__description">
          <div className="MemoryGame__description--name">
            <FormattedMessage
                    id="app.gameDescriptionMemoryFails"
                    defaultMessage={`Cantidad de fallas:`}
                  />
          </div>
          <div className="MemoryGame__description--description">
          {errorCheck}
          </div>
        </div>
        <div className="MemoryGame__description">
          <div className="MemoryGame__description--name">
            <FormattedMessage
                    id="app.gameDescriptionMemoryTime"
                    defaultMessage={`Tiempo transcurrido:`}
                  />
          </div>
          <div className="MemoryGame__description--description">
          {timeGame}
          </div>
        </div>
        <div className="MemoryGame__description">
          <div className="MemoryGame__description--name">
            {initGame?(
              <FormattedMessage
              id="app.gameDescriptionMemoryStatusProgress"
              defaultMessage={`Juego en progreso`}
            />
            ):(
              <FormattedMessage
              id="app.gameDescriptionMemoryStatus"
              defaultMessage={`Inicia el juego`}
            />
            )}
          </div>
          <div className="MemoryGame__description--btnContent">
            <div className="MemoryGame__description--btn">
              <Button ClickBtn={()=>cantCard!==8 && setCantCard(8)} disabled={cantCard===8}>
                  <FormattedMessage
                    id="app.memoryBtnEasy"
                    defaultMessage={`facil`}
                  />
              </Button>
            </div>
            <div className="MemoryGame__description--btn">
              <Button ClickBtn={()=>cantCard!==12 && setCantCard(12)} disabled={cantCard===12}>
                  <FormattedMessage
                    id="app.memoryBtnNormal"
                    defaultMessage={`normal`}
                  />
              </Button>
            </div>
            <div className="MemoryGame__description--btn">
              <Button ClickBtn={()=>cantCard!==15 && setCantCard(15)} disabled={cantCard===15}>
                  <FormattedMessage
                    id="app.memoryBtnHard"
                    defaultMessage={`dificil`}
                  />
              </Button>
            </div>
            <div className="MemoryGame__description--btn">
              <Button ClickBtn={()=>cantCard!==30 && setCantCard(30)} disabled={cantCard===30} variant={'gold'}>
                  <>
                    <FormattedMessage
                      id="app.memoryBtnLegend"
                      defaultMessage={`leyenda`}
                    />
                    <Puzzle/>
                  </>
              </Button>
            </div>
            <div className="MemoryGame__description--btn">
              <Button ClickBtn={()=>cantCard!==60 && setCantCard(60)} disabled={cantCard===60} variant={'danger'}>
                  <>
                    <FormattedMessage
                      id="app.memoryBtnNightmare"
                      defaultMessage={`pesadilla`}
                    />
                    <Skull/>
                  </>
              </Button>
            </div>
            <div className="MemoryGame__description--btn">
              <Button ClickBtn={()=>initGame && getCard(cantCard)} variant={'danger'}  disabled={!initGame}>
                  <FormattedMessage
                    id="app.memoryBtnReset"
                    defaultMessage={`reset`}
                  />
              </Button>
            </div>
          </div>
        </div>

    </div>
      <div className="MemoryGame__content">
        <div className="MemoryGame__content--grip">
          <GripGame onCheck={onCheck} cardData={cardData} cardsCorrect={cardsCorrect} progress={progress} twoSelectCard={twoSelectCard}/>
        </div>
        <div className="MemoryGame__content--data">
            <div>
              <h3>Mejores jugadores:
                
                <FormattedMessage
                      id="app.memoryBtnNightmare"
                      defaultMessage={`pesadilla`}
                    />
              </h3>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Tiempo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
      </div>
    </div>
  )
}
