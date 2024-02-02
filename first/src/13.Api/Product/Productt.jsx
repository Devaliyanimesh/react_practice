import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { toast } from "react-toastify";
import { BadgePercent, IndianRupee } from "lucide-react";

export default function Productt() {
  let [product, setProduct] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
    })
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((error) => toast.error(error));
  }, []);

  return (
    <>
      <h1>SimpleApi</h1>

      <Table>
        <thead>
          <tr>
            <th>SR.</th>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>Discount</th>
            <th>Final price</th>
            <th>COLOR</th>
            <th>SIZE</th>
          </tr>
        </thead>
        <tbody>
          {product.map((e, i) => {
            return (
              <tr key={i} role="Button">
                <th scope="row">{i + 1}</th>
                <td>
                  <img style={{ maxHeight: "50px" }} src={e?.thumbnail} />
                </td>
                <td onClick={() => navigate("/product", { state: e })}>
                  {e?.title}
                </td>
                <td className="" style={{textDecoration:"line-through"}}><IndianRupee  size={20} />{e?.price}</td>
                <td>
                  <BadgePercent color="#2ab305" />
                  {e?.discountPercentage}
                </td>

                <td><IndianRupee  size={20}/>{ e?.price-(e?.price *(e?.discountPercentage/100))}</td> 


                <td>
                  <div className="d-flex">
                    {e?.color.map((color) => {
                      return (
                        <div
                          style={{
                            height: "10px",
                            width: "10px",
                            border: "1px solid  black",
                            borderRadius: "50%",
                            backgroundColor: color,
                          }}
                        ></div>
                      );
                    })}
                  </div>
                </td>
                <td>
                  <div className="d-flex gap-2">
                    {" "}
                    {e?.size.map((e) => {
                      return (
                        <div
                          style={{
                            height: "20px",
                            width: "20px",
                            boxShadow: " inset -1px -1px",
                            fontWeight: "500",
                          }}
                        >
                          {e}
                        </div>
                      ); /* first  Task*/
                    })}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
