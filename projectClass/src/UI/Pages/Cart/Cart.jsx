import React, { useEffect, useState } from "react";
import img1 from "./../../../Images/shoes1.webp";
import img2 from "./../../../Images/shoes2.webp";
import img3 from "./../../../Images/shoes3.webp";
import img4 from "./../../../Images/shoes4.webp";
import img5 from "./../../../Images/shoes5.webp";
import img6 from "./../../../Images/shoes6.webp";
import img7 from "./../../../Images/shoes7.webp";
import img8 from "./../../../Images/shoes8.webp";
import img9 from "./../../../Images/shoes9.webp";
import img10 from "./../../../Images/shoes10.webp";
import img11 from "./../../../Images/shoes11.webp";
import img12 from "./../../../Images/shoes12.webp";
import img13 from "./../../../Images/shoes13.webp";
import img14 from "./../../../Images/shoes14.webp";
import img15 from "./../../../Images/shoes15.webp";
import img16 from "./../../../Images/shoes16.webp";
import img17 from "./../../../Images/shoes17.webp";
import img18 from "./../../../Images/shoes18.webp";
import img19 from "./../../../Images/shoes19.webp";
import img20 from "./../../../Images/shoes20.webp";
let arrImg = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
];
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import "./Cart.css";
import { NavLink } from "react-router-dom";
export default function Cart() {
  let arrImg = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
  ];
  let [apiData, setApidata] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setApidata(json));
  }, []);

  return (
    <>
      <div
        className=" gri mt-5  "
        style={{  flexWrap: "wrap",marginBottom:"50px" }}
      >
        {apiData.map((e, i) => {
          return (
            <div key={i}>
              <Card
                style={{
                  width: "220px",
                  height: "450px",
                  padding: "10px 5px",
                  overflow:'hidden'
                }}
              >
                <img
                  alt="Sample"
                  src={arrImg[i]}
                  style={{
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                  }}
                />
                <CardBody className="p-0">
                  <CardTitle tag="h5"></CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    <b>Title:</b>
                    <p style={{height:"40px", width:"100%", overflow:"hidden",marginTop:"5px",}}>{e?.title}</p>
                  </CardSubtitle>
                  <CardText className="m-0">
                    <i className="bi bi-currency-dollar"></i>
                    {e?.price}
                  </CardText>
                  <CardTitle tag="h5">
                    <NavLink to={"/singlePage"}>
                      <Button className="w-100 mt-2 bg-black text-white">
                        Add item
                      </Button>
                    </NavLink>
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
