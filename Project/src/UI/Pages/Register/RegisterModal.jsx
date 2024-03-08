import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import RegisterPage from "./RegisterPage";

export default function RegisterModal({modal,toggle,loginTogg}) {
 
 
    return (
    <div>
      <Modal isOpen={modal} toggle={toggle} backdrop="static">
        <ModalHeader toggle={toggle}>Register here</ModalHeader>
        <ModalBody>
          <RegisterPage login={loginTogg}  />
        </ModalBody>
      </Modal>
    </div>
  );
}
