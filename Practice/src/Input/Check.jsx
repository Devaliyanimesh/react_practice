import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Input } from "reactstrap";

export default function Check() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [pending, setPending] = useState([]);
  const [checked, setChecked] = useState(false);

  const addData = () => {
    if (input === "") {
      toast.error("Please fill up");
    } else {
      setData([...data, input]);
      setInput("");
    }
  };

  const addPending = (e) => {
    const match = pending.includes(e);
    if (match) {
      const filter = pending.filter((ee) => ee !== e);
      setPending(filter);
    } else {
      setPending([...pending, e]);
    }
  };

  const transfer = () => {
    setChecked(!checked); // Toggle the checked state
  };

  const allTransfer = () => {
    if (checked) {
        setPending([...pending, ...data]);
        setData([]);
        setChecked(false);
    }
  };

  return (
    <>
      <h1 className="text-center">Todo List</h1>
      <div className="d-flex w-25 m-auto">
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button onClick={addData}>Add</Button>
      </div>
      <div>
        <ul>
          <div className="d-flex">
            <h3>Todo</h3>
            <input type="checkbox" onChange={transfer} checked={checked} />
          </div>
          {data.map((e, i) => (
            <div className="d-flex" key={i}>
              <li>{e}</li>
              <input
                type="checkbox"
                onChange={() => addPending(e)}
                checked={checked}
              />
            </div>
          ))}
          <Button onClick={allTransfer}>Transfer data</Button>
        </ul>
      </div>
      <div>
        <ul>
          {pending.map((e, i) => (
            <div key={i}>
              <li>{e}</li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
