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
    userType: "user",
  });
  let [namesave, setNamesave] = useState([]);
  let genderMap = ["male", "female", "kids"];
  let hobbyMap = ["Cricket", "Singing", "travelling"];
  const options = [
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
  console.log(namesave);
  const dataTransefer = () => {
    setNamesave([...namesave, name]);
  };
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
              <Select
                options={options}
                value={options?.find?.((user) => user.value === name.userType)}
                onChange={handleSelectChange}
              />
            </FormGroup>
            <Button color="danger" className="w-100" onClick={dataTransefer}>
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default RegisterPractice;
