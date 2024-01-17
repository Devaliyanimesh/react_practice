  import React, { useEffect, useState } from "react";
  import InputTodo from "./inputTodo";
  import PendingTodo from "./PendingTodo";
  import DoneTodo from "./DoneTodo";
  import { toast } from "react-toastify";

  export default function InputTodoIndex() {
    const [input, setInput] = useState("");
    const [pending, setPending] = useState([]);
    const [done, setDone] = useState([]);
    const [selectPending, setSelectPending] = useState([]);
    const [selectDone, setSelectDone] = useState([]);
    let [chekedd, setChekked] = useState(false);

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
    }, []);
    useEffect(() => {
      let jsonn = localStorage.getItem("donee");
      let normal = JSON.parse(jsonn);
      setDone(normal || []);
    }, []);

    const pendingDataHandler = (index) => {
      setDone([...done, pending[index]]);
      localStorage.setItem("donee", JSON.stringify([...done, pending[index]]));
      let filter = pending.filter((e, i) => {
        return index !== i;
      });
      setPending(filter);
      localStorage.setItem("pendi", JSON.stringify(filter));
    };
    const selectPendinghandler = (index, type) => {
      if (type == "pending") {
        if (selectPending.includes(index)) {
          setSelectPending(selectPending.filter((e) => e !== index));
        } else {
          setSelectPending([...selectPending, index]);
        }
      } else if (type === "done") {
        if (selectDone.includes(index)) {
          setSelectDone(selectDone.filter((e) => e !== index));
        } else {
          setSelectDone([...selectDone, index]);
        }
      }
    };
    const selectallHandler = (type, e) => {
      if (type === "selectall") {
        if (e?.target?.checked) {
          // Object.keys(done)
          // setSelectDone(Array.of(Object.keys(done)));
          setSelectPending(pending.map((e, i) => i));
        } else {
          setSelectPending([]);
        }
      } else if (type === "doneall") {
        if (e?.target?.checked) {
          setSelectDone(done.map((e, i) => i));
        } else {
          setSelectDone([]);
        }
      }
    };
    const pendingDataTransfer = () => {
      const transferredItems = selectPending.map((index) => pending[index]);
      setDone([...done, ...transferredItems]);
       // Clear the selected pending items
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
            selectPendinghandler={selectPendinghandler}
            selectPending={selectPending}
            selectallHandler={selectallHandler}
            pendingDataTransfer={pendingDataTransfer}
          />
          <DoneTodo
            done={done}
            selectDone={selectDone}
            selectPendinghandler={selectPendinghandler}
            selectallHandler={selectallHandler}
          />
        </div>
      </>
    );
  }
