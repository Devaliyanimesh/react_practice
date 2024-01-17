import React from "react";
import { Button, Input, Label } from "reactstrap";

export default function PendingTodo({
  pending,
  pendingDataHandler,
  selectPendinghandler,
  selectPending,
  selectallHandler,
  pendingDataTransfer
}) {
  return (
    <>
      <div
        style={{ backgroundColor: "darkcyan", width: "55%" }}
        className="m-auto mt-5 rounded-3 p-2 text-white p-3 "
      >
        <h5 className="text-center">Pending Todo</h5>
        <div className="d-flex justify-content-end gap-2">
          <Label style={{ color: "white" }}>Select All</Label>
          <Input
            type="checkbox"
            onChange={(e) => selectallHandler("selectall", e)}
            checked={pending.length === selectPending.length}
          />
        </div>
        <div>
          <ul style={{ listStyle: "none" }}>
            {pending?.map?.((e, i) => {
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
                    <Input
                      type="checkbox"
                      checked={selectPending?.includes(i)}
                      onChange={() => selectPendinghandler(i, "pending")}
                    />
                    <i
                      className="fas fa-circle-plus"
                      onClick={() => pendingDataHandler(i)}
                    ></i>
                  </div>
                </div>
              );
            })}
            <Button onClick={pendingDataTransfer}>Transfer</Button>
          </ul>
        </div>
      </div>
    </>
  );
}
