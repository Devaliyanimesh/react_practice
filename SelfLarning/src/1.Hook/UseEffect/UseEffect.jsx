import { Button } from 'reactstrap'
import React, { useEffect, useState } from 'react'
import PropsUseEffect from './PropsUseEffect';

export default function UseEffect() {
  let [count, setCount] = useState(0)

  useEffect(()=>{
    console.log("-->");
  })
  useEffect(()=>{
    console.log("without use");
  },[])
  // useEffect(()=>{
  //   console.log("click button work");
  // },[count])
  return (
    <>
    <div className='w-25 m-auto'>
      {/* <h1>Count is {count}</h1> */}
      <PropsUseEffect count={count}/>
      <Button onClick={()=> setCount(count+1)}>Increment</Button>
      </div>
    </>
  )
}
