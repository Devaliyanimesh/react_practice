
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Form, Col, Row } from 'reactstrap';
import Login from './Login';

export default function Newuser({ modal, toggle }) {
    let [user, setUser] = useState({
        email: "",
        password: "",
        usertype: "",
        age: "",
        mobile: ""
    })


    function submitBtn(e) {

        let oldData = JSON.parse(localStorage.getItem("RegisterData")) || []

        let match = oldData.find((e) => e.email === user.email)

        if (match) {
            alert("User already exist")
        }
        else if (user.email === "" || user.password === "") {
            alert("Please Fill this field")
        }
        else {
            // localStorage.setItem("RegisterData", JSON.stringify([oldData]))
            localStorage.setItem("RegisterData", JSON.stringify([...oldData, user]))
            // on click input in his initial state
            setUser({
                email: "",
                password: "",
                usertype: "",
                age: "",
                mobile: ""
            })
            e.preventDefault()
            toggle()
        }
    }
    return (
        <div>
            {/* <Login /> */}
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
                                        value={user?.email}
                                        placeholder="with a placeholder"
                                        type="email"
                                        onChange={(e) => setUser({ ...user, email: e?.target?.value })}
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
                                        value={user?.password}
                                        placeholder="password placeholder"
                                        type="password"
                                        onChange={(e) => setUser({ ...user, password: e?.target?.value })}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="mobileNUm">
                                        Mobile Number
                                    </Label>
                                    <Input
                                        id="mobileNUm"
                                        name="mobileNUm"
                                        placeholder="enter your mobile number"
                                        type="number"
                                        onChange={(e) => setUser({ ...user, mobile: e?.target?.value })}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="age">
                                        Age
                                    </Label>
                                    <Input
                                        id="age"
                                        name="age"
                                        placeholder="Enter Your Age"
                                        type="number"
                                        onChange={(e) => setUser({ ...user, age: e?.target?.value })}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="usertype">
                                Select type
                            </Label>
                            <Input
                                id="usertype"
                                name="select"
                                value={user?.usertype}
                                type="select"
                                placeholder='.....'
                                onChange={(e) => setUser({ ...user, usertype: e?.target?.value })}
                            >
                                <option>
                                    Select...
                                </option>
                                <option>
                                    User
                                </option>
                                <option>
                                    Admin
                                </option>
                            </Input>
                        </FormGroup>
                    </Form>
                    <FormGroup>
                        {/* <label>Don't have an account <p role='button' onClick={Regtoggle}>Register here</p></label> */}
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) => submitBtn(e)}>
                        Submit
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
