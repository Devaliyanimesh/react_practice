import React from "react";
import { Table } from "reactstrap";
import {  useNavigate } from "react-router-dom";

export default function Data() {
  let data = [
    { name: "Nimesh", age: 20 },
    { name: "Vivek", age: 21 },
    { name: "latesh", age: 22 },
  ];
  let navigate=useNavigate()
  return (
    <>
    
      <Table>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i+1}</td>
                <td onClick={()=>navigate(`/name/${e?.name}`)}> {e.name}</td>
                <td onClick={()=>navigate(`/age/${e?.age}`)}>{e.age}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
