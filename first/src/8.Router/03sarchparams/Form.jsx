import React from 'react'
import { Button, FormGroup } from 'react-bootstrap'
import { Input, Label } from 'reactstrap'

export default function Form() {
  return (
 <>
 <Form>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
    />
  </FormGroup>
   <Button>
    Submit
  </Button>
</Form>
 </>
  )
}
