import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Modall from "./Modall";
import { useSearchParams } from "react-router-dom";

export default function Data() {
  let data = [
    { name: "Nimesh", age: 20 },
    { name: "Vivek", age: 21 },
    { name: "latesh", age: 22 },
  ];
  const [seeData,seesetdata] = useState(false);

  const modaltoggle = () => seesetdata(!seeData);
const showdata =(e)=>{
  modaltoggle()
  setSarchparams(e)
}
  const[params,setSarchparams]=useSearchParams()
  return (
    <>
      <Modall  toggle={modaltoggle} modal={seeData}/>
      <Table>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>age</th>
            <th>See</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td role="button" onClick={()=>showdata(e)}>Eye</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
