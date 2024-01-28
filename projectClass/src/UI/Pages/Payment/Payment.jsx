import React, { useEffect, useState } from "react";
import img from "./../../../Images/single.png"
import { MinusCircle, PlusCircle } from "lucide-react";
import { Input } from "reactstrap";
import { toast } from "react-toastify";
export default function Payment() {
  let paymentDetails = ["Price", "Discount", "Delivery Charges"];
  let [product, setProduct] = useState([]);
  let [counter, setCounter] = useState(0)
  let [price,setprice]=useState("")
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  const counterHandler = (type) => {
    if (type === "sub") {
      if (counter === 0 ) {
        toast.info("please select quantity")
      }
      else{
        setCounter(counter - 1)
        setprice(Math.round(product.price * counter  -product.price))
      }


      
    }
    else if (type === "add") {
      setCounter(counter + 1)
      setprice(Math.round(product.price * counter  +product.price))

    }
    
  }
  console.log(price);
  return (
    <div className="w-100 d-flex gap-3  " style={{ padding: "50px 50px ", height: "500px", backgroundColor: "#e0e0e0" ,fontFamily:"math" }}>
      <div className="w-75 ">
        <div className="d-flex justify-content-between w-100  align-content-center   " style={{ backgroundColor: "white", padding: "5px 20px", boxShadow: "0px 0px 3px 0px;" }}>
          <p className="mt-3 fw-bolder">From Saved Address</p>
          <p className=" border border-1 mt-3 text-primary fw-bold" style={{ padding: "5px 8px" }}>Enter Delivery pincode</p>
        </div>
        <div className=" justify-content-between w-100  align-content-center mt-2  " style={{ backgroundColor: "white", padding: "10px 20px", boxShadow: "0px 0px 3px 0px;" }}>
          <div className="d-flex">
            <div className=" bg-black" style={{ width: "15%" }}>
              <img src={img} alt="" style={{ width: '100%' }} />
            </div>
            <div className=" ms-3 mt-4 " style={{ width: "85%" }}>
              <div className="d-flex">
                <p style={{ fontWeight: "500" }}>{product.description}</p>
              </div>
              <div className="d-flex">
                <p style={{ fontWeight: "500" }}>{product.title}</p>
              </div>
              <div className="d-flex align-content-center ">
                <p
                  style={{ fontWeight: "", marginTop: "5px" }}
                  className="text-decoration-line-through bi bi-currency-rupee "
                >
                  400
                </p>
                <h5
                  style={{ fontWeight: "700", marginTop: "5px", marginLeft: "5px" }}
                  className="bi bi-currency-rupee"
                >
                  {product.price}
                </h5>
                <p style={{ fontWeight: "700", marginTop: "5px", color: "green", marginLeft: "10px" }}>
                  61%Off,  7 offers applied
                </p>
                <p
                  class="bi bi-info-circle"
                  style={{
                    fontWeight: "",
                    marginTop: "5px",
                    marginLeft: "10px",
                    color: "gray",
                  }}
                ></p>
              </div>
            </div>
          </div>
          <div className="d-flex align-item-end gap-4" style={{alignItems:"end"}}>
            <div className="mt-3 d-flex  gap-2" style={{ width: "15%", alignItems: "center" }}>
              <MinusCircle onClick={() => counterHandler("sub")} role="button" /><Input className="w-50" value={counter} style={{ textAlign: "center", fontWeight: "700" }} /><PlusCircle role="button" onClick={() => counterHandler("add")} />
            </div>
            <div className="d-flex gap-4">
              <h5 role="button">Save For Later</h5>
              <h5 role="button">Remover</h5>
            </div>
          </div>
        </div>

      </div>
      <div className="w-25  " style={{ backgroundColor: "white", height: "265px", boxShadow: "0px 0px 3px 0px;" }}>
        <h5
          style={{
            color: "gray",
            padding: "5px 15px",
            borderBottom: "2px solid gray",

          }}
        >
          PRICE DETAILS
        </h5>

        <div
          className=" d-flex justify-content-between "
          style={{ borderBottom: "2px solid gray", padding: "0px 20px" }}
        >
          <ul style={{ flexDirection: "column", alignItems: "flex-start", gap: "10px" }} className="m-0 p-0">
            {paymentDetails.map((e) => {
              return <li className="m-0 p-0" style={{ fontWeight: "600" }}>{e}</li>;
            })}
          </ul>


          <ul style={{ flexDirection: "column", alignItems: "flex-start", gap: "10px ", fontFamily: "none" }}>
            <li className="d-flex m-0 p-0" ><span className="bi bi-currency-rupee "></span>{price}</li>
            <li className="d-flex m-0 p-0" ><span className="bi bi-currency-rupee "></span> 5</li>
            <li className="d-flex m-0 p-0 "  > <span className="bi bi-currency-rupee  " ></span><span className="  text-decoration-line-through " style={{ color: "gray", fontFamily: "none" }}   >40</span><span style={{ color: "green", fontFamily: 'none', marginLeft: "5px" }}>Free</span></li>
          </ul>


        </div>
        <div className="d-flex justify-content-between mt-1" style={{ padding: "0px 20px", borderBottom: "2px solid gray", }}>
          <h5>Total Amount</h5>
          
          <h5><span className="bi bi-currency-rupee" ></span>{price}</h5>
        </div>
        <p style={{ color: "green", fontSize: "18px", fontWeight: "500", padding: "10px 20px", borderBottom: "1px solid gray" }}>You will save ₹450 on this order</p>
      </div>
    </div>
  );
}
