import React from 'react'
import { useSelector } from 'react-redux';
import store from '../../Redux/App/store';

export default function CountDisplay() {
     let data=useSelector((store)=>{
    console.log(store)
        return store
    })
 
  return (
    <>
   <h1>Count is {data.store.count}</h1>
   <h1>Amount is {data.amountcount.amount}</h1>
    </>
  )
}
