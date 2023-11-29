import React, { useState } from 'react'
import { Button, FormGroup, Table } from 'react-bootstrap'
import { Form, Input, Label } from 'reactstrap'


export default function Practiccc() {
    let [valuee, setvalue] = useState({ name: "", email: "" })
    let [addata, setaddata] = useState([])
    const addataa = (e) => {
        e.preventDefault(),
            setaddata([...addata, valuee])
            setvalue({ name: "", email: "" })
    }

    return (
        <>
            <p> name:{valuee.name}</p>
            <p>Email{valuee.email}</p>

            <Form className='w-25 border border-1 border-dark rounded-5 p-2 m-auto'>
                <FormGroup className='mt-2'>
                    <Label>Firast name</Label>
                    <Input value={valuee.name} onChange={(e) => setvalue({ ...valuee, name: e.target.value })} />
                </FormGroup>
                <FormGroup className='mt-2'>
                    <Label>Last name</Label>
                    <Input value={valuee.email} onChange={(e) => setvalue({ ...valuee, email: e.target.value })} />
                </FormGroup>
                <Button onClick={(e) => addataa(e)} className='w-100 mt-2 '> Add data</Button>
            </Form>
            <Table
            >
                <thead>
                    <tr>
                        <th>
                            Sr.
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Email adress
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        addata.map((e, index) => {
                            console.log(e);
                            return <tr>
                                <th>{index + 1} dfdf</th>
                                <td>{e.name}sdsds</td>
                                <td>{e.email}sdsdsd</td>

                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}
