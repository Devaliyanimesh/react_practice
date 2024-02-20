import React, { useEffect, useState } from "react";
import "./Loginn.css";
import { Button, Form, Input, Label } from "reactstrap";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
export default function Loginn() {
  let [value, setValue] = useState({
    email: "",
    password: "",
  });
  let [data, setData] = useState([]);
  let [locall, setLocall] = useState(null);
  let [ref, setref] = useState(true)
  let refToggle = () => { setref(!ref) }
  const dataHandler = (e) => {
    e.preventDefault();
    let emailmatch = locall?.some?.((e) => e?.email === value?.email);
    let passwordmatch = locall?.some?.((e) => e?.password === value?.password);

    if (!emailmatch || !passwordmatch) {
      toast.error("your email is not match please register");
    }
    else if (value.email === " " || value.password === "") {
      toast.error("please fill up data");
    }
    else {
      setData([...data, value]);
      setValue({
        email: "",
        password: "",
      });
      refToggle()
      localStorage.setItem("local", JSON.stringify([...data, value]));

    }
  };
  
  useEffect(() => {
    let json = localStorage.getItem("add");
    let normal = JSON.parse(json);
    setLocall(normal);
    
  }, []);
  return (
    <div className="box " style={{ marginTop: "80px" }} >
      <span className="borderline"></span>
      <Form className="border border-1 w-25 m-auto my-4 p-3 rounded-2" style={{ boxShadow: "0px 0px 3px" }}>
        <h2>Login</h2>
        <div className="inputbox mt-3">
          <Label>Email</Label>
          <Input
            required="required"
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            value={value.email}
            onChange={(e) => setValue({ ...value, email: e.target.value })}
          />

        </div>
        <div className="inputbox mt-3">
          <Label>Password</Label>
          <Input
            required="required"
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
            value={value.password}
            onChange={(e) => setValue({ ...value, password: e.target.value })}
          />
        </div>

        <Button onClick={dataHandler} className="mt-3 bg-danger w-100" >
          <NavLink to={"/"} style={{ textDecoration: "none", color: "white" }}>Submit</NavLink>
        </Button>
      </Form>
    </div>
  );
}
