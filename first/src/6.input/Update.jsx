import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { Input, Label, Form, FormGroup, Button, Table } from 'reactstrap'

export default function Update() {
    let [value, setvalue] = useState({ Email: "", Password: "" })
    let [save, setsave] = useState([])
    let [index, setindex] = useState(null)
    const adddata = (e, index) => {
        if (value.Email.length > 0 && value.Password.length > 0) {
            setsave([...save, value])
            setvalue({ Email: "", Password: "" })
            { value.Email === save[0]?.Email ? toast.info("alerdy email build") : null }
            e.preventDefault()
        }
        else {
            toast("plase fill value")
        }
    }
    // Update
    const uppass = (e, i) => {
        setvalue(e)
        setindex(i)
    }

    const updatebutton = () => {
        save.splice(index, 1, value)
        setsave([...save])
        setvalue({ Email: "", Password: "" })
        setindex(null)

    }

    const delet = (ii) => {
        // save.splice(ii,1)
        // setsave([...save])
        // console.log(ii);
        // console.log("--->");

        // second
        let allda = save.filter((e, i) => {
            return i !== ii
        })
        setsave(allda)

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


                {
                    index || index === 0
                        ?
                        <Button onClick={() => updatebutton()} className='w-100'>Update</Button> :
                        <Button className='bg-danger w-100  text-white ' onClick={(e) => adddata(e)}>
                            Submit
                        </Button>
                }



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
                        <th>Action</th>


                    </tr>
                </thead>
                <tbody>
                    {save.map((e, i) => {
                        return <tr key={i} >
                            <th>{i + 1}</th>
                            <td>{e.Email}</td>
                            <td>{e.Password}</td>
                            <td><Button color='primary' onClick={() => uppass(e, i)}>Update</Button></td>
                            <td><Button color='danger' onClick={() => delet(i)}>Delet</Button></td>

                        </tr>
                    })

                    }

                </tbody>
            </Table>
        </>
    )
}
