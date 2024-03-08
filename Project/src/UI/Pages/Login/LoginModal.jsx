import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Loginn from "./Loginn";

export default function LoginModal({ modal, logintoggle,regiserToggle }) {
 
  return (
    <div>
      <Modal isOpen={modal} toggle={logintoggle} backdrop="static">
        <ModalHeader toggle={logintoggle}>Login here</ModalHeader>
        <ModalBody>
          <Loginn loginTogg={logintoggle} registerTogg={regiserToggle}   />
        </ModalBody>
      </Modal>
    </div>
  );
}
