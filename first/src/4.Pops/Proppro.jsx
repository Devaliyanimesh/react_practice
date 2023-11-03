import React from 'react'
import Data from '../../Product/packeg.json'
import Carddd from './Carddd'

export default function Proppro() {
  console.log(Data);
  return (
   <>
   {Data.map((e)=>{
    return <h1>{e.title}</h1>
   })}
   <Carddd/>
   </>
  )
}
