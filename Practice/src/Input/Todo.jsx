import { MDBIcon } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Input } from "reactstrap";

export default function Todo() {
  let [list, setList] = useState("");
  let [addlist, setAddlist] = useState([]);
  let [transfer, setTransfer] = useState([]);
  let [checkdata, setChekdata] = useState([]);
  let [chek, setChek] = useState(false);

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
  const chekboxdata = (e) => {
    let matchCheck = checkdata.includes(e);
    if (matchCheck) {
      let filter = checkdata.filter((ee) => ee !== e);
      setChekdata(filter);
    } else {
      setChekdata([...checkdata, e]);
    }
  };
  const chektrandfer = (e) => {
    setChek(e.target.checked);
    if (chek === true) {
      set;
    }
  };
  return (
    <>
      <div className="linear w-50 m-auto bg pt-5">
        <h4 className="text-center" style={{ color: "black" }}>
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
            <div className="d-flex justify-content-end">
              <input type="checkbox" onChange={(e) => chektrandfer(e)} />
            </div>
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
                  <p
                    style={
                      chek === true ? { textDecoration: "line-through" } : null
                    }
                  >
                    {i + 1}. {e}
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    <i
                      className="fas fa-circle-plus"
                      role="button"
                      onClick={() => listHandler(i)}
                    ></i>

                    <input
                      type="checkbox"
                      onChange={() => chekboxdata(e)}
                      checked={
                        (chek === true ? true : false) ||
                        checkdata?.includes?.(e)
                      }
                    />
                  </div>
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

                  <p role="button">
                    <i
                      className="fas fa-trash"
                      style={{ marginRight: "10px" }}
                      onClick={() => returnData(i)}
                    ></i>
                    <i
                      className="fas fa-circle-xmark"
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
