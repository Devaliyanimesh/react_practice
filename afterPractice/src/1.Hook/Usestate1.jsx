import { Button } from 'reactstrap'
import React, { useState } from 'react'

export default function Usestate1() {
  let[count,setCount]=useState(1)
 let  increement=()=>{
  setCount(count+1)
    
  }
  return (
    <>
    <h4>Count is {count}</h4>
    <Button onClick={increement}>Increme</Button>
    </>
  )
}
