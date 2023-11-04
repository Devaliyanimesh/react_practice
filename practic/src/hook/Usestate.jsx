
import { Button } from 'react-bootstrap'
import React, { useState } from 'react'




export default function Usestate() {
  let [Color, Setcolor] = useState(0)
  let [texti, Settexti] = useState(0)

  let ColorArr = ["red", "green", "blue", "navyblue", "pink"]
  let textColor = [ "navyblue", "pink", "red", "green","blue"]
  let colorchange = () => {

    if(Color<ColorArr.length-1 ){
      Setcolor(Color + 1)
      Settexti(texti+1)}
  
      else if(window.confirm("do you procced")===true){
        Setcolor(Color + 1)
        Settexti(texti+1)
      }

    
    else{
      Setcolor(0)
      Settexti(0)
    }

   
  }
  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: textColor[texti],
        backgroundColor: ColorArr[Color],
        width: "100%",
        height: "500px"
      }}>
        <div>
          <h3>BG-color count:{Color}</h3>
          <h3>Text-color count:{texti}</h3>

          <h1>Usestate</h1>
        </div>
        <Button onClick={() => colorchange()}>click here</Button>
      </div>
    </>
  )
}

