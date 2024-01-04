import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import UserData from "./UserData";
import { NavLink } from "react-router-dom";

export default function LocalData() {
  let [local, setLocal] = useState(null);
  useEffect(() => {
    let Json = localStorage.getItem("add") || [];
    let normal = JSON.parse(Json);
    setLocal(normal || []);
  }, []);

  let admintype = local?.some((e) => e.userType === "user");
  

  return (
    <>
      {admintype ?<UserData datta={local} />:null

      }
      
     {/* <NavLink to={"/userdata"} > Local</NavLink> */}
    
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
          {local?.map((e, id) => {
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


      <h1>hiiiii</h1>
     <UserData datta={local} />

    </>
  );
}
