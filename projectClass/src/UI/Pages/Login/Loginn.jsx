import React from "react";
import "./Loginn.css";
import { Button, Form, Input } from "reactstrap";
import { NavLink } from "react-router-dom";
export default function Loginn() {
  return (
    <div className="box " style={{marginTop:"80px" }}>
        <span className="borderline"></span>
      <Form >
        <h2>Login</h2>
        <div className="inputbox">
          <Input required="required" />
          <span>Username</span>
          <i></i>
        </div>
        <div className="inputbox">
          <Input required="required" />
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
           <a href="">Forgot Password</a>
           <a href="">Sign Up</a>

        </div>
     <Button >Login</Button>
      </Form>
    </div>
  );
}
