import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { Input, Label, Form, FormGroup, Button, Table } from 'reactstrap'

export default function Update() {
    let [value, setvalue] = useState({ Email: "", Password: "" })
    let [save, setsave] = useState([])
    let [index,setindex]=useState(null)
    const adddata = () => {
        if (value.Email.length > 0 && value.Password.length > 0) {
            setsave([...save, value])
            setvalue({ Email: "", Password: "" })
        }
        else {
            toast("plase fill value")
        }
    }
    const uppass = (e,i) => {
        setvalue(e)
        setindex(i)
    }
    const updatebutton=()=>{
        save.splice(index,1,value)
        setsave([...save])

    }

    return (
        <>
            <Form className='border border-black border-2 w-25 m-auto p-4 rounded-5 bg-primary ' autoComplete='off'>
                <h4 className='text-center text-white'>Form</h4>
                <hr style={{ height: "5px", backgroundColor: "white" }} />
                <FormGroup>
                    <Label for="exampleEmail" className='text-white'>
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                        value={value.Email}
                        onChange={(e) => setvalue({ ...value, Email: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword" className='text-white'>
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
                        type="password"
                        value={value.Password}

                        onChange={(e) => setvalue({ ...value, Password: e.target.value })}
                    />
                </FormGroup>


                <Button className='bg-danger w-100  text-white ' onClick={() => adddata()}>
                    Submit
                </Button>
                <Button onClick={()=>updatebutton()}>Update</Button>
            </Form>
            <Table
            >
                <thead>
                    <tr>
                        <th>
                            sr..
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Password
                        </th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {save.map((e, i) => {
                        return <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{e.Email}</td>
                            <td>{e.Password}</td>
                            <td><Button onClick={() => uppass(e,i)}>Update</Button></td>

                        </tr>
                    })

                    }

                </tbody>
            </Table>
        </>
    )
}
