import React, { useRef, useState } from "react";
import "./Header.css";
import { Footprints, Search, ShoppingBag } from "lucide-react";
import { Button, Input } from "reactstrap";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import { NavLink } from "react-router-dom";

export default function Header() {
  let divFocus=useRef(null)
  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [registerModal, setRegisterModal] = useState(false);

  const registerToggle = () => {
    setRegisterModal(!registerModal);
  };
  
  const focusHandler =()=>{
   
    divFocus.current.style.border="2px solid black"
   
  }

  return (
    <>
      <Login modal={modal} toggle={toggle} />
      <Register modal={registerModal} toggle={registerToggle} />
      <div className="header ">
        <div className="logo  ">
          <Footprints size={36} color="#181616" />
          <h5 style={{ color: "black", fontWeight: "700" }}>Shoes</h5>
        </div>

        <div
          className="bg-white d-flex ps-1 align-items-center gap-2 in  rounded-3 "
          style={{ width: "30%",boxShadow:"0px 0px 3px"}}
        ref={divFocus}
        onClick={focusHandler}
        >
          <Search />
          <Input
            className="in"
            style={{ border: "none", backgroundColor: "transparent",boxShadow:"none" }}
          />
        </div>

        <ul className="list">
          <li className="home">
            <NavLink
              to={"/"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Home
            </NavLink>
          </li>
          <li className="Men">
            <NavLink
              to={"/men"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Men
            </NavLink>
          </li>
          <li className="Woman">
            <NavLink
              to={"/woman"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Woman
            </NavLink>
          </li>
          <li className="Child">
            <NavLink
              to={"/kids"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Child
            </NavLink>
          </li>
          <li className="About">
            <NavLink style={{ textDecoration: "none", color: "black" }}>
              About
            </NavLink>
          </li>
        </ul>

        <div className="d-flex align-items-center gap-1">
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
