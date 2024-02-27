import axios from "axios";
import React from "react";

export default function ApiPractice() {
  //     axios({
  //         method:'get',
  //         url:"https://fakestoreapi.com/products?limit=5"
  //     }).then((res)=>{
  // console.log(res.data);
  //     }).catch((error)=>{
  //         console.log(error.message);
  //     })
  fetch("https://fakestoreapi.com/products?limit=5")
    .then((res) => res.json())
    .then((e) => console.log(e)).catch((err)=>console.log(err.message))
  return <div>ApiPractice</div>;
}
