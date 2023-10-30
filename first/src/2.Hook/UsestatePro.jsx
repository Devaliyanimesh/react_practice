import React, { useState } from 'react'
import { Button } from 'react-bootstrap'



export default function UseState() {

    let [color,SetColor]=useState("red")
    let [Text,textcol]=useState("black")
const changeColor =()=>{
SetColor("blue")
textcol("white")


}

    return (

<div className='d-flex flex-column justify-content-center'>

        <div style={{
            
            padding: "10px",
            textAlign: 'center',
            backgroundColor:color,
            color:Text,
            
        }}
       
        >

            <h1 >Hello Nimesh</h1></div>
            <Button color='danger' onClick={()=>changeColor()}>Change Color</Button>
        </div>
       
    )
}
