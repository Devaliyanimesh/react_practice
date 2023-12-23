import React from 'react'
import { Button } from 'reactstrap'
import { useNavigate ,useParams} from 'react-router-dom'

export default function Age() {
    let naviga=useNavigate()
    let data=useParams()
    
  return (
    <>
    <h1>My age is  {data?.age}</h1>
    <Button onClick={()=>naviga("/")}>Back</Button>
    </>
  )
}
