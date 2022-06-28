import { SyntheticEvent, useEffect, useState } from 'react';
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
}

export const ModalEndGame = ({modalEndGame, errorCheck, timeGame, setModalEndGame, modeGame, getCard}:Props) => {
    const playerName = useInputValue('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
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
                      Introduzca su nombre:
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
                      Ingresa tu nombre para guardar tu récord
                    </div>
                    <div className="ModalEndGame_text">
                      Cantidad de errores: {errorCheck} error(es)
                    </div>
                    <div className="ModalEndGame_text">
                      Tiempo transcurrido: {timeGame} segundo(s)
                    </div>
                    <div className="ModalEndGame_input">
                      <input type="text" className={`ModalEndGame_input--input ${error ? 'ModalEndGame_input--error' : ''}`} {...playerName} />
                      <div className="ModalEndGame_input--btn">
                          <Button ClickBtn={sendResultGame} loading={loading} disabled={loading}>
                            Enviar
                          </Button>
                      </div>
                    </div>
                    
                </div>
        </Modal>
  )
}
