import React, { useContext } from 'react'
import { SecondContax } from './UsecotactMain'

export default function ComA() {
  const data=useContext(SecondContax)
  return (
    <div > My age is {data}</div>
  )
}
