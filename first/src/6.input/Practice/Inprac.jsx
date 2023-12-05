import React, { useState } from 'react'
import { Button, Form, FormGroup, Table } from 'react-bootstrap'
import { Input, Label } from 'reactstrap'


export default function Inprac() {
  let [value,setvalue]=useState({name:"",password:""})
  let [addvalue,setaddvalue]=useState([])
const adddattaa=()=>{
  setaddvalue([...addvalue,value])
  setvalue({name:"",password:""})
}

  return (
    <>
      <Form className="w-25 m-auto  border border-primary border-5 p-4" >
        <h3 className='text-center'>Form</h3>
     


        <FormGroup >
          <Label for="exampleEmail">
           Name
          </Label>
          <Input
            id="exampleEmail"
            value={value.name}
            placeholder="with a placeholder"
            type="text"
            onChange={(e)=> setvalue({...value,name:e.target.value})}
            

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
            value={value.password}
            onChange={(e)=> setvalue({...value,password:e.target.value})}
          />
        </FormGroup>
        <Button className='mt-4 w-100' onClick={()=>adddattaa()}>
          Submit
        </Button>
      </Form>

<div>
<Table
>
  <thead>
    <tr>
      <th>
        sr..
      </th>
      <th>
        Name
      </th>
      <th>
       Password
      </th>
      
    </tr>
  </thead>
  <tbody>
    {addvalue.map((e,i)=>{
      return  <tr>
      <th scope="row">
        {i+1}
      </th>
      <td>
       {e?.name}
      </td>
      <td>
      {e?.password}
      </td>
    
    </tr>
    })

    }
      
  </tbody>
</Table>
</div>
    </>
  )
}
