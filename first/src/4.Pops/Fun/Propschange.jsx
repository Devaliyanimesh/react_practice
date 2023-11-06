import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Propschange(props) {
 let[changee,setChangee]=useState(props?.name)
  const changename=()=>{
    setChangee(props?.chang)
    
  }
const changevalue=()=>{
  props.namee= "User";
}
 
  return (<>

  <div className='m-3'>
<h1>Hello, {changee}</h1>
<Button onClick={changename } className='danger'>Click here</Button>
</div>
<hr />

<div className='m-3'>
<h1>Hello, {props.namee}</h1>
<Button  onClick={changevalue} className='danger'>Click here</Button>
</div>
  </>
  )
}
