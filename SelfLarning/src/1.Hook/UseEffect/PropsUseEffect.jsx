import React, { useEffect } from 'react'

export default function PropsUseEffect({count}) {
    useEffect(()=>{
        console.log("count increment");
    },[count])
  return (
    <h1>Count is {count}</h1>
  )
}
