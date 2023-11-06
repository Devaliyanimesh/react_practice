import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Propschange(props) {
 let[changee,setChangee]=useState(props?.name)
  const changename=()=>{
    setChangee(props?.chang)
  }
  return (<>

  <div className='m-3'>
<h1>Hello, {changee}</h1>
<Button onClick={()=>changename()} className=''>Click here</Button>
</div>
<hr />

<div className='m-3'>
<h1>Hello, {props.name}</h1>
<Button onClick={()=>changenam()} className=''>Click here</Button>
</div>
  </>
  )
}
