import { MDBIcon } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function MultiInput() {
    let [value, setvalue] = useState({ email: "", password: "" })
    let [save, setSave] = useState([])
    let [index, setIndex] = useState(null)
    const saveData = (e) => {
        if (value.email.length <= 0) {
            toast.error("please fill Email")
        }
        else if (value.password.length <= 0) {
            toast.error("please fill password")

        }
        else {

            e.preventDefault()
            setSave([...save, value])
            setvalue({ email: "", password: "" })
        }
    }
    const deleteData = (ind) => {
        let filter = save.filter((e, i) => {
            return i !== ind
        })
        setSave(filter)
    }
    const updateData = (e, i) => {
        setvalue(e)
        setIndex(i)
    }
    const update=()=>{
        save.splice(index,1,value)
        setSave([...save])
        setvalue({email: "", password: ""})
        setIndex(null)
    }
    return (
        <>
            <div className='w-25 m-auto mt-5 bg-primary border border-black p-3 rounded-4 text-white'>
                <h3 className='text-center pb-2 mb-2 ' style={{ borderBottom: "2px solid white " }}>Login</h3>

                <Form autoComplete='off'>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Email
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="with a placeholder"
                            type="email"
                            value={value.email}
                            onChange={(e) => setvalue({ ...value, email: e.target.value })}
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
                        index || index===0? <Button className='w-100' color='danger' onClick={() => update()}>
                        Update
                        </Button>:
                    <Button className='w-100' color='danger' onClick={(e) => saveData(e)}>
                        Submit
                    </Button>
                    }
                   

                </Form>
            </div>

            {
                save.length > 0 ? <Table
                >
                    <thead>
                        <tr>
                            <th>
                                Sr.
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
                        {
                            save.map((e, i) => {
                                return <tr>
                                    <th>{i + 1}</th>
                                    <td>{e?.email}</td>
                                    <td>{e?.password}</td>
                                    <td><MDBIcon fas icon="edit" onClick={() => updateData(e, i)} /></td>
                                    <td><MDBIcon fas icon="trash" onClick={() => deleteData(i)} /></td>


                                </tr>
                            })
                        }

                    </tbody>
                </Table> : <h1 className='text-center mt-5'>Please fill Data </h1>
            }


        </>
    )
}
