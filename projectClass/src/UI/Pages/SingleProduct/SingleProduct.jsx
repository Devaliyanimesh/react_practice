import React, { useEffect, useState } from "react";
import single from "./../../../Images/single.png";
import { ShoppingCart } from "lucide-react";
import { Button } from "reactstrap";
import discountTag from "./../../../Images/discount.webp";
import "./Singlepage.css";
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
              <ShoppingCart size={20} />
              ADD TO CART
            </Button>
            <Button className=" ms-1" style={{ width: "49%" }}>
              {" "}
              BUY NOW
            </Button>
          </div>
        </div>
        <div
          className="  ps-2 "
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

            <p style={{ fontWeight: "700", marginTop: "5px" }}>
              <i
                className="bi bi-currency-rupee"
                style={{ fontWeight: "700" }}
              ></i>
              {product.price}
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
    </>
  );
}
