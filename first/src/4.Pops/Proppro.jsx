import React from 'react'
import Data from '../../Product/packeg.json'
import Carddd from './Carddd'

export default function Proppro() {
  console.log(Data);
  return (
   <>
   <div className='d-flex flex-wrap gap-2 px-3  ' style={{backgroundColor:"lightblue"}}>
   {Data.map((e)=>{
  
   return  <Carddd data={e}/>


  //  withiout object
  //  <Carddd name={e.title}
  //   price={e.price}
  //    discriptionn={e.description}
  //    />
   })}
   </div>
   </>
  )
}

{/* <h1>{e.title}</h1> */}