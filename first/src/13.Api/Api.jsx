import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import Product from "./Product";

export default function Api() {
  let [data, setData] = useState([]);
  const fetchData = () => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        setData(res?.data);
      })
      .catch((erorr) => {
        toast.error(erorr.message);
      });
  };

  return (
    <>
      <h1>SimpleApi</h1>

      <Button color="danger" onClick={fetchData}>
        Call API
      </Button>
      <Table>
        <thead>
          <tr>
            <th>SR.</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>RATING</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr key={i} role="Button">
                <th scope="row">{i + 1}</th>
                <td>
                  <img style={{ maxHeight: "50px" }} src={e?.image} />
                </td>
                <td>{e?.title}</td>
                <td>{e?.price}</td>
                <td>{e?.rating?.rate}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
