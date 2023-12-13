import React, { createContext, useState } from 'react'
import ComA from './ComA'
import ComB from './ComB'
import { Button } from 'reactstrap'


export const NameContaxt = createContext()

export default function UsecotactMain() {

  let [value, setValue] = useState("Nimesh")
  const chnage = () => {
    setValue("king")
  }
  return (
    <>
      <NameContaxt.Provider value={value} >
        <ComB />
        <Button onClick={chnage}>Chnage</Button>
      </NameContaxt.Provider>
      <ComA />

    </>
  )
}
