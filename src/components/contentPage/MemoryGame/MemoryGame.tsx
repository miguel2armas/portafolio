
import { FormattedMessage } from "react-intl"
import { getTypeGame, ModeGame, useCard } from "../../../hooks/useCard"
import { Button } from "../../Atom/Button"
import { GripGame } from "./GripGame"
import {ReactComponent as Loading} from "../../../assets/img/icons/loading.svg";
import {ReactComponent as Puzzle} from "../../../assets/img/icons/puzzle.svg";
import {ReactComponent as Skull} from "../../../assets/img/icons/skull.svg";
import {ReactComponent as Easy} from "../../../assets/img/img/easy.svg";
import {ReactComponent as Normal} from "../../../assets/img/img/normal.svg";
import {ReactComponent as Hard} from "../../../assets/img/img/hard.svg";
import {ReactComponent as Legend} from "../../../assets/img/img/legend.svg";
import {ReactComponent as Nightmare} from "../../../assets/img/img/nightmare.svg";
import { ModalEndGame } from "./ModalEndGame"

export const MemoryGame = () => {
  const { getCard, onCheck, cardData, cardsCorrect, progress, twoSelectCard, setModalEndGame, memoryHistory,
    errorCheck, timeGame, initGame, setModeGame, modeGame, modalEndGame } = useCard();

    let position = 0;
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
                <Button ClickBtn={()=>modeGame!==ModeGame.EASY && setModeGame(ModeGame.EASY)} disabled={modeGame===ModeGame.EASY}>
                    <FormattedMessage
                      id="app.memoryBtnEasy"
                      defaultMessage={`facil`}
                    />
                </Button>
              </div>
              <div className="MemoryGame__description--btn">
                <Button ClickBtn={()=>modeGame!==ModeGame.NORMAL && setModeGame(ModeGame.NORMAL)} disabled={modeGame===ModeGame.NORMAL}>
                    <FormattedMessage
                      id="app.memoryBtnNormal"
                      defaultMessage={`normal`}
                    />
                </Button>
              </div>
              <div className="MemoryGame__description--btn">
                <Button ClickBtn={()=>modeGame!==ModeGame.HARD && setModeGame(ModeGame.HARD)} disabled={modeGame===ModeGame.HARD}>
                    <FormattedMessage
                      id="app.memoryBtnHard"
                      defaultMessage={`dificil`}
                    />
                </Button>
              </div>
              <div className="MemoryGame__description--btn">
                <Button ClickBtn={()=>modeGame!==ModeGame.LEGEND && setModeGame(ModeGame.LEGEND)} disabled={modeGame===ModeGame.LEGEND} variant={'gold'}>
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
                <Button ClickBtn={()=>modeGame!==ModeGame.NIGHTMARE && setModeGame(ModeGame.NIGHTMARE)} disabled={modeGame===ModeGame.NIGHTMARE} variant={'danger'}>
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
                <Button ClickBtn={()=>initGame && getCard(modeGame)} variant={'danger'}  disabled={!initGame}>
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
              <div className="TableReward__div">
                <div className="TableReward__content">
                  <div className="TableIco">
                    {modeGame===ModeGame.EASY ? (<Easy/>):
                    modeGame===ModeGame.NORMAL ? (<Normal/>):
                    modeGame===ModeGame.HARD ? (<Hard/>):
                    modeGame===ModeGame.LEGEND ? (<Legend/>):
                    modeGame===ModeGame.NIGHTMARE ? (<Nightmare/>):null}
                  </div>
                  <h3 className="TableH3">Mejores jugadores: <FormattedMessage id={`app.memoryName${getTypeGame(modeGame)}`} defaultMessage={`modo`}/>
                  </h3>
                  <table className="TableReward">
                    <thead className="TableReward__head">
                      <tr className="TableReward__head--tr">
                        <th className="TableReward__head--th">#</th>
                        <th className="TableReward__head--th">Nombre</th>
                        <th className="TableReward__head--th">Tiempo</th>
                        <th className="TableReward__head--th">Fallas</th>
                      </tr>
                    </thead>
                    <tbody className="TableReward__body">
                      {memoryHistory?.map((history) =>{
                        if(history.typeGame===getTypeGame(modeGame)){
                          position = position+1
                          return <tr key={history.id} className="TableReward__body--tr">
                                <td className="TableReward__body--td">{position}</td>
                                <td className="TableReward__body--td">{history.name}</td>
                                <td className="TableReward__body--td TableReward__body--right">{history.time}</td>
                                <td className="TableReward__body--td TableReward__body--right">{history.failCount}</td>
                              </tr>
                        }   
                      })}
                      {memoryHistory.length===0?(<tr>
                            <td className="TableReward__body--td TableReward__body--text" colSpan={4}>
                              <Loading/>
                            </td>
                          </tr>):
                        memoryHistory.length>0 && position===0?(<tr>
                            <td className="TableReward__body--td TableReward__body--text" colSpan={4}>
                              Se el primero en completar el reto!
                            </td>
                          </tr>):null}
                      
                    </tbody>
                  </table>
                </div>
              </div>
          </div>
        </div>
        <ModalEndGame modalEndGame={modalEndGame} timeGame={timeGame} errorCheck={errorCheck} setModalEndGame={setModalEndGame} modeGame={modeGame} getCard={getCard} />
    </div>
  )
}
