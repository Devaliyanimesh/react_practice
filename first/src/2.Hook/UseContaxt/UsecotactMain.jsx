import React, { createContext, useState } from 'react'
import ComA from './ComA'
import ComB from './ComB'
import { Button } from 'reactstrap'


export const NameContaxt = createContext()
export const SecondContax = createContext()

export default function UsecotactMain() {

  let [value, setValue] = useState({name:"Nimesh"})
  let [age, setAge] = useState(0)
  const chnage = () => {
    setValue("king")
  }
  return (
    <>
      <NameContaxt.Provider value={value} >
        <ComB />
        <Button onClick={chnage}>Chnage</Button>
      </NameContaxt.Provider>
      <SecondContax.Provider value={age}>

        <ComA />
      </SecondContax.Provider>

    </>
  )
}
