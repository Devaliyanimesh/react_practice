import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Body() {
  return (
    <>
    <div className='ms-5 d-flex gap-5 '>
    <Button><Link to={"/bike"}>Bike</Link></Button>
    <Button><NavLink  to={"/car"}> Car</NavLink></Button>
    </div>
    </>
  )
}
