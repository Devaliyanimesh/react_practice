import React from 'react'
import Select from 'react-select'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export default function Inputt() {
  const options = [
    { value: 'food', label: 'Food' },
    { value: 'travel expenses', label: 'Travel expenses' },
    { value: 'cellphone', label: 'CellPhone' },
    { value: 'cable bill', label: 'Cabel Bill' },
    { value: 'housing', label: 'Housing' },
    { value: 'medicine ', label: 'Medicine' },
    { value: 'petrol', label: 'Petrol' },
    { value: 'cargas', label: 'CarGas' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'grocery', label: 'Grocery' }




  ]
  return (
    <>
      <Form className='border border-black rounded w-25 p-4 flex flex-col   justify-center'>
        <h3>Write the cost per day</h3>
        <FormGroup>
          <Label>1.Enter your expenses</Label>
          <Input
            placeholder="Enter your expenses...."
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label>2.what did ?</Label>
          <Input
            placeholder="Discription..."
            type="textarea"
          />
        </FormGroup>
        <FormGroup>
          <Select options={options} />
        </FormGroup>
        <Button className='w-100'>
          Submit
        </Button>
      </Form>
    </>
  )
}
