import React from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { Button } from "reactstrap";

export default function Contact() {
  let Navgate = useNavigate();
  return (
    <>
      <div>Contact</div>
      {/* <NavLink to={"/contact/bike"}> Bike </NavLink> */}
      <Button onClick={() => Navgate("/contact/bike")}>Bik</Button>
      <Button onClick={() => Navgate("/contact/car")}>Car</Button>
      <Outlet />
    </>
  );
}
