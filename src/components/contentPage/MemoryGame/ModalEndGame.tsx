import { SyntheticEvent, useEffect, useState } from 'react';
import { FormattedMessage, injectIntl, IntlShape } from 'react-intl';
import { Button } from '../../Atom/Button'
import {ReactComponent as Close} from "../../../../assets/img/icons/close.svg";
import { Modal } from "../../Atom/Modal"
import { db } from '../../../firebase/firebase';
import { getTypeGame, ModeGame, useInputValue } from '../../../hooks';
import { useAppDispatch } from '../../../redux/hooks';
import { setShowNotification } from '../../../redux/reducers/notificationReducer';
import { checkWords } from '../../../static/Functions';
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
    const dispatch = useAppDispatch();
    const playerName = useInputValue('', 8);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const setNotification = (text:string, type:'warning' | 'success') => {
      dispatch(setShowNotification({text, type, show: true }));
    }
    const sendResultGame = async(e:SyntheticEvent) => {
      e.preventDefault();
        if(playerName.value.trim()!=='' && timeGame>0 && errorCheck>=0) {
          if(!checkWords(playerName.value.trim().toLowerCase())){
            setLoading(true);
            const data = {
                name: playerName.value.trim(),
                time: timeGame,
                failCount: errorCheck,
                create_at: new Date().toISOString(),
                typeGame: getTypeGame(modeGame)
            }
            await db.collection('memoryHistory').doc().set(data);
            setLoading(false);
            setModalEndGame(false);
            getCard(modeGame);
            playerName?.onChange('');
            setNotification(intl.formatMessage({
              defaultMessage: 'Tus datos han sido guardados',
              id: "app.endGameSend",
            }), 'success');
          }else{
            setError(true);
            setNotification(intl.formatMessage({
              defaultMessage: 'Por favor no coloques malas palabras',
              id: "app.endGameFailWords",
            }), 'warning');
          }

        }else{
            setError(true);
            setNotification(intl.formatMessage({
              defaultMessage: 'Por favor escribe un nombre más largo',
              id: "app.endGameFail",
            }), 'warning');
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
                    <form className="ModalEndGame_input" onSubmit={sendResultGame}>
                    <input type="text" placeholder={intl.formatMessage({
                          defaultMessage: 'Nombre (max: 8 caracteres)',
                          id: "app.modalEndGameInputPlaceHolder",
                        })} className={`ModalEndGame_input--input ${error ? 'ModalEndGame_input--error' : ''}`} {...playerName} />
                      <div className="ModalEndGame_input--btn">
                          <Button ClickBtn={()=>{}} loading={loading} type="submit" disabled={loading || playerName.value.length === 0}>
                            <FormattedMessage
                              id="app.modalEndGameSend"
                              defaultMessage={`Enviar`}
                            />
                          </Button>
                      </div>
                    </form>
                    
                </div>
        </Modal>
  )
})

