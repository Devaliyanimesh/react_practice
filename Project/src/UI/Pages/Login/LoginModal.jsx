import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Loginn from "./Loginn";

export default function LoginModal({ modal, toggle }) {
 
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} backdrop="static">
        <ModalHeader toggle={toggle}>Login here</ModalHeader>
        <ModalBody>
          <Loginn   />
        </ModalBody>
      </Modal>
    </div>
  );
}
