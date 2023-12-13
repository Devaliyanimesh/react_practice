import React, { useContext } from 'react'
import { NameContaxt } from './UsecotactMain'

export default function ComB3() {
    const data =useContext(NameContaxt)
  return (
    <>
   <h3>My name is {data}</h3>
 
   </>
  )
}
