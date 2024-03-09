import React, { useEffect, useState } from "react";
import "./Loginn.css";
import { Button, Form, Input, Label } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logi, loginn } from "../../../Reduxx/State/Statee";

export default function Loginn({ loginTogg, registerTogg }) {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);
  const [locall, setLocall] = useState(null);
  let navigate = useNavigate();

  const dataHandler = (e) => {
    axios({
      method: "post",
      url: "http://localhost:9999/user/signin",
      data: value,
    })
      .then((res) => {
        dispatch(loginn(res.data))
        console.log(res.data);
        toast.success("Login succecsfully")
        setValue({email:"",password:""})
        loginTogg()

      })
      .catch((err) => {
        console.log("-->", err.message);
        toast.error("login Fail");
      });
    e.preventDefault();
    // if (value.email.trim() === "" || value.password.trim() === "") {
    //   toast.error("Please fill up all fields");
    //   return;
    // }

    // const emailMatch = locall?.some?.((e) => e?.email === value?.email);
    // const passwordMatch = locall?.some?.((e) => e?.password === value?.password);

    // if (!emailMatch || !passwordMatch) {
    //   toast.error("Your email or password is incorrect. Please register if you haven't.");
    //   return;
    // }

    // setData([...data, value]);
    // setValue({
    //   email: "",
    //   password: "",
    // });
    // navigate("/")
    // toast.success("login Succesfully")
    // localStorage.setItem("local", JSON.stringify([...data, value]));
  };
  const rgiserPageHandler = () => {
    loginTogg();
    registerTogg();
  };


  useEffect(() => {
    const json = localStorage.getItem("add");
    const normal = JSON.parse(json);
    setLocall(normal);
  }, []);
  let dispatch=useDispatch()
  return (
    <div className="box">
      <Form className="">
        <div className="">
          <Label>Email</Label>
          <Input
            required
            id="exampleEmail"
            name="email"
            placeholder="Enter your email"
            type="email"
            value={value.email}
            onChange={(e) => setValue({ ...value, email: e.target.value })}
          />
        </div>
        <div className="inputbox mt-3">
          <Label>Password</Label>
          <Input
            required
            id="examplePassword"
            name="password"
            placeholder="Enter your password"
            type="password"
            value={value.password}
            onChange={(e) => setValue({ ...value, password: e.target.value })}
          />
        </div>
        <Button className="mt-3 bg-danger w-100" onClick={dataHandler}>
          Submit
        </Button>
        <p className="text-center  pt-2">
          Please login here{" "}
          <span
            style={{ color: "blue" }}
            role="button"
            onClick={(e) => rgiserPageHandler(e)}
          >
            Register
          </span>
        </p>
      </Form>
    </div>
  );
}

// product 
// edit ,preview,
// profile khule che tene badh karvu 
// admin@admin.com

// 123456