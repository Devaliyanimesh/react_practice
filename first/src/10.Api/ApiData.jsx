import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function ApiData() {
  let [data, setData] = useState([]);
  const dataget = async () => {
    let fe = await fetch("https://faestoreapi.com/products");
    try {
      if (!fe) {
        alert("Data is not available");
      }
      let da = await fe.json();
      setData(da);
    } catch (error) {
      <h1>{error}</h1>;
    }
  };
  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => setData(data))
    //   .catch((eror) => {
    //     console.log("---->", eror);
    //   });

    dataget();
  }, []);
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Sr.no</th>

            <th>Title</th>
            <th>Price</th>
            <th>Categrory</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{e?.title}</td>
                <td>{e?.price}</td>
                <td>{e.category}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
