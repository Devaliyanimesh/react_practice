import React from "react";

export default function Payment() {
  let paymentDetails = ["Price", "Discount", "Delivery Charges"];
  return (
    <div className="w-100 d-flex gap-1 " style={{ padding: "50px 50px " }}>
      <div className="w-75 bg-primary">s</div>
      <div className="w-25  " style={{ backgroundColor: "rgb(207, 201, 201)" }}>
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
          style={{ padding: "0px 20px" }}
        >
          <ul style={{flexDirection:"column",   alignItems: "flex-start", gap:"10px"}}>
            {paymentDetails.map((e) => {
              return <li>{e}</li>;
            })}
          </ul>

          <div>price</div>
        </div>
      </div>
    </div>
  );
}
