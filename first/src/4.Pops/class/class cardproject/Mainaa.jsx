import React, { Component, useId } from 'react'
import Carddclass from './carddclass'
import Data from './../../../../Product/packeg.json'



export default class Mainaa extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "25px",
        padding: "20px 50px",
        background: "green"

      }} 
      >
        
        {Data.map((e) => {
        
          return <Carddclass  data={e} />

        })

        }
      </div>
    </>
    )
  }
}
