import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { toast } from 'react-toastify'

import { Form, Input, Label, Button, FormGroup } from 'reactstrap'

export default function InputLast() {
    let [value, setValue] = useState({ name: "", password: "" })
    let [save, setSave] = useState([])
    let [index, setIndex] = useState(null)

    const deletItem = (i) => {
        let filterdata = save.filter((e, ind) => ind !== i)
        setSave(filterdata)
        localStorage.setItem("todo",JSON.stringify(filterdata))
    }
    const handler = (e) => {
        if (value.name.length >= 0 && value.password >= 0) {
            toast.error("please fill data")
        } else {
            e.preventDefault()
            setSave([...save, value]),
                setValue({ name: "", password: "" })
            localStorage.setItem("todo", JSON.stringify([...save, value]))

        }

    }
    const Update = (e, i) => {
        setValue(e)
        setIndex(i)
    }
    const updateHandler = () => {
        save.splice(index, 1, value)
        setValue([...save])
        setValue({ name: "", password: "" })
        localStorage.setItem("todo", JSON.stringify([...save]))
        setIndex(null)
    }

    useEffect(() => {
        let data = localStorage.getItem("todo")
        let normal = JSON.parse(data)
        setSave(normal || [])
    }, [])
    return (
        <>
            <Form className='w-25 m-auto border border-3 border-dark m-3 p-4 rounded-7 '>
                <FormGroup>
                    <Label for="exampleEmail">
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                        value={value.name}
                        onChange={(e) => setValue({ ...value, name: e.target.value })}
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
                        onChange={(e) => setValue({ ...value, password: e.target.value })}

                    />
                </FormGroup>
                {
                    index || index === 0 ? <Button color='success ' className='w-100 mt-1' onClick={() => updateHandler()}>
                        Update
                    </Button> : <Button color='danger' className='w-100' onClick={(e) => handler(e)}>
                        Submit
                    </Button>
                }
               

            </Form>
            <Table
            >
                <thead>
                    <tr>
                        <th>
                            Sr..
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
                    {
                        save.map((e, i) => {
                            return <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{e?.name} </td>
                                <td>{e?.password} </td>
                                <td><Button color='danger' onClick={() => deletItem(i)}>Delet</Button></td>
                                <td><Button color='danger' onClick={() => Update(e, i)}>Update</Button></td>


                            </tr>

                        })
                    }
                </tbody>
            </Table>

        </>
    )
}
