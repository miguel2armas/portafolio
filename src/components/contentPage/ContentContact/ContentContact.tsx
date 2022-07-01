import { SyntheticEvent, useRef, useState } from "react";
import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { useInputValue } from "../../../hooks/useInputValue";
import { Button } from "../../Atom/Button";
import { SvgLogoEmail } from "../../SvgAnimate/SvgLogoEmail"
import emailjs from '@emailjs/browser';

interface Props {
  intl:IntlShape;
}

export const ContentContact = injectIntl(({intl}:Props) => {
  const form = useRef<HTMLFormElement | null>(null);
  const name = useInputValue('');
  const email = useInputValue('');
  const message = useInputValue('');
  const [errorName, setErrorName] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [messageSend, setMessageSend] = useState(false);
  const [loading, setLoading] = useState(false)

  const sendEmail = async(e:SyntheticEvent) =>{
    e.preventDefault();
    setLoading(true);
    await emailjs.sendForm('service_eml4w9y', 'template_nejkknq', form.current !== null ? form.current:'', 's-7t9hhJVUVwhhDxe');
    name.onChange('');
    email.onChange('');
    message.onChange('');
    setLoading(false);

  }
  return (
    <div>
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
                  <input type="text" placeholder={intl.formatMessage({
                      defaultMessage: 'Nombre',
                      id: "app.ContentContactInputPlaceHolderName",
                    })} className={`contentContact__right--input ${errorName ? 'contentContact__right--error' : ''}`} {...name} name="name_client" />
                </div>
                <div className="contentContact__right--content">
                <input type="text" placeholder={intl.formatMessage({
                      defaultMessage: 'Correo',
                      id: "app.ContentContactInputPlaceHolderEmail",
                    })} className={`contentContact__right--input ${errorMail ? 'contentContact__right--error' : ''}`} {...email} name="email_client" />
                </div>
                <div className="contentContact__right--content">
                <textarea placeholder={intl.formatMessage({
                      defaultMessage: 'Mensaje',
                      id: "app.ContentContactInputPlaceHolderMessage",
                    })} className={`contentContact__right--textarea ${errorMessage ? 'contentContact__right--error' : ''}`} {...message} name="message" />
                </div>
            <div className="contentContact__right--contentBtn">
              <Button ClickBtn={()=>{}} type={'submit'} loading={loading} disabled={loading}>
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
})
