import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./../App.css";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          {/* <Link to={"/"}>Home</Link> */}
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          {/* <Link to={"/contact"}>contact</Link> */}
          <NavLink to={"/contact"}>contact</NavLink>
        </li>
      </ul>
    </div>
  );
}
