import { MDBIcon } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Input } from "reactstrap";

export default function Todo() {
  let [list, setList] = useState("");
  let [addlist, setAddlist] = useState([]);
  let [transfer, setTransfer] = useState([]);
  let [allchek, setAllchek] = useState([]);
  let [chekk, setChekk] = useState(false)

  const dataHandler = () => {
    if (list === "" ) {
      toast.error("please fill input");
    } else {
      setAddlist([...addlist, list]);
      setList("");
    }
  };
  const listHandler = (index) => {
    let conf =confirm()
    if (conf === true) {
      
      setTransfer([...transfer, addlist[index]]);
      let filter = addlist.filter((e, i) => {
        return index !== i;
      });
      setAddlist(filter);
    }
  };
  const returnData = (index) => {
    let conf =confirm ()
    if (conf === true) {
      
      setAddlist([...addlist, transfer[index]]);
      let trandFilter = transfer.filter((e, i) => {
        return index !== i;
      });
      setTransfer(trandFilter);
    }
   
  };
  const permanetDelet = (index) => {
    if (confirm() === true) {

      let filter = transfer.filter((e, i) => {
        return index !== i;
      });
      setTransfer(filter);
    }
  };

  const transferchek = (e) => {
    let match = allchek.includes(e)
    if (match) {
      let filter = allchek.filter((ee) => ee !== e)
      setAllchek(filter)

    }
    else {
      setAllchek([...allchek, e])
    }
  }

  const selectALl = (e) => {
    let chekkk = e.target.checked
    setChekk(chekkk)
    if (chekkk) {
      setAllchek(addlist)
    }
    else {
      setAllchek([])
    }
  }
  const moveData = () => {
    if (chekk === true && confirm()) {
      if (confirm() === true) {
        let filter = addlist.filter((e) => !allchek.includes(e))
        setAddlist(filter)
        setTransfer(allchek)
        setChekk(!chekk)
        setAllchek([]);
      }


      else {
        setChekk(false)
        setAllchek([])

      }
    }

  }

const deletAlldata =()=>{
let confi=confirm()
if (confi === true) {
  setTransfer([])
}
}

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
            <div className=" d-flex justify-content-end">

              <input type="checkbox" onChange={(e) => selectALl(e)} checked={chekk} />
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
                    <i className="fas fa-circle-plus" onClick={() => listHandler(i)}></i>
                    <input type="checkbox" checked={allchek.includes(e)} onChange={() => transferchek(e)} />
                  </div>


                </div>
              );
            })}
            <button onClick={moveData}>Transfer</button>
          </div>
          <div
            style={{ backgroundColor: "darkcyan", width: "55%" }}
            className="m-auto mt-5 rounded-3 p-2 text-white p-3 "
          >
            <h5 className="text-center">Final list</h5>
            <div className=" d-flex justify-content-end">

            <p onClick={deletAlldata} role="button">Deletall</p>
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
                  }}
                  key={i}
                >
                  <p>
                    {i + 1}. {e}
                  </p>

                  <p role="button" >
                    <i className="fas fa-trash" style={{ marginRight: "10px" }} onClick={() => returnData(i)}></i>
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
