import React, { useState } from "react";
import { Button } from "react-bootstrap";
import RegisterModal from "./Modal/RegisterModal";
import LoginModal from "./Modal/LoginModal";

export default function Mainpage() {
  const [reg, setReg] = useState(false);

  const RegBtn = () => setReg(!reg);

  const [log, setLogin] = useState(false);

  const LogiBtn = () => setLogin(!log);
  return (
    <>

    <RegisterModal modal={reg} toggle={RegBtn}/>
    <LoginModal modal={log} toggle={LogiBtn}/>
    <div className="d-flex gap-3 justify-content-end me-4">
      <Button color="danger" onClick={RegBtn}>
        Register
      </Button>
      <Button color="danger" onClick={LogiBtn}>
       Login
      </Button>
      </div>
    </>
  );
}
