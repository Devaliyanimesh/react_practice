import React from "react";
import { Button, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function Data() {
  let arry = [
    { name: "nimesh", age: 21 },
    { name: "latesh", age: 22 },
  ];

  let navi = useNavigate();
  return (
    <Table>
      <thead>
        <tr>
          <th>srn.</th>
          <th>Name</th>
          <th>age</th>
          <th>all see</th>
        </tr>
      </thead>
      <tbody>
        {arry.map((e, i) => {
          return (
            <tr key={i}>
              <th>{i + 1}</th>
              <td role="button" onClick={() => navi(`/user/${e.name}`)}>
                {e.name}
              </td>
              <td role="button" onClick={() => navi(`/age/${e.age}`)}>
                {e.age}
              </td>
              <td>
                <Button onClick={() => navi(`/full/${e.age}/${e.name}`)}>
                  See
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
