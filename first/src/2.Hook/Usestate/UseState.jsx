import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import "./../App.css"


export default function UseState() {
    let [count ,setcount]=useState(100)
    // let x=count; varible
//   setcount="=" method
// userstate(100)=100 is intails value

let x=0;
const incre =()=>{
    x += 1;
    console.log("x",x);
    setcount(count+1)
    
}
  return (
    <div className='appcontainer'><h1>Count is {count}</h1>
    
<Button disabled:false color="danger"   onClick={()=>incre()}>Click here</Button>
</div>

  )
}
