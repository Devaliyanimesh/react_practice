import React from 'react'
import { Input, Label ,Form, FormGroup,Button} from 'reactstrap'

export default function Login() {
  return (
<>
<Form className="">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>

          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
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
          />
        </FormGroup>
        <Button className="w-100 mt-3">Submit</Button>
      </Form>
</>
  )
}
