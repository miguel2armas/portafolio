import { useEffect, useState } from 'react';
import { FormattedMessage, injectIntl, IntlShape } from 'react-intl';
import { Button } from '../../Atom/Button'
import {ReactComponent as Close} from "../../../assets/img/icons/close.svg";
import { Modal } from "../../Atom/Modal"
import { useInputValue } from '../../../hooks/useInputValue';
import { db } from '../../../firebase/firebase';
import { getTypeGame, ModeGame } from '../../../hooks/useCard';

interface Props {
    modalEndGame:boolean;
    errorCheck:number;
    timeGame:number;
    setModalEndGame:React.Dispatch<React.SetStateAction<boolean>>;
    modeGame:ModeGame;
    getCard:(modeGameSelect: ModeGame) => void;
    intl:IntlShape;
}
export const ModalEndGame = injectIntl(({modalEndGame, errorCheck, timeGame, setModalEndGame, modeGame, getCard, intl}:Props) => {
    const playerName = useInputValue('', 8);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const sendResultGame = async() => {
        if(playerName.value!=='' && timeGame>0 && errorCheck>=0) {
            setLoading(true);
            const data = {
                name: playerName.value,
                time: timeGame,
                failCount: errorCheck,
                create_at: new Date().toISOString(),
                typeGame: getTypeGame(modeGame)
            }
            await db.collection('memoryHistory').doc().set(data);
            setLoading(false);
            setModalEndGame(false);
            getCard(modeGame);
            playerName?.onChange('')
        }else{
            setError(true);
        }
    }
    useEffect(() => {
        if(playerName.value!=='' && error){
            setError(false);
        }
    }, [playerName])
    
  return (
        <Modal show={modalEndGame} maxWidth={450}>
                <div className="ModalEndGame">
                  <div className="ModalEndGame__top">
                    <div className="ModalEndGame__top--text">
                      <FormattedMessage
                        id="app.modalEndGameEnterName"
                        defaultMessage={`Introduzca su nombre:`}
                      />
                    </div>
                    <div className="ModalEndGame__top--btn" onClick={()=>{
                      setModalEndGame(false);
                      getCard(modeGame);
                      playerName?.onChange('')
                    }}>
                      <Close/>
                    </div>
                  </div>
                    <div className="ModalEndGame_text">
                      <FormattedMessage
                        id="app.modalEndGameEnterNameRecord"
                        defaultMessage={`Ingresa tu nombre para guardar tu récord`}
                      />
                    </div>
                    <div className="ModalEndGame_text">
                      <FormattedMessage
                        id="app.modalEndGameEnterCantError"
                        defaultMessage={`Cantidad de errores: {errorCheck} error(es)`}
                        values={{errorCheck}}
                      />
                    </div>
                    <div className="ModalEndGame_text">
                      <FormattedMessage
                        id="app.modalEndGameEnterCantTime"
                        defaultMessage={`Tiempo transcurrido: {timeGame} segundo(s)`}
                        values={{timeGame}}
                      />
                      
                    </div>
                    <div className="ModalEndGame_input">
                    <input type="text" placeholder={intl.formatMessage({
                          defaultMessage: 'Nombre (max: 8 caracteres)',
                          id: "app.modalEndGameInputPlaceHolder",
                        })} className={`ModalEndGame_input--input ${error ? 'ModalEndGame_input--error' : ''}`} {...playerName} />
                      <div className="ModalEndGame_input--btn">
                          <Button ClickBtn={sendResultGame} loading={loading} disabled={loading}>
                            <FormattedMessage
                              id="app.modalEndGameSend"
                              defaultMessage={`Enviar`}
                            />
                          </Button>
                      </div>
                    </div>
                    
                </div>
        </Modal>
  )
})
