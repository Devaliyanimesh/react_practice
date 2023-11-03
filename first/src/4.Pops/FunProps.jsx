// vadhre hoy ne tyre a rite lakhvanu
// import React from 'react'

// export default function FunProps(props) {
   
//   return (
//    <>
//    <h1 style={{color:props.color}}>my name is {props.name}</h1>
//    <h2 style={{color:props.colo}}>my age is {props.age}</h2>
   

//    </>
//   )
// }
import React from 'react'

export default function FunProps({name,age}) {
  return (
   <>
   <h1>my name is {name}</h1>
   <h1>my age is{age} </h1>
   </>
  )
}
