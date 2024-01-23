import React from "react";
import "./Header.css";
import { Footprints, ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="header ">
        <div className="logo  ">
        <Footprints size={36} color="#181616" /><h5 style={{color:"black" ,fontWeight:"700"}}>Shoes</h5>
        </div>
        <div className="ul_list">
          <ul className="list">
            <li>Home</li>
            <li>Men</li>
            <li>Woman</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
         
        </div>
           <ShoppingBag color="#181616" />
      </div>
    </>
  );
}
