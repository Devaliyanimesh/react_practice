import React from "react";
import "./Loginn.css";
import { Button, Input } from "reactstrap";
export default function Loginn() {
  return (
    <div
      className="text-white border border-1 rounded-1 "
      style={{
        backgroundColor: "rgb(12, 12, 30)",
        width: "400px",
        padding: "20px 20px",
      }}
    >
      <h5 className="text-center"> Loginn </h5>
      <div
        className=""
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <Input
          className="rounded-0"
          style={{
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none",
          }}
          placeholder="Username"
        />
        <Input
          className="rounded-0"
          style={{
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none",
          }}
          placeholder="Password"
        />
      </div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"5px"}}>
        <p> Forget Password?</p>
        <p>Sign up</p>
      </div>
      <div >
        <Button className="rounded-1" style={{padding:"7px 20px",backgroundColor:"white",color:"black",fontWeight:"700"}}>Login</Button>
      </div>
    </div>
  );
}
