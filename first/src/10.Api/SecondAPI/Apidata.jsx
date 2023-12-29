import React, { useEffect, useState } from "react";

export default function Apidata() {
  let [datt, setDatta] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setDatta(data))
      .catch((error) => {
        console.log("---->", error);
      });
  }, []);
  return (
    <div>
      <h1>all data</h1>
      {console.log(datt)}
    </div>
  );
}
