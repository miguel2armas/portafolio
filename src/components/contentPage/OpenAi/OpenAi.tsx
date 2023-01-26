import { FormEvent, MutableRefObject } from "react"
import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { useOpenAi } from "../../../hooks"
import { Button } from "../../Atom/Button"
import {ReactComponent as Download} from "../../../../assets/img/icons/download_ico.svg";
import { Selector } from "../../Atom/Selector";
import { listCant, listSizeImg } from "../../../static/const";

interface Props {
    intl: IntlShape;
    openAiRef: MutableRefObject<HTMLDivElement | null>
  }
export const OpenAi = injectIntl(({intl, openAiRef}:Props) => {
    const { textGetImg, loadingImg, resultImg, getImg, setNumberImgs, setSizeImg, numberImgs, sizeImg,
    textGetQuestion, loadingQuestion, getQuestion, resultQuestion } = useOpenAi(intl)

    const SubmitImg = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        getImg()
    }
    const SubmitQuestion = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        getQuestion()
    }
  return (
    <div className='openAi' ref={openAiRef}>
        <h2>
            <FormattedMessage
                  id="app.open_ai2"
                  defaultMessage={`OpenAI`}
                />
        </h2>
        <p><FormattedMessage
                  id="app.open_ai_p"
                  defaultMessage={`Actualmente las inteligencias artificiales son la revolución del siglo, una de las más recientes es ChatGPT, de la compañía OpenAI, no es errado pensar que esto apenas empieza y dentro de pocos años tendremos incluso sistemas más revolucionarios.`}
                />
        </p>
        <p><FormattedMessage
                  id="app.open_ai_p2"
                  defaultMessage={`Aqui te comparto 2 servicios prestados por esta empresa para la generación de respuestas e imágenes por inteligencia artificial.`}
                />
        </p>
        <div className='openAi__content'>
            <div className='openAi__content--questions'>
                <h4 className='openAi__img--title'>
                <FormattedMessage
                  id="app.open_ai_question_title"
                  defaultMessage={`Pregunta cualquier cosa como si hablaras con cualquier amigo`}
                /></h4>
                <form onSubmit={(e)=>SubmitQuestion(e)} className="openAi__content--form">
                    <div className='openAi__content--input'>
                        <input
                            {...textGetQuestion}
                            placeholder={intl.formatMessage({
                                defaultMessage: 'Haz una pregunta...',
                                id: "app.open_ai_question_input",
                              })}
                            className='openAi__img--input'
                            />
                    </div>
                    <p className='openAi__img--p'>
                <FormattedMessage
                  id="app.open_ai_question_p"
                  defaultMessage={`* El servicio es limitado, por lo cual las respuestas son cortas, para tener respuestas más detalladas y especificas por favor consulta su página oficial`}
                /> <a className='openAi__img--a' href="https://chat.openai.com/chat" target="_blank">chat.openai.com/chat</a>.
                    </p>
                    <Button variant="success" ClickBtn={()=>{}} type={'submit'} loading={loadingQuestion} 
                    disabled={loadingQuestion || textGetQuestion.value.length === 0}>
                        <FormattedMessage
                        id="app.open_ai_btn_question"
                        defaultMessage={`Preguntar`}
                        />
                    </Button>
                </form>
                {resultQuestion?.data.choices.map(choice =>{
                    return (<p className='openAi__p--mobile'>
                            {choice.text}
                        </p>)
                })}
            </div>
            <div className='openAi__content--img'>
            <h4>
                <FormattedMessage
                  id="app.open_ai_img_title"
                  defaultMessage={`Suelta tu imaginación para crear imágenes`}
                /></h4>
                <form onSubmit={(e)=>SubmitImg(e)} className="openAi__content--form">
                    <div className='openAi__content--input'>
                    <input
                        {...textGetImg}
                        placeholder={intl.formatMessage({
                            defaultMessage: 'Describe la imagen...',
                            id: "app.open_ai_img_input",
                          })}
                        className='openAi__img--input'
                        />
                    </div>
                    <div className='openAi__content--select'>
                        <Selector list={listCant} onSelect={setNumberImgs} select={numberImgs} text={intl.formatMessage({
                            defaultMessage: 'Cantidad:',
                            id: "app.open_ai_img_selector",
                          })} disabled={loadingImg}/>
                        <Selector list={listSizeImg} onSelect={setSizeImg} select={sizeImg} text={intl.formatMessage({
                            defaultMessage: 'Tamaño:',
                            id: "app.open_ai_img_selector2",
                          })} disabled={loadingImg}/>
                    </div>
                <Button ClickBtn={()=>{}} type={'submit'} loading={loadingImg} disabled={loadingImg || textGetImg.value.length === 0}>
                        <FormattedMessage
                        id="app.open_ai_btn_img"
                        defaultMessage={`Generar imágenes`}
                        />
                </Button>
                </form>
            </div>
        </div>
        {resultQuestion?.data.choices.map(choice =>{
                    return (<p className='openAi__p'>
                            <FormattedMessage
                        id="app.open_ai_question_response"
                        defaultMessage={`Respuesta:`}
                        /> {choice.text}
                        </p>)
                })}
        {resultImg?.data?.data 
        && <div className='openAi__content--imgs'>
                <div className='openAi__img--result'>
                    {resultImg?.data?.data?.map((img)=>{
                        return (<div key={img.url} className='openAi__content--result'>
                                    <img alt={img.url} src={img.url} className='openAi__result--img'/>
                                    <a  className='openAi__result--link' target="_blank" download="openai-img.jpg" 
                                    href={img.url} title={img.url}>
                                        <Download width={20} height={20}/>
                                    </a>
                                </div>)
                    })}
                </div>
            </div>}
    </div>
  )
})
