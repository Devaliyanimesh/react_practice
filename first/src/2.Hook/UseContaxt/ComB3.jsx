import React, { useContext } from 'react'
import { NameContaxt } from './UsecotactMain'

export default function ComB3() {
  const data = useContext(NameContaxt)
  return (
    <>
      {/* <NameContaxt.Consumer >

        {(data) => {
          return <h1>{data}</h1>
        }}
      </NameContaxt.Consumer> */}
      <h3>My name is {data}</h3>

    </>
  )
}
