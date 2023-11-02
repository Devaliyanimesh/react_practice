import React, { lazy, useState } from 'react'
import { Button } from 'react-bootstrap'



export default function UsestateFun() {
  const colorarr = ["red", "black", "yellow", "blue", "pink"]
  let [index, setIndex] = useState(0)
  const changeIndex = () => {
    
    if (index === colorarr.length-1) {
      setIndex(index + 1)
      
      let co=window.confirm("do you want to procced")
      if(co){
       setIndex(index+1)
       console.log("--->");
        
      }
     
      else{
        setIndex(0)
      }
     
    }
    else{
      setIndex(index+1)
    }
    
 


  

    
      
  




  }
  return (

    <div className='d-flex flex-column justify-content-center'>

      <div style={{

        padding: "10px",
        textAlign: 'center',
        backgroundColor: colorarr[index],
        color: 'white',

      }}

      >

        <h1 >Hello Nimesh</h1></div>
      <Button  color='danger' onClick={() => changeIndex()}>Change Color</Button>
    </div>

  )
}



