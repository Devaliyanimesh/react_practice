import React, { useEffect } from 'react'

export default function Propsudeffect({count}) {
    useEffect(()=>{
        if(count!==0){

            alert(`every element${count}`)
        }
    },[count])
  return (
    <>
    <hr />
    <h1>PropsUseEffoct</h1>
    <h1>Count is{count}</h1>
    </>
  )
}
