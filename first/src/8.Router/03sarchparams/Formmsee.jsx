import React from "react";
import { useSearchParams } from "react-router-dom";

import { Input, Label, Button, Form, FormGroup } from "reactstrap";

export default function Formmsee() {
  const [paramas] = useSearchParams();
  return (
    <>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            placeholder="with a placeholder"
            type="text"
            value={paramas.get("name")}
            disabled={true}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
          
            placeholder="password placeholder"
            type="text"
            value={paramas.get("age")}
            disabled={true}
          />
        </FormGroup>
      </Form>
    </>
  );
}
