  import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Formmsee from "./Formmsee";

export default function Modall({toggle,modal}) {


  return (
    <div>
 
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
       <Formmsee/>
        </ModalBody>
      </Modal>
    </div>
  );
}
