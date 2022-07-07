import { MutableRefObject, SyntheticEvent, useEffect, useRef, useState } from "react";
import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { useInputValue } from "../../../hooks/useInputValue";
import { Button } from "../../Atom/Button";
import { SvgLogoEmail } from "../../SvgAnimate/SvgLogoEmail"
import emailjs from '@emailjs/browser';
import { useAppDispatch } from "../../../redux/hooks";
import { setShowNotification } from "../../../redux/reducers/notificationReducer";
const emailValid = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

interface Props {
  intl:IntlShape;
  contactRef:MutableRefObject<HTMLDivElement | null>
}


export const ContentContact = injectIntl(({intl, contactRef}:Props) => {
  const form = useRef<HTMLFormElement | null>(null);
  const dispatch = useAppDispatch();
  const name = useInputValue('');
  const email = useInputValue('');
  const message = useInputValue('');
  const [errorName, setErrorName] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(name.value.length>2 && errorName){
      setErrorName(false);
    }
    if(emailValid.test(email.value) && errorMail){
      setErrorMail(false);
    }
    if(message.value.length>15 && errorMessage){
      setErrorMessage(false);
    }
}, [name, email, message])

  const sendEmail = async(e:SyntheticEvent) =>{
    e.preventDefault();
    if(name.value.trim().length<2){
      setNotification(intl.formatMessage({
        defaultMessage: 'Por favor escribe un nombre valido',
        id: "app.NotificationInvalidName",
      }), 'warning');
      setErrorName(true);
    }else if(!emailValid.test(email.value)){
      setNotification(intl.formatMessage({
        defaultMessage: 'Por favor escribe un correo valido',
        id: "app.NotificationInvalidEmail",
      }), 'warning');
      setErrorMail(true);
    }else if(message.value.trim().length<15){
      setNotification(intl.formatMessage({
        defaultMessage: 'Por favor escribe un mensaje más largo',
        id: "app.NotificationInvalidMessage",
      }), 'warning');
      setErrorMessage(true);
    }else{
      setLoading(true);
      try {  
        await emailjs.sendForm('service_eml4w9y', 'template_nejkknq', form.current !== null ? form.current:'', 's-7t9hhJVUVwhhDxe');
        name.onChange('');
        email.onChange('');
        message.onChange('');
        setLoading(false);
        setNotification(intl.formatMessage({
          defaultMessage: 'El mensaje ha sido enviado correctamente, gracias!',
          id: "app.NotificationSendMail",
        }), 'success');
      } catch (error) {
        setLoading(false);
        setNotification(intl.formatMessage({
          defaultMessage: 'Ha ocurrido un error por favor vuelve a intentarlo',
          id: "app.NotificationFailMail",
        }), 'warning');
      }
    }
  }
  const setNotification = (text:string, type:'warning' | 'success') => {
    dispatch(setShowNotification({text, type, show: true }));
  }
  return (
    <div ref={contactRef}>
      <h3 className="contentContact__h3">
        <FormattedMessage 
          id="app.contentContactTitle" 
          defaultMessage={`Escríbeme un mensaje, con gusto te responderé lo antes posible`} />
      </h3>
      <div className="contentContact">
        <div className="contentContact__left">
            <SvgLogoEmail/>
        </div>
        <div className="contentContact__right">
          <form ref={form} onSubmit={sendEmail}>
              <div className="contentContact__right--content">
                  <input type="text" disabled={loading} placeholder={intl.formatMessage({
                      defaultMessage: 'Nombre',
                      id: "app.ContentContactInputPlaceHolderName",
                    })} className={`contentContact__right--input ${errorName ? 'contentContact__right--error' : ''}`} {...name} name="name_client" />
                </div>
                <div className="contentContact__right--content">
                <input type="mail" disabled={loading} placeholder={intl.formatMessage({
                      defaultMessage: 'Correo',
                      id: "app.ContentContactInputPlaceHolderEmail",
                    })} className={`contentContact__right--input ${errorMail ? 'contentContact__right--error' : ''}`} {...email} name="email_client" />
                </div>
                <div className="contentContact__right--content">
                <textarea disabled={loading} placeholder={intl.formatMessage({
                      defaultMessage: 'Escríbeme un mensaje',
                      id: "app.ContentContactInputPlaceHolderMessage",
                    })} className={`contentContact__right--textarea ${errorMessage ? 'contentContact__right--error' : ''}`} {...message} name="message" />
                </div>
            <div className="contentContact__right--contentBtn">
              <Button ClickBtn={()=>{}} type={'submit'} loading={loading} disabled={loading}>
                <FormattedMessage
                  id="app.modalEndGameSend"
                  defaultMessage={`Enviar`}
                />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
})
