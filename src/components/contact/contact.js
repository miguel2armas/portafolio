import React from "react";
import {Button, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import EngranajeContact from "../../assets/img/pc_mail_contact.svg";


const Contact = () =>{
    return <div className="py-5">
                <Row>
                    <Col xs={12} md={6}>
                        <object type="image/svg+xml" data={EngranajeContact}>svg-animation</object>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form className="py-4">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nombre"
                                className="mb-3">
                                <Form.Control type="text" placeholder="data"/>
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email"
                                className="mb-3">
                                <Form.Control type="email" placeholder="data"/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingTextarea" label="Mensaje" className="mb-5">
                                <Form.Control as="textarea" style={{ height: '100px' }} placeholder="data"/>
                            </FloatingLabel>
                            <div className="text-end">
                                <Button variant="success" type="submit">
                                    Enviar
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
}
export default Contact