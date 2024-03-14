import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

export default function User() {
  let [userdata, setUserdata] = useState(null);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/user/getAll",
    })
      .then((res) => setUserdata(res.data.data))
      .catch((err) => console.log(err.message));
  }, []);
  console.log("---->", userdata);
  return (
    <Table>
      <thead>
        <tr>
          <th>sr no..</th>
          <th>Name</th>
          <th>Email</th>
          <th>UserType</th>
          <th>Mobile No</th>
        </tr>
      </thead>
      <tbody>
        {userdata?.map((e,i) => {
          return (
            <tr>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.userType}</td>
              <td>{e.number}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
