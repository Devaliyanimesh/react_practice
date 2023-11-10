import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Propschange(props) {
 let[changee,setChangee]=useState(props?.name)
let[changgg,setChang]=useState(false)

  const changename=()=>{
    setChangee("nimesh")
    
  }
const changevalue=()=>{
  setChangee(changgg ? props.name:"user")
  setChang(!changee)
  
}
 
  return (<>

  <div className='m-3'>
<h1>Hello, {changee}</h1>
<Button onClick={changename } className='danger'>Click here</Button>
</div>
<hr />

<div className='m-3'>
<h1>Hello, {changgg}</h1>
<Button  onClick={changevalue} className='danger'>Click here</Button>
</div>
  </>
  )
}
