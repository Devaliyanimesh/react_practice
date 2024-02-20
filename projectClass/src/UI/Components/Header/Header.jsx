import React, { useRef, useState } from "react";
import "./Header.css";
import { Footprints, Search, ShoppingBag } from "lucide-react";
import { Button, Input } from "reactstrap";

import { NavLink ,useNavigate} from "react-router-dom";

export default function Header() {
  let divFocus = useRef(null);
  let navigate=useNavigate()

  const focusHandler = () => {
    divFocus.current.style.border = "2px solid black";
  };

  return (
    <>
      <div className="header ">
        <div className="logo  ">
          <Footprints size={36} color="#181616"  onClick={()=>navigate("/")} />
          <h5 style={{ color: "black", fontWeight: "700" }}>Shoes</h5>
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
        <div
          className="bg-white d-flex ps-1 align-items-center gap-2 in  rounded-3 "
          style={{ width: "30%", boxShadow: "0px 0px 3px" }}
          ref={divFocus}
          onClick={focusHandler}
        >
          <Search />
          <Input
            className="in"
            style={{
              border: "none",
              backgroundColor: "transparent",
              boxShadow: "none",
              marginTop: "-4px"

            }}
          />
        </div>
        <div className="d-flex align-items-center gap-1">
          <Button
            color="danger"
            className="p-0"
            style={{
              backgroundColor: "transparent ",
              border: "none",
              color: "black",
              fontWeight: "700",
              marginRight: "5px",
            }}
          >
            <NavLink to={"/register"} style={{ textDecoration: "none", color: "black" }}>Register</NavLink>
          </Button>
          <b>/</b>
          <Button
            className="p-0"
            color="danger"
            style={{
              backgroundColor: "transparent ",
              border: "none",
              color: "black",
              fontWeight: "700",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          >
            <NavLink to={"/login"} style={{ textDecoration: "none", color: "black" }}>Login</NavLink>
          </Button>
          <ShoppingBag color="#181616" role="button" onClick={()=>navigate("/")} />
        </div>
      </div>
    </>
  );
}
