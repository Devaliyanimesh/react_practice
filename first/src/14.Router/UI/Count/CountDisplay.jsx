import React from 'react'
import { useSelector } from 'react-redux';

export default function CountDisplay() {
     let data=useSelector((store)=>{
        return store.store.count
    })
  return (
   <h1>Count is {data}</h1>
  )
}
