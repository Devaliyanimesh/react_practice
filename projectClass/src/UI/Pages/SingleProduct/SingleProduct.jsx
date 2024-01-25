import React, { useEffect, useState } from "react";
import single from "./../../../Images/single.png";

export default function SingleProduct() {
  let [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  return (
    <>
      <div className="bg-black d-flex " style={{ height: "400px" }}>
        <div className="w-50 bg-primary p-1">
          <img src={single} alt="" className="w-100 h-100 " />
        </div>
        <div className="w-50 bg-danger p-1">
          <div className="d-flex">
            <p>Title:-</p>
            <p>{product.title}</p>
          </div>
          <div className="d-flex">
            <p>Price:-</p>
            <p>{product.price}</p>
          </div>
          <div className="d-flex">
            <p>description:-</p>
            <p>{product.description}</p>
          </div>
          <div className="d-flex">
            <p>rating:-</p>
            <p>{product.category}</p>
          </div>
        </div>
        <div className="w-50 bg-secondry p-1">Second</div>
      </div>
    </>
  );
}
