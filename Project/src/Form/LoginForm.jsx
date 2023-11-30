

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Toast } from 'reactstrap';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify'

function Forme(props) {
  const { className } = props;
  const [add, setdata] = useState({ Email: "", password: "" })
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);

  }

  const togglee = () => {
    if (add.password.length > 0 && add.Email.length > 0) {
      setModal(!modal);
      setdata({ Email: "", password: "" })
      toast.success("save")
    }
    
    else {
      toast.error("please Fill up form")


    }
  }
  return (
    <>
      <div>
        <span color="danger" onClick={toggle}>
          Login
        </span>
        <Modal
          isOpen={modal}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={toggle}
          className={className}
          style={{ width: "30%" }}
        >
          <ModalHeader toggle={toggle}>Login Form</ModalHeader>
          <ModalBody>
            <Form className='w-100 m-auto border border-secondary rounded-2 p-4 ' autoComplete='off'>
              <h4 className='text-center' >Login form</h4>
              <FormGroup  >
                <Label for="exampleEmail">
                  Email
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                  value={add.Email}
                  onChange={(e) => setdata({ Email: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">
                  Password
                </Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                  value={add.password}
                  onChange={(e) => setdata({ password: e.target.value })}
                />
              </FormGroup>


              <Button color="primary" onClick={togglee} className='w-100'>
                Login
              </Button>
            </Form>
          </ModalBody>
          <ModalFooter>

            <Button color="danger" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

Forme.propTypes = {
  className: PropTypes.string,
};

export default Forme;