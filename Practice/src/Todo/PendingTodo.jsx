import React from "react";

export default function PendingTodo({ pending,pendingDataHandler }) {
  return (
    <>
      <div
        style={{ backgroundColor: "darkcyan", width: "55%" }}
        className="m-auto mt-5 rounded-3 p-2 text-white p-3 "
      >
        <h5 className="text-center">Pending Todo</h5>
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
                    <i
                      className="fas fa-circle-plus"
                      onClick={() => pendingDataHandler(i)}
                    ></i>
                    <input type="checkbox" />
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
