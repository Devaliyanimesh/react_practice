import React, { useEffect, useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import { toast } from "react-toastify";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
} from "reactstrap";

let gender = ["Male", "Female", "kid"];
let hobby = ["Reading", "writting", "cricket"];

function RegisterModal() {
  let [datasave, setdatasave] = useState([]);
  let [locall, setLocall] = useState(null);

  let [value, setValue] = useState({
    email: "",
    password: "",
    gender: "",
    hobb: [],
    userType: "user",
  });
  useEffect(() => {
    let Json = localStorage.getItem("add");
    let normal = JSON.parse(Json);
    setLocall(normal || []);
  }, []);
  console.log(locall);
  const transferData = (e) => {
    e?.preventDefault();
    let email = locall?.some((e) => e.email === value.email);
    let admintype = locall?.some((e) => e.userType === "admin");

    if ((email || value.email === "") && admintype) {
      toast.error("data is match");
    } else if (
      value.email === "" ||
      value.password === "" ||
      value.gender === "" ||
      value.hobb.length === 0 ||
      value.userType === ""
    ) {
      toast.warn("Please fill data emi");
    } else {
      setdatasave([...datasave, value]);
      localStorage.setItem("add", JSON.stringify([...datasave, value]));
      toast.success("done");
      setValue({
        email: "",
        password: "",
        gender: "",
        hobb: [],
        userType: "user",
      });
      toggle();
    }
  };

  const checkCoxHandler = (selectedHobby) => {
    const updatedHobbies = value.hobb.includes(selectedHobby)
      ? value.hobb.filter((hobby) => hobby !== selectedHobby)
      : [...value.hobb, selectedHobby];

    setValue({ ...value, hobb: updatedHobbies });
  };

  const options = [
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
    { value: "employe", label: "Employee" },
  ];

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
    if (!modal) {
      setValue({
        email: "",
        password: "",
        gender: "",
        hobb: [],
        userType: "",
      });
    }
  };
  return (
    <>
      <div className="d-flex gap-4">
        <NavLink to={"/local"}> Local</NavLink>

        <div>
          <Button color="danger" onClick={toggle}>
            Register
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>

            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    onChange={(e) =>
                      setValue({ ...value, email: e.target.value })
                    }
                    type="email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password placeholder"
                    type="password"
                    onChange={(e) =>
                      setValue({ ...value, password: e.target.value })
                    }
                  />
                </FormGroup>
                <Label>Gender</Label>
                <div className="d-flex gap-3">
                  {gender.map((e, i) => {
                    return (
                      <FormGroup key={i}>
                        <Input
                          name="radi"
                          type="radio"
                          onClick={() => setValue({ ...value, gender: e })}
                        />
                        <Label>{e}</Label>
                      </FormGroup>
                    );
                  })}
                </div>
                <Label>Hobby</Label>
                <div className="d-flex gap-3">
                  {hobby.map((e, i) => {
                    return (
                      <FormGroup key={i}>
                        <Input
                          onChange={() => checkCoxHandler(e)}
                          checked={value?.hobb?.includes(e)}
                          type="checkbox"
                        />
                        <Label>{e}</Label>
                      </FormGroup>
                    );
                  })}
                </div>
                <Select
                  onChange={(e) => setValue({ ...value, userType: e.value })}
                  options={options}
                  value={
                    options.find((e) => e.value === value.userType) ||
                    options[0]
                  }
                />
                <Button className="w-100 mt-2" onClick={transferData}>
                  Submit
                </Button>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default RegisterModal;
