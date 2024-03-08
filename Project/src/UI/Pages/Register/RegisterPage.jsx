import React, { useEffect, useReducer } from "react";
import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { Eye } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {loginn} from './../../../Reduxx/State/Statee'

export default function RegisterPage({login}) {
  let dispatch =useDispatch()
  let reducer = (state, action) => {
    console.log(action);
    if (action.typee === "pass") {
      return { ...state, val: state.val==="password" ?"text":"password" };
    } else if (action.typee === "cpass") {
      return { ...state, val2: state.val2==="password" ?"text":"password" } ;

    }

  };

  
  let [details, setDetails] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    age: "",
    address: [],
  });
  let [adres, setAdress] = useState({
    add: "",
    city: "",
    state: "",
    pinCode: "",
  });
  let [type, setType] = useReducer(reducer,{val:"password",val2:"password"});

  const dataTransfer = (e) => {
    e.preventDefault();
    if (details.password !== details.confirmPassword) {
     return toast.error("confirm password does not match")
      
    }
    axios({
      method: "post",
      url: "http://localhost:9999/user/signup",
      data: { ...details, address: [adres] },
    })
      .then((res) => {
        console.log(res);
        dispatch(loginn(res.data))
        toast.success("data store");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("errorr");
      });
  };
  return (
    <>
      <Form className="">
        <FormGroup>
          <Label for="">Name</Label>
          <Input
            type="text"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Number</Label>
          <Input
            type="number"
            onChange={(e) => setDetails({ ...details, number: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">PassWord</Label>
          <div
            className="d-flex items-center w-100 rounded-2"
            style={{ border: "2px solid #f7efef" }}
          >
            <Input
              type={type?.val}
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              style={{ backgroundColor: "transparent", border: "none" }}
            />
            <Eye style={{ marginRight: "10px" }}  onClick={()=>setType({typee:"pass"})}/>
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail"> Confirm PassWord</Label>
          <div
            className="d-flex items-center w-100 rounded-2"
            style={{ border: "2px solid #f7efef" }}
          >
            <Input
              type={type.val2}
              onChange={(e) =>
                setDetails({ ...details, confirmPassword: e.target.value })
              }
              style={{ backgroundColor: "transparent", border: "none" }}
            />
            <Eye style={{ marginRight: "10px" }}  onClick={()=>setType({typee:"cpass"})}/>
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">age</Label>
          <Input
            type="number"
            onChange={(e) => setDetails({ ...details, age: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Adress</Label>
          <Input
            type="text"
            onChange={(e) => setAdress({ ...adres, add: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">City</Label>
          <Input
            type="text"
            onChange={(e) => setAdress({ ...adres, city: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">state</Label>
          <Input
            type="text"
            onChange={(e) => setAdress({ ...adres, state: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Pincode</Label>
          <Input
            type="number"
            onChange={(e) => setAdress({ ...adres, pinCode: e.target.value })}
          />
        </FormGroup>
        <Button className="w-100 bg-danger" onClick={(e) => dataTransfer(e)}>
          Submit
        </Button>
        <p className="text-center  pt-2">
          Please login here{" "}
          <button onClick={login} style={{ color: "blue" }} role="button">
            Login
          </button>
        </p>
      </Form>
    </>
  );
}

// user/signup
