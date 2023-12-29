import React, { useEffect, useState } from "react";
import ApiData from "./ApiData";
import { Table } from "react-bootstrap";

export default function Api() {
    let [item ,setItem]=useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((data) => setItem(data)).catch((err)=>{
        console.log("--->",err);
      })
  });

  return (
    <>
<div style={{  display:"flex",
            flexWrap:"wrap",   gap:"10px"}}>

  {

        item.map((e,i)=>{
            return <ApiData  data={e} />
           
        })
    }
 </div>

   
    </>
  );
}
