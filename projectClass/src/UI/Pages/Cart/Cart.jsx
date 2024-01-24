import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import './Cart.css'
export default function Cart() {
  let [apiData, setApidata] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setApidata(json));
  }, []);

  return (
    <>
      <div className=" grid mt-5 " style={{gap:"10px",margin:"10px 40px",  marginLeft:"70px"}}>
        {apiData.map((e) => {
          console.log(e);
          return (
            <div>
              <Card
                style={{
                  width: "230px",
                  height:"300px",
                  padding:"10px 5px"
                }}
              >
               
                <img alt="Sample" src={e?.image}  style={{width:"150px",height:"150px", alignItems:"center" }}/>
                <CardBody>
                  <CardTitle tag="h5"></CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  ><b>Title:</b>{e?.title}
                  </CardSubtitle>
                  <CardText>
                  <i class="bi bi-currency-dollar"></i>{e?.price}
                  </CardText>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
