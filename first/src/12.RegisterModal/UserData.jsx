import React from "react";
import { Table } from "reactstrap";

export default function UserData({datta}) {
  console.log("--->", datta);
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
            <th>select</th>
          </tr>
        </thead>
        <tbody>
          {datta?.map((e, id) => {
            return (
              <tr key={id}>
                <td>{id + 1}</td>
                <td>{e?.email}</td>
                <td>{e?.password}</td>
                <td>{e?.gender}</td>
                <td>{`${e?.hobb}`}</td>
                <td>{e?.userType}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
