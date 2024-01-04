import React, { useState } from "react";
import Select from "react-select";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function RegisterPractice() {
  let [name, setName] = useState({
    email: "",
    password: "",
    gender: "",
    hobby: [],
    userType: "",
  });
  let genderMap = ["male", "female", "kids"];
  let hobbyMap = ["Cricket", "Singing", "travelling"];
  const options = [
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
    { value: "employe", label: "Employe" },
  ];
const checkdata=(ee)=>{
const hobbyCheck=name?.hobby?.includes(ee)
if (hobbyCheck) {
    const hobbyFilter=name?.hobby.filter((hobby)=> hobby !==ee)
    setName({...name,hobby:[...name.hobby,hobbyFilter]})
}
else{
    setName({...name,hobby:hobbyCheck})
}
}
console.log(name.hobby);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Register
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <p>{name?.email}</p>
          <p>{name?.gender}</p>
          <p>{name?.password}</p>
          <p>{console.log(name?.hobby)}</p>
          <p>{name?.userType}</p>

          <Form>
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
            <Label>Gender:-</Label>
            <div className="d-flex">
              {genderMap?.map((e, i) => {
                return (
                  <FormGroup key={i}>
                    <Label for="examplePassword">{e}</Label>
                    <Input
                      name="radio1"
                      type="radio"
                      onChange={() => setName({ ...name, gender: e })}
                    />
                  </FormGroup>
                );
              })}
            </div>
            <Label>Hobby:-</Label>
            <div className="d-flex gap-2">
              {hobbyMap.map((e, i) => {
                return (
                  <FormGroup key={i}>
                    <Label for="examplePassword">{e}</Label>
                    <Input
                      type="checkbox"
                      onChange={() => checkdata(e)}
                      checked={name?.hobby?.includes?.(e)}
                    />
                  </FormGroup>
                );
              })}
            </div>
            <FormGroup>
              <Select options={options} value={options[0]} />
            </FormGroup>
            <Button color="danger" className="w-100">
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default RegisterPractice;
