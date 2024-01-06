import { MDBIcon } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Input } from "reactstrap";

export default function Todo() {
  let [list, setList] = useState("");
  let [addlist, setAddlist] = useState([]);
  let [transfer, setTransfer] = useState([]);
  const dataHandler = () => {
    if (list === "") {
      toast.error("please fill input");
    } else {
      setAddlist([...addlist, list]);
      setList("");
    }
  };
  const listHandler = (index) => {
    setTransfer([...transfer, addlist[index]]);
    let filter = addlist.filter((e, i) => {
      return index !== i;
    });
    setAddlist(filter);
  };
  const returnData = (index) => {
    setAddlist([...addlist, transfer[index]]);
    let trandFilter = transfer.filter((e, i) => {
      return index !== i;
    });
    setTransfer(trandFilter);
  };
  const permanetDelet = (index) => {
    let filter = transfer.filter((e, i) => {
      return index !== i;
    });
    setTransfer(filter);
  };
  return (
    <>
      <div className="linear w-50 m-auto bg pt-5">
        <h4 className="text-center" style={{ color: "white" }}>
          Just Do it..
        </h4>

        <div className="d-flex w-50  m-auto mt-2 gap-2 ">
          <Input
            value={list}
            placeholder="What would like to do ?"
            className=" rounded-3"
            onChange={(e) => setList(e.target.value)}
          />
          <Button onClick={() => dataHandler()}>Add</Button>
        </div>
        <div className="d-flex gap-4">
          <div
            style={{ backgroundColor: "darkcyan", width: "55%" }}
            className="m-auto mt-5 rounded-3 p-2 text-white p-3 "
          >
            <h5 className="text-center">To do list</h5>

            {addlist.map((e, i) => {
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
                  <p>
                    {i + 1}. {e}
                  </p>

                  <p role="button" onClick={() => listHandler(i)}>
                    <i class="fas fa-circle-plus"></i>
                  </p>
                </div>
              );
            })}
          </div>
          <div
            style={{ backgroundColor: "darkcyan", width: "55%" }}
            className="m-auto mt-5 rounded-3 p-2 text-white p-3 "
          >
            <h5 className="text-center">Final list</h5>

            {transfer.map((e, i) => {
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
                  <p>
                    {i + 1}. {e}
                  </p>

                  <p role="button" >
                    <i class="fas fa-trash" style={{ marginRight: "10px" }} onClick={() => returnData(i)}></i>
                    <i
                      class="fas fa-circle-xmark"
                      onClick={() => permanetDelet(i)}
                    ></i>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
