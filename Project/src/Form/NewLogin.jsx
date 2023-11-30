import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Modal, ModalHeader, ModalFooter, Label, Form, FormGroup, Input } from 'reactstrap';



function NewLogin(args) {

    const [data, setdata] = useState({ email: "", mobile: "", password: "", confpasword: "" })

    const [modal, setModal] = useState(false);
    const togg = () => {
        if (data.email.length >0 && data.password.length >0 && data.confpasword.length > 0 && data.mobile.length > 0) {
            setModal(!modal)
            setdata({ email: "", mobile: "", password: "", confpasword: "" })
            toast.success("Save data")
       
        } else {
            toast.error("please fill data")
     
        }
    }
    const toggle = () => setModal(!modal,
        setdata({ email: "", mobile: "", password: "", confpasword: "" })

        );

    return (
        <div>
            <span onClick={toggle}>New User?</span>
            <Modal isOpen={modal} toggle={toggle} {...args} className='w-25'>
                <ModalHeader toggle={toggle}>New User</ModalHeader>
                <Form className='w-100 p-2'>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Email
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="Enter Email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setdata({ ...data, email: e.target.value })}

                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Mobile Number
                        </Label>
                        <Input
                            id="mobile"
                            name="mobile"
                            placeholder="Enter mobile number  "
                            type="mobilw"
                            value={data.mobile}
                            onChange={(e) => setdata({ ...data, mobile: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            Password
                        </Label>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder=" Enter password"
                            type="password"
                            value={data.password}
                            onChange={(e) => setdata({ ...data, password: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            Confirm Password
                        </Label>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder=" Confirm password"
                            type="cpassword"
                            value={data.confpasword}
                            onChange={(e) => setdata({ ...data, confpasword: e.target.value })}

                        />
                    </FormGroup>
                    <Button className='w-100' color='primary' onClick={() => togg()}>
                        Submit
                    </Button>
                </Form>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default NewLogin;