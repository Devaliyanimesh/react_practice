import React, { useState } from 'react'

export default function Prac() {
    let [ind,setid]=useState([])
  return (
  <>
  <div>
  <h1>index {ind}</h1>
  <button onClick={()=>setid(ind+1)}>ssdssdsd</button>
  </div>
  </>
  )
}
