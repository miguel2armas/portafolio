import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import { ResultErrorOpenAi, ResultOpenAiImg, ResultOpenAiQuestion } from '../types/types';
import { useInputValue } from './useInputValue';
import { IntlShape } from 'react-intl';
import { useAppDispatch } from '../redux/hooks';
import { setShowNotification } from '../redux/reducers/notificationReducer';

export const useOpenAi = (intl: IntlShape) =>{

    const configuration = new Configuration({
        apiKey: "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"
    });
    const openAi = new OpenAIApi(configuration);
    const dispatch = useAppDispatch();
    const textGetQuestion = useInputValue('');
    const [resultQuestion, setResultQuestion] = useState<ResultOpenAiQuestion>()
    const [loadingQuestion, setLoadingQuestion] = useState(false)

    const textGetImg = useInputValue('');

    const [sizeImg, setSizeImg] = useState<'256x256' | '512x512' | '1024x1024'>('512x512')
    const [numberImgs, setNumberImgs] = useState<string>('4')
    const [resultImg, setResultImg] = useState<ResultOpenAiImg>()
    const [loadingImg, setLoadingImg] = useState(false)
    const getQuestion = async () => {
        setLoadingQuestion(true)
        try {
            const res = await openAi.createCompletion({
                model: "text-davinci-003",
                prompt: textGetQuestion.value,
                temperature: 0.6,
                max_tokens: 100,
            });
            setResultQuestion(res as ResultOpenAiQuestion);
            setLoadingQuestion(false)
        }catch (e) {
            const error = e as ResultErrorOpenAi
            if (error.response) {
              if(error.response.data.message==="Your request was rejected as a result of our safety system. Your prompt may contain text that is not allowed by our safety system."){
                dispatch(
                    setShowNotification(
                        {
                            text: intl.formatMessage({
                                defaultMessage: 'Tienes palabras prohibidas, por favor cambia el texto...',
                                id: "app.open_ai_error",
                              }), 
                            type: 'warning', 
                            show: true 
                        }
                    )
                );
              }else{
                dispatch(
                    setShowNotification(
                        {
                            text: intl.formatMessage({
                                defaultMessage: 'Hay problemas al conectarse al servicio, por favor vuelve a intentarlo',
                                id: "app.open_ai_error2",
                              }), 
                            type: 'warning', 
                            show: true 
                        }
                    )
                );
              }
            } else {
                dispatch(
                    setShowNotification(
                        {
                            text: intl.formatMessage({
                                defaultMessage: 'Ha ocurrido un error, por favor vuelve a intentarlo',
                                id: "app.open_ai_error3",
                              }), 
                            type: 'warning', 
                            show: true 
                        }
                    )
                );
            }
            setLoadingQuestion(false)
        }
    }
    const getImg = async () => {
        setLoadingImg(true)
        try {
            const res = await openAi.createImage({
                prompt: textGetImg.value,
                n:parseInt(numberImgs),
                size: sizeImg
            });
            setResultImg(res as ResultOpenAiImg);
            setLoadingImg(false)

        }catch (e) {
            const error = e as ResultErrorOpenAi
            if (error.response) {
              if(error.response.data.message==="Your request was rejected as a result of our safety system. Your prompt may contain text that is not allowed by our safety system."){
                dispatch(
                    setShowNotification(
                        {
                            text: intl.formatMessage({
                                defaultMessage: 'Tienes palabras prohibidas, por favor cambia el texto...',
                                id: "app.open_ai_error",
                              }), 
                            type: 'warning', 
                            show: true 
                        }
                    )
                );
            }else{
              dispatch(
                  setShowNotification(
                      {
                          text: intl.formatMessage({
                              defaultMessage: 'Hay problemas al conectarse al servicio, por favor vuelve a intentarlo',
                              id: "app.open_ai_error2",
                            }), 
                          type: 'warning', 
                          show: true 
                      }
                  )
              );
            }
          } else {
              dispatch(
                  setShowNotification(
                      {
                          text: intl.formatMessage({
                              defaultMessage: 'Ha ocurrido un error, por favor vuelve a intentarlo',
                              id: "app.open_ai_error3",
                            }), 
                          type: 'warning', 
                          show: true 
                      }
                  )
              );
          }
            setLoadingImg(false)
        }
    }
    return { 
        textGetImg, resultImg, loadingImg, numberImgs, sizeImg,
        getImg, setSizeImg, setNumberImgs,
        textGetQuestion, resultQuestion, loadingQuestion,
        getQuestion
    }
}