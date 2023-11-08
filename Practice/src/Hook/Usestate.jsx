import { Button } from 'reactstrap'
import React, { useState } from 'react'

export default function Usestate() {
let[count,setcount]=useState(0)

function increment(){
    setcount(count+1)
}
  return (
    <>
<h1>count is{count}</h1>
<Button color='danger' onClick={increment}>Click here</Button>

    </>
  )
}
