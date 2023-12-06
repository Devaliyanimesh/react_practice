import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function Practtt() {
    let [value, setvalue] = useState({ Email: "", Password: "" })
    let [data, setdata] = useState([])
    let [newda, setnewda] = useState(null)
    const savedata = () => {
        setdata([...data, value])
    }
    const removee = (remove) => {
        let newdata = data.filter((e, i) => {
            return i !== remove
        })
        setdata(newdata)

    }
    const updatee = (e, i) => {
        setvalue(e)
        setnewda(i)
    }
    const newupdate = () => {
        data.splice(newda, 1, value)
        setdata([...data])
        setvalue({ Email: "", Password: "" })


    }
    return (
        <>
            <Form className='w-25 m-auto border border-dark border-4 p-4'>
                <h5 className='text-center'>Form Fill up</h5>
                <hr />
                <FormGroup>
                    <Label for="exampleEmail">
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
                    <Label for="examplePassword">
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
    newda=== null ?  <Button className='w-100' color='danger' onClick={() => savedata()}>
    Submit
</Button>:     <Button className='w-100' onClick={() => newupdate()}>Update</Button>
}
                
           
            </Form>
            <div>
                <Table
                >
                    <thead>
                        <tr>
                            <th>
                                sr no..
                            </th>
                            <th>
                                Email
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
                        {
                            data.map((e, i) => {
                                return <tr>
                                    <th>{i + 1}</th>
                                    <td>{e?.Email}</td>
                                    <td>{e?.Password}</td>
                                    <td><Button color='danger' onClick={() => removee(i)}>Delet</Button></td>
                                    <td><Button onClick={() => updatee(e, i)}>Update</Button></td>

                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}
