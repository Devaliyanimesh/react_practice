import React, { useState } from 'react'

import { Input, Label, Button, Form, FormGroup } from 'reactstrap'

export default function Inputmulti() {
    let [value, setValue] = useState({ email: "", password: "" })
    let [data, setData] = useState([])
    let [index, setIndex] = useState(null)

    const submit = () => {
        setData([...data, value])
        setValue({ email: "", password: "" })
    }
    const deletee = (index) => {
        let fillterdata = data.filter((e, i) => {
            return index !== i
        })
        setData(fillterdata)
    }
    const update = (e, i) => {
        setValue(e)
        setIndex(i)
    }
    const updateHandler = () => {
        if (index || index === 0) {
            data.splice(index, 1, value)
            setData([...data])
            setValue({ email: "", password: "" })
            setIndex(null)
        }
    }
    return (<>
        <h1 className='text-center'>Crud</h1>
        <Form className=' w-25 m-auto border border-2 border-dark p-4 rounded-3'>
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
                    onChange={(e) => setValue({ ...value, email: e.target.value })}
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
                index || index === 0 ? <Button color='danger' onClick={() => updateHandler()} className='w-100'>
                    Update
                </Button> :
                    <Button color='danger' onClick={() => submit()} className='w-100'>
                        Submit
                    </Button>
            }

        </Form>
        <div className='border border-dark border-3 w-50 m-auto mt-2 p-2'>
            <h4 className='text-center'>Details</h4>
            <ul>
                {
                    data.map((e, i) => {
                        return (

                            <div key={i} className='d-flex gap-5 '>
                                <p>Email:{e.email}</p>
                                <p>Password:{e.password}</p>
                                <Button onClick={() => deletee(i)}>delet</Button>
                                <Button onClick={() => update(e, i)}>Update</Button>

                            </div>

                        )
                    })

                }
            </ul>

        </div>
    </>
    )
}
