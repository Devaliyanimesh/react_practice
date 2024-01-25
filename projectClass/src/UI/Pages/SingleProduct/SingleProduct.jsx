import React, { useEffect } from "react";
import single from "./../../../Images/single.png"

export default function SingleProduct() {
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
  })
  return (
    <div className="bg-black d-flex " style={{height:"400px"}}>
      <div className="w-50 bg-primary p-1" >
        <img src={single} alt="" className="w-100 h-100" />
        </div>
      <div className="w-50 bg-danger p-1">Second</div>
      <div className="w-50 bg-secondry p-1">Second</div>

    </div>
  );
}
