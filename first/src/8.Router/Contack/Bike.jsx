import React from 'react'
import { Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

export default function Bike() {
    let Navigate=useNavigate()
  return (
    <>
    <div>Bike</div>
    <Button onClick={()=>Navigate("/contact/bike/sportbike")}>Normal bike</Button>
    <Button onClick={()=>Navigate("/contact/bike/normalbike")}>Sport bike</Button>

    </>
  )
}
