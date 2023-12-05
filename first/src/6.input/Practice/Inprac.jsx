import React, { useState } from 'react'
import { Button, Form, FormGroup, Table } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { Input, Label } from 'reactstrap'


export default function Inprac() {
  let [value, setvalue] = useState({ name: "", password: "" })
  let [addvalue, setaddvalue] = useState([])
  let [ind, setindex] = useState(null)

  //  submit button
  const adddattaa = (e) => {
    if (value.name.length > 0 && value.password.length > 0) {
      e.preventDefault()
      setaddvalue([...addvalue, value])
      setvalue({ name: "", password: "" })
    }
    else {
      toast.error("please fill up")
    }

  }
  // Delet button
  const removee = (index) => {
    let newdata = addvalue.filter((e, i) => {
      return i !== index
    })
    setaddvalue(newdata)
  }
  const update = (e, i) => {
    setindex(i)
    setvalue(e)

  }
  const adddataall = () => {
    if (value.name.length > 0 && value.password.length > 0) {
      addvalue.splice(ind, 1, value)
      setaddvalue([...addvalue])
      setvalue({ name: "", password: "" })
      setindex(null)
    }
    else {
      toast.error("please fill up")
    }

    
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
            onChange={(e) => setvalue({ ...value, name: e.target.value })}


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
            onChange={(e) => setvalue({ ...value, password: e.target.value })}
          />
        </FormGroup>
        {
          ind == null ? <Button className='mt-4 w-100' onClick={(e) => adddattaa(e)}>     Submit
          </Button> : <Button onClick={() => adddataall()} className='mt-4 w-100'>Update</Button>
        }



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
              <th>
                assest
              </th>

            </tr>
          </thead>
          <tbody>
            {addvalue.map((e, i) => {
              return <tr key={i}>
                <th scope="row">
                  {i + 1}
                </th>
                <td>
                  {e?.name}
                </td>
                <td>
                  {e?.password}
                </td>
                <td><Button onClick={() => removee(i)}>Delet</Button></td>
                <td><Button onClick={() => update(e, i)}>Update</Button></td>

              </tr>
            })

            }

          </tbody>
        </Table>
      </div>
    </>
  )
}
