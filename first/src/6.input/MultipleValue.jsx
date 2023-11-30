import { MDBIcon } from 'mdb-react-ui-kit'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { Form, FormGroup, Input, Label } from 'reactstrap'


export default function MultipleValue() {
  let [User, setuser] = useState({
    name: "", fathername: "",
    Mothername: "", city: "", age: ""
  })
  let [Userdata, SetUserdata] = useState([])
  const addata = (e) => {
    if (User.name.length > 0 && User.fathername.length > 0 && User.Mothername.length > 0 && User.city.length > 0) {

      e.preventDefault(),
        SetUserdata([...Userdata, User]),
        toast.success("data save")
      setuser({
        name: "", fathername: "",
        Mothername: "", city: "", age: ""
      })
    } else {
      toast.error("please fill  form")
    }
  }
  // Userdata >biji var apre data lakhva mate ...Userdata
  const deletvalue = (index) => {
    const userdd = [...Userdata]
    userdd.splice(index, 1)
    SetUserdata(userdd)
    toast.success("data delet")

  }



  return (
    <>
      <Form className='border border-dark p-3 rounded-3 w-25 m-auto' autoComplete='off'>
        <FormGroup>
          <Label for="exampleEmail">
            Name
          </Label>
          <Input
            value={User.name}

            id="exampleEmail"
            name="name"
            type="text"
            onChange={(e) => setuser({ ...User, name: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">
            Age
          </Label>
          <Input
            // className={ User.age !== "" && User.age <18 ? toast.error("you are not eligible"):'border border-none'} 
            value={User.age}
            id="exampleEmail"
            name="name"
            type="text"
            onChange={(e) => setuser({ ...User, age: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">
            Father Name
          </Label>
          <Input
            value={User.fathername}
            id="exampleEmail"
            name="fathername"
            type="text"
            onChange={(e) => setuser({ ...User, fathername: e.target.value })}

          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">
            Mother Name
          </Label>
          <Input
            value={User.Mothername}
            id="exampleEmail"
            name="Mothername"
            type="text"
            onChange={(e) => setuser({ ...User, Mothername: e.target.value })}

          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">
            city
          </Label>
          <Input
            value={User.city}
            id="exampleEmail"
            name="city"
            type="text"
            onChange={(e) => setuser({ ...User, city: e.target.value })}

          />
        </FormGroup>



        <Button className='w-100' onClick={(e) => addata(e)}>
          Submit
        </Button>





      </Form>


      {Userdata != 0 ? <Table>


        <thead>
          <tr>
            <th>
              Sr.
            </th>
            <th>
              Name
            </th>
            <th>
              Father Name
            </th>
            <th>
              Mother name
            </th>
            <th>
              City
            </th>
            <th>
              age
            </th>
            <th>

            </th>
          </tr>
        </thead>
        <tbody>
          {
             Userdata.map((e, index) => {
              //  sty ma condittion
                          //   return <tr key={index} style={e.age <18?{border:"2px solid red"}:{border:"2px solid black"}} >
                          //   <th>{index + 1}</th>
                          //   <td>{e.name}</td>
                          //   <td>{e.age}</td>
                          //   <td>{e.fathername}</td>
                          //   <td>{e.Mothername}</td>
                          //   <td>{e.city}</td>
              
                          // </tr>
                            if(e.age<18){
                            return <tr key={index} style={{border:"2px solid red"}} >
                              <th >{index + 1}</th>
                              <td >{e.name}</td>
                              <td style={{color:"white", backgroundColor:"red"}}>{e.age}</td>
                              <td >{e.fathername}</td>
                              <td >{e.Mothername}</td>
                              <td >{e.city}</td>
                              <td><Button className='bg-danger' onClick={() => deletvalue(index)} ><MDBIcon fas icon="trash" /></Button></td>
              
                            </tr>
                            }
                            else{
                              return <tr key={index} style={{border:"2px solid black"}} >
                              <th>{index + 1}</th>
                              <td>{e.name}</td>
                              <td>{e.age}</td>
                              <td>{e.fathername}</td>
                              <td>{e.Mothername}</td>
                              <td>{e.city}</td>
                              <td><Button className='bg-danger' onClick={() => deletvalue(index)} ><MDBIcon fas icon="trash" /></Button></td>
              
                            </tr>
                            }
                          })
          }


        </tbody>
      </Table> : <h5 className='border border-2 border-black w-25 m-auto mt-5 text-center '>Please fill the form</h5>
      }

    </>
  )
}
