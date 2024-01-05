import React, { useEffect } from 'react'

export default function UserDataa() {
    useEffect(()=>{
        let json=localStorage.getItem("add")
        let normal=JSON.parse(json)
        console.log(normal);
    })
  return (
<>
ff
</>
  )
}
