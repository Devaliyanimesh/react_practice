import React, { useEffect, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
export default function RegisterPage() {
  let [local, setLocal] = useState(null);
  let navigate = useNavigate()

  useEffect(() => {
    let json = localStorage.getItem("add");
    let normal = JSON.parse(json);
    setLocal(normal);
  }, []);
  let [name, setName] = useState({
    email: "",
    password: "",
    gender: "",
    hobby: [],
    userType: "user",
  });
  let [namesave, setNamesave] = useState([]);
  let genderMap = ["male", "female", "kids"];
  let hobbyMap = ["Cricket", "Singing", "travelling"];

  var options = [
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
    { value: "employe", label: "Employe" },
  ];
  const checkdata = (ee) => {
    const hobbyCheck = name?.hobby?.includes(ee);

    if (hobbyCheck) {
      const updatedHobbies = name.hobby.filter((hobby) => hobby !== ee);
      setName({ ...name, hobby: updatedHobbies });
    } else {
      setName({ ...name, hobby: [...name.hobby, ee] });
    }
  };

  const handleSelectChange = (selectedOption) => {
    setName({ ...name, userType: selectedOption.value });
  };

  const dataTransefer = () => {
    let localmap = local?.some?.((e) => {
      return e?.email === name.email;
    });
    let admin = local?.some?.((e) => {
      return e?.userType === "admin";
    });

    if (admin && name.userType === "admin") {
      toast.error("you are not admin");
    } else if (localmap) {
      toast.warn(" Your Email is alerdy saved ! ");
    } else if (
      name.email == "" ||
      name.password === "" ||
      name.gender == "" ||
      name.hobby.length === 0 ||
      name.userType === ""
    ) {
      toast.warn("please fill up");
    } else {
      setName({
        email: "",
        password: "",
        gender: "",
        hobby: [],
        userType: "user",
      });
      toast.success("data save");
      setNamesave([...namesave, name]);
      localStorage.setItem("add", JSON.stringify([...namesave, name]));
      navigate("/")
    }
  };




  return (
    <>


      <Form className="w-50  m-auto mt-4 mb-5 px-4 py-5 rounded-2  " style={{ boxShadow: "0px 0px 3px" }}>
        <h2 className="text-center"> Register Here</h2>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            onChange={(e) => {
              setName({ ...name, email: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
            onChange={(e) => {
              setName({ ...name, password: e.target.value });
            }}
          />
        </FormGroup>
        <Label>Gender</Label>
        <div className="d-flex gap-2"  >
          {genderMap?.map((e, i) => {
            return (
              <FormGroup key={i}>
                <Input
                  name="radio1"
                  type="radio"
                  onChange={() => setName({ ...name, gender: e })}
                />
                <Label for="examplePassword" style={{marginLeft:"10px"}}>{e}</Label>

              </FormGroup>
            );
          })}
        </div>
        <Label>Hobby</Label>
        <div className="d-flex gap-3">
          {hobbyMap.map((e, i) => {
            return (
              <FormGroup key={i} style={{ }}>
                <Input
                  type="checkbox"
                  onChange={() => checkdata(e)}
                  checked={name?.hobby?.includes?.(e)}
                />
                <Label for="examplePassword" style={{marginLeft:"15px"}}>{e}</Label>

              </FormGroup>
            );
          })}
        </div>
        <FormGroup>
          <Select
            options={options}
            value={options?.find?.(
              (user) => user.value === name.userType
            )}
            onChange={handleSelectChange}
          />
        </FormGroup>
        <Button color="danger" className="w-100" onClick={dataTransefer}>
          <NavLink style={{ textDecoration: "none", color: "white" }}>

            Submit
          </NavLink>
        </Button>
      </Form>


    </>
  );
}
