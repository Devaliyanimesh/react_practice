import React, { useEffect, useState } from "react";
import "./Loginn.css";
import { Button, Form, Input } from "reactstrap";
import { NavLink } from "react-router-dom";
export default function Loginn() {
  let [value, setValue] = useState({
    email: "",
    password: "",
  });
  let [data, setData] = useState([]);
  let [locall, setLocall] = useState(null);
  const dataHandler = (e) => {
    e.preventDefault();
    let emailmatch = locall?.some?.((e) => e?.email === value?.email);
    let passwordmatch = locall?.some?.((e) => e?.password === value?.password);

    if (!emailmatch || !passwordmatch) {
      toast.error("your email is not match please register");
    } else if (value.email === " " || value.password === "") {
      toast.error("please fill up data");
    } else {
      setData([...data, value]);
      setValue({
        email: "",
        password: "",
      });
      localStorage.setItem("local", JSON.stringify([...data, value]));
      toggle();
    }
  };

  useEffect(() => {
    let json = localStorage.getItem("add");
    let normal = JSON.parse(json);
    setLocall(normal);
  }, []);
  return (
    <div className="box " style={{ marginTop: "80px" }}>
      <span className="borderline"></span>
      <Form>
        <h2>Login</h2>
        <div className="inputbox">
          <Input
            required="required"
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            value={value.email}
            onChange={(e) => setValue({ ...value, email: e.target.value })}
          />
          <span>Username</span>
          <i></i>
        </div>
        <div className="inputbox">
          <Input
            required="required"
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
            value={value.password}
            onChange={(e) => setValue({ ...value, password: e.target.value })}
          />
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="">Forgot Password</a>
          <a href="">Sign Up</a>
        </div>
        <Button onClick={dataHandler}>
          <NavLink to={"/"} style={{textDecoration:"none",color:"black"}}>Submit</NavLink>
        </Button>
      </Form>
    </div>
  );
}
