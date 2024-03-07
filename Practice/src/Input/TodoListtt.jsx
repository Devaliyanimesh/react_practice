import { Pencil, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";

export default function TodoListtt() {
  let [value, setValue] = useState("");
  let [store, setStore] = useState([]);
  let [index, setIndex] = useState(null);

  const dataHandler = () => {
    setStore([...store, value]);
    localStorage.setItem("value", JSON.stringify([...store, value]));
    setValue("");
  };
  useEffect(() => {
    let normal = JSON.parse(localStorage.getItem("value"));
    setStore(normal || []);
  }, []);
  const deletHandler = (index) => {
    let filter = store.filter((e, i) => {
      return i !== index;
    });
    setStore(filter);
    localStorage.setItem("value", JSON.stringify(filter) || []);
  };
  const renameHandler = (e, i) => {
    setValue(e);
    setIndex(i);
  };
  const updateHandler =()=>{
    store.splice(index,1,value)
    setStore([...store])
    setIndex(null)
    setValue("")
    localStorage.setItem("value",JSON.stringify([...store]))
  }
  return (
    <>
      <div className="d-flex gap-2 m-auto w-25">
        <Input
          className="w-100"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button color="danger" onClick={dataHandler}>
          Add
        </Button>
        <Button onClick={updateHandler}>Update</Button>
      </div>
      <div className="border border-1 w-50">
        <ul style={{ listStyle: "none" }}>
          {store?.map?.((e, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5px",
                }}
              >
                <li>
                  {i + 1}.{e}
                </li>
                <div className="d-flex gap-2">
                  <li>
                    <Pencil onClick={() => renameHandler(e, i)} />
                  </li>
                  <li>
                    <Trash onClick={() => deletHandler(i)} />
                  </li>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
9;
