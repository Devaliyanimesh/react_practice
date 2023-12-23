import React from 'react'
import { Button } from 'reactstrap'
import { useNavigate,useParams } from 'react-router-dom'

export default function Name() {
    let naviga=useNavigate()
    let data=useParams()
  

  return (
    <>
   <h1>My name is {data?.name}</h1>
   <Button onClick={()=>naviga("/")}>Back</Button>
    </>
  )
}
