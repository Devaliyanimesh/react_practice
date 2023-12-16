import React, { createContext } from 'react'
import ComA from './ComA'
import ComB from './ComB.JSX'

 export const NameContax=createContext()

export default function UseContaxt() {
  const data="Nimesh"
  return (
  <>
  <ComA/>
  <NameContax.Provider value={data}>

  {/* <ComB data={data}/> */}
  <ComB/>
  </NameContax.Provider>

  </>
  )
}
