import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { Button } from 'reactstrap'
export default function User() {
    let navigate=useNavigate()
    let name=useParams()
    console.log(name);
  return (
    <>
    <h1>Hello {name.name}</h1>
    <Button onClick={()=>navigate("/")}>Back</Button>
    </>
  )
}
