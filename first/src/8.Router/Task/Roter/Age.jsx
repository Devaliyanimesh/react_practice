import React from 'react'
import { useParams } from 'react-router-dom'

export default function Age() {
    let age=useParams()
  return (
   <h1>My age is {age.age}</h1>
  )
}
