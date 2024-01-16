import React, { useEffect, useState } from "react";
import InputTodo from "./inputTodo";
import PendingTodo from "./PendingTodo";
import DoneTodo from "./DoneTodo";
import { toast } from "react-toastify";

export default function InputTodoIndex() {
  const [input, setInput] = useState("");
  const [pending, setPending] = useState([]);
  const [done, setDone] = useState([]);

  const inputdataHandler = () => {
    if (input == "") {
      toast.error("please fill up");
    } else {
      setPending([...pending, input]);
      localStorage.setItem("pendi", JSON.stringify([...pending, input]));
      setInput("");
    }
  };

  useEffect(() => {
    let jsonn = localStorage.getItem("pendi");
    let normal = JSON.parse(jsonn);
    setPending(normal || []);
  },[]);
  useEffect(()=>{
    let jsonn = localStorage.getItem("donee");
    let normal = JSON.parse(jsonn);
    setDone(normal || [])
  },[])

  const pendingDataHandler = (index) => {
    setDone([...done, pending[index]]);
    localStorage.setItem("donee", JSON.stringify([...done, pending[index]]));
    let filter = pending.filter((e, i) => {
      return index !== i;
    });
    setPending(filter);
    localStorage.setItem("pendi", JSON.stringify(filter));
  };
  return (
    <>
      <div className="w-25 m-auto mt-2 ">
        <InputTodo
          input={input}
          setInput={setInput}
          inputdataHandler={inputdataHandler}
        />
      </div>
      <div className="d-flex m-auto mt-2 gap-4 w-50">
        <PendingTodo
          pending={pending}
          pendingDataHandler={pendingDataHandler}
        />
        <DoneTodo done={done} />
      </div>
    </>
  );
}
