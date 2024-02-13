import React from "react";
import { useSelector } from "react-redux";

export default function CountDisplay() {
  useSelector((store) => {
    console.log(store);
  });
  return <h1>Count is {100}</h1>;
}
