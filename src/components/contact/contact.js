import React, {useState, useContext} from "react";
import {Alert, Button, Col, FloatingLabel, Form, Row, Spinner} from "react-bootstrap";
import EngranajeContact from "../../assets/img/pc_mail_contact.svg";
import {db} from "../../firebase";
import moment from "moment";
import {GlobalContext} from "../../context/GlobalContext";

const Contact = () =>{
    const context = useContext(GlobalContext)
    const initStateForm = {
        name:'',
        email:'',
        message:''
    }
    const [values, setValues] = useState(initStateForm);
    const [status, setStatus] = useState(0);
    const handleInputChange = e =>{
        setStatus(0)
        const {name, value} = e.target;
        setValues({...values, [name]:value});
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setStatus(1)
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!emailRegex.test(values.email)||values.name===""||values.email===""||values.message==="") {
            setStatus(2)
        } else {
            setValues(initStateForm);
            await db.collection('messageContact').doc().set({...values, create_at: moment().format()});
            setStatus(3)
        }
    }

    return <div className="py-md-5 my-md-5">
                <div className="text-center py-lg-0 py-4">
                    <h4 className="fs-xl-1 fs-0">{context.state.leng==='en'?('Write me a message, I will gladly answer you as soon as possible'):('Escríbeme un mensaje, con gusto te responderé lo antes posible')}</h4>
                </div>
                <Row>
                    <Col xs={12} md={6}>
                        <object type="image/svg+xml" data={EngranajeContact}>svg-animation</object>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form className="py-4">
                            <FloatingLabel
                                controlId="floatingInput"
                                label={context.state.leng==='en'?('Name'):('Nombre')}
                                className="mb-3">
                                <Form.Control type="text" placeholder="data" value={values.name} name="name" onChange={handleInputChange}/>
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label={context.state.leng==='en'?('Email'):('Correo')}
                                className="mb-3">
                                <Form.Control type="email" placeholder="data" value={values.email} name="email" onChange={handleInputChange}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingTextarea" label={context.state.leng==='en'?('Message'):('Mensaje')} className="mb-5">
                                <Form.Control as="textarea" style={{ height: '100px' }} value={values.message} placeholder="data" name="message" onChange={handleInputChange}/>
                            </FloatingLabel>
                            <div className="text-end">
                                {status===0?(
                                    <Button onClick={handleSubmit} variant="success" type="submit">
                                        {context.state.leng==='en'?('Send'):('Enviar')}
                                    </Button>
                                ):status===1?(
                                    <Button disabled={true} variant="success" type="submit" className="py-0 px-3">
                                        <Spinner animation="border" variant="light" />
                                    </Button>
                                ):status===2?(
                                    <Alert variant={"danger"}>
                                        <div className="text-center">{context.state.leng==='en'?('Please enter valid data.'):('Por favor ingresar datos válidos.')}</div>
                                    </Alert>
                                ):(
                                    <Alert variant={"success"}>
                                        <div className="text-center">{context.state.leng==='en'?('Your message was sent, I will be answering you as soon as possible.'):('Tu mensaje fue enviado, te estaré respondiendo lo antes posible.')}</div>
                                    </Alert>
                                )}
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
}
export default Contact