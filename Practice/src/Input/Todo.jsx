import React, { useState } from "react";
import { Button, Input } from "reactstrap";

export default function Todo() {
  let [list, setList] = useState(["king", "Queen"]);
  return (
    <>
      <div className="linear w-50 m-auto bg pt-5">
        <h4 className="text-center" style={{ color: "white" }}>
          Just Do it..
        </h4>

        <div className="d-flex w-50  m-auto mt-2 gap-2 ">
          <Input placeholder="What would like to do ?" />
          <Button>Add</Button>
        </div>
        <div
          style={{ backgroundColor: "#2962ff", width: "55%" }}
          className="m-auto mt-5 rounded-3 p-2 text-white p-3 "
        >
          {list.map((e, i) => {
            return (
              <div
                style={{ justifyContent: "space-between", display: "flex",borderBottom: "2px solid white", marginBottom:"20px", height:"35px" }}
                key={i}
              >
           
                  <p>{e}</p>
                  {/* <p>{e}</p> */}
               
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
