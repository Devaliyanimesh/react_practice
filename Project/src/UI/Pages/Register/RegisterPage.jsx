import React from "react";
import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function RegisterPage() {
  let [details, setDetails] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    age: "",
    address: [],
  });
  let [adres, setAdress] = useState({
    add: "",
    city: "",
    state: "",
    pinCode: "",
  });
  let [data, setData] = useState([]);
  const dataTransfer = (e) => {
    e.preventDefault();
    setData([details]);
  };

  return (
    <>
      <Form className="w-25 border border-black rounded-2 p-2 m-auto">
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
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
          <Input
            type="text"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
          />
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
            onChange={(e) =>
              setAdress({...adres,add:e.target.value})
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">City</Label>
          <Input
            type="text"
            onChange={(e) =>
              setAdress({...adres,city:e.target.value})
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">state</Label>
          <Input
            type="text"
            onChange={(e) =>
              setAdress({...adres,state:e.target.value})
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Pincode</Label>
          <Input
            type="number"
            onChange={(e) =>
              setAdress({...adres,pinCode:e.target.value})
            }
          />
        </FormGroup>
        <Button className="w-100 bg-danger" onClick={(e) => dataTransfer(e)}>
          Submit
        </Button>
      </Form>
    </>
  );
}
