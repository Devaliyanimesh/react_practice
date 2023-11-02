import React from 'react'

export default function FunProps(props) {
   
  return (
   <>
   <h1 style={{color:props.color}}>my name is {props.name}</h1>
   <h2>my age is {props.age}</h2>
   

   </>
  )
}
