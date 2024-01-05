import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

export default function UserDataa() {
  let [local, setLocal] = useState(null);
  useEffect(() => {
    let json = localStorage.getItem("add");
    let normal = JSON.parse(json);
    setLocal(normal);
  },[]);
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Hobby</th>
            <th>UserType</th>
          </tr>
        </thead>
        <tbody>
          {local?.map?.((e, i) => {
            return <tr key={i}>
              <th>{i+1}</th>
              <td>{e.email}</td>
              <td>{e.password}</td>
              <td>{e.gender}</td>
              <td>{e.hobby}</td>
              <td>{e.userType}</td>


            </tr>;
          })}
        </tbody>
      </Table>
    </>
  );
}
