import React from "react";
import { useSelector } from "react-redux";

export default function CountDisplay() {
   let final =useSelector((e) => {
    return e.store.count
  });
  return <h1>Count is {final}</h1>;
}
