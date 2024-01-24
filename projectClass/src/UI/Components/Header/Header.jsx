import React, { useState } from "react";
import "./Header.css";
import { Footprints, ShoppingBag } from "lucide-react";
import { Button } from "reactstrap";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

export default function Header() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  const [registerModal, setRegisterModal] = useState(false);

  const registerToggle = () => {
    setRegisterModal(!registerModal);
  };
 
  return (
    <>
      <Login modal={modal} toggle={toggle} />
      <Register modal={registerModal} toggle={registerToggle} />
      <div className="header ">
        <div className="logo  ">
          <Footprints size={36} color="#181616" />
          <h5 style={{ color: "black", fontWeight: "700" }}>Shoes</h5>
        </div>
        <div className="ul_list">
          <ul className="list">
            <li className="home">Home</li>
            <li className="Men">Men</li>
            <li className="Woman">Woman</li>
            <li className="Child">Child</li>
            <li className="About">About</li>
          </ul>
        </div>
        <div>
          <Button
            color="danger"
            onClick={registerToggle}
            style={{
              backgroundColor: "transparent ",
              border: "none",
              color: "black",
            }}
          >
            Register
          </Button>
          <Button
            color="danger"
            onClick={toggle}
            style={{
              backgroundColor: "transparent ",
              border: "none",
              color: "black",
            }}
          >
            Login
          </Button>
          <ShoppingBag color="#181616" />
        </div>
      </div>
    </>
  );
}
