
import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Form, Col, Row } from 'reactstrap';

export default function Login({ modal, toggle, registertologin }) {
    let [loginuser, setLoginuser] = useState({
        email: "",
        password: "",
    })
    const Regtoggle = (() => {
        registertologin()
        toggle()
    });

    function submitBtn() {
        let LogData = localStorage.getItem("LoginData")
        let RegData = JSON.parse(localStorage.getItem("RegisterData")) || []
        let matchData = RegData.find((e) => e.email === loginuser.email)

        if (loginuser.email == "" && loginuser.password == "") {
            alert("Fill this field first")
        } else if (matchData) {
            if (matchData.password !== loginuser.password) {
                alert("Enter correct Password")
            } else {
                localStorage.setItem("LoginData", JSON.stringify(matchData))
                toggle()
            }
        }

        // on click input in his initial state
        setLoginuser({
            email: "",
            password: "",
        })
        toggle()
    }
    return (
        <>
            <div>
                <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Email
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="email"
                                            value={loginuser?.email}
                                            placeholder="with a placeholder"
                                            type="email"
                                            onChange={(e) => setLoginuser({ ...loginuser, email: e?.target?.value })}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Password
                                        </Label>
                                        <Input
                                            id="examplePassword"
                                            name="password"
                                            value={loginuser?.password}
                                            placeholder="password placeholder"
                                            type="password"
                                            onChange={(e) => setLoginuser({ ...loginuser, password: e?.target?.value })}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <label>Don't have an account <p role='button' onClick={Regtoggle}>Register here</p></label>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => submitBtn()}>
                            Submit
                        </Button>
                        <Button color="secondary" onClick={toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    );
}
