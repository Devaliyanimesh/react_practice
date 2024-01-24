import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import "./Cart.css";
export default function Cart() {
  let [apiData, setApidata] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setApidata(json));
  }, []);

  return (
    <>
      <div
        className=" grid mt-5 "
        style={{ gap: "10px", margin: "10px 40px", marginLeft: "70px" }}
      >
        {apiData.map((e, i) => {
          return (
            <div key={i}>
              <Card
                style={{
                  width: "235px",
                  height: "350px",
                  padding: "10px 5px",
                }}
              >
                <img
                  alt="Sample"
                  src={e?.image}
                  style={{
                    width: "170px",
                    height: "150px",
                    alignItems: "center",
                  }}
                />
                <CardBody className="p-0">
                  <CardTitle tag="h5"></CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    <b>Title:</b>
                   <p className="m-0" style={{overflow:"hidden", width:'200px ', height:"60px",}}> {e?.title}</p> 
                  </CardSubtitle>
                  <CardText  className="m-0">
                    <i className="bi bi-currency-dollar"></i>
                    {e?.price}
                  </CardText>
                  <CardTitle tag="h5">
                    <Button className="w-100 mt-2 bg-black text-white">Add item</Button>
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
