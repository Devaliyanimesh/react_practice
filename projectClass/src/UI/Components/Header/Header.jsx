import React, { useState } from "react";
import "./Header.css";
import { Footprints, ShoppingBag } from "lucide-react";
import { Button } from "reactstrap";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import { NavLink } from "react-router-dom";

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
            <li className="home">
              {" "}
              <NavLink
                to={"/"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Home
              </NavLink>
            </li>
            <li className="Men">
              {" "}
              <NavLink style={{ textDecoration: "none", color: "black" }}>
                Men
              </NavLink>
            </li>
            <li className="Woman">
              {" "}
              <NavLink style={{ textDecoration: "none", color: "black" }}>
                Woman
              </NavLink>
            </li>
            <li className="Child">
              {" "}
              <NavLink style={{ textDecoration: "none", color: "black" }}>
                Child
              </NavLink>
            </li>
            <li className="About">
              {" "}
              <NavLink style={{ textDecoration: "none", color: "black" }}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Button
            color="danger"
            className="p-0"
            onClick={registerToggle}
            style={{
              backgroundColor: "transparent ",
              border: "none",
              color: "black",
              fontWeight: "700",
              marginRight: "5px",
            }}
          >
            Register
          </Button>
          <b>/</b>
          <Button
            className="p-0"
            color="danger"
            onClick={toggle}
            style={{
              backgroundColor: "transparent ",
              border: "none",
              color: "black",
              fontWeight: "700",
              marginLeft: "5px",
              marginRight: "5px",
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
