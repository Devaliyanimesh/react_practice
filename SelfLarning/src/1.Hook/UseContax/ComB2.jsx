import React, { useContext } from 'react'
import { NameContax } from './UseContaxt'

export default function ComB2({data}) {
    const name=useContext(NameContax)
  return (
//    <h1>My name is {data}</h1>
<h1>My name is {name}</h1>
  )
}
