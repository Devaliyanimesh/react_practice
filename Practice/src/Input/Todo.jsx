import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Input } from "reactstrap";

export default function Todo() {
  let [list, setList] = useState("");
  let [addlist, setAddlist] = useState([]);
  let [transfer, setTransfer] = useState([]);
  let [allchek, setAllchek] = useState([]);
  let [chekk, setChekk] = useState(false);
  let [retuenChekk, setReturnChekk] = useState(false);
  let [searchadd, setSarchAdlist] = useState("");
  let [searchTransfer, setSarchTransfer] = useState("");

  useEffect(() => {
    setAddlist(JSON.parse(localStorage.getItem("first") || "[]"));
    setTransfer(JSON.parse(localStorage.getItem("second") || "[]"));
  }, []);

  const dataHandler = () => {
    if (list === "") {
      toast.error("please fill input");
    } else {
      setAddlist([...addlist, list]);
      localStorage.setItem("first", JSON.stringify([...addlist, list]));
      setList("");
    }
  };

  const listHandler = (index) => {
    let conf = window.confirm("Are you sure you want to transfer this task?");
    if (conf === true) {
      setTransfer([...transfer, addlist[index]]);
      localStorage.setItem(
        "second",
        JSON.stringify([...transfer, addlist[index]])
      );
      let filter = addlist.filter((e, i) => {
        return index !== i;
      });
      setAddlist(filter);
      localStorage.setItem("first", JSON.stringify(filter));
    }
  };

  const returnData = (index) => {
    let conf = window.confirm("Are you sure you want to return this task?");
    if (conf === true) {
      setAddlist([...addlist, transfer[index]]);
      let trandFilter = transfer.filter((e, i) => {
        return index !== i;
      });
      setTransfer(trandFilter);
    }
  };

  const permanetDelet = (index) => {
    if (
      window.confirm(
        "Are you sure you want to permanently delete this task?"
      ) === true
    ) {
      let filter = transfer.filter((e, i) => {
        return index !== i;
      });
      setTransfer(filter);
    }
  };

  const transferchek = (e) => {
    let match = allchek.includes(e);
    if (match) {
      let filter = allchek.filter((ee) => ee !== e);
      setAllchek(filter);
    } else {
      setAllchek([...allchek, e]);
    }
  };

  const selectALl = (e) => {
    let chekkk = e.target.checked;
    setChekk(chekkk);
    if (chekkk) {
      setAllchek(addlist);
    } else {
      setAllchek([]);
    }
  };

  const moveData = () => {
    if (
      chekk === true &&
      window.confirm("Are you sure you want to transfer selected tasks?")
    ) {
      if (
        window.confirm("Are you sure you want to transfer selected tasks?") ===
        true
      ) {
        let filter = addlist.filter((e) => !allchek.includes(e));
        setAddlist(filter);
        setTransfer(allchek);
        setChekk(!chekk);
        setAllchek([]);
      } else {
        setChekk(false);
        setAllchek([]);
      }
    }
  };

  const deletAlldata = () => {
    let confi = window.confirm("Are you sure you want to delete all tasks?");
    if (confi === true) {
      setTransfer([]);
    }
  };

  const returnChekbox = (e) => {
    let returnche = e.target.checked;
    setReturnChekk(returnche);
    if (returnche === true) {
      setAllchek(transfer);
    } else {
      setAllchek([]);
    }
  };

  const returnAddlist = (e) => {
    let match = allchek.includes(e);
    if (match) {
      let filter = allchek.filter((ee) => ee !== e);
      setAllchek(filter);
    } else {
      setAllchek([...allchek, e]);
    }
  };
  const moveReturn = () => {
    if (retuenChekk === true) {
      let filter = allchek.filter((e) => !transfer.includes(e));
      setTransfer(filter);
      setAddlist(allchek);
      setAllchek([]);
      setReturnChekk(!retuenChekk);
    } else {
      setAddlist([]);
      setReturnChekk(false);
    }
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("first") || "[]");
    let filterdata = data.filter((e) => e.includes(searchadd));
    setAddlist(filterdata);
  }, [searchadd]);

  useEffect(() => {
    sechtransferChekk();
  }, []);
  const sechtransferChekk = () => {
    let data = JSON.parse(localStorage.getItem("second") || "[]");
    let filterdata = data.filter((e) => e.includes(searchTransfer));

    setTransfer(filterdata);
  };
  return (
    <>
      <div className="linear w-50 m-auto bg pt-5">
        <h4 className="text-center" style={{ color: "black" }}>
          Just Do it...
        </h4>

        <div className="d-flex w-50 m-auto mt-2 gap-2">
          <Input
            value={list}
            placeholder="What would you like to do?"
            className="rounded-3"
            onChange={(e) => setList(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dataHandler();
              }
            }}
          />
          <Button onClick={() => dataHandler()}>Add</Button>
        </div>

        <div className="d-flex gap-4">
          <div
            style={{ backgroundColor: "darkcyan", width: "55%" }}
            className="m-auto mt-5 rounded-3 p-2 text-white p-3 "
          >
            <h5 className="text-center">To do list</h5>
            <div className="d-flex " style={{alignItems:"center",gap:"10px"}}>
            
              <Input
                type="text"
                onChange={(e) => setSarchAdlist(e.target.value)}
                value={searchadd}
              />
                <Input
                type="checkbox"
                onChange={(e) => selectALl(e)}
                checked={chekk}
              />
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
                  <p>
                    {i + 1}. {e}
                  </p>
                  <div className="d-flex align-items-center">
                    <i
                      className="fas fa-circle-plus"
                      onClick={() => listHandler(i)}
                    ></i>
                    <Input
                      type="checkbox"
                      checked={allchek.includes(e)}
                      onChange={() => transferchek(e)}
                    />
                  </div>
                </div>
              );
            })}
            <Button onClick={moveData} style={{marginTop:"10px"}}>Transfer</Button>
          </div>

          <div
            style={{ backgroundColor: "darkcyan", width: "55%" }}
            className="m-auto mt-5 rounded-3 p-2 text-white p-3 "
          >
            <h5 className="text-center">Final list</h5>
            <div className="d-flex justify-content-end align-items-center gap-2">
             
            
              <Input
                type="text"
                className="w-100"
                onChange={(e) => setSarchTransfer(e.target.value)}
                value={searchTransfer}
              />
              <Button onClick={sechtransferChekk}>search</Button>
              <Input
                type="checkbox"
                onChange={(e) => returnChekbox(e)}
                checked={retuenChekk}
              />
            </div>
            {transfer.map((e, i) => {
              return (
                <div
                  style={{
                    justifyContent: "space-between",
                    display: "flex",
                    borderBottom: "2px solid white",
                    marginBottom: "20px",
                    height: "35px",
                    gap: "5px",
                  }}
                  key={i}
                >
                  <p>
                    {i + 1}. {e}
                  </p>
                  <div>
                    <i
                      className="fas fa-trash"
                      style={{ marginRight: "10px" }}
                      onClick={() => returnData(i)}
                    ></i>
                    <i
                      className="fas fa-circle-xmark"
                      onClick={() => permanetDelet(i)}
                    ></i>
                    <Input
                      type="checkbox"
                      checked={allchek.includes(e)}
                      onChange={() => returnAddlist(e)}
                    />
                  </div>
                </div>
              );
            })}
            <div style={{marginTop:"10px", display:"flex",gap:"5px"}}>

            <Button onClick={moveReturn}>Transfer</Button>
            <Button onClick={deletAlldata} role="button">
                Delet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
