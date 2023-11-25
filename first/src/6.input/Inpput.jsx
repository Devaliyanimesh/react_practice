import { Heading4 } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Input } from 'reactstrap'

export default function Inpput() {
  let [food, Setfood] = useState("")
  let [store, Setstore] = useState([])
  // get data from input
  let getdata = (element) => {
    // element.target is information of input element
    Setfood(element.target.value)
  }
  // add task to arry
  const addfood = () => {
    // why use [...stoe,todo]=> to copy old data and add new 
    Setstore([...store, food])
    // to empty input sfter click on add todo
    Setfood("")
  }
  return (
    <>
      <div style={{ border: "4px solid black", width: "30%", color: "black", padding: "10px 10px" }}>
        <h1>FoodZone</h1>
        <Input value={food} onChange={(e) => getdata(e)} />
        <Button style={{ width: "100%", marginTop: "5px" }} onClick={() => addfood()}> click </Button>
      </div>

      <hr />
      
        {store.length >0 ?  <div className=' border   border-dark w-25 mt-5 p-2'>
          <h5>your food </h5>
          {store.map((e) => {
            return <p>{e}</p>
          })}
        </div>: <h1>please fill food</h1>}


    </>
  );
}
