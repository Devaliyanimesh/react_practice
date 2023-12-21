import React from 'react'
import { useParams } from 'react-router-dom'

export default function Fullinfo() {
    let params=useParams()
    console.log(params);

  return (
  <>
  <h1>My name is{params.name}    </h1>
  <h2>My age is {params.age}  </h2>
  </>
  )
}
