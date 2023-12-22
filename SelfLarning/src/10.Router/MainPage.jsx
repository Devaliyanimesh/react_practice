import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function MainPage() {
  return (
  <>
  <h1> Hi i am Main Page</h1>
  <Link  to={"/second"}><Button>Goto second page</Button></Link>
  
  </>
  )
}
