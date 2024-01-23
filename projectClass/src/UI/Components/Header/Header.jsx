import React from "react";
import log from "./../../../Images/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logo w-25">
          <img src={log} alt="" className="w-100" />
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Men</li>
            <li>Woman</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </>
  );
}
