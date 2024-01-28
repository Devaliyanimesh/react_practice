import React, { useEffect, useState } from "react";
import single from "./../../../Images/single.png";
import { ShoppingCart } from "lucide-react";
import { Button } from "reactstrap";
import discountTag from "./../../../Images/discount.webp";
import "./Singlepage.css";
import Cart from "../Cart/Cart";
import { NavLink } from "react-router-dom";
export default function SingleProduct() {
  let [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <>
      <div
        className=" d-flex gap-1 "
        style={{ height: "480px", padding: "30px 30px" }}
      >
        <div className="  p-1" style={{ width: "26%", borderRadius: "2px" }}>
          <div
            className="img_hover "
            style={{ height: "360px", border: "3px solid rgb(207, 201, 201)" }}
          >
            <img
              src={single}
              alt=""
              className="w-100 rounded-1 imgg  "
              style={{ height: "360px" }}
            />
          </div>

          <div className="text-center mt-2  ">
            <Button color="danger" style={{ width: "49%" }}>
              <NavLink to={"/payment"} style={{color:"white",textDecoration:"none"}}>

              <ShoppingCart size={20} />

              ADD TO CART
              </NavLink>
            </Button>
        
            
            <Button className=" ms-1" style={{ width: "49%" }}>
              {" "}
              BUY NOW
            </Button>
          </div>
        </div>
        <div
          className="  ps-2  second"
          style={{ width: "70%", border: "4px solid white" }}
        >
          <div className="d-flex">
            <p style={{ fontWeight: "500" }}>{product.description}</p>
          </div>
          <div className="d-flex">
            <p style={{ fontWeight: "500" }}>{product.title}</p>
          </div>
          <div className="d-flex">
            <p style={{ fontWeight: "500" }}>{product.category}</p>
          </div>
          <div>
            <span color="succes" style={{ color: "green", fontWeight: "700" }}>
              Special Price
            </span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <p
              style={{ fontWeight: "700", marginTop: "5px" }}
              className="bi bi-currency-rupee"
            >
              {product.price}
            </p>
            <p
              style={{ fontWeight: "", marginTop: "5px" }}
              className="text-decoration-line-through bi bi-currency-rupee "
            >
              250
            </p>
            <p style={{ fontWeight: "700", marginTop: "5px", color: "green" }}>
              61%Off
            </p>
            <p
              class="bi bi-info-circle"
              style={{
                fontWeight: "",
                marginTop: "5px",
                marginLeft: "-9px",
                color: "gray",
              }}
            ></p>
          </div>
          <div>
            <p style={{ fontWeight: "500" }}>Avilable Offers</p>
            <p>
              <img
                src={discountTag}
                alt=""
                style={{ height: "20px", width: "20px" }}
              />
              <span style={{ fontWeight: "500", marginLeft: "5px" }}>
                Bank Offer{" "}
              </span>
              <span>
                {" "}
                10% off on Bank of Baroda Credit Card and EMI Transactions, up
                to ₹1500 on orders of ₹5000 and above
              </span>
            </p>
            <p>
              <img
                src={discountTag}
                alt=""
                style={{ height: "20px", width: "20px" }}
              />
              <span style={{ fontWeight: "500", marginLeft: "5px" }}>
                Bank Offer{" "}
              </span>
              <span>
                {" "}
                10% off on Bank of Baroda Credit Card and EMI Transactions, up
                to ₹1500 on orders of ₹5000 and above
              </span>
            </p>
            <p>
              <img
                src={discountTag}
                alt=""
                style={{ height: "20px", width: "20px" }}
              />
              <span style={{ fontWeight: "500", marginLeft: "5px" }}>
                Bank Offer{" "}
              </span>
              <span>
                {" "}
                10% off on Canara Bank Credit Card Transactions, up to ₹1,500 on
                orders of ₹5,000 and above
              </span>
            </p>
            <p>
              <img
                src={discountTag}
                alt=""
                style={{ height: "20px", width: "20px" }}
              />
              <span style={{ fontWeight: "500", marginLeft: "5px" }}>
                Bank Offer{" "}
              </span>
              <span>Get extra 2% off (price inclusive of cashback/coupon)</span>
            </p>
          </div>
          <div>
            <p style={{ fontWeight: "500" }}>Avilable Offers</p>
            <p>
              <img
                src={discountTag}
                alt=""
                style={{ height: "20px", width: "20px" }}
              />
              <span style={{ fontWeight: "500", marginLeft: "5px" }}>
                Bank Offer{" "}
              </span>
              <span>
                {" "}
                10% off on Bank of Baroda Credit Card and EMI Transactions, up
                to ₹1500 on orders of ₹5000 and above
              </span>
            </p>
            <p>
              <img
                src={discountTag}
                alt=""
                style={{ height: "20px", width: "20px" }}
              />
              <span style={{ fontWeight: "500", marginLeft: "5px" }}>
                Bank Offer{" "}
              </span>
              <span>
                {" "}
                10% off on Bank of Baroda Credit Card and EMI Transactions, up
                to ₹1500 on orders of ₹5000 and above
              </span>
            </p>
            <p>
              <img
                src={discountTag}
                alt=""
                style={{ height: "20px", width: "20px" }}
              />
              <span style={{ fontWeight: "500", marginLeft: "5px" }}>
                Bank Offer{" "}
              </span>
              <span>
                {" "}
                10% off on Canara Bank Credit Card Transactions, up to ₹1,500 on
                orders of ₹5,000 and above
              </span>
            </p>
            <p>
              <img
                src={discountTag}
                alt=""
                style={{ height: "20px", width: "20px" }}
              />
              <span style={{ fontWeight: "500", marginLeft: "5px" }}>
                Bank Offer{" "}
              </span>
              <span>Get extra 2% off (price inclusive of cashback/coupon)</span>
            </p>
          </div>
        </div>
      </div>
      <div style={{margin: "10px 40px"}}>

      <Cart />
      </div>
    </>
  );    
}
