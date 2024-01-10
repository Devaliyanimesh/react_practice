import React, { useState } from "react";
import { Button, Input } from "reactstrap";

export default function Check() {
    let [input,setInput]=useState("")
    let[data,setData]=useState([])
    const addData =()=>{
        setData([...data,input])
        setInput("")
    }
    console.log(data);
  return (
    <>
      <h1 className="text-center">Too List</h1>
      <div className="d-flex w-25 m-auto">
        <Input  value={input} onChange={(e)=>setInput(e.target.value)} />
        <Button onClick={()=>addData()}>Addd</Button>
      </div>

    </>
  );
}
