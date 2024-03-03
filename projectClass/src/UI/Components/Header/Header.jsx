import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Footprints, LandPlot, LogOut, Search, ShoppingBag } from "lucide-react";
import { Button, Input } from "reactstrap";

import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Header() {
  let [local, setLocall] = useState([])
  let divFocus = useRef(null);
  let[regile,setRegile]=useState([])
 let regiToggle =()=>{
  setRegile(!regile)
 }
  let navigate = useNavigate()

  const focusHandler = () => {
    divFocus.current.style.border = "1px solid black";
  };
  useEffect(() => {
    let json = localStorage.getItem("local");
    let normal = JSON.parse(json);
    setLocall(normal ||[]);
  },[regile])
  // useEffect(() => {
  //   let json = localStorage.getItem("local");
  //   let normal = JSON.parse(json);
  //   setRegile(normal || []);
    
  // }, [regile]);
  let logoutButton =()=>{
    localStorage.removeItem("local")
    localStorage.removeItem("add")
    toast.success("logout Succesfully")
    regiToggle()

  }

  return (
    <>
      <div className="header ">
        <div className="logo  ">
          <Footprints size={36} color="#181616" onClick={() => navigate("/")} />
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
          <Search className="ms-2" />
          <Input
            className="in"
            placeholder="Search here"
            style={{
              border: "none",
              backgroundColor: "transparent",
              boxShadow: "none",
              marginTop: "-4px"

            }}
          />
        </div>
        <div className="d-flex align-items-center gap-3">
          {
            local.length === 0 ? <>
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
          </Button> <b>/</b> </> :null
          }
         
          
          {local?.length ==0?  <Button
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
          </Button>:
          <LogOut role="button" onClick={logoutButton} />
          }
         
          
          <ShoppingBag color="#181616" role="button" onClick={() => navigate("/")} />
        </div>
      </div>
    </>
  );
}
/*
divx  
logo
input
*/