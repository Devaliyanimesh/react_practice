import React from "react";
import { Input, Label } from "reactstrap";

export default function DoneTodo({ done, selectPendinghandler, selectDone,selectallHandler }) {
  return (
    <div
      style={{ backgroundColor: "darkcyan", width: "55%" }}
      className="m-auto mt-5 rounded-3 p-2 text-white p-3 "
    >
      <h5 className="text-center">Done List</h5>
      <div className="d-flex justify-content-end gap-2">
        <Label style={{ color: "white" }}>Select All</Label>
        <Input type="checkbox" onChange={(e)=>selectallHandler("doneall",e)} checked={done?.length === selectDone?.length}/>
      </div>
      <div>
        <ul style={{ listStyle: "none" }}>
          {done?.map?.((e, i) => {
            return (
              <div
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  borderBottom: "2px solid white",
                  marginBottom: "20px",
                  height: "35px",
                }}
                key={i}
              >
                <div>
                  <li>
                    {i + 1}.{e}
                  </li>
                </div>
                <div
                  className="d-flex justify-content-end"
                  style={{ alignItems: "center" }}
                >
                  <i
                    className="fas fa-trash"
                    style={{ marginRight: "10px" }}
                  ></i>
                  <i className="fas fa-circle-xmark"></i>
                  <Input
                    type="checkbox"
                    checked={selectDone?.includes(i)}
                    onChange={() => selectPendinghandler(i, "done")}
                  />
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
