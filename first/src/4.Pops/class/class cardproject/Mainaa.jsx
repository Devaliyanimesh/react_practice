import React from 'react'
import Carddclass from './carddclass'
import Data from './../../../../Product/packeg.json'


export default function Mainaa() {
  console.log(Data);
  return (
    <>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "25px",
        padding: "20px 50px",
        background: "green"

      }} >
        {Data.map((e) => {
          return <Carddclass data={e} />

        })

        }
      </div>
    </>
  )
}
