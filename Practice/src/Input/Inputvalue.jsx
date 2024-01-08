import React, { useState } from 'react'
import Select from 'react-select';
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export default function Inputvalue() {
    let [input, setInput] = useState({
        email: "",
        password: "",
        gender: "",
        hobby: [],
        userType: "user"
    })

    let [inputData, setInputdata] = useState([])

    //   map mate use karyu
    let Gender = ["Male", "Female", "Other"];
    let Hobby = ["cricket", "singing", "Dansing"]

    // option value manage 
    const options = [
        { value: 'user', label: 'User' },
        { value: 'admin', label: 'Admin' },
        { value: 'employe', label: 'Employe' }
    ]
    const optionChange = (e) => {
        setInput({ ...input, userType: e?.value })
    }
    // checkbox  check value 

    const checkboxx = (e) => {
        let matchhobby = input.hobby.includes(e)
        if (matchhobby) {
            let filter = input.hobby.filter((ee) => ee !== e)

            setInput({ ...input, hobby: filter })
        }
        else {
            setInput({ ...input, hobby: [...input.hobby, e] })
        }
    }


    // button click data transfer local storage
    const datatransfer = () => {

        if (input.email === "" || input.gender === "" || input.gender === "" || input.hobby.length === 0 || input.userType === "") {
            toast.error("please fill up data")
        }
        else {
            setInput({
                email: "",
                password: "",
                gender: "",
                hobby: [],
                userType: "user"
            })
            setInputdata([...inputData, input])
            localStorage.setItem("add", JSON.stringify([...inputData, input]))
        }
    }
    console.log(inputData);
    return (
        <div className='w-25 m-auto'>
            <h1 className='text-center'>Form</h1>
            <Form style={{ border: "3px solid black" }} className='rounded-4 p-4'>
                <FormGroup>
                    <Label for="exampleEmail">
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                        value={input.email}
                        onChange={(e) => setInput({ ...input, email: e.target.value })}
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
                        value={input.email}

                        onChange={(e) => setInput({ ...input, password: e.target.value })}


                    />
                </FormGroup>
                <div>
                    <Label>Gender</Label>
                    <div className='d-flex'>

                        {
                            Gender?.map((e, i) => {
                                return <FormGroup key={i}>
                                    <Label for="examplePassword">
                                        {e}
                                    </Label>
                                    <Input
                                      
                                      name="gender"
                                      type="radio"
                                      value={e}
                                      checked={input.gender === e}
                                      onChange={(event) => setInput({ ...input, gender: event.target.value })}
                                  
                                  

                                    />
                                </FormGroup>
                            })
                        }
                    </div>
                </div>
                <div>
                    <Label>Hobby</Label>
                    <div className='d-flex'>

                        {
                            Hobby?.map((e, i) => {
                                return <FormGroup key={i}>
                                    <Label for="examplePassword" className='me-2'>
                                        {e}
                                    </Label>
                                    <Input
                                        name="namee"
                                        type="checkbox"
                                        onChange={() => checkboxx(e)}
                                        checked={input?.hobby?.includes?.(e)}
                                    />
                                </FormGroup>
                            })
                        }
                    </div>
                </div>
                <div className='mb-3'>

                    <Select
                        value={options.find((e) => e.value === input.userType)}
                        options={options}
                        onChange={optionChange}
                    />

                </div>

                <Button className='w-100' color='danger' onClick={datatransfer}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}
